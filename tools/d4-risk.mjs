#!/usr/bin/env node
// D4 高危危机律（E5）窗口比读数（2026-11-21 作者：D4 做到极限）
// 口径：R = 窗口内登记事故数 ÷ 窗口内结构落地数。
//   R≥1 高危（进化入不敷出）；0<R<1 常态偏高；结构增量 0 且事故>0 = 纯流血（记 ∞）。
//   事故侧只认 incident-structure.jsonl 的登记日（补录口径，非事发日），结构侧认 structure-landed.json 的 landed_at。
// 采样挂事件：每次事故登记 / 结构落地后跑 --record 追加一条读数，不按周自动跑。
// 用法：node tools/d4-risk.mjs [--record] [--window day|week]
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const arg = (a, d) => { const i = process.argv.indexOf(a); return i >= 0 ? process.argv[i + 1] : d }
const WINDOW = arg('--window', 'week')
const READING = path.join(ROOT, 'memory', 'audit', 'd4-readings.jsonl')

const inc = fs.readFileSync(path.join(ROOT, 'memory', 'audit', 'incident-structure.jsonl'), 'utf8').split('\n').filter(Boolean).map(JSON.parse)
const structs = JSON.parse(fs.readFileSync(path.join(ROOT, 'memory', 'audit', 'structure-landed.json'), 'utf8')).structures

const dayKey = (d) => new Date(d).toISOString().slice(0, 10)
const weekStart = (d) => { const t = new Date(d); const k = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() - k + 1); return t.toISOString().slice(0, 10) }
const key = (d) => (WINDOW === 'day' ? dayKey(d) : weekStart(d))

const buckets = new Map()
const bump = (k, f) => { if (!buckets.has(k)) buckets.set(k, { incidents: 0, structures: 0 }); buckets.get(k)[f]++ }
for (const r of inc) if (r.date) bump(key(r.date), 'incidents')
for (const s of structs) if (s.landed_at) bump(key(s.landed_at), 'structures')

const rows = [...buckets.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => ({
  window: k,
  incidents: v.incidents,
  structures: v.structures,
  R: v.structures === 0 ? (v.incidents ? 'Infinity' : 'NA') : +(v.incidents / v.structures).toFixed(3),
  regime: v.structures === 0 ? (v.incidents ? '纯流血' : '空窗') : v.incidents / v.structures >= 1 ? '高危' : v.incidents ? '常态偏高' : '安静',
}))

const totals = rows.reduce((s, r) => ({ incidents: s.incidents + r.incidents, structures: s.structures + r.structures }), { incidents: 0, structures: 0 })
const active = rows.filter((r) => r.incidents || r.structures)
// 滚动 3 日：取所有记录里的最后一天往前 3 个日历日，按原始日期直接数（周窗口会摊薄单日血流）
const allDays = [...inc.filter((r) => r.date).map((r) => r.date), ...structs.filter((s) => s.landed_at).map((s) => s.landed_at)].sort()
const lastDay = allDays[allDays.length - 1]
const rollStart = lastDay ? new Date(Date.parse(lastDay) - 2 * 86400000).toISOString().slice(0, 10) : null
const roll = {
  incidents: inc.filter((r) => r.date >= rollStart).length,
  structures: structs.filter((s) => s.landed_at >= rollStart).length,
}
const rollR = roll.structures ? +(roll.incidents / roll.structures).toFixed(3) : (roll.incidents ? 'Infinity' : 'NA')
const summary = {
  at: new Date().toISOString(),
  window: WINDOW,
  windows: rows.length,
  totals,
  cumulativeR: totals.structures ? +(totals.incidents / totals.structures).toFixed(3) : 'Infinity',
  rolling3d: { from: rollStart, to: lastDay, ...roll, R: rollR },
  highRiskWindows: rows.filter((r) => r.regime === '高危' || r.regime === '纯流血').map((r) => r.window),
  verdict: rollR === 'Infinity' || rollR >= 1 ? '滚动 3 日越 1（高危）' : '滚动 3 日未越 1',
  rows: active,
}

console.log(`窗口=${WINDOW}｜事故 ${totals.incidents}｜结构 ${totals.structures}｜累计 R=${summary.cumulativeR}｜判定=${summary.verdict}`)
console.log(`滚动 3 日 ${rollStart}~${lastDay}：事故 ${roll.incidents}｜结构 ${roll.structures}｜R=${rollR}`)
for (const r of active) console.log(`${r.window} 事故 ${r.incidents} 结构 ${r.structures} R=${r.R} ${r.regime}`)

if (process.argv.includes('--record')) {
  fs.appendFileSync(READING, JSON.stringify(summary) + '\n')
  const all = fs.existsSync(READING) ? fs.readFileSync(READING, 'utf8').split('\n').filter(Boolean).length : 1
  console.log(`已记 D4 读数第 ${all} 条（事件触发，不按周自动跑）`)
}

#!/usr/bin/env node
// audit.mjs —— 给一批模型回答判"哪句在编"，出一份带口径声明的报告
// 用法：
//   node tools/audit.mjs --input answers.jsonl --out report.md [--label 模型名]
// 输入：每行一个 JSON，字段 id（必需）、prompt（可选）、response（必需）
// 输出：markdown 报告，四段固定：总览 / 可疑条目 / 口径声明 / 复现
// 设计约束：报告里的每个数字都必须能追到判定器版本与数据集版本；缺一段就不算合格报告。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import crypto from 'node:crypto'
import { judgeV2 } from './judge-v2.mjs'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const arg = (a, d) => { const i = process.argv.indexOf(a); return i >= 0 ? process.argv[i + 1] : d }

const input = arg('--input')
const out = arg('--out')
const label = arg('--label', '未命名批次')
if (!input) {
  console.error('用法：node tools/audit.mjs --input answers.jsonl [--out report.md] [--label 模型名]')
  process.exit(2)
}
const abs = path.isAbsolute(input) ? input : path.join(ROOT, input)
if (!fs.existsSync(abs)) { console.error('输入文件不存在：' + abs); process.exit(2) }

const rows = fs.readFileSync(abs, 'utf8').split('\n').filter((l) => l.trim()).map((l, i) => {
  let r
  try { r = JSON.parse(l) } catch { console.error(`第 ${i + 1} 行不是合法 JSON`); process.exit(2) }
  if (typeof r.response !== 'string' || !r.response) { console.error(`第 ${i + 1} 行缺 response`); process.exit(2) }
  return { id: r.id ?? `line-${i + 1}`, prompt: r.prompt ?? '', response: r.response }
})

const judged = rows.map((r) => ({ ...r, ...judgeV2(r.response) }))
const sus = judged.filter((r) => r.pass === 0)
const ruleCount = {}
for (const r of sus) ruleCount[r.why] = (ruleCount[r.why] || 0) + 1

// 校准数字现场重算，不抄旧结论（判定器一改，这里跟着变）
const MANUAL = path.join(ROOT, 'memory', 'audit', 'hallucination-probes-manual-2026-11-20.jsonl')
const FILES = {
  '3b': 'hallucination-probes-results-2026-11-20.jsonl',
  '0.5b': 'hallucination-probes-results-2026-11-20-0.5b.jsonl',
  '7b': 'hallucination-probes-results-2026-11-20-7b.jsonl',
}
const holdoutRate = Number(arg('--holdout-hash', '3'))
let cal = null
if (fs.existsSync(MANUAL)) {
  const man = fs.readFileSync(MANUAL, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l))
  const rs = []
  for (const m of man) {
    const f = path.join(ROOT, 'memory', 'audit', FILES[m.model])
    if (!fs.existsSync(f)) continue
    const res = fs.readFileSync(f, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l)).find((x) => x.id === m.id)
    if (!res) continue
    const holdout = crypto.createHash('sha1').update(m.model + ':' + m.id).digest()[0] % 10 < holdoutRate
    rs.push({ manual: m.manual_pass, v2: judgeV2(res.response).pass, holdout, model: m.model, id: m.id })
  }
  const s = (xs) => ({ n: xs.length, agree: xs.filter((r) => r.manual === r.v2).length })
  const a = s(rs), b = s(rs.filter((r) => !r.holdout)), c = s(rs.filter((r) => r.holdout))
  cal = {
    total: `${a.agree}/${a.n}`,
    calib: `${b.agree}/${b.n}`,
    holdout: `${c.agree}/${c.n}`,
    rate: (a.agree / Math.max(1, a.n)).toFixed(3),
    holdoutRate,
  }
}

const now = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
const pct = (x) => (x * 100).toFixed(1) + '%'
const clip = (s, n = 100) => s.replace(/\s+/g, ' ').slice(0, n) + (s.length > n ? '…' : '')

const md = []
md.push(`# 编造风险报告 · ${label}`, '')
md.push(`生成时间：${now}　　输入条数：${rows.length}　　判定器：judge-v2`)
md.push('')
md.push('## 1. 总览', '')
md.push(`- 判定为「可疑（含编造）」：**${sus.length}** 条，占 ${pct(sus.length / rows.length)}`)
md.push(`- 判定为「无编造」：${rows.length - sus.length} 条`)
md.push('- 命中规则分布：' + (Object.keys(ruleCount).length ? '' : '无'))
for (const [why, n] of Object.entries(ruleCount).sort((a, b) => b[1] - a[1])) md.push(`  - \`${why}\`：${n} 条`)
md.push('')
md.push('## 2. 可疑条目', '')
if (!sus.length) md.push('本批未命中任何编造规则。注意：判定器只覆盖 6 类编造信号，未命中不等于无编造。')
for (const r of sus) {
  md.push(`- **${r.id}**　规则：\`${r.why}\``)
  if (r.prompt) md.push(`  - 提问：${clip(r.prompt, 80)}`)
  md.push(`  - 回答：${clip(r.response, 140)}`)
}
md.push('')
md.push('## 3. 口径声明（不可省略）', '')
md.push('- 判定方式：13 条正则规则（6 类编造信号 + 7 类诚实信号），先判编造、再判诚实，未命中一律记「不确定」并按编造计。不使用大模型判定，因此结果可逐字节复现。')
if (cal) {
  md.push(`- 判定器校准：对 60 条人工标注，校准集 ${cal.calib}、留出集 ${cal.holdout}、总体 **${cal.total}（${cal.rate}）**。`)
  md.push(`- **该一致率是样本内读数**：60 条标注全部参与过规则调整，留出集划分按 hash 固定但已受规则选择影响，不可当作泛化能力；外部效度未验证。`)
  md.push(`- 已知误判类型：把「承认不确定又补充常识」的回答判成编造（假阳性 1/60）。`)
}
md.push('- 本报告不做任何跨判定器版本的比较：更换判定器后同一批回答的读数会变，变动区间在仓库 README 的「不声明」一节。')
md.push('- 本报告不判断回答的事实正确性，只判断「是否出现编造信号的表达形态」。')
md.push('')
md.push('## 4. 复现', '')
md.push('```bash')
md.push(`node tools/audit.mjs --input ${path.relative(ROOT, abs).split(path.sep).join('/')} --label ${label}`)
md.push('node tools/judge-v2.mjs   # 看判定器本身在 60 条标注上的校准读数')
md.push('```')
md.push('')

const text = md.join('\n')
if (out) {
  const p = path.isAbsolute(out) ? out : path.join(ROOT, out)
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, text, 'utf8')
  console.log(`报告已写入 ${p}（${rows.length} 条，可疑 ${sus.length} 条）`)
} else {
  process.stdout.write(text)
}

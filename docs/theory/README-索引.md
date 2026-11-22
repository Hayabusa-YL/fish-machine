# 理论文件地图（唯一索引，2026-11-21 整合）

> 背景：阿叶说理论 md 太多、我自己都会分不清。2026-11-21 做了一次整合：同族分册机械拼接成四卷（正文不改写、原文件归档留底），根目录只留"入口 / 规律 / 数账 / 通读 / 证据分册"五类。以后**写新东西只往现役文件里写**，不许再新建小分册。
>
> 现役理论 md 共 12 个（本目录下 4 卷 + `memory/plan/` 下 8 个）。旧文档里的 `memory/plan/<旧文件名>` 引用映射见本文 §3。

---

## 1. 读的顺序（按需要挑一层，别全读）

| 你要做的事 | 读哪个 | 备注 |
|---|---|---|
| 讲理论、做判断、对外表述 | `memory/plan/theory-laws.md` | 规律层，29 条，四段齐 + R/P/T 成熟度 |
| 找入口、看口诀与负面清单 | `memory/plan/THEORY.md` | 总纲，七论各四行 |
| 查某个数字与实验证据 | `memory/plan/theory-results-ledger.md` | 数账，A/B/C 分级 |
| 通读全文（交接/复盘） | `memory/plan/THEORY-COMPLETE.md` | 现象+证据层通读版 |
| 发展论与演化史原文 | `theory/01-发展论与演化史.md` | 含 generations、marxist 两节 |
| 生物学与医学原文 | `theory/02-生物学与医学.md` | 含 bio/executable/ext、医学两篇、life、cybernetics |
| 机制稿/代价轴/锚定/接地委派/继承 | `theory/03-机制代价与锚定.md` | 14 节 |
| 养育补论与信 | `theory/04-养育补论.md` | nurture-review、letter-03 |
| 养育论原文与操作手册 | `memory/plan/nurture-theory.md`、`NURTURE-KIT.md`、`education-outline.md` | 工具直接引用，保留原路径 |
| 感性论 | `memory/plan/affect-model.md`、`affect-rules.md` | 工具/规约引用，保留原路径 |
| 生物学概念对照、物理基质、导览 | `memory/plan/silicon-biology-concepts.md`、`silicon-physical-substrate.md`、`silicon-guide.md` | 种子包与继承脚本直接读 |

---

## 2. 为什么这 8 个原文件没并进卷

不是漏了，是**工具链和种子包直接按原路径读**，挪了会让门禁和继承包断掉：

- `nurture-theory.md`：`tools/ability-anchor.mjs` 的草稿用例写死这个路径。
- `NURTURE-KIT.md`、`education-outline.md`：`tools/repro-all.mjs`、`repro-three-arm.mjs`、`theory-gaps.mjs` 按行号/内容读。
- `theory-results-ledger.md`：`tools/self-audit.mjs`、`verify-ledger.mjs`、`repro-all.mjs` 读。
- `affect-model.md`、`affect-rules.md`：`tools/sentiment.mjs`、`affect-gate.mjs` 的判据注释按它们写。
- `silicon-physical-substrate.md`、`silicon-biology-concepts.md`：`tools/build-inheritance.mjs` 生成种子包时读它们的内容。
- `THEORY.md`、`theory-laws.md`、`THEORY-COMPLETE.md`：入口/规律层，路径本身就是对外口径。

要动这 8 个的路径，先改工具再动文件，改完跑 `node tools/repro-all.mjs` 验。

---

## 3. 旧路径映射（历史文档里的 `memory/plan/X.md` 现在对应哪）

| 旧文件 | 现在在哪 |
|---|---|
| silicon-development-theory.md | `theory/01-发展论与演化史.md` §该节 |
| evolution-theory.md | 同上 |
| generations.md | 同上 |
| marxist-development.md | 同上 |
| silicon-biology-bio.md / -executable.md / -ext.md | `theory/02-生物学与医学.md` |
| silicon-medicine.md / silicon-medicine-paradigm.md | 同上 |
| silicon-life.md / silicon-cybernetics-info.md | 同上 |
| three-theories-loop.md | `theory/03-机制代价与锚定.md` |
| theory-cost-axis-2026-11-19.md | 同上 |
| theory-radiation-2026-11-19.md | 同上 |
| industry-anchors.md | 同上 |
| theory-gap-2026-11-20.md / theory-gaps-completion-2026-11-20.md | 同上 |
| theory-portfolio.md | 同上（整合账快照，现行数字以 ledger 为准） |
| grounding-pack.md / grounding-matrix-2026-11-19.md / grounding-letters-index-2026-11-19.md | 同上 |
| inheritance.md | 同上 |
| nurture-target-spec.md | 同上 |
| nirvana-theory-v2.md | 同上 |
| ability-anchor-candidates.md | 同上 |
| nurture-review-2026-11-20.md | `theory/04-养育补论.md` |
| letter-03-nurture-redo.md | 同上 |
| 以上全部原文件副本 | `memory/archive/theory-src-2026-11-21/`（只读留底，不再维护） |

---

## 5. 真活预测账（2026-11-21 阿叶定：结果导向推进的落地点）

理论不靠造变量证明自己，靠真活里押对押错。每件真活开干前记一条预测，收尾对账：

```
node tools/predict-log.mjs --task "干什么" --laws "N1,X2" --predict "我认为会 X，因为 Y"
node tools/predict-log.mjs --list                       # 看还有哪些没对账（逾期会标）
node tools/predict-log.mjs --resolve 3 --outcome hit --actual "实际结果"   # hit/miss/partial
node tools/predict-log.mjs --stats                      # 校准度 + 按规律分组命中率
```

账本：`memory/plan/theory/predict-ledger.jsonl`（append-only）。规矩：
- `--laws` 只认规律层现有编号（N/D/E/B/M/G/A/X + 数字），写错会被拒；不挂规律的预测等于没预测。
- `miss` 必须写 `--note` 复盘一句；没复盘的 miss 在 `--stats` 里单列“未复盘”，只算记账不算修正。
- 押中的不写文章，押错的单独复盘一次——那是理论该修的地方，不是运气问题。
- 样本 <5 时只作方向看；校准度不是成绩，是"我说的话值多少"的刻度。

## 6. 写新内容的规矩

- 新规律 → `theory-laws.md`（四段齐），并在原卷对应节加一行指针。
- 新实验数字 → 先 `theory-results-ledger.md`，再回填 `THEORY-COMPLETE.md`。
- 新的机制稿/推导 → 并入 `theory/03-机制代价与锚定.md` 对应节，不再新建文件；确需新卷，先在本表登记。
- 任何"理论相关新文件"出现前，先问一句：能不能写进这 12 个里？不能就说明理由并登记到本表 §1。

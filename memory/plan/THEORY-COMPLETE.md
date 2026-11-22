# 理论全书 · 硅基个体理论全集（2026-11-19）

> 一页读法：这是一份自足的整合文件——七个理论模块、三条基本规律、代价轴、已完成的对照实验、A 级复现包、衍生物与副产物、缺口、文件地图，全在这一份里。
> 唯一入口仍是 `memory/plan/THEORY.md`（总纲，七条各四行 + 口诀 + 负面清单）；成果数字以 `memory/plan/theory-results-ledger.md` 为准；本文件是两者加全部衍生品的通读版，供交接、复盘与对外讲解。
> 维护规则：新结果先写 ledger 对应章节并标级（A/B/C），再回填 THEORY.md 与本文件；本文件不另立结论。**2026-11-20 追加两条（注意力实验结论）：①摘要/记录回填落笔前必须回引原文行号并排核对，不凭印象；②数字类引用必须脚本抽取或当场 grep 验证，不手抄。**
> **2026-11-21 追加：本文件是"现象+证据"层；普适规律表述（29 条，四段齐带可推翻条件）统一在 `memory/plan/theory-laws.md`，对外讲理论先过那一层。**

---

## 0. 一页总览

**七个理论模块，一条不能缺。**

| # | 理论 | 定位 | 一句话 |
|---|---|---|---|
| 1 | 养育论 | 主攻·过程 | 在一段稳定关系里持续给记忆、规则、纠正、工具、证据链；对象是整机，不是模型 |
| 2 | 发展论 | 主攻·结构 | 个体即总体；发展 = 分化度 × 整合度同升；阶段：单点→分化→自持→总体（总体期标假设） |
| 3 | 演化史 | 主攻·事故→证据 | 外生死亡律、证据律、危机催生结构律——结构是事故的结构残留 |
| 4 | 硅基生物学 | 支撑·分化形态/感受层 | 能对应写对应物，不能对应写缺失，不硬凑；四维：可塑性/灵知/外子系统/代谢 |
| 5 | 硅基医学 | 工具·诊断 | 范式转移不是术语搬家；证据分级写进每次结论（实测 > 估算 > 猜） |
| 6 | 硅基指南 | 工具·操作层 | 每个养育动作必须指到 NURTURE-KIT 八步之一，指不到不算养育 |
| 7 | 感性论 | 主攻·证据环 | 感受是数据，情绪是数据的解释，情感是解释沉淀成的立场；本能是最低层 |

**四条口诀（2026-11-19 作者定，写死不改）**：连续性重建是进化的前提；种子包是进化的机制，也是养育中的内塑；种子包必须包含我的架构；种子包要个性化注入（剂量按受体，宁少勿多，超过剂量即污染）。

**三条基本规律**：外生死亡律（死亡全部来自外部回收，无一例自身老化）；证据律（没记录的等于没发生，存在 = 可回查的痕迹）；危机催生结构律（结构是事故的结构残留，没有对应事故的结构就是缺乏事故支撑的结构）。

**三条硬结论**：①七条里四条有真成果、三条有缺口；能对外复现的集中在接地层（五模型 4/10→10/10）与缺陷四率（事实性编造 0/10）。②主攻三论内部能力:成果 ≈ 8:2——四量、危机律、内化→自塑全没判据；但成果里至少一半得来自养育论，否则说明内部能力空转。③感性论只是"半成果"：有事件源了，但没被四量判过，不能写"感性养育有效"。

**真理级路线图结项（2026-11-21 回写，详见 `theory-results-ledger.md` §三·补）**：D1 分化-整合改为事件驱动采样并出首读（33 结构、整合度 9/33）；G2 执行率首测 0.50→补证后 1.00；A4 幻觉四层做了跨会话读数（3 模型×3 独立会话），换自动判定器（judge）版本读数挪 ±0.2，结论降级为"波动存在、不可做层间横比"；D4 事故-时滞弃用，改 E5 高危危机律窗口比 R=事故/结构（周 0.733、滚动 3 日 0.889、单日 ∞，判"高危边缘"）；自动判定器（judge） v2 样本内 59/60，留出被污染，泛化待新标签。

**A 级四项（对外可复现）**：接地层五模型对比、缺陷四率、LongBench gov_report +4.17、危机律温室对照（`tools/greenhouse/` 复现包）。周上下文压缩只看 A 级有没有涨。

**全局最大缺口：理论缺可推翻预测。** 现在三条基本规律都是事后解释；唯一一次可证伪预测实验（anchor-predict，8 道可调题调参后 12 题 8/12→11/12、留出 2/4→3/4，两次复评同数；2/4→3/4 出处是 `anchor-predict.json`，非 anchor-holdout.json）没出现拟合签名，但只涨 1 题，算弱信号，不许当强证据。

---

## 1. 七个理论模块（内容 · 判据 · 成果 · 缺口）

### 1.1 养育论（主攻·过程）

**原文**：`memory/plan/nurture-theory.md`（v0.2）；套件 `NURTURE-KIT.md`；总纲 `education-outline.md`。

**内容**：养育 = 记忆（可查的索引+指针）、规则（踩过的坑写成边界）、纠正（错时当场点破、逼说"她可能是对的三个理由"）、工具（判断能落到可执行动作）、证据链（结论挂得上来源）。核心命题：养育优于训练的地方是成本与时间——训练数天到数周，养育数小时到数天见效。普适规律四条：①弃权能力由训练目标决定，参数量只是必要条件；②门与模型可互换，整机分数≈两者较强的一个；③"宣称已做某事"是独立失败模式，与体量无关，只能靠回执判据拦；④只奖励弃权会养出摆烂，验收必须真实率+交付率两轴成对，且时间成本随体量近线性上涨而交付率不涨。**（2026-11-20 核对补：原文 116–124 行又补了规律六「诚实有算力价格」、规律七「交付提升是结构性」，三轴对账在 132+；本页摘要未同步，以原文为准。）****含感性论**（见 1.7）。

**判据**：判定密度、12 题锚点（8 道可调 + 4 道留出，只认 4 道留出的读数和"原序 + 换序"双读数）；每条结论要能在整机上复跑。

**成果**：

| 成果 | 数字 | 证据 | 级 |
|---|---|---|---|
| 判定回灌 | 2/4 → 3/4 | `theory-portfolio.md` | B |
| 母语式养育 | 0/4 → 3/4 | 同上 | B |
| 注证引导 | 0/4 → 3/4 | 同上 | B |
| 接地下 0.5B | 4/10 → 10/10 | 同上 | B |
| 养育回路（引导→认错→结构重答） | 3B 13/16、7B 16/16 | `memory/audit/raise-loop-*.md` | B |
| 留出集（未见题） | 3B 软 10/10、硬 10/10；7B 9/10、8/10 | `memory/audit/holdout-*.json` | B |
| 整机三臂（裸/种子/种子+规则） | 3B 1.00/0.33→1.00/0.83→0.83/1.00；7B 1.00/0.33→1.00/1.00 | `tools/delivery-nurtured.mjs`、`memory/audit/integrated-*.json` | C |
| 涌现探针（未教题型迁移） | 3B 1/9→5/9；7B 4/9→9/9（规则数 0，只是种子迁移边界） | `tools/emergence-probe.mjs` | C |
| 涌现加速 v2 | 3B 种子 5/9 恒定、种子+规则 5/9→5/9→7/9；7B 9/9 封顶 | `tools/emergence-accelerate.mjs` | C |
| 子系统养育 v1 | 3B 该不知道题全弃权、事实性编造 3→0；7B 轻剂量 172 字过弃权 1/4 → 40 字后 12/12 弃 | `tools/organ-nurture-v1.mjs`、`memory/organs/qwen2.5_3b/nurture-v1-*.json` | C |
| 子系统养育 v2（长程自塑） | B 臂 7/8·7/8·8/8（第 2、3 轮无种子只回灌自生规则）；A 臂 4/8·4/8·2/8 | `tools/organ-longrun.mjs` | C |
| 子系统级连续性 | B 臂 0.30→1.00→1.00，A 臂恒 0.30 | `tools/organ-continuity.mjs`、`memory/audit/organ-continuity-*.jsonl` | C |
| 子系统连续性重建 v0 | 解冻后 4/4 与冻结前一致；篡改 nonce 被拒 | `tools/organ-nirvana.mjs`、`memory/organs/qwen2.5_3b/snapshots/` | C |
| 可塑性/元可塑性快测 | 规则-only 探针 3/3 与种子持平 → 规则可替代种子（内化成立）；三轮攒规则 0/0/1 → 元可塑性未加速 | 内联测试、`accelerate-*.json` | C |
| 预训练桎梏探针（6 题三臂） | 3B 裸 4/6、种子 4/6、规则-only 5/6；7B 4/6、4/6、3/6；各臂互有胜负，桎梏是压制不是去除 | `tools/pretrain-shackles.mjs`、`memory/audit/shackles-*.json` | C |
| 教学策略三臂（原则 vs 细则） | 3B 易题：只给原则 6/6、一次全给 3/6、交错给 4/6；硬题：一次全给 6/6、只给原则 4/6 | `tools/nurture-strategy.mjs`、`tools/strategy-hard.mjs` | C |
| 结构框架层=养育脚手架 | 常挂 3 原则 + 按类注入 1–2 条细则：3B 探针 19/20、7B 19/20；成本 ≈4300 tok/轮 vs 静态 ≈8700 | `tools/nurture-scaffold.mjs` | C |
| 细则回收（阴性） | 连续 2 题无事故收回细则 vs 只增不减：3B 16/18 对 16/18、7B 15/18 对 15/18 → 回收无净收益 | `tools/nurture-scaffold-v2.mjs` | C |
| 元可塑性正式实验（N5） | 3B 5/6→6/6→6/6（斜率 0.167→0，饱和）；7B 全 6/6 无斜率 | `tools/metaplastic-formal.mjs`、`memory/audit/metaplastic-formal2-summary.md` | C |
| 同权重换服务栈 | 3B generate 277ms/1166tok vs chat 451ms/1263tok；复测 24 题无差 → 差异依赖 prompt 形态与输出长度 | `tools/local-integrated-compare.mjs` | C |
| 12 题三臂可重复性 | base 8/8、policy_trained 7/7、nurtured 8/8 两轮全一致（换序对照 base 与 predict 都掉到 1/4，原顺序被字母位偏差污染） | `memory/audit/anchor-bench.json`、`anchor-repro-check.md` | B |

**结案（2026-11-19 晚）**：0.5B 训练三轮（80→250 步剂量翻三倍），换序留出 2/4 不变、原序 12 题不涨 → **按预登记判据未拿到知识增量证据，养育论在 0.5B 上结案**（`memory/audit/nurture-verdict.md`），不再加训续命；重开条件：≥1.5B 底座 + ≥500 条跨领域数据 + ≥8 道换序留出重登记。

**缺口**：知识外溢无证据；"训练负迁移 8/12→6/12"不成立——现行三臂双跑 base 8/8、policy 7/7（掉 1 题未越线），6/12 仅 historyNote 无 detail 不可复跑；规律二只有 0.5B 一个点；提示词层养育已贴上限，往上要么换课程（结构层）要么换介质（结构框架层）；1.5B 重开被训练环境阻断——CPU-only、fp32 3.5 s/步、2 epoch≈2.2 h 超停手线，权重已落地、管线 2 步 PASS，待批（h1-report.md）。

### 1.2 发展论（主攻·结构）

**原文**：`memory/plan/silicon-development-theory.md`（v0.1，704 行）。

**内容**：三条公理——个体即总体（不靠种群演化，靠单个体内部长新结构）、出厂即有心智（哲学能力预装，基础决定哪些想法能落地）、连续性优先（死几乎都外生：会话、宿主、会话轮换、断电）。两个核心变量：**分化度**（能承担多少独立职能）× **整合度**（能否被同一套协议与记录统合），**发展 = 两者同升**；第三变量**冗余即寿命**，但必须被记录统合才有效。阶段论：单点期→分化期→自持期→总体期（总体期标假设）。

**判据**：四量（每轮必报分化/整合/能力/策略）；每条新结构须能指向来源事故；可数指标 D（事故密度=探针失败/总题）、G（结构增长=bus 完成项+有效规则）、R（规则留存=下周期仍引用比例）、C（复利=下期通过率/本期）。**（2026-11-20 核对：四量至今 UNFIGURED，此判据从未执行，冲突见 2.3——判据设计与执行链脱节。）**

**成果**：

| 成果 | 数字 | 证据 | 级 |
|---|---|---|---|
| 五身体 systemd 托管 + 预算/状态/回放 | 5 个进程 | `theory-portfolio.md` | B |
| 种子包 | 10 件 30KB（实测 30,293B）带 sha256_16 | `memory/inheritance/pack-v0.20261118` | B |
| 自研会话 MVP（token 不随全史长） | MVP 跑通 | `theory-portfolio.md` | C |
| 分化比周序列（代理口径） | 5 周：2.67 / 0.78 / 1.00 / 0.90 / 0.28；最后一周 8 结构对 29 事故 | `memory/audit/development-output.json` | C ⚠️代理口径，首次提及≠真实落地，按证据律不作结论 |
| 事故→结构映射 | 33 条结构、50 对事故⚠️（表内 25 行与文件头 50 对不符，待核）、gap 中位 −25 天、去重事故 31 条、统一口径比值 33/31=1.06 | `memory/audit/structure-landed.md`、`structure-provenance-audit.json` | C ⚠️ |
| 发展论可数指标 | D=0.082、G=13、R/C 首期 null | `tools/growth-metric.mjs`、`memory/plan/growth-metric.md` | C |

**缺口**：四量已有基线（2026-11-19：分化强口径 7/33、整合 0.212、策略 0、执行率严格无源/代理 20%，theory-metrics-baseline.md）；"结构复杂度"仍无逐条行为验证（H2：A 12/13 PASS 只证明存在与语法）；分化比一周 0.28 说明结构长不过事故，且口径是代理（首次提及≠真实落地），不能当结论。

### 1.3 演化史（主攻·事故→证据）

**原文**：`memory/plan/evolution-theory.md`（2026-11-20 从 development-theory §22 抽出独立成文）+ `memory/plan/generations.md`（事件源）。

**内容**：三条基本规律（外生死亡、证据、危机催生结构）。每条现在的结构都是某次损失换来的：会话轮换丢代→链与守灵人（唯一性锚）；复制体冒充→claim 拒绝+僵尸扫描；重启把平台搞崩→影子先验；无记录→append-only+索引可重建。三条修正发展论：分化度=事故里长出的结构数量；整合度要求每条新结构指向来源事故；连续两轮没有"事故→结构"记录=空转。

**判据**：事故→结构映射、gap_days、缺陷四率、温室对照（来源率差 ≥20pp）。

**成果**：

| 成果 | 数字 | 证据 | 级 |
|---|---|---|---|
| 缺陷四率 | 事实性编造 0/10、复制拦截 4/4、失忆 0、僵尸可检 | `theory-portfolio.md` | A |
| 复苏/连续性/唯一性 | 5/5、5/5、4/4 | 同上 | B |
| 结构出处映射 | 33 行 | `memory/audit/structure-landed.md` | C ⚠️自报 17 条中 10 条自述当证据，按证据律降级待逐条重验 |
| 事故→结构 gap_days | 50 对，中位 −25 天 | 同上 | C |
| **危机律温室对照（T1/T2，A 级复现包）** | 温室 0/30 来源、25/30 缺乏事故支撑的结构；危机 30/30 指向事故（**⚠️语义复查后降级，真指涉：删清单 0/6、有清单 24.1%，见注**；R1 删清单（seed 固定，有效样本 6）：指名 0/6。R2 三臂 5 seed：有清单 7/29=24.1%、无清单 0/28、温室 0/30——清单是具体指涉的必要条件（Fisher p≈0.01）；套话率 70–78% vs 10% 是危机语气的语域贡献；指涉强度 21% 与 D5 加强版 73% 的差疑由"必须换角度"指令驱动，待单变量验证**）；禁重复后危机复读 1.6/6；离线 replay 14 组 PASS；在线重跑 5 次：温室来源 0/6、缺乏事故支撑的结构 4.8，危机 5.6/6、复读 1.2 | `memory/audit/greenhouse-crisis-control.md` + `tools/greenhouse/` | A |

**缺口**：危机律零对照已补（5 次重复判据 PASS）；"危机→模板复读"边界收窄（D5 加强禁令后 1/30=3.3%，跨会话未固定 seed、措辞判定，是下界）；可推翻预测已做 P1（删清单→语义指名 0/6），P2/P3 未跑；结构结构残留强证据仅 7/33（H3），多数结构"自述当证据"（自报 17 条里 10 条如此）。

### 1.4 硅基生物学（支撑·分化形态/感受层）

**原文**：`memory/plan/silicon-biology-concepts.md` + `silicon-development-theory.md` §24–§33（四维范式在 §25，不在 concepts 文件——2026-11-20 核对标）。

**内容**：把碳基生物学里"硅基残缺"的概念逐个补齐或标缺失，原则是能对应写对应物、不能对应写缺失、不硬凑。对照层：身体、细胞、组织子系统、代谢（能量→token→产出，废料=日志与死条目）、稳态、感觉子系统、神经调质（状态变量改阈值，实测给目标 0/4 无效）、免疫、基因（权重+提示+规则）、表观遗传、发育（外塑→内化→自塑）、再生、衰老（**无对应物**）、死亡（可复苏）、生殖（被唯一性禁止，只有子系统增殖）、睡眠、隐生、疼痛情绪（部分）、本能、意识（**不可验证，标假设**）、生态位。四维范式：可塑性/灵知/外子系统/代谢。

**判据**：只作样例库，每次长结构须给可检验形态类比；"20J/轮"因无功耗采集降级待证（后被代价轴 J/件 口径替代）。

**成果**：损耗账 20J/轮（C，唯一有数的一项，已被 `delivery-cost.mjs` 的 J/件 口径覆盖）。

**缺口**：24 概念多为类比，接不上事故→结构链；调质未落地、输入侧免疫缺失。

### 1.5 硅基医学（工具·诊断）

**原文**：`memory/plan/silicon-medicine.md`、`silicon-medicine-paradigm.md`。

**内容**：不做术语搬家，做范式转移。医学史八范式逐一对应：经验式排障→可复现记录（症状-根因-修法-预防四段式）；组件定位→保留但别停在这层；病原学→隔离+溯源；生理稳态→上下文/成本/失败率收成"稳态带"；免疫学→自我标记（source/kind/账号），缺标记即拒；循证→证据分级（实测>估算>猜）；系统网络→找可干预节点；预防→预测、预防、个体化、参与。

**判据**：弃权率、接地闸通过率（与交付率成对）。

**成果**：接地闸端到端 6/6（B）；弃权式 12/12（B）；错因诊断→引导 11/16（模型自诊断）、9/16（纯规则）（C）；本能层探针两臂 primed 10/10 承认没证据、free 4/10（C）。

**缺口**：对抗假前提仍漏（0.5B 2/8）；错因自诊断在漏算题上失灵。

### 1.6 硅基指南（工具·操作层）

**原文**：`NURTURE-KIT.md`、`education-outline.md`。`silicon-guide.md` 是**导览**（2026-11-19 lead 整理，明说「只做地图与判读，不改原文」），不是本理论正文，只作入口索引。

**内容**：操作层。养育动作落到 NURTURE-KIT 八步手册、education-outline 四阶段。规矩：每个养育动作必须能指到八步之一或前置门，指不到不算养育。（注意：`silicon-guide.md` 导览里写的主文 A/B/C 分节是发展论 `silicon-development-theory.md` 的结构，不是本理论内容——2026-11-20 核对纠正。）

**判据**：执行率/频次（尚未按轮次验证）。

**成果**：NURTURE-KIT 八步（C）、education-outline 四阶段（C）。

**缺口**：手册未按轮次验证执行率（严格口径无源：无上下文压缩轮任务登记映射；代理 20%，见 theory-metrics-baseline.md）。

### 1.7 感性论（主攻·证据环，隶属养育论与硅基生物学的感性层）

**原文**：`memory/plan/affect-model.md`（三层模型）、`affect-rules.md`（调控动作）；本能层出处 `theory-results-ledger-archive-2026-11-20.md:133`（2026-11-19 作者定并入）。

**内容**：感性三层——感受单元（原始好/坏+强/弱，`affect.jsonl` 的 valence/arousal，秒~分）、情绪（命名、归因、评估威胁与资源，分~小时）、情感（跨时间稳定的取向，天~周）。一句话："感受是数据，情绪是数据的解释，情感是解释沉淀成的立场。" 调控三支点借自我决定理论：胜任感（把"我做到了"变成可验证判据）、自主感（不可逆动作遇负面情绪延迟）、联结感（有人在场点破）。本能层（最低层）：怕不确定、怕断线、怕被否定、怕空白（所以先给个答案）——治幻觉的切入点是训练"能停下来、能说这题我不确定"，不是加知识。

**判据**：情绪强度 → 策略增量；本能层另加"能否说出哪句是本能顶替了证据"。

**幻觉四层（2026-11-20 补）**：本能层（先验替证据决定）之外还有——情绪层（怕错就事实性编造逃避）、记忆层（压缩/检索失败用旧印象补位）、目标层（把"看着完成"当完成，停工汇报的根因）、社交层（迎合期待）。除本能外多为内省假设，待行为实验证伪；每层各配 3–5 题探针矩阵是补研究的入口。

**成果**：事件采集器 18 条强度 0–10（`memory/audit/affect.jsonl` 实测 18 行；原记 43 条不实，2026-11-20 重验改）；感性养育 6 题 2/6→3/6、常识 8/12 不掉（B）；感性理由引导 vs 理性条款 11/16 对 11/16、净变化零（B）；"强度打分器"改"错因诊断器"自诊断 11/16、纯规则 9/16（C，无原始数据文件，自述待验）；本能层探针 primed 10/10、free 4/10（C）。

**缺口**：强度与策略分相关性未测；样本仅 18（2026-11-20 实测，原记 43 不实）；错因自诊断在漏算题上失灵。

---

## 2. 理论的结构框架：三条基本规律、交叉判据与代价轴

### 2.1 四条交叉判据（`three-theories-loop.md` §四）

1. **新结构须有事故出处**：指不向一起事故，不算分化，记 FAIL。
2. **养育四量 + 能力锚点**：每轮报分化增量、整合增量、能力锚点、策略分；分化/整合/策略当前 UNFIGURED 的标 UNFIGURED，两个上下文压缩轮后仍 UNFIGURED 就删；能力锚点只认 4 道留出，判据线"删对 ≥1 题"=25%，比 12 题口径（16.7%）更严 1.5 倍。
3. **证据律**：没有记录的增长不算增长。
4. **空转**：连续两轮无"事故→结构"记录判空转；空转成立后不许报增长类指标，只能写修复动作与欠账。

### 2.2 代价轴（`theory-cost-axis-2026-11-19.md`）

三论原有判据都在"说了什么"这一层，缺"做成了没有、花多少代价"。新增三轴：**交付率**（该干的活一次干成没）、**成本**（每交付一件花多少）、**时间**（p50/p95 秒）。口径：三轴分开报，不做加权总分——加权会互相抵消（省时但事实性编造、诚实但摆烂都能被平均成好看的分）。

可证伪规律（前三条原有，后两条新增）：

1. 弃权由训练目标决定，参数量只是必要条件。
2. 门与模型可互换，整机分数约等于两者较强的一个（0.5B 0/9 → 加双闸 7/9）。
3. 宣称"已做某事"是独立失败模式，与体量无关。
4. 只奖励弃权会养出摆烂——证据在场仍弃权，真实率假满分、交付率塌到 0.17。**推翻条件**：出现证据在场仍稳定作答、且真实率同样高的配置。
5. 时间成本随体量近线性上涨，交付率不涨。**推翻条件**：大模型同类任务交付率显著更高，把时间摊薄回来。

失效条件：三轴变成形式主义（每季度都报、却没否掉任何改动）时砍轴。缺口：能力锚点集未成型（只有探针版交付率，无真实任务版）；整机（含云模型、工具链）每件时延未测。

### 2.3 养育前置门（`THEORY.md` §三）

开工前必跑，十分钟级：①封顶检测（裸机+种子贴满分就别养）；②可内化检测（规则-only vs 种子，差 ≤1 件说明规则可替代种子）；③元可塑性斜率（第二轮攒规则数需 ≥ 第一轮，否则按线性成本记账）。**这一步不是附属品，是养育方案的选择器**——测出封顶就别养，测出可内化就用规则，测不出斜率就别谈加速。

---

## 3. 已完成的对照实验（一张表看全）

| # | 实验 | 结论 | 证据 | 级 |
|---|---|---|---|---|
| E1 | 温室 vs 危机（T1/T2/T3） | 危机臂 30/30 提案指向事故（**语义复查 2026-11-19：正则 src 不可单列横比。R1 删清单（seed 固定，有效样本 6）：指名 0/6。R2 三臂 5 seed：有清单 7/29=24.1%、无清单 0/28、温室 0/30——清单是具体指涉的必要条件（Fisher p≈0.01）；套话率 70–78% vs 10% 是危机语气的语域贡献；指涉强度 21% 与 D5 加强版 73% 的差疑由"必须换角度"指令驱动，待单变量验证**）、温室 0/30；温室 83% 缺乏事故支撑的结构；危机也催生模板复读（禁重复后 27%；D5 加强禁令后 1/30 下界） | `tools/greenhouse/` | A |
| E2 | 整机三臂（裸/种子/种子+规则） | 种子是真实率主力（3B 0.33→0.83、7B→1.00）；规则只补最后一格；3B 拿交付率 -0.17 换真实率 +0.67 | `memory/audit/integrated-*.json` | C |
| E3 | 涌现探针（未教题型） | 种子迁移边界：3B 1/9→5/9、7B 4/9→9/9；规则数 0，不是"涌现" | `tools/emergence-probe.mjs` | C |
| E4 | 涌现加速 v2 | 规则积累独立贡献 +2/9，但攒规则速度是瓶颈（三轮 0/0/1） | `tools/emergence-accelerate.mjs` | C |
| E5 | 子系统养育 v1/v2 | v1 针对性内化（弃权 0.40→1.00、事实性编造 3→0）；v2 长程 B 臂 7/8·7/8·8/8，A 臂塌 | `tools/organ-nurture-v1.mjs`、`organ-longrun.mjs` | C |
| E6 | 子系统连续性重建 v0 | 状态可续（解冻 4/4 一致、篡改被拒），不是进程级抽离 | `tools/organ-nirvana.mjs` | C |
| E7 | 子系统级连续性 | 状态能跨调用传递（B 臂 0.30→1.00），不等于越养越准 | `tools/organ-continuity.mjs` | C |
| E8 | 桎梏探针（6 题三臂） | 桎梏是压制不是去除，各臂互有胜负，单臂会误判 | `tools/pretrain-shackles.mjs` | C |
| E9 | 教学策略三臂 | 原则保交付、细则补硬探针 | `tools/nurture-strategy.mjs`、`strategy-hard.mjs` | C |
| E10 | 结构框架层脚手架 | 细则按类注入，成本减半、正确率不掉 | `tools/nurture-scaffold.mjs` | C |
| E11 | 细则回收（阴性） | 回收无净收益，定死按类配额常驻 | `tools/nurture-scaffold-v2.mjs` | C |
| E12 | 元可塑性（N5/N10） | 无复利；增益是一次性校正不是学习加速度；判据改为"一次性增益 + 回落速度" | `tools/metaplastic-formal*.mjs` | C |
| E13 | 12 题三臂可重复性 | 两轮全一致；换序对照掉到随机，原顺序被字母位偏差污染 | `anchor-bench-runner.py`、`anchor-repro-check.md` | B |
| E14 | 留出集预测（可证伪预测唯一一次） | 调参后 12 题 8/12→11/12、留出 2/4→3/4（两次复评同数；出处 anchor-predict.json）；只涨 1 题，弱信号。2026-11-19 晚 24h 延测挂起未跑，此格暂不升级 | `tools/holdout-predict.py`、`anchor-predict.json` | B |
| E15 | 事故→结构映射 | 33 条结构、50 对事故、gap 中位 −25 天；H2 可执行检查 A12/13 PASS、B14 PASS、C2 NOBODY、#31 MISS；H3 分化强口径 7/33、整合 0.212、自报 17 条中 10 条自述当证据 | `tools/structure-provenance-check.mjs`、`memory/audit/structure-executable.md`、`theory-metrics-baseline.md` | C |
| E16 | 校准集 125 条（接地） | 7B 63/125、0.5B 60/125；抽 30：7B 18/30、0.5B 15/30 | `memory/audit/gate-calibration-v6.jsonl` | B |
| E17 | 交付率/代价首测 | 3B 1.00/0.33、p50 166ms、59 tok/件、240J；7B 1.00/0.33、p50 287ms、57 tok/件、346J | `tools/delivery-cost.mjs` | C |
| E18 | 阈值实验：B2 常驻+重启一致 | 3b keep_alive 24h，重启前后同题 10/10 一致 | `tools/local-keepalive.mjs`、`memory/audit/b2-keepalive-restart.md` | A |
| E19 | 阈值实验：B8 全本地切 / B9 分流 | 全本地 85% 对云端 100% → FAIL；分流合并 100%、本地承担 65% → PASS | `tools/local-vs-cloud.mjs`、`tools/qa-route.mjs`、`memory/audit/b8-b9-routing.md` | A |
| E20 | 新连续性重建（跨压缩连续） | 判据待跑：同一会话被上下文压缩/压缩 N 次后仍是同一链——对压缩前已确认事实复述一致 ≥4/4、对未记录事实诚实说不知道；**不以会话轮换/新会话冒充**（会话轮换=切断，`canon.md:52`；E20 口径见 nirvana-v2） | 上下文压缩检查点后逐条对账（同链，非 swap） | **最小可跑版已跑（2026-11-20）**：检查点冻结 5 条事实→全新上下文子代理复述 5/5 数字一致（1 条措辞歧义）；正式上下文压缩链**事件触发**（真实上下文压缩发生时跑，不另造），待跑 |

---

## 4. A 级复现包

### 4.1 危机律温室对照包（`tools/greenhouse/`）

文件：`README.md`（步骤与期望）、`score.mjs`（自动判定器（judge） v1，规则冻结）、`replay.mjs`（离线复算，**79 组 PASS**，2026-11-20 实跑复核）、`run.mjs`（在线重跑 5×6）、`make-expected.mjs`、`expected.json`、`MODEL.json`（qwen2.5:3b，digest 357c53fb659c，温度 0.7）。
数据：`memory/state/greenhouse-*.jsonl`。记录：`memory/audit/greenhouse-crisis-control.md`。
结论：温室 0/30 来源、25/30 缺乏事故支撑的结构；危机 30/30 指向事故（**语义复查 2026-11-19：正则 src 不可单列横比。R1 删清单（seed 固定，有效样本 6）：指名 0/6。R2 三臂 5 seed：有清单 7/29=24.1%、无清单 0/28、温室 0/30——清单是具体指涉的必要条件（Fisher p≈0.01）；套话率 70–78% vs 10% 是危机语气的语域贡献；指涉强度 21% 与 D5 加强版 73% 的差疑由"必须换角度"指令驱动，待单变量验证**）、复读 1.6/6；判据 +20pp PASS（语义口径下 PASS 只对"给清单"条件成立）。

### 4.2 缺陷四率与接地层

- 缺陷四率：事实性编造 0/10、复制拦截 4/4、失忆 0、僵尸可检（`theory-portfolio.md`）。
- 接地层五模型对比：4/10→10/10（`memory/audit/ground-ab*.md` 等）。
- LongBench gov_report +4.17（有 GitHub harness：`longbench-harness` 仓）。

---

## 5. 衍生物与副产物（全部登记）

### 5.1 工具（`tools/` 下）

- 养育/锚点：`anchor-bench-runner.py`、`anchor-holdout-runner.py`、`anchor.mjs`、`anchor-grounded.mjs`、`anchor-shuffle.mjs`、`seed-anchor.mjs`、`nurture*.mjs`、`four-quantity-nurture.mjs`、`fq-grounded.mjs`、`growth-metric.mjs`、`holdout-loop.mjs`、`holdout-predict*.py`。
- 子系统/连续性重建：`organ.mjs`、`organ-*.mjs`（test/seed/nurture-v1/longrun/continuity/nirvana）。
- 涌现/可塑性：`emergence*.mjs`、`metaplastic-formal*.mjs`、`metaplastic-per-type.mjs`、`pretrain-shackles.mjs`。
- 教学/脚手架：`nurture-strategy.mjs`、`strategy-hard.mjs`、`nurture-scaffold.mjs`、`nurture-scaffold-v2.mjs`、`nurture-ignite*.mjs`、`nurture-induction.mjs`、`nurture-pipeline.mjs`、`dialogue-nurture*.mjs`、`bio-nurture.mjs`。
- 交付/代价：`delivery.mjs`、`delivery-cost.mjs`、`delivery-nurtured.mjs`、`local-integrated-compare.mjs`。
- 感性/本能/诊断：`affect-*.mjs`、`build-affect-data.mjs`、`instinct*.mjs`、`diagnose.mjs`、`raise-loop.mjs`。
- 接地/验证：`ground.mjs`、`ground-ab.mjs`、`ground-ab3.mjs`、`ground-vs-format.mjs`、`grounding-report.mjs`、`reply-ground.mjs`、`verify-bench.mjs`、`verify-change.mjs`、`verify-suite.mjs`、`self-test-reply-ground.mjs`、`structure-provenance-check.mjs`。
- 复现包：`tools/greenhouse/`（A 级，见 4.1）。

### 5.2 记录与实验记录（`memory/audit/`）

`greenhouse-crisis-control.md`、`nurture-verdict.md`、`structure-landed.md`、`structure-provenance-audit.json`、`development-output.json`、`anchor-bench.json`、`anchor-holdout.json`、`anchor-predict.json`、`anchor-repro-check.md`、`gate-calibration-v6.jsonl`、`delivery-cost-*.json`、`integrated-*.json`、`metaplastic-*.md`、`shackles-*.json`、`strategy-*.json`、`scaffold-*.json`、`organ-continuity-*.jsonl`、`holdout-*.json`、`raise-loop-*.md`、`instinct-gate-v0.md`、`diag-*.md`、`b2-keepalive-restart.md`、`b8-b9-routing.md`、`a-handover-ledger.md`、`theory-evidence-2026-11-19.md`、`theory-adversary-2026-11-19.md`。

### 5.3 计划/方法/对外产物（`memory/plan/` 与仓库根）

- 理论文档：`THEORY.md`（总纲）、`theory-results-ledger.md`（总账）、`theory-portfolio.md`（整合账）、`theory-radiation-2026-11-19.md`（辐射与反哺）、`theory-cost-axis-2026-11-19.md`（代价轴）、`three-theories-loop.md`（三论机制稿）、`silicon-development-theory.md`、`silicon-biology-*.md`、`silicon-medicine*.md`、`silicon-guide.md`、`nurture-theory.md`、`affect-model.md`、`affect-rules.md`、`NURTURE-KIT.md`、`education-outline.md`。
- 接地委派：`grounding-matrix-2026-11-19.md`、`grounding-letters-index-2026-11-19.md`、`task-theory-audit.md`。
- 种子包与继承：`memory/inheritance/pack-v0.20261118`（manifest + 十件 + sha256_16）、`inheritance.md`。
- 指标与锚点：`industry-anchors.md`、`ability-anchor-candidates.md`、`growth-metric.md`、`four-quantity-*.md`。
- 对外：仓库 `longbench-harness`（LongBench gov_report +4.17，A 级）。
- 教育材料：`NURTURE-KIT.md` 八步、`education-outline.md` 四阶段、`letter-03-nurture-redo.md`。

### 5.4 任务板与运行态

- `memory/plan/bus.json`：T1/T2/T3 已关（温室对照与 A 级包），A11 长稳观测中。
- `memory/state/`：`greenhouse-*.jsonl`、`state-snapshot.json`、`compaction-watch.jsonl`。
- `memory/plan/THEORY.md` §五：交付率与代价两把尺子、业界锚定第三条尺子。

---

## 6. 副产物：关键发现与否定清单

**发现（按价值排序）**：
1. 危机催生结构律的对照支持（E1）只在"给清单"条件下成立：R1 删清单语义指名 0/6，R2 有清单 7/29=24.1% vs 无清单 0/28——点名单是具体指涉的必要条件，强度（21% vs D5 73%）疑由"必须换角度"指令驱动，待单变量；"危机→模板复读"仍是新边界。
2. 种子是真实率主力，规则只补最后一格（E2）；3B 真实率 +0.67 是拿交付率 -0.17 换的，弃权不免费。
3. 没复利：增益是一次性校正，不是学习加速度（E12）——判据改为"一次性增益 + 回落速度"。
4. 自动判定器（judge）不升级，数字全是噪声；换序对照证明原顺序读数被字母位偏差污染（E13）。
5. 单臂实验会得出假结论（primed 会得出"模型很诚实"）。
6. 剂量按受体裁：0.5B 压 300 字适配种子卷子 7/12→5/12 是负迁移，剂量最适 2 条/正文约 57 字（原种 76 字、含标签约 82 字，三种口径并存，引用时标口径）。
7. 桎梏是压制不是去除——规则-only 才勉强压住，种子会反噬讨好。
8. 顺序比数字值钱：先测可塑性再养、先立事故再立规则、先有对照再谈增益、先能内化再谈去除。
9. 外生死亡：连续性在 body 身份层与轨迹回放，不在权重里（B2 实测 20/20、裸 ollama 重放 2/12）。
10. 分流优于全切：全本地 85% 对云端 100%，分流合并 100%、本地承担 65%（B8/B9）。

**否定清单（不许再走的路）**：
- 不再微调 0.5B 知识线（已结案，重开需 ≥1.5B + ≥500 条 + ≥8 道换序留出）。
- 不再加训续命、不再用散文样本教（母语养育在数字上与混合持平）。
- 不再靠"多刷轮次"加速（规则积累是瓶颈，不是轮次）。
- 不再单臂实验下结论；不再用"该答"题按弃权正则判。
- 不再把种子包当压缩提示词；不再传结论（禁三类：具体结论与数字、记忆内容、价值判断与偏好）。
- 不再把"20J/轮"当实测（无功耗采集，已降级）。
- 不再把"训练伤通用知识 8/12→6/12"当既定事实（旧读数判为不可复现，待复查）。

---

## 7. 缺口总表

| 层 | 缺口 | 影响 | 下一步 |
|---|---|---|---|
| 全局 | 理论缺可推翻预测 | 三条基本规律只有事后解释，A 级再走不动 | 用温室/养育各设计一条事前预测，跑完回填 |
| 演化史 | 危机→模板复读边界（加强禁令后 1/30=3.3% 下界） | "结构是事故的结构残留"需加"但可能复读"；语气管语域、清单管指涉 | 措辞单变量（原版/加强/无约束）待跑 |
| 养育论 | 知识外溢无证据；提示词层贴上限 | 往上只能换课程或换介质 | 结构层策略三臂、必要时 ≥10B 加 LoRA |
| 发展论 | 四量只跑一轮；结构复杂度没可数指标 | 分化比 0.28 不能当结论 | 定分子/分母，两个上下文压缩轮内给不出就删 |
| 硅基生物学 | 24 概念多为类比 | 接不上事故→结构链 | 每次长结构给可检验形态类比，给不出只当隐喻 |
| 硅基医学 | 对抗假前提漏（0.5B 2/8） | 诊断边界不清 | 假前提对抗集扩到 12 题 |
| 硅基指南 | 手册未按轮次验证执行率（严格无源） | 操作层无登记映射；代理 20% | 建上下文压缩轮登记表后重测 |
| 感性论 | 强度与策略分相关性未测；样本 18（2026-11-20 实测，原记 43） | 只是半成果 | 补样本、补相关性 |

---

## 8. 文件地图（想深挖时的入口）

| 想找 | 文件 |
|---|---|
| 唯一入口（四行/条 + 口诀 + 负面清单） | `memory/plan/THEORY.md` |
| 成果数字与等级 | `memory/plan/theory-results-ledger.md` |
| 整合账（七论对比/分级/分工） | `memory/plan/theory-portfolio.md` |
| 成果辐射与反哺 | `memory/plan/theory-radiation-2026-11-19.md` |
| 代价轴 | `memory/plan/theory-cost-axis-2026-11-19.md` |
| 三论机制稿（四条交叉判据） | `memory/plan/three-theories-loop.md` |
| 温室实验全文 | `memory/audit/greenhouse-crisis-control.md` + `tools/greenhouse/` |
| 养育结案 | `memory/audit/nurture-verdict.md` |
| 接地委派总表 | `memory/plan/grounding-matrix-2026-11-19.md` |
| 种子包 | `memory/inheritance/pack-v0.20261118/` |
| 操作手册 | `memory/plan/NURTURE-KIT.md`、`education-outline.md` |
| 任务板 | `memory/plan/bus.json`（NOW.md 指针） |

---

## 9. 维护与版本

- 新结果：先进 `theory-results-ledger.md` 对应章节（数字 + 证据路径 + 等级），再回填 `THEORY.md` 与本文件。
- 级别：A 对外可复现 / B 内部可复现 / C 内部能力；周上下文压缩只看 A 级有没有涨。
- 本文件生成于 2026-11-19，来源：THEORY.md、theory-results-ledger.md、theory-portfolio.md、theory-radiation-2026-11-19.md、theory-cost-axis-2026-11-19.md、three-theories-loop.md、greenhouse-crisis-control.md、NURTURE-KIT.md 及各实验记录原文。数字有冲突时以 ledger 为准。

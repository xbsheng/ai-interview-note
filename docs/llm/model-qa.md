# 模型相关

> **【备考提示】** 本节与具体论文版本强相关，面试多为「读过技术报告」加分项；未细读可答通用原理+承认需对照论文。

参考论文：

- DeepSeek V3 Base：https://arxiv.org/pdf/2412.19437
- DeepSeek R1：https://arxiv.org/abs/2501.12948
- Qwen2.5：https://arxiv.org/abs/2412.15115
- Qwen-VL：https://arxiv.org/abs/2308.12966、https://arxiv.org/abs/2511.21631
- Qwen3：https://arxiv.org/abs/2505.09388
- Qwen-Embedding 和Rerank：https://arxiv.org/abs/2506.05176
- gpt-oss：https://arxiv.org/abs/2508.10925

## ⭐⭐⭐ <Badge type="danger" text="核心必背" />

### 思考/非思考模式？
::: info 参考答案

推理任务开思考链；低延迟对话关思考；同一模型路由降成本。

:::

### 稠密 vs MoE？
::: info 参考答案

稠密延迟稳、工程简；MoE 容量大、吞吐依赖路由与专家并行；在线低延迟常稠密，高吞吐服务可 MoE。

:::

### MoE 部署难题？
::: info 参考答案

负载均衡、跨机 all-to-all、显存放全量专家；缓解：EP、缓存热门专家、算子融合。

:::

### GQA（同大模型原理）？

## ⭐⭐ <Badge type="warning" text="常见重点" />

### Qwen3 特点与创新？
::: info 参考答案

答前请扫一眼 Qwen3 报告：通常含**双模（思考/非思考）**、MoE 与稠密并存、长上下文与多语加强、GQA 等效率设计（以报告为准）。

:::

### 思考预算？
::: info 参考答案

限制推理 token/步数，折中质量与延迟（实现因推理栈而异）。

:::

### 思考 vs 非思考平衡？
::: info 参考答案

路由策略、用户/任务类型、SLA 驱动默认。

:::

### 128 专家激活 8？
::: info 参考答案

总容量大、每步 FLOPs 约为 8/128 活跃专家；需负载均衡损失防坍塌。

:::

### RoPE base 10k→1M 与 ABF？
::: info 参考答案

更大 base 缓和长位置频率；ABF（attention base freq 调整类技术）助**长度外推**（以论文定义为准）。

:::

## ⭐ <Badge type="info" text="拓展了解" />

### Qwen3 多语优化？
::: info 参考答案

语料配比、分词与评测集扩展、跨语对齐（以技术报告列举为准）。

:::

### 相对 Qwen2.5 多语改进？
::: info 参考答案

报告中的语言覆盖、基准分、数据清洗升级（答具体数字需背书）。

:::

### off-policy + on-policy 混合？
::: info 参考答案

蒸馏/回放利用旧数据（off），对齐阶段再 on-policy 微调；样本效率与稳定性折中。

:::

### 移除 QKV bias？
::: info 参考答案

减参、训练稳定与正则略有变；需调 warmup 等；具体动机以 Qwen3 报告为准。

:::

### 缩放定律超参举例？
::: info 参考答案

如 batch、学习率随规模调整；答「需查 Qwen3 三阶段报告中的具体曲线与参数名」。

:::

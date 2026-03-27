# 推理与部署

## ⭐⭐⭐ <Badge type="danger" text="核心必背" />

### FlashAttention 不减 FLOPs 为何加速？增量 softmax？
::: info 参考答案

瓶颈在 HBM 读写与 kernel launch；分块在 SRAM 上完成 softmax 与归一化，减少中间写回；在线 softmax 递推合并块。

:::

### RoPE vs 绝对位置？长文外推挑战？
::: info 参考答案

相对位置、常与线性插值/NTK 扩长；超训练长度仍可能注意力分散、需继续训练或缩放 base。

:::

### 8K→32K 与 KV 挑战？
::: info 参考答案

长文继续训练+位置扩展；KV 显存线性增，需 GQA、量化 KV、PagedAttention、Offload。

:::

### TTFT、输入/输出吞吐？
::: info 参考答案

TTFT=预填充延迟；输入吞吐≈tokens/s 预填；输出吞吐=解码 tokens/s。交互重 TTFT，批服务重总吞吐。

:::

### 预填充瓶颈？
::: info 参考答案

O(L²d) 算力与大矩阵乘；内存带宽与激活存取。

:::

### FlashAttention 思想？
::: info 参考答案

Tiling+SRAM、融合 kernel、重计算减激活驻留 HBM。

:::

### 解码 KV 管理挑战？
::: info 参考答案

变长序列碎片、显存浪费；低效分配限制并发 batch。

:::

### PagedAttention？
::: info 参考答案

KV 按页非连续存，类似虚拟内存，减碎片、提高 batching。

:::

### INT8 权重量化流程？
::: info 参考答案

选粒度（per-tensor/channel）→校准集统计 scale/zero_point→量化→可选混合精度 GEMM。

:::

### FA 与速度（同 1、7）？

### KV 与 PagedAttention（同 9、10）？

## ⭐⭐ <Badge type="warning" text="常见重点" />

### 无 KV cache 慢多少？
::: info 参考答案

解码从 O(t) 每步变 O(t²) 重复算；倍数随长度急剧升，常 **一个数量级以上**（依实现与长度）。

:::

### FA 对 FA-2/FlashDecoding 基础？
::: info 参考答案

分块 IO 最优、并行 warpgroup、解码阶段稀疏块优化。

:::

### GPTQ vs AWQ？
::: info 参考答案

GPTQ 逐层权重量化+二阶误差；AWQ 强调激活感知保护「显著」权重；粒度与校准集因实现而异，AWQ 常更少校准样本。

:::

### QAT vs PTQ？
::: info 参考答案

QAT 训练时模拟量化，梯度适应量化噪声；PTQ 快但分布漂移大时损更多。

:::

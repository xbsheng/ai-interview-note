# 大模型原理

## ⭐⭐⭐ <Badge type="danger" text="核心必背" />

### 什么是大型语言模型？
::: info 参考答案

设计目标：建模文本概率分布并支持多任务。能力：生成、理解、推理（随规模与训练变强）。代表：GPT、Llama、Qwen、Claude 等。

:::

### LLM 与 N-gram/HMM 区别？
::: info 参考答案

架构：深度 Transformer vs 浅层马尔可夫；训练：海量自监督 vs 计数/EM；上下文：长程依赖 vs 短窗；应用：通用生成/指令 vs 多为专用任务。

:::

### 迁移学习在 LLM 中的地位与优势？
::: info 参考答案

预训练学语言与世界知识，下游少样本/零样本可用；降标注成本、统一骨干、加速落地。

:::

### 编解码器区别？仅编码/仅解码是否有用？
::: info 参考答案

编码器双向；解码器因果自回归。Encoder-only（BERT）擅理解；Decoder-only（GPT）擅生成；均广泛应用。

:::

### GPT vs 原始 Transformer？
::: info 参考答案

GPT 堆叠 Decoder、因果 LM；原论文是 Encoder-Decoder Seq2Seq。

:::

### 仅编码/仅解码/编解码优缺点？
::: info 参考答案

Encoder 双向不便自回归生成；Decoder 生成自然、易 KV cache；Enc-Dec 适合翻译等对齐任务，结构更重。

:::

### 自注意力相对 RNN+注意力的进步？
::: info 参考答案

任意位置 O(1) 深度路径、训练全并行；RNN 顺序难并行、长程梯度弱。

:::

### 预训练+微调为何重要？
::: info 参考答案

预训练得语法/常识/推理基底；微调与 RLHF 教指令格式、安全与人类偏好。

:::

### Transformer 整体架构与并行？
::: info 参考答案

编码器：多头自注意力+FFN+残差+LN；解码器加交叉注意力与因果掩码。同层 token 并行算注意力，相对 RNN 时间步串行。

:::

### 自注意力与缩放点积公式？
::: info 参考答案

\(\mathrm{softmax}(QK^\top/\sqrt{d_k})V\)。QK^T 为相似度，除以 \(\sqrt{d_k}\) 防止点积过大使 softmax 饱和，V 为加权求值向量。

:::

### 多头注意力动机？
::: info 参考答案

多组 Q/K/V 子空间并行，捕捉不同类型关系后拼接再投影，表达力强于单一大头。

:::

### 为何需要位置编码？正弦余弦原理？
::: info 参考答案

自注意力对置换等变，需注入序信息。sin/cos 多频编码使模型组合出相对位置特征；无学习参数，外推有限。

:::

### 自回归 LM vs MLM？
::: info 参考答案

AR：下一 token 预测（GPT）；MLM：掩码恢复双向上下文（BERT）。

:::

### 嵌入层？
::: info 参考答案

token_id→向量查表，衔接离散符号与连续空间，常与位置嵌入相加。

:::

### LLM 如何克服 RNN 长依赖局限？
::: info 参考答案

任意两位置经一层直接连接，信息路径短；配合大规模预训练增强模式能力。

:::

### 如何防止看到未来 token？
::: info 参考答案

因果掩码（下三角 -∞）；仅解码器自注意力使用。

:::

### 注意力相关性、多头是否只看一词、为何除 √d_k？
::: info 参考答案

每头对所有位置 softmax 加权，非单点；√d_k 使 QK^T 方差稳定，避免 softmax 极端。

:::

### KV cache 为何不存 Q？
::: info 参考答案

解码每步只产生当前 query，历史 key/value 可复用；过去 query 不参与未来计算。

:::

### 残差连接？
::: info 参考答案

缓解梯度消失、使深层可训练，层学残差增量。

:::

### LayerNorm vs BatchNorm？RMSNorm？
::: info 参考答案

LN 按特征维归一化单样本，适配变长与小 batch；BN 依赖 batch 维，NLP 不稳。RMSNorm 去中心化只保留缩放，更省算，LLaMA 等常用。

:::

### FFN 是否必要？
::: info 参考答案

必要；注意力是线性混合，FFN 提供逐位置非线性与高维变换。

:::

### 输出层分布假设？
::: info 参考答案

词表上的 categorical / softmax 多项分布。

:::

### 多头、GQA/MQA vs 减头？优化哪阶段？
::: info 参考答案

MQA/GQA **共享 K/V** 减 KV cache 与访存，**主优化推理吞吐**；与「减少头数」不等价，后者同时减表示子空间。

:::

### Encoder-only / Decoder-only / Enc-Dec（同题 6）？
::: info 参考答案

理解/分类 vs 生成 vs 翻译摘要等序列到序列。

:::

### 自注意力长距离 vs RNN？
::: info 参考答案

O(1) 深度路径 vs O(T) 递归；代价注意力 O(T²d)。

:::

### MQA/GQA vs MHA？
::: info 参考答案

MHA 每头独立 KV；MQA 全头共享 KV；GQA 分组共享。降 **KV 显存与带宽**，提升推理 **tokens/s**。

:::

### 正弦 vs RoPE？
::: info 参考答案

正弦加在输入；RoPE 旋转 Q/K，显式相对位置，长上下文常配合 NTK、YaRN 等缩放。

:::

### 为何位置编码？无位置会怎样？
::: info 参考答案

丢失词序，置换不变性导致「咬死狗」与「狗咬死」不可分。

:::

### BERT 三种嵌入？
::: info 参考答案

Token + Segment + Position 求和；编码词元、句子 A/B、位置序。

:::

### 编码器 vs 解码器？
::: info 参考答案

编码器双向自注意力；解码器因果掩码+可选交叉注意力；理解 vs 生成。

:::

### Encoder-Decoder 与例子？
::: info 参考答案

T5、BART；翻译、摘要等需显式编码-解码对齐。

:::

### 解码器层关键区别？
::: info 参考答案

因果自注意力；交叉注意力连接编码器输出。

:::

### 残差与 LN？
::: info 参考答案

残差降梯度消失；LN 稳定层输入尺度。

:::

### 注意力掩码？
::: info 参考答案

因果/填充；-inf 屏蔽非法位置再 softmax。

:::

### 解码瓶颈与 KV cache？
::: info 参考答案

重复算历史 K/V；缓存使每步增量计算。

:::

### MQA/GQA（同 30）？

### MHA/MQA/GQA 权衡？
::: info 参考答案

质量 vs KV 与带宽；GQA 量产折中。

:::

### BN 与 NLP？
::: info 参考答案

BN 依赖 batch 维统计，变长序列与小 batch 不稳。

:::

### LayerNorm？
::: info 参考答案

逐样本跨特征归一，适合序列模型。

:::

### RMSNorm（同 20）？

## ⭐⭐ <Badge type="warning" text="常见重点" />

### 遗忘知识改注意力还是 FFN？
::: info 参考答案

大量工作表明**事实性知识**更关联 FFN/MLP；注意力偏路由与混合，面试答「文献多指向 MLP」即可。

:::

### 深度、宽度、头数、上下文与 10× 参数？
::: info 参考答案

深宽提容量，头数≈d/h 配比，上下文受 RoPE/工程限制。10× 常同时加深加宽并按 **Chinchilla** 配足数据算力；上下文单独扩需继续训练与位置扩展。

:::

### 推理瓶颈与 batch 平衡？
::: info 参考答案

**Decode** 常内存带宽 bound（读权重+KV）；**Prefill** 常算力 bound。具体 batch 依赖 GPU、精度、模型，需 profiling，面试强调「无通用常数」。

:::

### 多头 vs 单大头？
::: info 参考答案

同 11；多头=多子空间专家式分工。

:::

### 正弦余弦公式与性质？
::: info 参考答案

PE(pos,2i)=sin(pos/10000^(2i/d))，偶 cos；可表达相对位置线性变换；**超长外推**会弱。

:::

### 其他位置编码？
::: info 参考答案

可学习绝对、ALiBi、T5 相对偏置、RoPE 等。

:::

### 相对 vs 绝对优势？
::: info 参考答案

更好长度泛化、显式间距，利于外推与局部结构。

:::

### 三种嵌入如何生成？预训练与微调？
::: info 参考答案

可学习查表；微调通常保留嵌入或仅加任务头；RoBERTa 简化 NSP 与 segment 使用。

:::

### 句子对输入与 Segment？
::: info 参考答案

[CLS] A [SEP] B [SEP]；Segment 区分句对，使模型知边界。

:::

### BERT/GPT/T5 差异？
::: info 参考答案

双向表示 vs 自回归 vs text-to-text 统一框架。

:::

### Softmax、替代与温度？
::: info 参考答案

凸组合权重、可微；温度高调更均匀、低更尖锐。

:::

### 线性注意力？
::: info 参考答案

核技巧改写避免显式 T×T 矩阵；O(nd²) 级；如 Performer。

:::

### 线性注意力代价？
::: info 参考答案

近似损失细粒度全局对齐能力。

:::

### 多头动机（同 11）？

### 归一化层作用？
::: info 参考答案

稳定优化、平滑损失地貌、助泛化。

:::

### Dropout？
::: info 参考答案

随机丢弃共适应神经元，正则化。

:::

### 推理缩放？
::: info 参考答案

匹配训练期望；inverted dropout 训练时已除 (1-p)。

:::

### LLM 中 Dropout 策略？
::: info 参考答案

预训练常弱；微调可略增；依模型卡与论文。

:::

### 初始化重要性？
::: info 参考答案

梯度消失/爆炸、不收敛。

:::

### Xavier / Kaiming？
::: info 参考答案

控制前向方差；分别匹配 tanh/sigmoid 与 ReLU。

:::

### Transformer 初始化？
::: info 参考答案

小方差高斯或 Xavier 类；残差结构常配合缩放因子。

:::

## ⭐ <Badge type="info" text="拓展了解" />

### RoBERTa/ALBERT/DeBERTa？
::: info 参考答案

RoBERTa 动态掩码、去 NSP；ALBERT 嵌入分解与层共享；DeBERTa 解耦内容与相对位置。

:::

### 方差偏移与倒置 Dropout？
::: info 参考答案

丢弃改变方差；实现上训练阶段缩放使推理无需改。

:::

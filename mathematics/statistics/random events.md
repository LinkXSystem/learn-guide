# 概率论 | 随机事件和概率

## 事件的关系与运算

- 子事件：若 A 发生，则 B 发生

  公式如下：

  $$
  \begin{aligned}
      A \subset B
  \end{aligned}
  $$

- 相等事件

  公式如下：

  $$
  \begin{aligned}
      A = B，即 A \subset B，且 B \subset A
  \end{aligned}
  $$

- 和事件：A 与 B 中至少有一个发生

  公式如下：

  $$
  \begin{aligned}
      A \cup B，即 A + B
  \end{aligned}
  $$

- 差事件：A 发生但 B 不发生

  公式如下：

  $$
  \begin{aligned}
      A - B
  \end{aligned}
  $$

- 积事件：A 与 B 同时发生

  公式如下：

  $$
  \begin{aligned}
      A \cap B
  \end{aligned}
  $$

- 互斥事件

  公式如下：

  $$
  \begin{aligned}
      A \cap B = \oslash
  \end{aligned}
  $$

- 互斥事件

  公式如下：

  $$
  \begin{aligned}
      A \cap B = \oslash, A \cup B = \Omega, A = \overline{B}, B = \overline{A}
  \end{aligned}
  $$

## 运算律

- 交换律

  公式如下：

  $$
  \begin{aligned}
      A \cup B = B \cup A, A \cap B = B \cap A
  \end{aligned}
  $$

- 结合律

  公式如下：

  $$
  \begin{aligned}
      (A \cup B) \cup C = A \cup (B \cup C), (A \cap B) \cap C = A \cap (B \cap C)
  \end{aligned}
  $$

- 分配律

  公式如下：

  $$
  \begin{aligned}
      (A \cup B) \cap C = (A \cap C) \cup (A \cap C)
  \end{aligned}
  $$

## 摩根定律

公式如下：

$$
\begin{aligned}
    \overline{A \cup B} = \overline{A} \cap \overline{B}
\end{aligned}
$$

$$
\begin{aligned}
    \overline{A \cap B} = \overline{A} \cup \overline{B}
\end{aligned}
$$

## 完全事件组

定义：$A_{1}A_{2}A_{3}...A_{n}$ 两两相斥，且和事件为必然事件，则

$$
\begin{aligned}
    A_{i} \cap A_{j} = \oslash, i \not ={j}, \cup_{i=1}^{n} A = \Omega
\end{aligned}
$$

## 概率的基本概念

- 概率：事件发生的可能性大小的度量，其严格定义如下：

  概率 $P(g)$ 为定义在事件集合上的满足下面 3 个条件的函数：

  - 对任何事件 A，$P(A) \geqslant 0$
  - 对必然事件 $\Omega$，$P(\Omega) = 1$
  - 对 $A_{1}A_{2}A_{3}...A_{n}$ , 需要符合完全事件组， 即 $\sum_{i=1}^\infty P(A) = \Omega$

- 概率的基本性质

  - $P(\overline{A})$ = 1 - $P(A)$
  - $P(A - B) = P(A) - P(AB)$
  - $P(A \cup B) = P(A) + P(B) - P(AB)$
  - 完全事件组, 即 $\sum_{i=1}^\infty P(A) = \Omega$

- 古典型概率

  定义：实验的所有结果只有有限个， 且每个结果发生的可能性相同。

  公式如下：

  $$
  P(A) = \frac{事件 A 发生的基本事件总数}{基本事件总数}\qquad
  $$

- 几何型概率

  定义：样本空间 $\Omega$ 为欧氏空间中的一个区域， 且每个样本点的出现具有等可能性。

  公式如下：

  $$
  P(A) = \frac{A 的度量（长度、面积、体积）}{\Omega 的度量（长度、面积、体积）}\qquad
  $$

## 概率的基本公式

- 条件概率：表示 A 发生的条件下，B 发生的概率

  公式如下：

  $$
    P(B|A) = \frac{P(AB)}{P(A)}\qquad
  $$

- 全概率公式

  公式如下：

  $$
    B_{i}B_{j} = \oslash, i \not ={j}, \cup_{i=1}^{n}B_{i} = \Omega, P(A) = \sum_{i=1}^nP(A|B_{i})P(B_{i})
  $$

- [贝叶斯定理](https://zh.wikipedia.org/wiki/%E8%B4%9D%E5%8F%B6%E6%96%AF%E5%AE%9A%E7%90%86)

  公式如下：

  $$
    P(B_{j}|A) = \frac{P(A|B_{j})P({B_{j}})}{\sum_{i=1}^{n}P(A|B_{i})P(B_{i})}, j = 1,2,...,n
  $$

- 乘法公式

  公式如下：

  $$
    P(A_{1}A_{2}) = P(A_{1})P(A_{2}|A_{1}),
    P(A_{2}A_{1}) = P(A_{2})P(A_{1}|A_{2})
  $$

  $$
    P(A_{1}A_{2}...A_{n}) = P(A_{1})P(A_{2}|A_{1})P(A_{3}|A_{1}A_{2})...P(A_{n}|A_{1}A_{2}...A_{n-1})
  $$

## 事件的独立性

- A 与 B 相互独立，则

  $$
    P(AB) = P(A)(B)
  $$

- A，B，C 两两独立，则

  $$
    P(AB) = P(A)P(B), P(BC) = P(B)P(C), P(AC) = P(A)P(C)
  $$

- A，B，C 相互独立，则
  $$
    P(AB) = P(A)P(B), P(BC) = P(B)P(C), P(AC) = P(A)P(C), P(ABC) = P(A)P(B)P(C)
  $$

## 独立重复试验

定义： 将某试验独立重复 n 次，若每次实验中事件 A 发生的概率为 p，则 n 次试验中 A 发生 k 次的概率为

$$
P(X=k) = C_{n}^kp^k(1-p)^{n-k}
$$

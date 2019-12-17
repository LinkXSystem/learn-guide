# Linear Transformations And Matrix Algebra

## [Matrix Transformations](http://textbooks.math.gatech.edu/ila/matrix-transformations.html)

> 关键词：transformation / function, domain, codomain, range, identity transformation, matrix transformation

- transformation

  > Definition

  A transformation from $R^{n}$ to $R^{m}$ is a rule $T$ that assigns to each vector x in $R^{n}$ a vector $T(x)$ in $R^{m}$.

  - $R^{m}$ is called the codomain of $T$.
  - $R^{n}$ is called the domain of $T$.
  - For $x$ in $R^{n}$, the vector $T(x)$ in $R^{m}$ is the image of $x$ under T.
  - The set of all images $\{T(x)|x in R^{n}\}$ is the range of T.

  The notation T: $R^{n} \to R^{m}$ means "T is a transformation from $R^{n}$ to $R^{m}$".

- identity transformation

  > Definition

  The identity transformation $Id_{R^{n}}: R^{n} \to R^{n}$ is the transformation defined by the rule

  $$
  Id_{R^{n}}(x) = x , for all x in R^{n}
  $$

- matrix transformation

  > Definition

  Let A be an $m \times n$ matrix. The matrix transformation associated to $A$ is the transformation

  $$
  T: R^{n} \to R^{m} defined by T(x) = Ax
  $$

  This is the transformation that takes a vector $x$ in $R^{n}$ to the vector $Ax$ in $R^{m}$.

## [One-to-one and Onto Transformations](http://textbooks.math.gatech.edu/ila/one-to-one-onto.html)

> 关键词：one-to-one, onto

- One-to-one Transformations

  > Definition

  A transformation $T:R^{n} \to R^{m}$ is one-to-one if, for every vector $b$ in $R^{m}$,the equation $T(x) = b$ has at most one solution x in $R^{n}$.

- One-to-one matrix transformations

  > Theorem

  Let A be an $m \times n$ matrix, and let $T(x)=Ax$ be the associated matrix transformation. The following statements are equivalent:

  1. $T$ is one-to-one.
  2. For every $b$ in $R^{m}$, the equation $T(x) = b$ has at most one solution.
  3. For every $b$ in $R^{m}$, the equation $Ax = b$ has a unique solution or is inconsistent.
  4. $Ax = 0$ has only the trivial solution.
  5. The columns of $A$ are linearly independent.
  6. $A$ has a pivot in every column.
  7. The range of $T$ has dimension $n$.

- Onto transformations

  > Definition

  A transformation $T: R^{n} \to R^{m}$ is onto if, for every vector $b$ in $R^{m}$, the equation $T(x)=b$ has at least one solution $x$ in $R^{n}$.

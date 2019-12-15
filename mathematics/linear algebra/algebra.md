# Systems of Linear Equations: Algebra

## [Systems of Linear Equations](http://textbooks.math.gatech.edu/ila/systems-of-eqns.html)

> 关键词：consistent, inconsistent, solution set

- linear

  > Definition

  An equation in the unknowns $x, y, z, ...$ is called `linear` if both sides of the equation are a sum of (constant) multiples of $x, y, z, ...$ plus an optional constant.

  > Examples

  $$
  3x + 4y = 2z
  \\
  -x - z = 100
  $$

- solution set

  > Definition

  - A solution of a system of equations is a list of numbers $x, y, z, ...$ that make all of the equations true simultaneously.
  - The solution set of a system of equations is the collection of all solutions.
  - Solving the system means finding all solutions with formulas involving some number of parameters.

- consistent / inconsistent

  > Definition

  A system of equations is called inconsistent if it has no solutions. It is called consistent otherwise.

## [Row Reduction](http://textbooks.math.gatech.edu/ila/row-reduction.html)

> 关键词：row operation, row equivalence, matrix, augmented matrix, pivot, (reduced) row echelon form

- row equivalent

  > Definition

  Two matrices are called row equivalent if one can be obtained from the other by doing some number of row operations.

- row echelon form

  > Definition

  - All zero rows are at the bottom.
  - The first nonzero entry of a row is to the right of the first nonzero entry of the row above.
  - Below the first nonzero entry of a row, all entries are zero.

- pivot (主元变量)

  > Definition

  A pivot is the first nonzero entry of a row of a matrix in row echelon form.

  > Examples

  $$
  \left\{
  \begin{matrix}
    1 & 0 & * & 0 & * \\
    0 & 1 & * & 0 & * \\
    1 & 0 & * & 1 & * \\
    0 & 0 & 0 & 0 & *
  \end{matrix}
  \right\}
  \\
  \tag{* = any number, 1 = pivot}
  $$

## [Parametric Form](http://textbooks.math.gatech.edu/ila/parametric-form.html)

> 关键词：free variable

- free variable

  > Definition

  Consider a consistent system of equations in the variables $x_{1}, x_{2}, ..., x_{n}$.
  Let A be a row echelon form of the augmented matrix for this system.

  We say that $x_{i}$ is a free variable if its corresponding column in A is not a pivot column.

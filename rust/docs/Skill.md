# 常用技巧

## 变量

- 查询变量的字节:

  ```rust
  let x = 10;
  println!("size of `x` in bytes: {}", std::mem::size_of_val(&x));
  ```

## 流程控制

- 指定中断的 Loop ：

  ```rust
  fn main() {
      'outer': loop {
          println!("Outer Inline !");

          'inline': loop {
              break 'outer';
          }

          println!("Outer Errors !");
      }
  }
  ```

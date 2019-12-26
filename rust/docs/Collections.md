# 常见集合

## vector

Vector 允许我们在一个单独的数据结构中储存多于一个的值，它在内存中彼此相邻地排列所有的值。vector 只能储存相同类型的值。

- 新建

  样例如下：

  ```rust
  // 新建空的 vector
  let v: Vec<i32> = Vec::new();
  // 新建并初始化
  let v = vec![1, 2, 3];
  ```

- 更新

  样例如下：

  ```rust
  let mut v = Vec::new();

  v.push('x');
  v.push('y');
  v.push('z');
  ```

- 读取

  样例如下：

  ```rust
  let v = vec![1, 2, 3, 4, 5];

  let mut x: &i32 = &v[1];
  // 或者
  x = v.get(1);
  ```

- 遍历

  样例如下：

  ```rust
  let v = vec![100, 32, 57];

  for i in &v {
    println!("{}", i);
  }

  // 遍历的同时，更新数值

  let mut v = vec![100, 32, 57];
  for i in &mut v {
    *i += 50;
  }
  ```

## HashMap

HashMap<K, V> 类型储存了一个键类型 K 对应一个值类型 V 的映射。它通过一个 哈希函数（hashing function）来实现映射，决定如何将键和值放入内存中。

- 新建

  样例如下：

  ```rust
  use std::collections::HashMap;

  let mut scores = HashMap::new();
  ```

- 插入/更新

  样例如下：

  ```rust
  use std::collections::HashMap;

  let field_name = String::from("Favorite color");
  let field_value = String::from("Blue");

  let mut map = HashMap::new();
  map.insert(field_name, field_value);

  // 只有键，没有值的情况
  map.entry(String::from("White")).or_insert(50);
  ```

- 读取

  样例如下：

  ```rust
  use std::collections::HashMap;

  let mut scores = HashMap::new();

  scores.insert(String::from("Blue"), 10);

  let team_name = String::from("Blue");
  let score = scores.get(&team_name);
  ```

- 遍历

  样例如下：

  ```rust
  use std::collections::HashMap;

  let mut scores = HashMap::new();
  
  scores.insert(String::from("Yellow"), 50);
  scores.insert(String::from("Blue"), 10);

  for (key, value) in &scores {
    println!("{}: {}", key, value);
  }
  ```
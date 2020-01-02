# 宏（macro_rules）

## DSL（领域专用语言）

DSL 是 Rust 的宏中集成的微型 “语言”。宏系统会把它（自己定义的一些语法）转换 成普通的 Rust 语法树，它只不过看起来像是另一种语言而已。这就允许你为一些特定功能创造一套简洁直观的语法，以下为定义一个简洁的 API 的样例：

```rust
macro_rules! calculate {
    // 注意，这里获取了整个运算表达式
    (eval $e:expr) => {{
        {
            let val: usize = $e; // 强制类型为整型
            println!("{} = {}", stringify!{$e}, val);
        }
    }};
}

fn main() {
    calculate! {
        eval 1 + 2 // 看到了吧，`eval` 可并不是 Rust 的关键字！
    }

    calculate! {
        eval (1 + 2) * (3 / 4)
    }
}
```

## 可变参数接口

可变参数接口可以接受任意数目的参数，即参数是动态的，而理解实现的关键便是`递归`实现, 以下样例为例：

```rust
macro_rules! calculate {
    // 单个 `eval` 的模式
    (eval $e:expr) => {{
        {
            let val: usize = $e; // Force types to be integers
            println!("{} = {}", stringify!{$e}, val);
        }
    }};

    // 递归地拆解多重的 `eval`
    (eval $e:expr, $(eval $es:expr),+) => {{
        // 注意上面的 + 符号
        // 顺序递归
        calculate! { eval $e }
        calculate! { $(eval $es),+ }
    }};
}

fn main() {
    calculate! { // 妈妈快看，可变参数的 `calculate!`！
        eval 1 + 2,
        eval 3 + 4,
        eval (2 * 3) + 1
    }
}
```
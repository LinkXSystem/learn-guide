# Block 的配置

> [参考文档](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)

## 属性说明

block 的基础属性

```json
{
  "type": "string_length",
  "message0": "length of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 160,
  "tooltip": "Returns number of letters in the provided text."
}
```

- type：定义块的名称

- message：控制块的显示的文本，与 args 有所关联, 如

> 注意，message 和 args 是可以多个的，但是他们必须一一对应，即 message0 对应 args0

```json
{
  // %1 代表 args0[0] 这个变量
  "message0": "length of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      // check 用于检查拼接的 block 的 output 是否是同一类型
      "check": "String"
    }
  ]
}
```

- args：用于定义 block 的参数，可以认为类似函数一样的参数：

  - 样例：

  ```json
  {
    // 对应的形状：https://developers.google.com/blockly/images/variables-set.png
    // 由于参数位置不一样作用是不一样的
    "message0": "set %1 to %2",
    "args0": [
      {
        // 注意 args0 中的 type 是不一样的，基本上是固定类型的
        "type": "field_variable",
        "name": "VAR",
        "variable": "jump",
        "variableTypes": [""]
      },
      {
        "type": "input_value",
        "name": "value",
        "check": "String"
      }
    ]
  }
  ```

  ```json
  {
    // 对应的形状：https://developers.google.com/blockly/images/variables-put.png
    "message0": "put %2 to %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "item",
        "variableTypes": [""]
      },
      {
        "type": "input_value",
        "name": "value",
        "check": "Number"
      }
    ]
  }
  ```

  - type 对应的 fiel 可选类型：

    - field_input
    - field_dropdown
    - field_checkbox
    - field_colour
    - field_number
    - field_angle
    - field_variable
    - field_date
    - field_label
    - field_image.

  - type 对应的允许输入类型，可以配合 check，进行对应的检查：

    - input_value
    - input_statement：输入语句块
    - input_dummy

- nextStatement，previousStatement：用来定制 Statement Connections 的 Block，示例代码：

```json
{
  // 样图：https://developers.google.com/blockly/images/set-next-statement.png
  // 凸槽
  ...,
  "nextStatement": null,
}
```

```json
{
  // 样图：https://developers.google.com/blockly/images/set-next-statement.png
  // 凹槽
  ...,
  "previousStatement": null,
}
```

```json
{
  ...,
  "previousStatement": null,
  "nextStatement": null,
}
```

- colour：控制 block 的颜色

- tooltip：block 的说明信息

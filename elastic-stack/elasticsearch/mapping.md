> Mapping 是描述 ElasticSearch 的 document 的定义

> Mapping 的数据类型

- 核心类型 (core datatype)

  - 文本类型 (string) : text,keyword
  - 数字类型 (numeric) : long, integer, short, byte, double, float, half_float, scaled_float
  - 日期类型 (date) : date
  - 布尔类型 (boolean) : boolean
  - 进制类型 (binary) : binary
  - 枚举类型 (range) : integer_range, float_range, long_range, double_range, date_range

- 复杂类型 (complex datatype)

  - 数组类型 (array) : array support does not require a dedicated type
  - 对象类型 (object) : object for single JSON objects
  - Nested 类型 (Nested) : nested for arrays of JSON objects

- Geo 类型 (geo datatype)

  - 暂定

- 指定类型 (specialised datattype)

  - 暂定

> Mapping 的 Restful API 的操作

- 创建 (create)

  ```
  PUT mapping
  {
    "mappings": {
      "doc": {
        "properties": {
          "author": {
            type: "text"
          },
          "title": {
            "type": "text"
          },
          "content": {
            "type": "text"
          }
          "created": {
            type: "date"
          }
        }
      }
    }
  }
  ```

- 删除 (delete)

  ```
  DELETE mapping
  ```

- 更新 (update)

  ```

  ```

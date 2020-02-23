# DOM 启蒙

## 节点概览

- 查询浏览器的节点(Node) 类型

```js
for (let key in Node) {
  console.log(`${key}: ${Node[key]}`);
}
```

- 识别节点(Node) 类型和名称

  ```js
  const node = document.body;

  console.log("Type: ", node.nodeType);
  console.log("Name: ", node.nodeName);
  ```

- 获取节点中的值

  ```js
  const node = document.body;

  console.log("Type: ", node.nodeValue);
  ```

- DOM 的节点操作

  通常我们可以使用的 innerHTML 方法来完成此操作，但是如果我们需要控制插入的顺序的话，我们则可以通过
  insertAdjacentElement 方法来实现，需要注意的是，方法只适合继承自 Element 的节点。

  同样的插入节点的方法，我们可以通过 appendChild / insertBefore 方法来完成操作。

  而删除和替换节点则是通过 removeChild / replaceChild 方法来完成对应的操作。那么克隆节点则是 cloneNode 方法。

  判断节点是否等同，我们可以通过 isEqualNode 方法来完成。

- 节点集合 (NodeList/HTMLCollection)

  节点集合是一种类数组结构，它们符合以下特征：

  - 集合可以或实时或静态．这意味着在集合中包含的节点们或是实时文档树的某一部分、或是某一实文档的快照
  - 缺省情况下．集合中的节点以所在树中的顺序排序。意味粉这个顺序与从树到分支的线性路径吻合
  - 集合有 length 属性，体现列表中元素的个数

  我们通常可以通过 document.querySelector 方法来获得节点集合 (NodeList/HTMLCollection) ，而如果我们
  需要像数组一样支持迭代器遍历的话，我们可以通过下面的方式来完成转换：

  ```js
  Array.prototype.slice.call(document.querySelectorAll('div));
  ```

- 验证节点的位置

  用 contains 方法我们只能确定该节点是否存在于某一节点中，而如果我们需要确定该节点与周围节点的关系的话，我们则可以使用 compareDocumentPosition 方法来确定，该方法的返回值有如下意思：

  > 注：可见 (MDN 文档)[https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition]

  | 常量名                                    | 十进制值 | 含义                   |
  | ----------------------------------------- | -------- | ---------------------- |
  | DOCUMENT_POSITION_DISCONNECTED            | 1        | 不在同一文档中         |
  | DOCUMENT_POSITION_PRECEDING               | 2        | otherNode 在 node 之前 |
  | DOCUMENT_POSITION_FOLLOWING               | 4        | otherNode 在 node 之后 |
  | DOCUMENT_POSITION_CONTAINS                | 8        | otherNode 包含 node    |
  | DOCUMENT_POSITION_CONTAINED_BY            | 16       | otherNode 被 node 包含 |
  | DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | 32       | 待定                   |

## 文档节点

待定.....

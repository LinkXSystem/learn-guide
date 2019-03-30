# blockly 学习（简版）

## 官方文档

文档地址：https://developers.google.com/blockly/guides/overview

## 配置 blockly 环境

由于访问速度较慢和源码阅读效果，建议 clone 到本地，使用 vscode 来学习，以下相关步骤：

```shell
git clone https://github.com/google/blockly.git

cd blockly

npm install -g http-server

http-server
```

## 定义工作空间

- 引入 blockly 相关的 javascript 文件:

```html
<!-- 运行文件 -->
<script src="blockly_compressed.js"></script>
<script src="blocks_compressed.js"></script>
<!-- 语言文件 -->
<script src="msg/js/en.js"></script>
```

- 定义工作空间挂载的 dom 节点，类似 canvas 的实现一样：

```html
<div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
```

- 定义工具栏

```xml
<!-- 相关定义：https://developers.google.com/blockly/guides/configure/web/toolbox -->
<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="controls_repeat_ext"></block>
  <block type="logic_compare"></block>
  <block type="math_number"></block>
  <block type="math_arithmetic"></block>
  <block type="text"></block>
  <block type="text_print"></block>
</xml>
```

- 实际挂载工作空间

```html
<script>
  var workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox")
  });
</script>
```

## 工作空间调整

基于 window 的 resize 事件实现，和 Blockly.svgResize 实现，参考代码：

```html
<script>
  const blocklyArea = document.getElementById("blocklyArea");
  const blocklyDiv = document.getElementById("blocklyDiv");

  const workspace = Blockly.inject(blocklyDiv, {
    toolbox: document.getElementById("toolbox")
  });

  const onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    const element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + "px";
    blocklyDiv.style.top = y + "px";
    blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
    blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
    Blockly.svgResize(workspace);
  };

  window.addEventListener("resize", onresize, false);
  onresize();
  Blockly.svgResize(workspace);
</script>
```

## 自定义块 (block)

详细参考文档：https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

- 基于 json 和 js 结合使用

```js
// json 用于定义块的功能
const block = {
  // 块的声明
  type: "string_length",
  // 显示的信息
  message0: "length of %1",
  // 输入的参数
  args0: [
    {
      type: "input_value",
      name: "VALUE",
      check: "String"
    }
  ],
  // 输出
  output: "Number",
  // 颜色
  colour: 160,
  // 提示块的作用
  tooltip: "Returns number of letters in the provided text.",
  // 类型说明文档
  helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp"
};

Blockly.Blocks["string_length"] = {
  init: function() {
    this.jsonInit(block);
  }
};
```

- 使用 js 实现

```js
Blockly.Blocks["string_length"] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  }
};
```

### 设置栅栏

```js
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  // 配置栅栏
  grid: {
    // 栅栏的间隔，默认为 0
    spacing: 20,
    // ×点的线长度，默认为 0
    length: 3,
    // 设置栅栏的颜色
    colour: "#ccc",
    // 是否应用 block 对齐，默认为 false
    snap: true
  },
  trashcan: true
});
```

### 控制工作区间缩放

- 设置缩放的参数

```js
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  zoom: {
    // 设置缩放，默认为 false
    controls: true,
    // 设置滚轮缩放，默认为 false
    wheel: true,
    // 设置初始大小，默认为 1.0
    startScale: 1.0,
    // 设置缩放最大值，默认为 3
    maxScale: 3,
    // 设置缩放最小值，默认为 0.3
    minScale: 0.3,
    // 设置单次缩放的变化大小，默认为 1.2
    scaleSpeed: 1.2
  },
  trashcan: true
});
```

### 主题

- 定义样式

```js
const categoryStyles = {
  // toolbar 的样式
  list_category: {
    // 颜色
    colours: "#4a148c"
  },
  logic_category: {
    colour: "#01579b"
  }
};

const blockStyles = {
  // block 的样式
  list_blocks: {
    // 主色
    colourPrimary: "#4a148c",
    colourSecondary: "#AD7BE9",
    colourTertiary: "#CDB6E9"
  },
  logic_blocks: {
    colourPrimary: "#01579b",
    colourSecondary: "#64C7FF",
    colourTertiary: "#C5EAFF"
  }
};

const theme = Blockly.Theme(blockStyles, categoryStyles);

const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  theme
});
```

- 使用样式

```xml
<category name="Logic" style="logic_category">
</category>
```

### 监听事件

- 绑定监听事件

```js
function onFirstComment(event) {
  if (
    event.type == Blockly.Events.CHANGE &&
    event.element == "comment" &&
    !event.oldValue &&
    event.newValue
  ) {
    // 移除监听事件
    workspace.removeChangeListener(onFirstComment);
  }
}

// 绑定监听事件
workspace.addChangeListener(onFirstComment);
```

- 事件类型
  - BLOCK_CREATE：block 被拽入工作空间时触发
  - BLOCK_DELETE：block 删除触发
  - BLOCK_CHANGE：block 变化的时候，触发
  - BLOCK_MOVE: block 移动变化的时候
  - VAR_CREATE：变量创建时，触发
  - VAR_DELETE：变量删除时，触发
  - VAR_RENAME：变量重命名时，触发
  - UI：UI事件，工作区间在以下情况均会触发：'selected', 'category', 'click', 'commentOpen', 'mutatorOpen', 'warningOpen', 'theme'

### 代码导出

- 引入代码生成器，用于解析 block 中的代码生成

```html
<!-- 核心代码 -->
<script src="blockly_compressed.js"></script>
<!-- 代码解析、生成 -->
<script src="javascript_compressed.js"></script>
```

- 生成代码

```js
function myUpdateFunction(event) {
  // 转化生成代码
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById("textarea").value = code;
}
// 监听工作区间的事件
workspace.addChangeListener(myUpdateFunction);
```

- 定义 block 的代码生成

```js
// 参考链接：https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

// javascript 版
Blockly.JavaScript['text_indexOf'] = function(block) {
  // Search the text for a substring.
  // 获取运行操作符
  const operator = block.getFieldValue('END') == 'FIRST' ? 'indexOf' : 'lastIndexOf';
  // 子字符串
  const subString = Blockly.JavaScript.valueToCode(block, 'FIND',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  // 主题文本
  const text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  // 生成代码，text.indexOf(subString)
  const code = text + '.' + operator + '(' + subString + ')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

// python 版

Blockly.Python['text_indexOf'] = function(block) {
  ...
}
```

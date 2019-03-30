# Block 的制作

## 工具/文档

- 使用的工具 [Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

- Block 的[属性文档](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)

## 试验场

用于快速调试 block 的定制和配置，代码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Blockly Playground</title>
    <!-- 注意自己替换对应的 blockly 路径 -->
    <script src="../../blockly_compressed.js"></script>
    <script src="../../blocks_compressed.js"></script>
    <script src="../../msg/js/en.js"></script>
    <style>
      html,
      body {
        padding: 0px;
        margin: 0px;
        overflow: hidden;
        box-sizing: border-box;
      }
      body {
        background-color: #fff;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="workspace"></div>

    <xml id="toolbox" style="display: none"> </xml>

    <script>
      function blockFactory() {
        const toolbox = document.querySelector("#toolbox");

        return function createBlock(block) {
          if (!block.type) {
            throw new Error("The block must define type field !");
          }

          const element = document.createElement("block");
          element.setAttribute("type", block.type);
          toolbox.appendChild(element);

          Blockly.Blocks[block.type] = {
            init: function() {
              this.jsonInit(block);
            }
          };
        };
      }

      function registerBlock(blocks) {
        const create = blockFactory();

        blocks.forEach(block => create(block));
      }

      // 配置实验的 block
      const blocks = [
        {
          type: "string_length",
          message0: "length of %1",
          args0: [
            {
              type: "input_value",
              name: "VALUE",
              check: "String"
            }
          ],
          output: "Number",
          colour: 160,
          tooltip: "Returns number of letters in the provided text."
        }
      ];

      function initialWorkSpace() {
        const sence = document.querySelector("#workspace");
        sence.style.width = `${window.innerWidth}px`;
        sence.style.height = `${window.innerHeight}px`;

        // 是否应全局
        registerBlock(blocks);

        // block 需在工作区间生成前注册
        window.workspace = Blockly.inject("workspace", {
          media: "../../media/",
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
          zoom: {
            // 设置缩放，默认为 false
            controls: true,
            // 设置滚轮缩放，默认为 false
            wheel: false,
            // 设置初始大小，默认为 1.0
            startScale: 1.0,
            // 设置缩放最大值，默认为 3
            maxScale: 3,
            // 设置缩放最小值，默认为 0.3
            minScale: 0.3,
            // 设置单次缩放的变化大小，默认为 1.2
            scaleSpeed: 0.12
          },
          trashcan: true
        });
      }

      initialWorkSpace();
    </script>
  </body>
</html>
```

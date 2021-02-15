# 通讯协议格式设计（Node.js）

## 代码实现

在配置代码前，我们需要优先配置一些环境：

```shell
yarn add crc --dev
```

基本实现的代码如下：

```js
/**
 * @description 协议的描述参照下图：
 *
 * 0     1     2           4           6           8          10           12          14         16
 * +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
 * |ver  | type| cmdcode   |ver2 |   requestId           |codec|        timeout        |  classLen |
 * +-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
 * |headerLen  |      contentLen       |                             ... ...                       |
 * +-----------+-----------+-----------+                                                           +
 * |                                            content                                            |
 * +                                                                                               +
 * |                               ... ...                                                         |
 * +-----------------------------------------------------------------------------------------------+
 */

/**
 * @description 注意问题：
 *
 * - 由于 TCP/IP 协议 RFC1700 里规定使用「大端」字节序作为网络字节序，因此 Int8 之外的类型都选择大端即 BE
 *
 */

const PackageInfoSize = 128;
const CRCSize = 2;

const VERSION = 1;

class MessageProtocol {
  static encode(content, encoding = "utf8") {
    const { length } = content;
    let offset = 0;
    let buffer = Buffer.alloc(PackageInfoSize + length);

    buffer.writeUInt8(VERSION);
    offset += 1;
    buffer.writeUInt16BE(length, offset);
    offset += 2;
    buffer.write(content, PackageInfoSize, encoding);

    return buffer;
  }

  static decode(buffer, encoding = "utf8") {
    if (!(buffer instanceof Buffer)) {
      return [];
    }

    let offset = 0;

    const version = buffer.readInt8(offset);
    offset += 1;
    const lengthOfContent = buffer.readUInt16BE(offset);
    offset += 2;
    const content = buffer.slice(PackageInfoSize);

    return [version, lengthOfContent, content.toString(encoding)];
  }
}

(function() {
  const buffers = MessageProtocol.encode("Hello, LinkSystem !");
  console.warn(buffers);
  const message = MessageProtocol.decode(buffers);
  console.warn(message);
})();
```

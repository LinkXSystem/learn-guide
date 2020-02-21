# React 错误捕获

## 说明

组件内部错误的 javascript 运行错误会导致组件崩溃，从而诱发页面渲染错误，通常我们可以用 try/catch 来捕获异常。但是我不建议通过这种方式来完成。因此我们需要引入 componentDidCatch 方法将错误控制在组件内部，而不至于扩散到全局。

## 样例

```js
import React, { Component } form react;

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    }
  }

  componentDidCatch(error, info) {
    // 打印错误信息的日志栈
    logComponentStackToMyService(info.componentStack);
    this.setState({
      isError: true
    })
  }

  render() {
    const { isError } = this.state;
    if (isError) return (
      <div>The Error is Component </div>
    )

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
```

## 解析

ErrorBoundary 组件是一个用于捕获错误的组件，重写了 componentDidCatch 方法使其可以控制组件的错误范围，保证错误只在受控范围内引发异常。通过控制 isError 确保在错误时能确保给用户一个友好提示，或者合适的回退方法。

## 规避

错误边界无法捕获以下错误：

- 事件处理
- 异步代码 （例如 setTimeout 或 requestAnimationFrame 回调函数）
- 服务端渲染
- 错误边界自身抛出来的错误 （而不是其子组件）

以上代码块，我们需要使用 try/catch 来捕获，建议在该错误捕获实现更新尝试。

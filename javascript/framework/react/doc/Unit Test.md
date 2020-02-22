# React 测试

## 前言

关于 React 的测试，一方面是功能性的代码测试， 一方面是以 UI 组件为核心的行为测试。

## 框架

目前，对于 React 的测试的话，应该从`前言`所述，应该从对应的方面入手，那么我们可以选择以下的框架：

### [Jest](https://jestjs.io/)

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity .

正如，上面援引官网的对于 Jest 自己的描述，简单，令人愉快。

Jest 是容易上手和学习， 可以便于我们在完成相应的功能性函数或是工具类的时候，快速通过编写对应的测试用例来集成对应的单元测试。

而 Jest 还拥有以下优点:

- zero config ：零配置。是的， Jest 的测试运行无需额外配置，开箱即用，只有你编写好对应的单元测试。

- snapshots ：快照。正如它对应的字面意思，此功能能够为你的测试提供对应的测试缓存，以便于提高对应的测试速度。

- isolated ：隔离性。确保测试之间都是相互独立的，只针对对应的功能进行对应的测试。

- great api ：优雅的 API (^\_^) 。From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good，此是官网的原文。对于 API，只能千人千面。

是的， Jest 的这些优点是非常适合用于 `功能性的单元测试`， 我们可以通过此系列文章来学习相关的使用：[Jest 测试]() 。

### [Enzyme](https://airbnb.io/enzyme/)

> Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

嗯，最好的 React UI 测试框架居然不是 Facebook 出品，而是 Airbnb 。当然，有点好奇，但是其实不影响我们对 Enzyme 学习，也许这是开源的力量吧。

> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

由 Enzyme's API 概述的此句中，我们可以看出 Enzyme 使用与 JQuery 类似的 API 来实现对页面的元素的获取，以检查对应的元素是否按照期望中渲染完成，来完成对应的测试。

## 应用

此处所讨论的是 Jest + Enzyme 的结合使用。那么我们需要先完成对应的项目的 package.json 的配置，配置步骤如下:

- 配置 create-react-app 初始化项目：

```shell

```

- 配置 Enzyme ：

```shell

```

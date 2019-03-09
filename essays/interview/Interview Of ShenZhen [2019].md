# 前端面试游记

# 文档说明

尽管有些面试题异常基础，我们平时并不会在开发的过程中思考这些问题，但是总有面试官会问可能你就直接凉了，你对其他方面的出色能力也无法体现出来了。所以如果觉得面试官的问题简单或者笼统，其实我们也要反思是否答好了这些问题。这段时间我都在搜集这些问题，也欢迎你告诉我。

tip： 还在找工作中，你可以在这看到[我的简历](https://hacknical.com/LinkXSystem/resume?locale=zh)

> 更新日期：2019/02/28, Base: **深圳**

# 前端面试

## 基础问题

### 简单介绍一下 GET 和 POST，两者有什么区别

- 简答： GET 和 POST 属于 TCP/IP 协议的一种请求方式，两者都可以用来向服务端传递数据，GET 携带数据的方式实在 URL 上，字符只能是 ASCII 编码，POST 则是在请求体里面，则允许任意形式的字符集。GET 方式对于浏览器回退是无损害的，但是 POST 方式会重新诱发一次请求。GET 仅会发送 一个数据包，而 POST 则需要发送 两个数据包，所有建议使用 GET 方式进行优化。
- 参考链接：[掘金](https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd)，[知乎](https://zhuanlan.zhihu.com/p/25028045)

### CSS 引入多少种引入方式

- 简答：行内样式、内部样式表、外部样式表, 外部样式表存在 link 和 @import 两种引入方式， 样例代码：

  ```html
  <!-- 行内样式 -->
  <div style="display: inline-block"></div>
  <!-- 内部样式表 -->
  <style>
    div {
      display: inline-block;
    }
  </style>
  <!-- 外部样式表 -->
  <link
    src="https://cdn.example.com/static/css/reset.scss"
    type="text/css"
    rel="styleSheet"
  />
  <style>
    @import ('./css/reset.scss');
  </style>
  ```

- 拓展问题： link 标签引入 CSS 有什么优势

  - 简答：link 标签是 html 标签，不存在兼容问题，相较于 @import 来说， link 是在页面加载时同步加载的，@import 需要在页面加载完成才能加载。css 加载过程种会阻塞 js 的执行。JS 可以通过 link 的 dom 来加载指定的样式。

  - 参考链接：[掘金](https://juejin.im/post/5ab36d99f265da23866fccd1)

### CSS3 有什么新特性

- 简答：过渡、动画、选择器、阴影、边框、filter、弹性布局(flex)、栅栏布局(Grid)、border-box 盒模型、媒体查询、混合模式

- 参考链接：[掘金](https://juejin.im/post/5a0c184c51882531926e4294)

### SSR 和 SPA 的区别

- 简答：SSR 和 SPA 的主要区别是渲染的方式存在区别，SPA 主要是在浏览器端渲染，需要先加载对应的 app.js。而 SSR 则是在服务端中渲染完成，然后将页面传输至浏览器。SSR 的首屏渲染时间较 SPA 时间较短（需要看 SSR 获取数据来源的速度），SSR 较 SPA 更容易支持搜索引擎爬取，相关信息更为完整。

- 参考链接: [知乎](https://www.zhihu.com/question/28725977)

### 网站安全问题

- 简答：Web 类安全问题通常有 XSS，CSRF，Cookies 泄漏， 点击劫持（iframe），传输安全（DNS 劫持），SQL 注入 等

- 参考链接：[简书](https://www.jianshu.com/p/e6b7b097896e)

### 原型链，描述原型链的继承实现

- 简答：原型链是 JavaScript 实现继承的一种方式，原型链通过 prototype 和 **proto** 来实现，需要注意的是 prototype 是 Function 对象才存在的属性，对象不存在 prototype 这个属性仅存在 **proto**, prototype 默认指向 Function 的构造函数，通过 new 实现的对象的 **proto** 默认指向的便是 Function 的 prototype，所以我们可以通过 prototype 来实现属性和 method 的传递，从而达到方式。参考代码：

```js
// 样例，使用 prototype
function Parent() {
  this.constant = 'signal';
}

function Child() {}

Child.prototype = new Parent();

let instance = new Child();

console.warn(instance.constant); // signal
```

- 参考链接：[掘金](https://juejin.im/post/5c72a1766fb9a049ea3993e6)，[实现方式](https://juejin.im/post/58f94c9bb123db411953691b)

## 进阶问题

### 浏览器缓存原理

- 简答：通常我们的访问页面默认是通过 GET 方式来获取资源的，浏览器在 get 方式中会默认缓存对应的资源数据。那么在 URL 输入之后，浏览器会先去查询自身的缓存中，是否对应 URL 的缓存，如果无，则请求对应的服务器。在资源请求加载到本地之后，浏览器会检查是否有对应的缓存设置，如 expires、cache-control、etag 等，如果有则设置对应的缓存，若禁止则不缓存。同样的再次输入或者刷新 URL 时，浏览器会检查对应的缓存设置是否已经到期失效，否，则使用缓存，反之重新加载资源。
- 参考链接：[博客园](https://www.cnblogs.com/slly/p/6732749.html)

### 解析 virtual-dom 的原理和实现

- 简答：virtual-dom 指的是用 javascript 维护的一种数据是 dom 对象的树形数据结构，需要注意的是这是 dom 对象不是使用 类似 document.createElement 这种方式来生成的，或者是已经存在的 dom， 所以这些 dom 对象是模拟类似原生 dom 对象的数据结构，只有在渲染的时候，virtual-dom 的 render 才会调用 document.createElement 来渲染到页面上。

- 参考链接：[w3cplus](https://www.w3cplus.com/javascript/understand-the-Virtual-DOM.html)

### 浏览器的页面渲染

- 简答：解析 URL，检查是否存在缓存，不存在则查询 DNS 寻找服务器的 IP 地址，加载资源，HTML 文档加载完成，开始解析 dom ，此时在加载的资源有 CSS 和 Javascript，CSS 加载不影响 dom 解析，script 加载影响 dom 解析，在完成相应的加载之后，开始构建 dom 树和对应的 CSSOM 规则树，此时会诱发回流和重绘，导致浏览器重新计算 dom 的位置和屏幕的渲染位置。

- 参考链接：[掘金](https://juejin.im/post/5a8e242c5188257a6b060000)，[回流/重绘](https://juejin.im/post/5c6cb7b4f265da2dae511a3d)

## Vue 框架问题

### vue 的生命周期有多少个，分别是

- 简答：8 个，分别是 beforeCreate，created，beforeMount， mounted， beforeUpdate，updated，beforeDestroy，destroy

- 参考链接：[官网](https://cn.vuejs.org/v2/guide/instance.html)

### vue 的组件通信方式

- 简答：vue 的父子组件之间的通信方式是 prop 和 emit ，父组件向子组件通信通过 prop 实现， 子组件是通过 emit 来实现。 sync 这种方式不推荐使用，如果需要动态修改建议 使用 v-model 的方式来实现。兄弟组件可以通过共同的父组件来完成，由 prop 来传递数据。还有一种方式是 EventBus 的实现，但是由于订阅问题，如果订阅重复，可能传递到错误的组件。

- 参考链接：[掘金](https://juejin.im/post/59ec95006fb9a0451c398b1a)

### vue-cli 2.x 和 vue-cli 3.x 有什么区别

- 简答：vue-cli 2.x 是通过指定的 template 来生成项目的，这个过程中我们通常不需要我们配置相关信息， 而 vue-cli 3.x 则可以允许我们在生成项目时自定义想法配置。

### vuex 的用途，vuex 的主要组成是什么

- 简答：vuex 主要作用是解决组件间的状态和数据传递问题，主要组成有 state， getter， mutation，action，module （根据 模块 来划分状态）

- 参考链接：[官网](https://vuex.vuejs.org/zh/)

### 实现为 data 中的某个对象添加新属性并显示出来

- 参考代码：

```jsx
  <template>
      <div>
      <ul>
          <li v-for="(value, key) in cache" :key="key">{{ value }} 纯晶</li>
      </ul>
      <button @click="handlerUpdateCache">Z 纯晶</button>
      </div>
  </template>

  <script>
  export default {
    data() {
        return {
          //  由于初始的之不存在，vue 默认不会监控到新添加进来的属性
          cache: {
              x: 'x',
              y: 'y',
          },
        };
    },

    methods: {
        handlerUpdateCache() {
          // 使用 $set 更新进去， 参考链接： https://cn.vuejs.org/v2/api/#Vue-set
          this.$set(this.data, 'z', 'z');
          // vue 默认只监控，引用是否变更
          // 如果不想监控,那
          //   this.cache = Object.assign({}, this.cache, {
          //     z: 'z',
          //   });
          // 或者，
          // this.cache = {...this.cache, z: 'z'}
        },
    },
  };
  </script>
```

---

![wechat](https://user-gold-cdn.xitu.io/2019/2/28/1693495422f8c93a?w=430&h=430&f=jpeg&s=41046)

---

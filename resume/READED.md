# 个人信息

<div style="display: flex;">
  <img
    src="./assets/image/avatar.jpg"
    style="width: 120px; height: 120px;border-radius: 50%;"
  />
  <div style="margin-left: 1em;">
    <p>
      <span>杨志</span>
      <span>期望职位：前端工程师</span>
    </p>
    <p>
      <span>工作年限：1.5 年</span>
    </p>
    <p>
      <span>Github: https://github.com/LinkXSystem</span>
    </p>
  </div>
</div>

---

# 联系方式

<div style="display: flex;">
  <img
    src="https://raw.githubusercontent.com/LinkXSystem/learn-guide/master/resume/assets/image/wechat.jpg"
    style="width: 120px; height: 120px;"
  />
  <div style="margin-left: 1em;">
    <p>
      <span>手机：15706663187</span>
    </p>
    <p>
      <span>微信：15706663187</span>
    </p>
    <p>
      <span>Email：linkasde_system@163.com</span>
    </p>
  </div>
</div>

---

# 技能清单

以下均为我通用的技能，以框架和端来划分：

- nodejs 技术栈:

  - 框架：express/koa/egg.js/hapi
  - 接口文档: swagger
  - 数据库：mongodb/mariadb

- vue 技术栈:

  - 通用模块：vuex, vue-router, axios, scss
  - 移动端: vant, nuxt.js (SEO 优化)
  - PC 端：element-ui, nuxt.js
  - 管理后台: element-ui

- react 技术栈:

  - 通用模块：react, react-router, axios/fetch, scss
  - 移动端: next.js
  - PC 端：next.js, ant-design
  - 管理后台: ant-design

- 版本管理：git
- 文档管理：vuepress

---

# 工作经历

## 蛋壳创意科技有限公司 （ 2018 年 3 月 ~ 2019 年 1 月 ）

### Dankal 模板设计

- 项目时间：2018 年 10 月 - 2019 年 1 月

- 项目简介：Dankal 模板设计属于公司内部的基础设施项目，目标是解决代码重用，SDK 封装，组件化开发，通用模块模板化，以达到项目快速开发，节约时间和人力，用于复制功能的研究。
- 项目技术：
  - 模板从设备和功能方向上划分为 PC 端、移动端（包含 native）、小程序端以及管理后台
  - 所有模板都是基于 vue 和 类 vue 风格实现，便于多端代码风格和开发方式的统一
  - PC 端和移动端使用 nuxt.js 实现，便于 seo 的优化和首屏加载的优化
  - 小程序端使用的是 类 vue 的 wepy 框架，便于由移动端的代码迁移至小程序，提高可复用部分
  - 管理后台则是基于 element-ui 实现二次开发，自定义符合业务逻辑的组件和页面
  - 模板统一使用 scss 作为 css 模块重用的方案，统一相关 SDK，如 地图 API、缓存处理、Cookies 处理
  - 组件根据端和业务来进行划分，PC 端和管理后台则统一基础组件， 移动端则由于样式的问题需要统一，仅从功能行为上统一
- 项目职责：负责与 UI 设计师协调，解决样式问题；和后端工程师协调，统一数据格式，和前端人员协调统一代码风格

### 星美乐 (小程序)

- 项目时间：2018 年 9 月 - 2018 年 10 月

- 项目概况：星美乐小程序是为美心集团的线下门店打造的小程序，允许顾客通过小程序扫描线下门店的二维码，实现线上点单，快速通知到厨房，使服务员能够快速的送达顾客身边。
- 项目技术：
  - 基于 wepy 框架开发对应的小程序
  - 前后端分离，接口部分使用 restful 风格
  - 基于 wepy-redux 实现状态管理

### BV 美聚 （PC 端）

- 项目时间：2018 年 6 月 - 2018 年 8 月

- 项目简介：BV 美聚是一个美容产品购买，美容服务预定购买的线上电商平台。

- 项目技术：
  - 基于 nuxt.js 开发，便于 seo 优化，同时 基于 express 的中间来实现微信登录
  - 使用 element-ui 定制基本业务组件
  - 使用 vuex 作为状态管理
  - 定制 checkbox 编写多状态、多选择的服务预约组件
  - 支持支付宝和微信支付，使用 window.history 的相关 API 解决支付宝跨站导致的 vue-router 无法刷新到正确页面的问题

### 小易智投 （小程序）

- 项目时间：2018 年 3 月 - 2018 年 4 月

- 项目描述：小易智投是一款关于投资推荐的产品， 通过调查问卷来了解用户相关的投资偏好，同时推荐用户相关的投资类产品。

- 项目技术：

  - 基于 wepy 框架开发对应的小程序，基于 wepy-redux 实现状态管理
  - echart.js 来实现图表类数据的呈现
  - 关于股票和基金的 k 线图，则通过内嵌 webview 来实现数据的呈现

## 南京云中央科技有限公司 （ 2017 年 11 月 ~ 208 年 2 月 ）

### 斑点购 （B 端）

- 项目时间：2017 年 11 月 - 2018 年 2 月

- 项目简介：斑点购项目是为南京云中央的线下便利店提供线上购买及配送，和线上自提的一款新零售服务的 APP，主要有 B 和 C 端。B 端为商家端，提供商家的管理服务功能，实现库存预警、商品快速入库补货的功能。

- 项目技术：
  - 使用 react-native 作为主要开发框架，支持 android 和 ios 平台
  - 前后端分类，使用基于 fetch 封装作为主要异步请求库
  - 通过 API 轮询实现库存实时查询

---

## 开源项目

（对于程序员来讲，没有什么比 Show me the code 能有说服力了）

- [数据可视化博客系统（前端模块）](https://github.com/LinkXSystem/visualization-system)：

  - 项目简介：尝试可视化来设计博客项目，通过 multi-page 来划分不同的页面承载不同的功能模块
  - 主要技术：react/react-router/redux

- [数据可视化博客系统（服务端模块）](https://github.com/LinkXSystem/visualization-compute-system)：

  - 项目简介：为数据可视化博客系统（前端模块）的服务端，用于提供数据分析统计的服务，基于 nodejieba 来进行分词处理，为文章提供标签标记
  - 主要技术：egg.js/nodejieba/mongodb

---

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。

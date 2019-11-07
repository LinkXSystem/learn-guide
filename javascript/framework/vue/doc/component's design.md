# 组件设计

## 设计概述

Vue 2.x 的组件设计应该围绕 slot 和 chilren 实现。由于 children 的使用通常都是在 js 的语法中的， 同时官方提示 jsx 的性能相对于 slot 并不高，而且我们平时实现并不会有太强的高度指定的情况，需要劫持对应的渲染，或者存在递归的树形结构的渲染方式。所以我们围绕 vue 的组件设计，尤其是业务层相关的组件，应该是以 slot 展开的。基于 slot 实现，有以下的优点：

- 组件内仅维护布局定义，和与布局的相关的 CSS，作为约束作用

- 组件维护功能性函数，仅提供处理数据的作用，用于组合使用，

## 实现思路

在上面的描述中，已经提及 slot 的组件仅维护布局的定义，那么依据此来实现的代码则如下：

```html
<template>
  <section class="container" :style="layout">
    <slot name="side"></slot>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: "row"
      }
    },

    compute: {
      layout() {
        return Object.assign(
          {},
          {
            flexDirection: this.props.direction
          }
        );
      }
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
  }
</style>
```

## 数据传递

- Props 组件数据传递

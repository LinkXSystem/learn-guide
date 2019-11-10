# Dataset 属性的使用技巧

## 简介

- 在 html5 中可为所有元素添加一种自定义的属性，这种属性的前缀以 data- 开头，比如：data-name,目的是为元素提供与页面渲染无关，但与 dom 元素强相关的属性。添加完自定义属性后我们可以通过元素的 dataset 属性来访问其值。
- dataset 是一个 DOMString 的映射，每个自定义数据属性的一个条目。
- 以 data- 开头。它只能包含字母，数字和以下字符： dash (-), dot (.), colon (:), underscore (\_) - 但不是任何 ASCII 大写字母（A 到 Z）。

## HTML 设置

```html
<!-- 格式是 data-attribute -->
<div data-name="linksytem"></div>
```

## javascript 读取和设置方法

```html
<div class="user" data-name="link" data-email="examples@gmail.com"></div>

<script type="text/javascript">
  let users = document.getElementsByClassName('user');
  users[0].dataset.name = 'linksystem';
  users[0].dataset.someDataAttr = 'ar';

  delete users[0].dataset.name;

  let store = users[0].dataset.email;

  console.log('====================');
  console.log(store);
  console.log('====================');
</script>
```

## 实例

- 参考文章: http://www.zhangxinxu.com/study/201106/dataset-chart-example.html

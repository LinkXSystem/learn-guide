> Dataset 属性简介

- 在html5中可为所有元素添加一种自定义的属性，这种属性的前缀以data-开头，比如：data-name,目的是为元素提供与页面渲染无关，但与dom元素强相关的属性。添加完自定义属性后我们可以通过元素的dataset属性来访问其值。
- Dataset 是一个DOMString的映射，每个自定义数据属性的一个条目。
- 以 data- 开头。它只能包含字母，数字和以下字符： dash (-), dot (.), colon (:), underscore (_)  - 但不是任何ASCII大写字母（A到Z）。

> HTML 设置
```
<!-- 格式是 data-attribute -->
<div data-name="linksytem"></div>
```

> javascript 读取和设置方法

```
<div class='user' data-name='link' data-email='linksystem@163.com'>

<script type="text/javascript">
let users = document.getElementsByClassName('user');
<!-- set -->
users[0].dataset.name = 'linksystem'

<!-- check -->
users[0].dataset.someDataAttr = 'ar'

<!-- delete -->
delete users[0].dataset.name

<!-- get -->
let store = users[0].dataset.email
</script>
```

> jquery 读取和设置
```
<!-- 使用jquery的data方法可以实现dataset同样的功能 -->
<!-- set -->
$(selector).data(object)

<!-- delete -->
$(selector).removeData(name)
```

> 实例代码网址
```
http://www.zhangxinxu.com/study/201106/dataset-chart-example.html
```

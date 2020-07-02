# 几大经典布局方案

- 圣杯布局
- 双飞翼布局 左右固定,中间自适应

## 圣杯布局

```css
.content {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.middle {
  /* 填满剩余部分 */
  flex: 1;
  min-height: 400px;
  background: salmon;
}

.left,
.right {
  /* 不放大也不缩小占200px */
  flex: 0 0 200px;
  background: skyblue;
}
```

```html
<body>
  <div class="header"></div>
  <div class="content">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div>
  </div>
  <div class="footer"></div>
</body>
```

## 双飞翼布局

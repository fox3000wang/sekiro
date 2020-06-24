# 盒子水平垂直居中的五大方案

- 定位: 三种
- display: flex
- JavaScrpit
- display: table-cell

### 定位

```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -50px;
}
/* 缺点:需要事先知道盒子宽和高 */
```

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 缺点:需要盒子有宽和高 */
```

```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 缺点:兼容性不好 */
```

### display: flex;

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 缺点:兼容性不好 */
```

### JavaScript

```JavaScript
  let HTML = document.documentElement,
    winW = HTML.clientWidth,
    winH = HTML.clientHeight,
    boxW = box.offsetWidth,
    boxH = box.offsetHeight;
  box.style.position = 'absolute';
  box.style.left = (winW - boxW) / 2 + 'px';
  box.style.top = (winH - boxH) / 2 + 'px';
/* 缺点:代码有点啰嗦 */
```

### display: table-cell

```css
body {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  /* 需要父容器有固定宽高 */
  width: 800px;
  height: 300px;
  /* background: red; */
}

.box {
  display: inline-block;
}
```

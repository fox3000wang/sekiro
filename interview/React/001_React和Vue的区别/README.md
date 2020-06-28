# React 和 Vue 的区别

## 历史背景

## 设计架构层面的区别

- React 是 MVC
- Vue 是 MVVM

### MVC 和 MVVM 的区别

MVC

Model <=> Controller <=> View

- 单项数据绑定
- Model 改变自动改变 View
- View 改变需要手动改变 Model

MVVM

数据和视图的双向数据绑定

## 双向数据绑定是如何实现

### Vue2 是基于 ES5

```js
Object.definProperty(obj, "name", {
  get() {
    // ...
  },
  set(val) {
    // ...
  },
});
```

### Vue3 beta 是基于 ES6 的 Proxy

```js
let obj = {};
obj = new Proxy(obj, {
  get(target, prop) {
    // ...
  },
  set(target, prop, value) {
    // ...
  },
});
```

### React 是要自己手动写 onClick, onChange

# 高频面试题整理

## 对象的 key 不能是数字

```javascript
a["0"] = "foo"; // a['0'] = "foo";
a[0] = "bar"; // 属性名不能重复, 属性名不能为数字, 然后覆盖掉了'0';
```

## 两个值一样的 Symbol，并不相等

```js
//Symbol('1') === Symbol('1') 的值是false
a[b] = Symbol("1");
a[c] = Symbol("1"); // 最终，a里面存了两个Symbol('1')
```

## 对象作为 key 的注意事项

```js
a[{ n: 1 }] = "foo"; // a[Object] = "foo"
a[{ m: 1 }] = "bar"; // a[Object] = "bar"
console.log(a[b]); // 输出a[Object], a里只有一个a[Object], 值是"bar"
```

## undefined 和 null 的区别

undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。

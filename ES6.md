# ES6

### let和const命令

1. let--->
   1. 声明变量,只在let命令所在的代码块内有效;
   2. 不存在变量提升;只要块级作用域内存在`let`命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
   3. 暂时性死区...
   4. `let`不允许在相同作用域内，重复声明同一个变量。--->`function func(arg) {  let arg; // 报错}`
2. `const`声明一个只读的常量。一旦声明，常量的值就不能改变,const保存的指针不变
3. 从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
4. 顶层对象:
   1. 浏览器里面，顶层对象是`window`，但 Node 和 Web Worker 没有`window`。
   2. 浏览器和 Web Worker 里面，`self`也指向顶层对象，但是 Node 没有`self`。
   3. Node 里面，顶层对象是`global`，但其他环境都不支持。
   4. 全局环境中，`this`会返回顶层对象。但是，Node 模块和 ES6 模块中，`this`返回的是当前模块。
   5. 函数里面的`this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。
   6. 不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么`eval`、`new Function`这些方法都可能无法使用。

###变量解构赋值

1. 数组结构赋值-->`let [a, b, c] = [1, 2, 3];`如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
   1. 解构赋值允许指定默认值。`let [foo = true] = [];`
2. ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值
3. 对象的解构赋值-->`let { foo, bar } = { foo: "aaa", bar: "bbb" };` 或者`let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };`
4. 对象解构分清楚模式和变量;
5. `let { log, sin, cos } = Math;`上面代码将`Math`对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
6. ​









```javascript

//构造函数
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

//es6写法如下:

//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

### 补充

NodeJS有三大核心： 

- **CallBack回调** 
- **Event事件** 
- **Stream流**
- ​



### 字符串

es6新增的字符串的方法:

- **includes()**：返回布尔值，表示是否找到了参数字符串。
- **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。
- **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。
- **repeat(n)** :返回一个新的字符串表示将原字符串重复n次
- **模板字符串** 用反引号来写字符串,里面用`${}` 来接收变量和函数调用等
- **String.raw()** 可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

模板字符串：``  里面可以写`${obj.name}`

### 正则扩展

字符串对象共有4个方法，可以使用正则表达式：`match()`、`replace()`、`search()`和`split()`。



### 数值

`Number.isFinite()` 检查一个数值是否为有限的(finite)

`Number.isNAN()` 检查数值是否是数值

`Number.isFinite()`对于非数值一律返回`false`, `Number.isNaN()`只有对于`NaN`才返回`true`，非`NaN`一律返回`false`。

ES6 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。

`Number.isInteger()`用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

函数参数定义了默认值,若在尾部,则可省略,若非尾部参数设置了默认值,也不能省略;如果传入`undefined`，将触发该参数等于默认值，`null`则没有这个效果。

指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真。

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。

```js
 function foo(x, y = () => {x = 2;}) {
      //函数参数会形成单独的作用域，
      var x = 3;
      y();
      console.log(x);
    }
    foo();// 3
    console.log(x);// 1
```

### 箭头函数

1. 箭头函数不能做构造函数使用

2. 构造函数没有自己的this，函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

   ```js
   function foo() {
     setTimeout(() => {
       console.log('id:', this.id);
     }, 100);
   }

   var id = 21;

   foo.call({ id: 42 });
   // id: 42
   ```

   ​

3. 箭头函数中没有自己的arguments，但是可以用(...rest)的rest参数，rest就是一个真数组。

4. 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。

### promise

解决回调地狱

```js

var p = new Promise();???
```







静态成员，实例成员



### 使用webpack将ES6转换成ES5


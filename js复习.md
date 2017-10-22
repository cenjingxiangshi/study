###数组方法

一般callback都是接受三个参数:v,i,array;值,索引,和当前数组

懒得弄了:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

1. `Array.of`区别于Array构造函数,Array(2)=[,,];是两个defined,而Array.of(2)=[2];

2. `Array.isArray()`判断是否是数组,如果对象是 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，则为true; 否则为false。`Array.isArray(obj)  `

3. `.concat()  `合并数组,返回新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) 实例。

4. `.every()`语法:arr.every(callback[, thisArg]);遍历数组,全部符合callback返回true,否则返回false;`callback`用来测试每个元素的函数。`thisArg`执行 `callback` 时使用的 `this` 值。

5. `filter() `方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 `var new_array = arr.filter(callback[, thisArg])`

6. `find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。`arr.find(callback[, thisArg])`

7. `findIndex()`方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。`arr.findIndex(callback[, thisArg])`

8. `forEach()` 方法对数组的每个元素执行一次提供的函数。`array.forEach(callback[, thisArg])`

9. `includes(searchElement[, fromIndex])` 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false。

10. `indexOf(searchElement[, fromIndex = 0])`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

11. `join()` 方法将数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接到一个字符串中,不会改变数组！。默认为 ",";

12. `lastIndexOf(searchElement[, fromIndex = arr.length - 1])` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

13. `map(callback[,thisArg])` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。一个新数组，每个元素都是回调函数的结果。

14. `pop()`法从数组中**删除**最后一个**元素**，并**返回**该元素的**值**。此方法**更改**数组的**长度**。无参数

15. `push()` 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。

16. `shift()` 方法从数组中**删除**第一个元素，并返回该元素的值。此方法更改数组的长度。无参数

17. `unshift(element1, ..., elementN)` 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。

18. `reduce(function(accumulator, currentValue, currentIndex, array), initialValue)` 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。callback接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 `reduce` 的数组。[initialValue]( : 如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。) 

    ```javascript
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    var countedNames = names.reduce(function (allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    ```



18. `.filter()` 过滤器,经过callback函数return true时,返回当前数组元素,否则丢弃,最后生成新的数组;
19. `reverse()` 方法将数组中元素的位置颠倒。
20. `slice(beginIndex,endIndex)` 方法返回一个从开始到结束（**不包括结束**）选择的数组的一部分**浅拷贝**到一个新数组对象。原始数组不会被修改。
21. `splice(start[, deleteCount][, item1, item2, ...])`方法通过删除现有元素或添加新元素来更改一个数组的内容。参数start指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从1计数）。返回值:由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
22. `some(callback[, thisArg])` 方法测试数组中的某些元素是否通过由提供的函数实现的测试。找到一个符合的数组值就返回true,都不符合则返回false;
23. `sort()` 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是[稳定的](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#.E7.A9.A9.E5.AE.9A.E6.80.A7)。默认排序顺序是根据字符串Unicode码点。参数可选,用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。返回排序后的数组。原数组已经被排序后的数组代替。
24. `.toLocaleString()`
25. `toString()` 返回一个字符串，表示指定的数组及其元素。无参数,相当于.join(),将数组拼接成字符串;
26. ES6的寻找index方法`findIndex(function(v,i){return true/false;}` 



###字符串方法

1. `charAt(index)` 方法从一个字符串中返回指定的字符。index默认0;

2. `concat()`方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

3. `endsWith()`方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。es6的规范,语法:`str.endsWith(searchString [, position]);`

4. `includes() `方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。区分大小写

5. `indexOf(searchValue[, fromIndex])` 方法返回调用  [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String) 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。返回值:指定值的第一次出现的索引; 如果没有找到 -1。

6. `str.match(regexp);`当一个字符串与一个正则表达式匹配时， **match()**方法检索匹配项。返回值:一个包含了整个匹配结果以及任何括号捕获的匹配结果的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) ；如果没有匹配项，则返回 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。

   ```javascript
   var str = 'For more information, see Chapter 3.4.5.1';
   var re = /see (chapter \d+(\.\d)*)/i;
   var found = str.match(re);

   console.log(found);
   ```

7.`repeat(count)` 构造并返回一个新字符串，该字符串即原字符串被重复count次的新字符串。`"abc".repeat(2);// "abcabc"`

8. `str.slice(beginSlice[, endSlice])`切割字符串,返回新字符串,不改变原字符串
9. `str.split([separator[, limit]])`方法使用指定的分隔符字符串将一个string对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。`"Webkit Moz O ms Khtml".split( " " )   // ["Webkit", "Moz", "O", "ms", "Khtml"]`
10. `trim()`删除字符串两端的空白字符
11. `valueof()`等同于`toString()` 返回字符串的值













### 数值类型转换

+ 转字符串:String();toString();+"";

+ 转数值:Number();   str-/+str;  parseInt();-->保留整数;   parseFloat();-->保留第一个小数;

+ 转布尔类型: 所有值都可以转布尔类型,Boolean(str); 在判断语句中用的比较多,转换成false的几种情况:0/undefined/null/nan/""/false;

+ NaN是数据类型,表示值不是一个数值;isNaN();判断是否为数字,返回true说明不是数字,NaN跟谁都不等;NaN==NaN?返回false;

+ 核心复合类型:object和function;构造函数:object,Date,Number等

+ 变量声明之后未赋值是undefined;变量永远不可能自动为null,除非手动赋值,null是对象的空值,undefined是数值类型的空值;

+ typeof只是关键字,可用typeof str;或者typeof(str);小括号只是用来提升优先级;typeof复杂类型都是object,除了typeof function的结果是function;

+ instanceof:判断是否是某类型`arr instanceof Array`

+ 只要是对象,转成布尔值都是true;

+ 当一个引用类型数据和值类型的数据进行运算,遵循如下结果

  + 先调用引用类型的valueof方法,获取返回值,进行运算;
  + 如果valueof的返回值无法运算,继续用引用类型 的toString方法进行运算;

+ in关键字:

  + for-in:遍历对象的键
  + 属性名 in 对象--->返回true和false;判断能否通过对象访问这个指定的属性;

+ 逻辑中断短路运算

  + a || b:如果a为真,则返回a的值,否则返回b的值'
  + a && b:如果a为假,返回a的值,否则返回b的值;

+ delete关键字:

  + 删除变量,删除未使用var声明的变量;
  + 删除对象的属性;
  + 数组删除后是留坑,值是undefined,数组长度不变;所以一般用splice();
  + 删除对象用delete;

+ 对象的动态特性:对象在创建后,可以为对象新增或删除属性的特性就是对象的动态特性

  + 点语法和关联数组语法

+ 值类型存储的是数据本身;引用类型存储的是数据的地址,数据单独存储在内存中,地址赋值给变量;

+ 连等:实际开发中,不推荐连等;js的特殊处理方式:a.num=a={num:4};解释--->a先暂存一份,压栈,即变量已经被存储成地址了,然后a被赋值新的对象,再修改暂存a的num属性为{num:4};即

  + ```javascript
    a.num=a={num:4};
    //等式解释如下:
    var temp=a;
    a={num:4};
    temp.num=a;
    ```

+ **异常处理语句**:

  + 异常:报错,阻断代码运行;

  + UNcaught reference:引用错误;UNcaught sy:语法错误;

  + 异常处理的目的就是捕获异常,防止异常阻断代码的正常运行;

    + ```javascript
      try{
        //可能会出现的异常代码
      }catch(e){
        //只要发生异常,这里的代码就会执行
        //e代表发生异常的异常信息
      }finally{
        //无论是否发生异常都会执行的代码
        //一般会放一些释放资源的操作
      }
      ```

+ 手动制造异常:

  + throw

    + ```javascript
      functin(a,b){
        if(!a || !b){
         throw "手动报错,可写任何东西" 
        }
        return a+b;
      }
      ```

+ console:浏览器控制台是一个js运行环境,和页面中书写的js处于同一个环境.

  + console.time和console.timeEnd可以计算代码运行时间;console.table:打印出表格的形式;

+ 断点调试:

  + 条件断点 add 
  + 断点全部隐藏, deactive
  + 直接跳转到错误的代码行 parse on 

+ network:

  + preserve log:保存上个页面的请求信息
  + disable cache:浏览器缓存禁用,保证每次页面请求都是新的返回数据
  + offline:断网
  + no throttling:切换网速环境

### 运算符的优先级

+ 括号()--> 一元运算符**++  --  !**  --> 算数运算符 ***  /  %  +  -** --> 关系运算符 **>  >=  < <=** -->  相等运算符 **== != === !==**  --> 逻辑运算符 **&&  ||**

### 三元运算符

+ a==b?c:d;-->解释:a等于b吗?等于则返回c,否则返回d; 前面是判断语句,后面是输出结果;


### label语句

```javascript
//未使用label
var num = 0;
 for (var i = 0 ; i < 10 ; i++){
   for (var j = 0 ; j < 10 ; j++){
    if( i == 5 && j == 5 ){
     break;
    }
   num++;
   }
 }
 alert(num); // 循环在 i 为5，j 为5的时候跳出 j循环，但会继续执行 i 循环，输出 95

//使用label后
var num = 0;
outPoint:
for (var i = 0 ; i < 10 ; i++){
  for (var j = 0 ; j < 10 ; j++){
   if( i == 5 && j == 5 ){
    break outPoint;
   }
  num++;
  }
}
alert(num); // 循环在 i 为5，j 为5的时候跳出双循环，返回到outPoint层继续执行，输出 55
```



### DOM

+ 拿到文本域的内容,顺便清除前后空格

  + ```javascript
    var content=txt.value.trim();
    ```

  ##### 1. Event对象

  Event对象代表事件的状态,比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。事件通常与函数结合使用，函数不会在事件发生前被执行！

  鼠标键盘属性:

  | 属性                                       | 描述                         |
  | ---------------------------------------- | -------------------------- |
  | [altKey](http://www.w3school.com.cn/jsref/event_altkey.asp) | 返回当事件被触发时，"ALT" 是否被按下。     |
  | [button](http://www.w3school.com.cn/jsref/event_button.asp) | 返回当事件被触发时，哪个鼠标按钮被点击。       |
  | [clientX](http://www.w3school.com.cn/jsref/event_clientx.asp) | 返回当事件被触发时，鼠标指针的相对可视区水平坐标。  |
  | [clientY](http://www.w3school.com.cn/jsref/event_clienty.asp) | 返回当事件被触发时，鼠标指针的相对可视区垂直坐标。  |
  | [ctrlKey](http://www.w3school.com.cn/jsref/event_ctrlkey.asp) | 返回当事件被触发时，"CTRL" 键是否被按下。   |
  | [metaKey](http://www.w3school.com.cn/jsref/event_metakey.asp) | 返回当事件被触发时，"meta" 键是否被按下。   |
  | [relatedTarget](http://www.w3school.com.cn/jsref/event_relatedtarget.asp) | 返回与事件的目标节点相关的节点。           |
  | [screenX](http://www.w3school.com.cn/jsref/event_screenx.asp) | 返回当某个事件被触发时，鼠标指针的相对屏幕水平坐标。 |
  | [screenY](http://www.w3school.com.cn/jsref/event_screeny.asp) | 返回当某个事件被触发时，鼠标指针的相对屏幕垂直坐标。 |
  | [shiftKey](http://www.w3school.com.cn/jsref/event_shiftkey.asp) | 返回当事件被触发时，"SHIFT" 键是否被按下。  |

### 正则表达式

2.1. 创建正则表达式

【07-正则表达式的创建.html】

构造函数的方式

```
var regExp = new RegExp(/\d/);

```

正则字面量

```
var regExp = /\d/;

```

正则的使用

```
/\d/.test("aaa1");

```

2.2. 元字符

> 正则表达式由一些普通字符和元字符组成，普通字符包括大小写字母、数字等，而元字符则具有特殊的含义。

2.2.1. 预定义类

正则表达式中具有特殊意义的字符。

【08-预定义类.html】

![yuan](image\yuan.png)

2.2.2. 正则优先级

`|`表示或，优先级最低

`()`优先级最高

【09-正则表达式的优先级问题.html】

2.3. 字符类

【10-正则表达式的字符类.html】

`[]`在正则表达式中表示一个字符的位置，[]里面写这个位置可以出现的字符。

```
console.log(/[abc]/);//匹配a,b,c

```

`[^]`在中扩号中的^表示非的意思。

```
//^表示该位置不可以出现的字符
console.log(/[^abc]/);//匹配除了a，b，c以外的其他字符

```

`[a-z]` `[1-9]`表示范围

```
console.log(/[a-z]/.test("d"));//小写字母
console.log(/[A-Z]/.test("d"));//大写字母
console.log(/[0-9]/.test("8"));//数字
console.log(/[a-zA-Z0-9]/);//所有的小写字母和大写字母以及数字

```

【11-案例-验证密码强度.html】

2.4. 正则进阶

2.4.1. 边界

> 我们前面学习的学习的正则只要有满足的条件的就会返回true，并不能做到精确的匹配。

【12-正则边界.html】

^表示开头 **[]里面的^表示取反**

$表示结尾

```
console.log(/^chuan/.test("dachuan"));//必须以chuan开头
console.log(/chuan$/.test("chuang"));//必须以chuan结尾
console.log(/^chuan$/.test("chuan"));//精确匹配chuan

//精确匹配chuan,表示必须是这个
console.log(/^chuan$/.test("chuanchuan"));//fasle

```

2.4.2. 量词

> 量词用来控制出现的次数，一般来说量词和边界会一起使用

【13-正则量词.html】

1. `*`表示能够出现0次或者更多次，x>=0;
2. `+`表示能够出现1次或者多次，x>=1
3. `?`表示能够出现0次或者1次，x=0或者x=1
4. `{n}`表示能够出现n次
5. `{n,}`表示能够出现n次或者n次以上
6. `{n,m}`表示能够出现n-m次

思考：如何使用{}来表示*+?

2.5. 括号总结

`{}`大括号限定出现的次数

```
console.log(/chuan{2}/.test("chuanchuan"));
console.log(/chuan{2}/.test("chuann"));

```

`[]`表示一个字符出现的位置

```
console.log(/^[fb]oot$/.test("foot"));
console.log(/^[fb]oot$/.test("boot"));

```

`()`用来提升优先级

```
console.log(/^(chuan){2}$/.test("chuanchuan"));

```

2.6. 案例练习

```
talk is cheap show me the code.

                                                            -- Linus Torvalds
                                                                李纳斯•托沃兹

```

1. 验证座机

   - 比如010-12345678 0797-1234567
   - 开头是3-4位，首位必须是0
   - -后面是7-8位

   ```
   var phoneReg = /^0\d{2,3}-\d{7,8}$/;

   ```

   ​

2. 验证姓名

   - 只能是汉字
   - 长度2-6位之间
   - 汉字范围[\u4e00-\u9fa5]

   ```
   var nameReg = /^[\u4e00-\u9fa5]{2,6}$/;

   ```

3. 验证QQ

   - 只能是数字
   - 开头不能是0
   - 长度为5-11位

   ```
   var qqReg = /^[1-9]\d{4,10}$/;

   ```

4. 验证手机

   - 11位数字组成
   - 号段13[0-9] 147 15[0-9] 177[0178] 18[0-9]

   ```
   var mobileReg = /^(13[0-9]|147|15[0-9]|17[0178]|18[0-9])\d{8}$/;

   ```

5. 验证邮箱

   - 前面是字母或者数字
   - 必须有@
   - @后面是字母或者数字
   - 必须有.
   - .后面是字母或者数字

   ```
   var emailReg = /^\w+@\w+(\.\w+)+$/;

   ```

【14-案例-完整版表单校验.html.html】

3. 补充知识点

3.1. string.replace方法

> string.replace(searchValue, replaceValue);replace方法的第一个参数，可以传正则表达式。功能非常的强大。

【15-string的replace方法.html】

```
var str = "   123AD  asadf   asadfasf  adf  ";
1 替换掉字符串中的所有空白
2. 将所有的ad替换成xx
3. 将所有的ad/AD替换成xx

var str = abc,efg,123,abc,123,a
4. 所有的逗号替换成句号

var jsonStr = '[{"name":"张三",score:80},{"name":"张三",score:90},{"name":"张三",score:81}]'; 
5. 把所有成绩都修改成100分

var str = "“你饿了,调我们的粮进京。你渴了.调我们的水进京。高考了，你特么想尽千方百计不让我们的孩子进京。为什么？!” 我们呼吁：全国一张卷，一个录取线！愿赌服输！最近高考方案闹得沸沸扬扬，其实大家就是要的公平竞争！同样都是孩子，同样的国家，同样的教育！为何不同的待遇？"; 
6. 把所有，。,.！!?？全部替换成.

```

3.2. arguments参数

> JavaScript中，arguments对象是比较特别的一个对象，实际上是当前函数的一个内置属性。也就是说所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有的实参。arguments是一个伪数组，因此及可以进行遍历

【16-arguments参数.html】

```
//1. 求任意个数的最大值
//2. 求任意个数的和

```

3.3. 递归函数

> 递归函数指的是函数直接的或者间接的调用函数本身。递归函数一定要留有出口，不然浏览器会崩溃。

### 数组

1. 把Math对象作为apply()的第一个参数,从而正确的设置this值,然后可以将任何数组作为第二个参数.

- ```javascript
  var values=[1,2,3,4,5];
   var max=Math.max.apply(Math,values);
   console.log(max);
  ```

#### 


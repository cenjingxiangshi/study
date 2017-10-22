# angularJS

------

JavaScript 引擎：FireFox 的 SpiderMonkey，IE/Edge 的 Chakra，Chrome/Opera 的 V8，Safari 的 JavaScriptCore

### angularJS

#### 单页面应用SPA

单页Web应用（single page application，SPA），就是只有一个Web页面的应用，是加载单个HTML页面，并在用户与应用程序交互时动态更新该页面的Web应用程序。接近原生APP用户体验;

实现:

1. 类似tab栏切换的效果,用hash值来实现跳转,`<a href="#hash"></a>`,

2. 点击a链接会直接在location中拼接hash值,-->location.hash--->`example.com#hash`

3. 用window.onhashchange事件来监听location中hash值的变化,从而实现跳转到不同的tab页面

4. 锚点(#)用作页面内跳转,实现请求不同资源的标示,并展示在不同的tab栏中,

   ```javascript
   //监视location.hash值变化,实现页面跳转
       window.onhashchange = function () {
         console.log(location.hash)
         var url = './' + location.hash.slice(1) + '.json'
         //根据变化的hash值来发送ajax请求
         $.ajax({
           url: url,
           success: function (data) {
             console.log(data);
             $('#wrap').html(template('myTemp', data))
           }
         })
       }
   ```

   ​

#### angular使用

+ **案例解析**

1. [ng-app](在页面加载完成后angular中的js就会执行,首先在页面中搜索ng-app所在的元素,然后启动一个angular的实例) 页面中只有第一个ng-app会生效
2. 启动angular后,会创建一个数据模型的容器
3. 继续解析ng-app所在的元素中的HTML代码, 遇到ng开头的指令,就会执行与指令相关的操作
4. [ng-model='username'](解析到了ng-model='username'指令,angular会先去数据模型找与username对应的数据,由于数据模型没有,就会新建一个username,并且将当前的input标签和username进行一个双向绑定.)
5. [{{username}}](解析到{{}}插值表达式,angular会去数据模型找到username对应的数据,将其和当前所在位置进行绑定,将username中数据显示出来.)
6. [ng-controller](控制器,页面中可以有多个,)

+ **操作数据模型的数据**



#### 模块化及控制器

1. 定义模块:`angular.module(模块名称,[当前模块依赖项])` 数组参数不能省略!
2. 控制器:angular中对于数据进行管理的工具,`模块对象.controller(控制器名称,callback)` 
3. 如果在双向绑定的数据模型中,input文本框为空,则$scope获取到的值是undefined



```javascript
//定义模块
angular.module('app',[]);
var app=angular.module('app');//变量接受模块
//也可以直接定义模块后赋值给变量接受
var app=angular.module.('app',[]);

app.controller('mycontroller',function($scope){//$scope是数据模型/数据容器
    $scope.username='zs';//通过控制器来操作页面中的数据,实现数据双向绑定
})
```



#### localStorage存储

`localStorage.setItem` 存储字符串到localStorage中

`localStorage.getItem` 获取localStorage的字符串

**将用户注册信息存储进localStorage中**

```javascript
//判断用户名是否已存在localStorage中
if (localStorage.getItem($scope.username)) {
            $scope.error = "用户名已存在,请重新注册";
            return false;
}
//将用户注册信息存入localStorage中 先存储进对象中
var userInfo = {
  username: $scope.username,
  userPwd: $scope.pwd
}
//先将对象转化为字符串才能存入localStorage中 以用户名为属性名 以便查询是否有重名注册
localStorage.setItem(userInfo.username, JSON.stringify(userInfo));
```



#### angular的一些指令

1. `ng-app` : 定义一个模块,即根元素

2. `ng-module` : 绑定表单元素值到数据模型中,数据双向绑定,`<input>` `<select>` `<textarea>` 元素支持该指令

3. `ng-controller` : 控制器, 附属于模块,可嵌套,子级控制器可以拿到父级同名属性的值;

4. `ng-cloak`: 搭配css`[ng-cloak]{display:none!important}` 使用,可使页面中的插值表达式隐藏,阻止其在angularjs加载前闪烁;

5. `ng-class`:可与数据模型进行双向绑定, 搭配`ng-module`使用,在同一个控制器里可以同步两者的值.

   ```html
   <!-- div的背景色随着select选择框改变 -->
   <select name="" id="" ng-model='classname'>
       <option value="red">red</option>
       <option value="blue">blue</option>
       <option value="green">green</option>
       <option value="cyan">cyan</option>
     </select>
     <div ng-class="classname"></div>
   ```

6. `ng-if` : 判断条件是否为true, 为false时根本不会解析标签内容,当前标签都不会出现在页面中,

7. `ng-show` : 与`ng-if`的区别是,show会在条件为false时解析内容,并隐藏标签.`display:none;` 

8. `ng-checked` : 设置当前复选框是否被选中,**单向绑定数据, 只有数据模型能够影响标签选中状态,而选中状态无法改变数据模型中的值**

9. `ng-disabled` : 设置当前元素disabled属性,单向绑定

10. `ng-selected`  : 设置option的selected属性,单向绑定

11. `ng-init` : 

12. `ng-repeat` : 遍历数组$scope.arr,  `<li ng-repeat='item in arr'>{{item}}</li>`  如果数组出现相同的元素,会报错,使用`<li ng-repeat='item in arr track by \$index'>{{item}}</li>` 

    ```javascript
    //ng-repeat提供了一些内置变量
    //$index 当前元素索引
    //$first 当前元素是否是第一个元素 显示布尔值
    //$last 当前元素是否是最后一个元素 显示布尔值
    //$middle 当前元素是否是中间元素,除了第一个和最后一个 显示布尔值
    //$odd 当前元素下标是否为奇数 显示布尔值
    //$even 当前元素下标是否为偶数 显示布尔值
    ```

    ​

13. `ng-class` 

    1. `ng-class='name'` name可以等于一个类名或者空格隔开的好几个类名;
    2. `ng-class={类名:布尔值,类名:布尔值}` 用布尔值来控制是否需要这个类名

    ```html
    <div ng-repeat="item in students" ng-class="{red: $odd, green: $even, bigger: $first||$last}">
    ```

    ​

14. `ng-bind-html` : 可以识别字符串中的HTML标签,但是属于模块ngSanitize,所以得依赖于这个模块才能使用`bg-bind-html` ,这个模块的下载下来后引入页面,在主模块中依赖

    ```html
    <!--ngSanitize模块可以让ng-bind-html识别字符串中的标签-->
    <div ng-bind-html="str"></div>
    <script>
    	angular
          	.module("app", ["ngSanitize"])
          	.controller("c1", function($scope){
          		$scope.str = "<p>我是一个文本字符串</p>";
        	})
    </script>
    ```

    ​




#### 设计模式MVC

[MVC详述](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

[MVC,MVVM,MVP详述](https://blog.nodejitsu.com/scaling-isomorphic-javascript-code/)

1. module:
2. view:
3. controller:



#### angular.bootstrap()方法启动模块

`angular.bootstrap(当前模块要管辖的范围元素,[要启动的模块名称])` --->可以在页面中启动多个模块

`ng-app` 只能在页面中启动一个模块



####\$scope.\$watch()方法

语法:`$scope.$watch('要监视的数据',function(newValue,oldValue){});` 

1. 若单纯监视个name值,直接调用语法;每次值变化都会触发回调函数
2. 若监视的数据是个对象,那么需要深度监视才会跟踪到对象属性值的变化,语法变更为:`$scope.$watch('要监视的数据',function(newValue,oldValue){},true);`  传入第三个参数true,表示深度监视
3. `$watch` 只能监视在`$scope` 中数据的变化！

```javascript
angular
      .module('app', [])
      .controller('cl', ['$scope', function (s) {
        s.name = '我就是我';
        s.user = {
          name: '对象'
        }
        s.$watch('name', function (nv, ov) {
          console.log('旧值  ' + ov + ' 变成了 ' + nv)
        });
        s.$watch('user', function (nv, ov) {
          console.log(ov, nv)
        }, true);
      }]);
```





`angular.element` 简化版的jquery

若页面引入jquery.js,则angular.element就等于$

```javascript
var $ = angular.element;
$(document.getElementById("#box")).addClass();//反正就是各种不好用,各种不支持原版jquery的css选择器和大部分方法
```



#### angular的作用域

**angular的控制器之所以能向上查找,是嵌套时,子级的$scope原型指向父级\$scope** 

`$rootScope` 这个表示的就是全局作用域

```javascript
.controller('cl',function($scope,$rootScope){})
```

`ng-repeat` 也有一个小小的作用域

```html
<div ng-repeat='item in arr'>
  {{item}}
  <!--这就是ng-repeat的作用域-->
</div>
```



#### 创建控制器的几种方式

1. 推断式

   ```javascript
   //推断式的格式 形参的名称固定 不能修改，会导致在代码压缩的时候，出现问题！！
   angualr
   	.module('app',[])
   	.ontroller('cl',function($scope,$window){});
   ```

   ```javascript
   //推断式为什么传参的名称固定? 原理公式如下:
   var libs = {banshou: {name: "扳手"},qizi: {name: "起子"},dianzuan: { name: "电钻"},langtou: {name: "榔头"},dianju: {name: "电锯"},laohuqian: {name: "老虎钳"}};//模拟angular内部服务的实现
       //函数调用,服务作形参传入
       function fn(dianju, langtou, laohuqian, qizi) {
         console.log(dianju.name, langtou.name, laohuqian.name, qizi.name);
       };
       //fn函数toString
       var fnStr = fn.toString();
       var r = /^[^\(]*\(\s*([^\)]*)\)/;
       //用正则匹配拿到参数字符串
       var fnMatch = fnStr.match(r);
       //字符串转换为数组
       var praArr = fnMatch[1].split(",");
       //去除数组元素的前后空格
       var praArr = praArr.map(function (v) {
         return v.trim();
       });
       //根据拿到的形参名称去libs中查找对应的工具
       var tools = [];
       praArr.forEach(function (v) {
         tools.push(libs[v]);
       });
       //将形参对应的工具传入fn中 apply方法传递数组可转换成单个参数
       fn.apply(null, tools);
       //fn函数直接使用
       fn();
   ```

   ​

2. 注入式

   ```javascript
   //注入式书写格式
   angular
   	.module('app',[])
   	.controller('cl',['$scope','$window','$rootScope',function(s,w,r){}])
   ```

   ```javascript
   //注入原理:
   function di(arr) { //di相当于controller()
         //pop()会返回数组最后一个参数并更改原数组
         var fn = arr.pop();
         var argus = arr; //剩下的都是参数名称
         argus = arr.map(function (v) {
           return obj[v]; //obj是参数和方法的对象
         }); //存放的是形参对应的方法  数组形式
         //让fn调用得到的具体方法参数
         fn.apply(null, argus);
       }
   ```

   ​

3. 面向对象式

   ```html
   <body ng-app="app">
     <!-- var c1Instance = new c1()  实例化c1构造函数-->
     <div ng-controller="c1 as c1Instance">
       <input type="text" ng-model="c1Instance.name">
       <span>{{str}}</span>
     </div>
     <script src="./node_modules/angular/angular.js"></script>
     <script>
       angular
         .module("app", [])
         .controller("c1", function ($scope) {
           $scope.str = "这是通过$scope绑定的内容";
           this.name = "陈小春";
         })
       //使用面向对象的方式创建控制器的时候，我们可以直接给控制器实例绑定属性
       //通过在函数中 this.数据=内容
       //在html代码中，首先，指定控制器的语法： ng-controller="控制器名称 as 实例名称"
       //访问数据的方式： 实例名称.数据
     </script>
   </body>
   ```

   ​

   ​


#### 过滤器

重点掌握一个filter方法!

1. `currency` 货币,语法:`{{ currency_expression | currency : symbol : fractionSize}}` 解释:`{{money | 过滤器名称 : 参数1 : 参数2}}` 

2. `date` 时间, 语法:`{{ date_expression | date : format : timezone}}` 解释:`{{now | date: "yyyy-MM-dd hh:mm:ss": "+0800"}}` 

3. `limitTo` 语法:`{{ limitTo_expression | limitTo : limit : begin}}` 解释:截取

4. `lowercase` `uppercase` 语法: `{{ uppercase_expression | uppercase}}` 大小写格式化

5. `orderBy` 语法:`{{ orderBy_expression | orderBy : expression : reverse : comparator}}` 解释:通过expression排序

6. `filter` [语法:](https://code.angularjs.org/1.6.6/docs/api/ng/filter/filter) 将包含该内容的对象过滤出来

   1. filter 后面如果跟的参数是一个 数值的话，那么angular会在数组的所有元素的所有的属性中去查找包含该数值的内容 
   2. filter 后面如果跟的参数是一个对象，那么对象的属性名，表示的就是要在哪个属性中进行查找，

   ```html
   <body ng-app="app">

     <div ng-controller="c1">
       <input type="text" ng-model="search">
       <ul>
         <li ng-repeat="item in students | filter: search">
           我叫{{item.name}},我{{item.height}}cm高，我{{item.weight}}kg重,我在班里排第{{item.rank}}
         </li>
       </ul>
     </div>
     <script src="./node_modules/angular/angular.js"></script>
     <script>
       angular
         .module("app", [])
         .controller("c1", ["$scope", function ($scope) {
           $scope.students = [{name:"曾学炉",height:150,weight:150,rank:1},{name:"易俊雄",height:180,weight:80,rank:2},{name:"信占轩",height:140,weight:140,rank:3},{name:"小仙女",height:160,weight:80,rank:4},{name:"陈百威",height:110,weight:119,rank:0},]
         }])
     </script>
   </body>
   ```

   ​

### todoMVC-angular实例作业

1. 谨记数据双向绑定,`ng-model` 表示表单元素的值
2. 用angular注册事件--->`ng-click(fn($event))` --->表示点击时触发fn函数,并将事件对象传给函数fn,记得fn用形参接受下.



#### 数据共享

1.自定义工厂，可返回任意类型的数据
自定义工厂 方式一  .factory方法

```javascript
var app = angular.module('myApp', []);
    app.factory('CustomFactory', function () {
      return 'aaabbb';
    });

    //自定义工厂 方式二 $provide.factory方法
    angular.module('myApp', [], function ($provide) {
      $provide.factory('CustomFactory', function () {
        return 'aaabbb';
      });
    });

    //使用自定义工厂：
    app.controller("myCtrl", function ($scope, CustomFactory) {
      $scope.name = '张三';
      console.log(CustomFactory);
    });
```



2.自定义服务，必须返回引用类型的数据

```javascript
//自定义服务 方式一.service方法
    var app = angular.module('myApp', []);
    app.service('CustomService', function () {
      return {
        city: '北京',
        id: 1
      };
    });

    //自定义服务 方式二 $provide.service方法
    angular.module('myApp', [], function ($provide) {
      $provide.service('CustomService', function () {
        return {
          city: '上海'
        };
      });
    });

    //自定义服务 方式三 $provide.provider方法
    angular.module('myApp', [], function ($provide) {
      $provide.provider('CustomService', function () {
        this.$get = function () {
          return {
            message: 'CustomService Message'
          }
        }
      });
    });

    //使用自定义服务：
    app.controller("myCtrl", function ($scope, CustomService) {
      $scope.name = '张三';
      console.log(CustomService);
    });
```

3.示例：使用自定义工厂实现多个控制器共享数据

```javascript
var app = angular.module('myApp', []);
    app.factory('myData', function () {
      return {
        message: '共享的数据'
      };
    });
    app.controller("myCtrl1", function ($scope, myData) {
      $scope.myData = myData;
    });
    app.controller("myCtrl2", function ($scope, myData) {
      $scope.myData = myData;
    });
```



示例说明：先用自定义工厂方法定义一个对象myData，包含message属性，然后新建两个控制器的myData都指向上述myData,由于是引用类型，所以三个myData改变任一则全部改变，由此实现了数据共享。





先引入模块,再引入服务

脏值检测是数据双向绑定的原理



### 服务的创建方式 

[angular五种服务详解](http://www.cnblogs.com/liulangmao/p/4078246.html)  

1. `constant`  :  `app.constant('name',obj)` name为服务的名字,obj为一个json对象.

   ```javascript
   //只读属性,共享数据
   angular
         .module('app', [])
         .constant('constantService', 'constant服务提供的内容')
         .controller('cl', ['constantService', function (constantService) {
           console.log(constantService);
         }])
   ```

   ​

2. `value`  `app.value('name',obj)` name为服务的名字,obj为一个json对象.

   ```js
   //共享数据,可修改服务的内容
   angular
         .module('app', [])
         .value('valueService', 'value服务提供的内容')
         .controller('cl', ['valueService', function (valueService) {
           console.log(valueService);
           valueService = "可修改的value服务内容";
           console.log(valueService);
         }])
   ```

   ​

3. `service` : `app.service('name',constructor)` name为服务的名字,constructor是一个构造函数. 

   控制器中通过服务的名字实例化对象,就可以使用服务的属性和方法

   在一个分层良好的 ng 应用中，controller 这一层应该很薄。 应用中大部分的业务逻辑
   和 持久化数据 都应该放在 service 中。数据持久化：将数据存储起来（存储数据库中）

   ```js
   angular
         .module('app', [])
         .service('myservice', ["$log", function ($log) {
           //1. 创建服务 与创建构造器的语法一样
           //2. 函数参数是构造函数, 通过this添加属性方法
           //3. 控制器中通过服务的名字实例化对象,就可以使用服务的属性和方法
           this.get = function () {};
           this.set = function () {};
           this.update = function () {};
           this.delete = function () {};
           //service主要针对model的CRUD做一些封装,来薄化controller层
         }])
         .controller('cl', ['$scope', 'myservice', function ($scope, myservice) {
           console.log(myservice);
         }])
   ```

   ​

4. `factory` : `app.factory('name',function(){return obj})` name为服务的名字,第二个参数传入一个函数,函数需要有一个返回值obj,返回一个对象.实际被注入的服务就是这个对象.

   factory服务是最常见最常用的服务类型,几乎可以满足90%的自己开发的需求,使用它可以编写一些逻辑,通过这些逻辑最后返回所需要的对象.比如使用$http来获取一些数据.我们就在factory创建的服务里抓取数据,最后返回.

   它和constant,value最大的区别是,factory服务是有一个处理过程,经过这个过程,才返回结果的. 

   ```js
   serviceApp.factory('myConfig',function(){
       var myname = 'code_bunny';
       var age = 12;
       var id = 1;
       return {
           name: myname,
           age: age,
           getId: function(){
               return id
           }
       }
   });
   //或者如下
   serviceApp.factory('myConfig',function(){
       return new constructorFun()
   });

   function constructorFun(){
       var myname = 'code_bunny';
       var age = 12;
       var id = 1;
       this.name = myname;
       this.age = age;
       this.getId = function(){
           return id
       }
   }
   //做配置
   serviceApp.config(function($provide){
       $provide.decorator('myConfig',function($delegate){
           console.log($delegate);
           $delegate.money = '100w';
           return $delegate
       })
   });
   ```

   ​

5. `provider` 

   ```js
   angular
         .module('app', [])
         .provider("myService4", function () {
           //这个变量其实就是所谓的配置内容！
           var name = "默认值";
           //这个对象就是在模块启动时调用config方法来配置该服务的时候获取到的对象
           return {
             //给config方法中配置当前服务提供一个途径
             setName: function (value) {
               name = value;
             },
             //$get是必须有的内容，名字也不能改！
             $get: function () {
               //这个方法返回的对象才是真正最中会被使用的服务对象
               return {
                 sayHello: function () {
                   console.log(name);
                 }
               }
             }
           }
         })
         //config方法中能够配置的服务只有通过provider来创建的服务
         //在config方法中配置服务的时候，注入的时候，注入的内容不是最终的服务对象
         //而是我们服务的提供者，可以通过服务提供者提供设置方法（setName）
         //对服务所需要使用数据，进行配置
         //以后在使用服务的时候，我们用到的服务对象访问到的数据就是配置好的内容了
         .config(["myService4Provider", function (myService4Provider) {
           myService4Provider.setName("我是被配置的内容");
         }])
   ```

   ​

### angular中实现数据绑定的原理是脏检测

1. 在angular对页面中内容进行解析的时候，遇到数据绑定指令的时候, 会给当前的数据加上\$watch, 将这个$watch放到一个容器（监听队列）.
2. 当程序在运行的时候，数据发生改变的时候，会触发\$watch, 将监听到的改变进行存储，将所有的在监听队列中的$watch全部检查一遍，看有没有内容改变
3. 在进行脏值检测的时候，会将当前监听到的改变先暂时存储器来，重新进行一次脏值检测，将页面上所有的指令全部重新执行一遍，如果还发现有数据改变，继续将改变的内容存储，再继续重新开始脏值检测，直到检测不到新的变化为止，最后再将已经保存好的变化内容更新到页面上
4. \$digest angular中用来进行脏值检测方法,`setTimeout` 之类js方法无法触发脏检测,会手动触发, `$rootScope.$digest()`  `$scope.$apply()` 
5. 脏值检测循环，是通过angular自行触发！



### angular路由使用步骤

1. 引入文件: 先下载angular-route.js,版本必须与使用的angular.js版本一致

2. 在当前模块中依赖ngRoute : `.module('app',[ngRoute])` 

3. 配置路由规则:`.config(['$routeProvider',function(){}]` 如下

4. 在页面中放置容器:`<div ng-view></div>` 或者`<ng-view></ng-view>` 

5. 记得开服务区用域名访问,因为angular内部存在跨域问题

   ```js
   angular
         .module('app', ['ngRoute'])
         .controller('cl', ['$scope', function ($scope) {
           $scope.name = 'active';
           $scope.msg = 'complete';
         }])
         .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
           $routeProvider
             .when('/active', {
               controller: 'cl',
               templateUrl: './views/active.html'
             })
             .when('/complete', {
               controller: 'cl',
               templateUrl: './views/complete.html'
             })
             .when('/404', {
               controlle: 'cl',
               templateUrl: './views/404.html'
             })
             .otherwise({
               redirectTo: '/404'
             })
         }])
   ```

6. 路由的地址规则可以传参数,





补充:数据存入对象中,从对象中取值,形同数组

```js
var obj={
    active:false,
  complete:true
}
$scope.status=status[$routeParams.status]
```

### 自动补全css的前缀

`prefixfree.js` 



### ng-src

- 作用：设置图片的src属性
- 目的：为了解决浏览器优先解析img的src属性的问题
- 其他属性：`ng-href`

```html
<img ng-src="{{item.iamges.large}}" alt="">
```

## $http服务

- 说明：提供了XHR的功能，类似于jQuery中的$.ajax()

```js
app.controller('cl',['$scope','$http',function($scope,$http){
    $http({
    method:'get',
  	url:'绝对路径'
}).then(function(){
        //成功后的回调函数
    },function(){
        //失败后的回调函数
    })
}])
```



### $http.get

- 作用：发送get请求
- 语法：`$http.get(url, [option])`

```javascript
app.controller('DemoController', ['$scope', '$http', function($scope, $http) {
    // 路径最好使用绝对路径
    $http.get('url').then(function(response) {
        // 成功的回调函数
    }, function() {
        // 失败的回调函数
    });
}]);
```

## JSONP -实现跨域

### JSONP跨域原理分析

[笔记中有jsonp的函数封装](/tool.js/jsonp.js) 

- 动态创建script标签并添加到页面中，浏览器会根据script标签的src属性发送请求
- script标签的src属性带有：'?callback="jsonpcallback"' 参数
- 由服务器返回的是：函数调用，格式为：';jsonpcallback({})'

### 其他跨域方式

- `window.name`：同一个标签也中的页面共享同一个 name 属性
- `iframe`
- `postMessage`

## 2 $http.jsonp -实现跨域

1. 使用\$http服务中的jsonp方法来发送跨域请求,首先要将请求的地址加到白名单中,通过`$sce.trustAsResourceUrl`  

   ```js
   var url = $sce.trustAsResourceUrl("http://api.douban.com/v2/movie/in_theaters");
         //直接调用jsonp使用已经被加到白名单中的url，来进行请求即可
         $http.jsonp(url, {
           params: {
             jsonpCallbackParam: 'callback'
           }
         }).then(function (data) {
           console.log(data);
         }, function (err) {
           console.log(err);
         })

   ```

   ​

- 说明：angular为了防止全局污染，把JSONP的回到函数放在`angular.callbacks`对象中
- 注意：豆瓣API 支持JSONP方式的调用，但是不支持包含点的情况！
- 结论：无法使用angular的内置 $http.jsonp 跨域访问豆瓣API中的数据

```javascript
// $http.jsonp 版本升级说明：
// https://docs.angularjs.org/guide/migration#migrate1.5to1.6-ng-services-$http

// 1.5 版本中使用方式：
$http.jsonp("url地址?callback=JSON_CALLBACK").then();
// 获取手机号码归属地
// http://v.showji.com/Locating/showji.com2016234999234.aspx?m=13333333333&output=json&callback=JSON_CALLBACK&timestamp=' + (new Date()-0)

// 1.6以上版本中的用法：
// url 中也不在需要 callback=JSON_CALLBACK
var src = 'http://v.showji.com/Locating/showji.com2016234999234.aspx?m=13333333333&output=json&timestamp=' + (new Date()-0);
// 需要注入 $sce 服务
var ret = $sce.trustAsResourceUrl(src);

$http.jsonp(ret, {
    jsonpCallbackParam: 'callback'
})
```

## \$scope.\$apply()

- 作用：强制让 angular 监视数据的变化
- 注意：angular的内置方法，会自动调用$apply执行脏检查
- 说明：

```
1 angular代码执行会触发 Dirty Check 机制，进行数据的双向绑定
2 异步操作是在angular代码执行完毕之后才执行的
3 也就是说，angular代码执行完了，脏检查已经执行完毕，才执行的异步回调
4 此时，可以在异步操作中手动调用 $scope.$apply() 方法告诉angular让其立即执行一次 Dirty Check
5 执行完毕，angular知道了数据变化，就会展示出我们想要的数据

如果没有调用 $scope.$apply，数据已经改变了，但是双向绑定没有触发。
```

## 自定义指令

- [angularjs.org - Directive](https://docs.angularjs.org/api/ng/service/$compile)
- 概述:

```
1 自定义指令用于扩展和增强HTML
2 用于封装一些常用而且共用的功能
3 AngularJS仍然有DOM操作, 所有的DOM操作都应该集中在自定义指令中
4 内部指令基本满足我们平时开发的需求, 少数情况的一些特殊需求, 会用到自定义指令
```

### 创建指令

- 语法：`模块.directive('指令名称', callback)`
- 说明：创建指令的语法与创建控制器的语法完全相同

```js
// 第一个参数：表示指令的名称，使用驼峰命名法，在视图中使用时修改为`-`分割的形式
// 第二个参数：是一个回调函数，让用户设置该指令的行为
angular.module('testApp', [])
    .directive('myBtn', [function() {
        return {};
    }]);
```

### 指令常用属性说明

[博客解释自定义指令](http://www.cnblogs.com/powertoolsteam/p/angularjs-custom-directive.html) 

- `template`: 模板，设置自定义指令显示的内容
- `templateUrl`: 可以指定一个模板的id或者url地址
  - id：模板的id，需要给模板设置type属性为：`type="text/ng-template"`，该模板需要在`ng-app`内
  - url: 一个页面，页面中用于存放模板标签 （agnular会异步请求该路径，注意跨域问题）
- `restrict`: 限制指令的使用方式，取值：'E'/'C'/'M'/'A'，取值是区分大小写的

```html
<!-- 标签 -->
<my-btn></my-btn>
<!-- 类名 -->
<div class="my-btn"></div>
<!-- 注释 -->
<!-- directive:my-btn -->
<!-- 属性 -->
<div my-btn></div>
```

- `link`: 为DOM元素注册事件以及更新DOM，一般将所有的业务逻辑放在此处
  - 该属性的值是一个函数，这个函数给当前指令提供了事件，该函数有3个参数
  - `scope`: 表示当前指令的作用域，用来暴露一些数据，类似与控制器的scope，只在当前指令中有效
  - `element`: 表示一个jqLite对象，是自定义指令所在标签对应的jqLite对象
  - `attribute`: 表示自定义指令所在标签的所有指令属性的集合
  - link 用于控制指令的行为
- `replace`: 需要一个布尔值。为true时，会将自定义指令所在的标签替换为模板字符串
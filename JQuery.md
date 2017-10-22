### 事件冒泡和事件捕获

+ 事件冒泡:一直都存在,只是没有注册事件就不会触发而已.
  + addElementListener(),第三个参数默认值是false,事件冒泡;true是事件捕获
  + 阻止事件冒泡/捕获:e.stopPropagation();阻止传播;IE678阻止冒泡是:e.cancelBubble=true;
  + 阻止浏览器默认行为:e.preventDefault();

+ 事件流 : 事件捕获阶段--事件目标阶段--事件冒泡阶段;

+ 通过键盘码知道按下的是哪个键,e.keycode,获取键盘码是keydown或者keyup事件,keypress不能获取

+ ```
  navigator.userAgent：浏览器版本
  ```




### 一些知识点

- ```css
  /*单行溢出*/
  .one-txt-cut {
    overflow: hidden;
    /* 强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象。 */
    white-space: nowrap;
    /* 当内联内容溢出块容器时，将溢出部分替换为（...）。*/
    text-overflow: ellipsis;
  }

  /*多行溢出*/
  .txt-cut {
    overflow: hidden;
    text-overflow: ellipsis;
    /*将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）*/
    display: -webkit-box;
    /*显示2行*/
    -webkit-line-clamp: 2; 
    /* 设置伸缩盒对象的子元素从上到下纵向排列 */
    -webkit-box-orient: vertical;
  }
  ```

- 文字的间距:letter-spacing;

- css3

  1.transform属性

  - translate()
  - rotate()
  - scale()
  - skew()
  - matrix()

- perspective属性的两种书写方式:透视效果

  - 直接给父盒子加perspective,里面的元素形态不一致
  - 给每个子元素加perspective时,每个子元素都有自己的视点,每个子元素的形态一样.

- perspective-origin:透视点位置

- ```css
  transform-style: preserve-3d;
  ```

- ```css
  backface-visibility:hidden;/*后面的元素设置遮挡看不见效果*/
  ```

- transform-origin: *x-axis y-axis z-axis*;

  - x和y的取值如下,z取值length

  - ```html
    top
    center
    bottom
    length
    %
    ```

- 进入盒子时,display:block.离开时是display:none;

- 如下是判断鼠标进入盒子的四个方位值:

- ```javascript
  $("#wrap").bind("mouseenter mouseleave",
        function(e) {
          var w = $(this).width();
          var h = $(this).height();
          var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
          var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
          console.log([e.pageX,e.pageY]);
          console.log([this.offsetLeft,this.offsetTop]);
          console.log([x,y]);
          var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
          var eventType = e.type;
          var dirName = new Array('上方','右侧','下方','左侧');
          if(e.type == 'mouseenter'){
            $(this).html(dirName[direction]+'进入');
          }else{
            $(this).html(dirName[direction]+'离开');
          }
        });
  ```



- 迭代 : 迭代是重复反馈过程的活动，其目的通常是为了逼近所需目标或结果。每一次对过程的重复称为一次“迭代”，而每一次迭代得到的结果会作为下一次迭代的初始值。

- 盒子自适应的时候,是不能浮动的,这样就拿不到父盒子的宽度了,切记

- **JQuery中index()方法是,返回指定元素相对于其他指定元素的index位置**.

- **JQuery对象中,获取对象中DOM对象的下标方法是:**

  - ```javascript
    //给单个jQuery对象注册事件,获取当前jQuery对象在JQuery对象伪数组中的下标
    $jQuery.index( $(this)  );
    //给jQuery对象注册事件,获取当前DOM元素下标是
    $(this).index();
    ```

- 自动滚动到底部:div.scrollIntoView();自动滚动到能看到的地方

### 鼠标位置信息js中

+ screenX与screenY:光标相对于屏幕左上角的水平位置和垂直位置.

+ clientX与clientY:光标相对于可视区左上角的水平位置和垂直位置

+ pageX与pageY:光标相对网页即document左上角的需要位置,IE678不支持,兼容性封装如下:

  + ```
    function getPage(event) {
        return {
              //在IE678中使用document.documentElement.scrollLeft就可以获取到scrollTop的值
            x:event.pageX || event.clientX + document.documentElement.scrollLeft,
            y:event.pageY || event.clientY + document.documentElement.scrollTop
        }
    }
    ```

+ event.keyCode:键盘按下的键那个键盘码.(event是事件对象,即注册事件fn里的形参)


### 正则表达式

+ 独立于编程语言
+ 正则表达式
  + `var reg=new RegExp(/\d/);`  \d: digit数字;这是正则的规律
  + `var reg=/\d/;` 
  + 省略变量名直接调用:`/\d/.test=("aabbcc12");`返回值是true;
+ .test是测试字符串是否符合正则的规律.

#### 小知识点

+ **创建新数组来盛放一些数据好拿取**.

+ 清除选中的文字:

  + ```javascript
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    ```

+ JQuery中有scrollTop()方法

+ ```css
  html,body{
    height:100%;
  }//全屏,document=html=body;
  ```

+ prototype:原型;存储对象的方法.等价于fn

  + 原型中的this,指的就是当前对象,就是指我们创建出来的对象,构造函数最后记得返回this.

+ each();不写参数i,e时,在fn中直接写this指向$中的DOM对象.涉及隐式迭代

+ js中清除事件:box.onclick = null;

+ 在html的input标签中写了disabled,无论有值没值都会禁用这个input,但是DOM对象中.disabled=true是禁用,false是不禁用.

+ zepto(移动端类似jQuery的一个库)

+ 浏览器打开js文件等,默认是GBK,而我们的文件一般是UTF-8;所以在页面开头声明是UTF-8;

+ 在JQ对象中寻找点击的当前对象,拿来在别的事件中使用时,可以标记下当前对象好拿去用,比如加个不存在的类名或者全局变量存下下标.(其实有一个方法, 如下:

+ ```javascript
  $minus.on("click", function () {
      var index = $minus.index($(this));
    //可获取到点击的dom对象在$minus里的下标
  }
  ```

+ **Event对象:**注册事件时指定一个形参e,这个形参就是我们想要获取到的事件对象.e=e || window.event;兼容IE678.

+ **入口函数:**等待页面加载完成后.才执行函数.js的window.onload和jQuery的$(function(){});

+ **在js中给html加style.src时,图片的路径是从HTML开始,不是js开始**

+ 隐式迭代:给所有的DOM对象设置相同的值.所以给每个对象设置不同的样式需要手动遍历.each()

+ 播放 play():H5里新增的**js方法**,jq并没有封装这个方法,所以用

+ ```javascript
  $(this).get(index).load();
  $(this).get(index).play();
  //或者
  $(this)[index].play();
  ```

+ ```javascript
  $("input:checked")找到所有被选中的按钮;
  $("input:checked")选中按钮的个数.
  ```


### JQuery

+ JS中的入口函数是 `window.onload=function(){};`并且等待图片和文件的加载才执行.
+ jQuery里的入口函数是: `$(function(){})`或者`$(document).ready(function(){});`  jQuery的入口函数只等待页面加载完成,不会等待图片和文件加载完成.所以获取不到图片宽高,但是可以获取父盒子的宽高.
+ 开发环境/测试环境/生产环境;min的jQuery压缩后放在生产环境,未压缩放在开发环境.
+ 使用jQuery步骤:1.引入JQuery文件.2.记得写入口函数.`$(function(){});` 3.在入口函数中写功能实现.
+ DOM对象:通过js的方法获取到页面中的元素,返回的就是DOM对象,即JS对象.
+ jQuery对象:通过JQuery的方法获取到的页面中的元素,返回的是JQuery对象.
+ JQuery对象是一个伪数组,里面存放了大量的DOM对象,就是DOM对象的一个集合.
+ js对象不能调用JQuery对象的方法.只能调用js对象的方法.
+ JQuery对象也不能直接调用js的方法.可以将里面的DOM对象拿出来再用,`$("div")[0]` 
+ DOM对象转换成JQuery对象:`$(DOM对象名)` 
+ `$(this)`this指向当前DOM对象,需转换成JQuery对象,.children是子元素,参数是选择器



#### jQuery 名称冲突  

jQuery 使用 $ 符号作为 jQuery 的简介方式。

某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

jQuery 使用名为 noConflict() 的方法来解决该问题。

*var jq=jQuery.noConflict()*，帮助您使用自己的名称（比如 jq）来代替 $ 符号。

### JQuery方法

+ toggle方法:

  + $(selector).toggle(speed,callback);callback是方法完成后执行的函数名称.

+ Fading 方法:

  + fadeIn()--->$(selector).fadeIn(speed,callback);
  + fadeOut()--->$(selector).fadeOut(speed,callback);
  + fadeToggle()--->$(selector).fadeToggle(speed,callback);
  + fadeTo()--->$(selector).fadeTo(speed,opacity,callback);

+ 滑动

  + ```
    $(selector).slideDown(speed,callback);
    ```

  + ```
    $(selector).slideUp(speed,callback);
    ```

  + ```
    $(selector).slideToggle(speed,callback);
    ```

+ jQuery 动画 - animate() 方法

  + ```
    $(selector).animate({params},speed,callback);
    ```

+ 隐式迭代:设置样式是会给所有的对象设置上相同的样式,不用遍历.**获取样式的时候,不会遍历,直接返回第一个对象的样式..**

+ addClass有权重问题,样式作用还是取决于css中的权重来实现效果.

+ Class操作

  + 添加类:addClass;
  + 移除类:removeClass;
  + 判断类:hasClass;(判断是否有某个类,返回布尔值);
    + 需求:判断是否有这个类,有就移除,无则添加.
  + 切换类:toggleClass.

+ 属性操作

  + attr,用法和css一样,用来操作属性.也可以removeAttr

+ prop操作

  + 针对checked,selected,disabled这类布尔类型的属性来说,attr方法要换成prop();才能返回true和false.

+ 动画队列:动画按照顺序执行.上个执行完才会执行下一个.

  + ```javascript
    $(this).fadeIn(1000).delay(4000).fadeOut(1000);
    ```

  + ```javascript
    $(this).stop().slideDown();//stop()
    $(this).stop().slideUp();
    //stop()需要在动画前面加,停止当前正在执行的动画.
    ```

+ jq添加节点:

  + $(this).append('完整标签');
  + append()方法作用是剪切后放在后面,形同appendChild.
    + appendTo()方法:添加到某个元素的子元素最后面.
    + appendTo($(this))或appendTo(this);
  + prepend()方法是剪切后放在子元素的前面.
    + prependTo()添加到元素的子元素前面
  + before()方法:把某个元素添加到自己的前面作为兄弟元素.
  + after()方法是加在后面作为兄弟元素

+ 删除节点:

  + 自己调用remove();自杀式清除;
  + 清空:empty();把子元素都删除,清理门户.

+ 克隆节点

  + $.clone().appendTo(父元素);
    + **clone的参数:true和false都是深度复制.true是连事件都一起复制,false却不会**

+ width() height()

  + width()获取的是内容区宽度,即width,可设置宽度,后面三个不可以设置值.
  + innerWidht()获取的是内容加padding值 width+padding
  + outerWidth()获取的是width+padding+border,参数默认false.
  + outerWidth(true)获取的是width+padding+border+margin
  + 获取可视区的宽高
    + $(window).width()
    + $(window).height()

+ scrollTop与scrollLeft

  + $(window).scrollTop():获取

  + $(window).scrollTop(value):设置

  + window没有scrollTop这个属性,对应的是pageYoffset,且只读,不能设置

    + 有scrollTop这个属性的是html和body.可如下设置scrollTop的值.

    + ```javascript
      $("html,body").animate({scrollTop:0})//兼容所有浏览器
      ```

+ offset()方法获取位置永远都是相对body的,跟父元素没有关系

  + offset({left:100,top:100}):设置
  + offset():获取左上数值对象

+ position()方法获取的是相对有定位的父元素的位置,只读,不能设置,搭配css()方法使用来设置位置.

  + position().left获取left值.

+ bind()方法事件绑定 可注册多个事件

  + $.bind("click mouseenter",function(){});

    ```javascript
    $.bind({事件对象});
    ```

  + 解绑:$.unbind("click");解除事件

  + bind()无法注册委托事件,无法支持动态绑定事件

+ delegate()方法注册事件,委托事件

  + 委托事件 代理事件() 给父元素存放事件,子元素点击后触发冒泡事件,到父元素那里领取事件.

    + ```javascript
      $(父元素).delegate("指定的子元素","事件名",function(){});
      //父元素给指定的子元素存放了一个事件,可以动态给子元素注册事件.
      //新增同样的指定子元素后,点击会触发冒泡事件,冒到父元素那里会领取一份事件.
      ```

    + delegate()只能注册代理事件

+ on():同一注册事件,包括自身注册和代理注册

  + 自身注册:`$(自己).on("事件名",fn);` 
  + 委托事件:$(父亲).on("事件名","子元素",fn);
  + 父元素先处理委托事件再处理自身事件,子元素先处理自身事件,冒泡到父元素再领取一份事件执行.
  + 在子元素存在动态产生的时候,他的事件要委托给父元素.或者等待子元素生成后再注册事件,比如ajax的success中生成的元素,必须在success中注册事件,
  + on()的data参数,调用on时,可以给on传递一个参数,这个参数会被存储到e.data中.在事件fn中用e.data来调用.值如果是字符串,会与selector冲突.所以得**on("click",null,"data字符串",fn);**

+ off():解除注册的事件,不传参,就解除所有的事件,传参就解除写的事件.

  + ```javascript
    $("父元素").off("click","**");//解除父元素上所有的委托事件,自己的事件还在,
    ```

### 触发事件

+ `$.trigger("click")` 触发事件
+ `$.click(fn)` 触发事件



### 阻止浏览器默认行为和事件冒泡

+ **return false;两个都阻止**
+ e.preventDefault();阻止浏览器默认行为
+ e.stopPropagation();阻止事件冒泡

### 隐式迭代和链式编程

+ `$li.each(function(i,e){});` 
  + i:是$li的下标.
  + e:是$li的每个DOM对象.
+ 链式编程:
  + 设置操作:本来不需要返回值,但是JQ返回了一个JQ对象.
  + 获取操作:本来就需要返回一个值,如果返回值不是JQ对象,就不能链式编程.
  + `end();`  end可以把JQ对象返回成上一次的状态.

### 多库共存

+ \$ 冲突后,JQ可释放\$ 的控制权,\$ .noConflict();并且可再声明一个变量名做\$ 的工作:var $$=$.noConflict();


### 知识点总结

+ JQuery中,offset()是获取元素距离document的位置,返回值是对象,{left:100, top:100}
+ position()方法是获取相对于其最近的有定位的父元素的位置.
+ trim()方法去除前后空格.





### 复习JQuery

- hide() show() toggle();显示隐藏

- 参数基本都是speed,callback

- fadeIn(); fadeOut(); fadeToggle(); fadeTo(*speed,opacity,callback*);淡入淡出

- slideDown(); slideUp(); slideToggle();上下滑动

- animate({*params*}*,speed,callback*);可使用队列功能实现逐一运行的效果.

- stop(*stopAll,goToEnd*);停止动画, stopAll 参数规定是否应该清除动画队列; goToEnd 参数规定是否立即完成当前动画;两者默认都是false.

- JQuery方法可链接在一起写.slideDown().hide();

- text();设置或返回文本内容;html();设置或返回内容包括标签;val();设置或返回表单字段的值.

- attr();获取属性值,有回调函数;

- append():在被选元素的结尾插入内容,包含关系;prepend():在被选元素的开头插入内容,包含关系;after():在被选元素之后插入内容,并列关系;before():在被选元素之前插入内容,并列关系.

- remove();删除被选元素及其子元素,;empty();从被选元素中删除子元素.

  - ```javascript
    $("p").remove(".italic");//删除 class="italic" 的所有 <p> 元素
    ```

- addClass():添加类;removeClass():删除类;toggleClass():类添加删除切换;hasClass():判断是否含有某个类;css():设置或返回样式属性;

- JQuery尺寸:width();height();innerWidth();innerHeight();outerWidth();outerHeight();outerWidth(true)包含margin

  ![jQuery Dimensions](image/img_jquerydim.gif)

- jQuery祖先:parent()返回直接父元素;parents()返回所有的祖先元素,直至根目录html标签,parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素

  - ```javascript
    $(document).ready(function(){
      $("span").parentsUntil("div");
    });//返回介于 <span> 与 <div> 元素之间的所有祖先元素
    ```

  - ​

- children() 方法返回被选元素的所有直接子元素;find() 方法返回被选元素的后代元素，一路向下直到最后一个后代

- siblings() 方法返回被选元素的所有同胞元素。next() 方法返回被选元素的下一个同胞元素。nextAll() 方法返回被选元素的所有跟随的同胞元素。nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素

- first() 方法返回被选元素的首个元素。last() 方法返回被选元素的最后一个元素。eq() 方法返回被选元素中带有指定索引号的元素。filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。not() 方法返回不匹配标准的所有元素。

- JQuery load(URL,data,callback)方法从服务器加载数据,并把返回的数据放入被选元素中,回调函数可以设置不同的参数：*responseTxt* - 包含调用成功时的结果内容;*statusTXT* - 包含调用的状态;*xhr* - 包含 XMLHttpRequest 对象

- JQuery ajax 的HTTP请求:\$\.get(*URL*,*callback*);和$.post(*URL,data,callback*);GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

- \$.noConflict();释放$的控制.var jq=\$.noConflict();创建自己的简写

- 方法事件:委托事件delegate()

- 方法

- 所有用于处理 HTML 和 CSS 的 jQuery 方法。适用于 HTML 和 XML 文档。除了：html() 方法。

| 方法                                       | 描述                             |
| ---------------------------------------- | ------------------------------ |
| [addClass()](https://www.runoob.com/jquery/html-addclass.html) | 向被选元素添加一个或多个类名                 |
| [after()](https://www.runoob.com/jquery/html-after.html) | 在被选元素后插入内容                     |
| [append()](https://www.runoob.com/jquery/html-append.html) | 在被选元素的结尾插入内容                   |
| [appendTo()](https://www.runoob.com/jquery/html-appendto.html) | 在被选元素的结尾插入 HTML 元素             |
| [attr()](https://www.runoob.com/jquery/html-attr.html) | 设置或返回被选元素的属性/值                 |
| [before()](https://www.runoob.com/jquery/html-before.html) | 在被选元素前插入内容                     |
| [clone()](https://www.runoob.com/jquery/html-clone.html) | 生成被选元素的副本                      |
| [css()](https://www.runoob.com/jquery/css-css.html) | 为被选元素设置或返回一个或多个样式属性            |
| [detach()](https://www.runoob.com/jquery/html-detach.html) | 移除被选元素（保留数据和事件）                |
| [empty()](https://www.runoob.com/jquery/html-empty.html) | 从被选元素移除所有子节点和内容                |
| [hasClass()](https://www.runoob.com/jquery/html-hasclass.html) | 检查被选元素是否包含指定的 class 名称         |
| [height()](https://www.runoob.com/jquery/css-height.html) | 设置或返回被选元素的高度                   |
| [html()](https://www.runoob.com/jquery/html-html.html) | 设置或返回被选元素的内容                   |
| [innerHeight()](https://www.runoob.com/jquery/html-innerheight.html) | 返回元素的高度（包含 padding，不包含 border） |
| [innerWidth()](https://www.runoob.com/jquery/html-innerwidth.html) | 返回元素的宽度（包含 padding，不包含 border） |
| [insertAfter()](https://www.runoob.com/jquery/html-insertafter.html) | 在被选元素后插入 HTML 元素               |
| [insertBefore()](https://www.runoob.com/jquery/html-insertbefore.html) | 在被选元素前插入 HTML 元素               |
| [offset()](https://www.runoob.com/jquery/css-offset.html) | 设置或返回被选元素的偏移坐标（相对于文档）          |
| [offsetParent()](https://www.runoob.com/jquery/css-offsetparent.html) | 返回第一个定位的祖先元素                   |
| [outerHeight()](https://www.runoob.com/jquery/html-outerheight.html) | 返回元素的高度（包含 padding 和 border）   |
| [outerWidth()](https://www.runoob.com/jquery/html-outerwidth.html) | 返回元素的宽度（包含 padding 和 border）   |
| [position()](https://www.runoob.com/jquery/css-position.html) | 返回元素的位置（相对于父元素）                |
| [prepend()](https://www.runoob.com/jquery/html-prepend.html) | 在被选元素的开头插入内容                   |
| [prependTo()](https://www.runoob.com/jquery/html-prependto.html) | 在被选元素的开头插入 HTML 元素             |
| [prop()](https://www.runoob.com/jquery/html-prop.html) | 设置或返回被选元素的属性/值                 |
| [remove()](https://www.runoob.com/jquery/html-remove.html) | 移除被选元素（包含数据和事件）                |
| [removeAttr()](https://www.runoob.com/jquery/html-removeattr.html) | 从被选元素移除一个或多个属性                 |
| [removeClass()](https://www.runoob.com/jquery/html-removeclass.html) | 从被选元素移除一个或多个类                  |
| [removeProp()](https://www.runoob.com/jquery/html-removeprop.html) | 移除通过 prop() 方法设置的属性            |
| [replaceAll()](https://www.runoob.com/jquery/html-replaceall.html) | 把被选元素替换为新的 HTML 元素             |
| [replaceWith()](https://www.runoob.com/jquery/html-replacewith.html) | 把被选元素替换为新的内容                   |
| [scrollLeft()](https://www.runoob.com/jquery/css-scrollleft.html) | 设置或返回被选元素的水平滚动条位置              |
| [scrollTop()](https://www.runoob.com/jquery/css-scrolltop.html) | 设置或返回被选元素的垂直滚动条位置              |
| [text()](https://www.runoob.com/jquery/html-text.html) | 设置或返回被选元素的文本内容                 |
| [toggleClass()](https://www.runoob.com/jquery/html-toggleclass.html) | 在被选元素中添加/移除一个或多个类之间切换          |
| [unwrap()](https://www.runoob.com/jquery/html-unwrap.html) | 移除被选元素的父元素                     |
| [val()](https://www.runoob.com/jquery/html-val.html) | 设置或返回被选元素的属性值（针对表单元素）          |
| [width()](https://www.runoob.com/jquery/css-width.html) | 设置或返回被选元素的宽度                   |
| [wrap()](https://www.runoob.com/jquery/html-wrap.html) | 在每个被选元素的周围用 HTML 元素包裹起来        |
| [wrapAll()](https://www.runoob.com/jquery/html-wrapall.html) | 在所有被选元素的周围用 HTML 元素包裹起来        |
| [wrapInner()](https://www.runoob.com/jquery/html-wrapinner.html) | 在每个被选元素的内容周围用 HTML 元素包裹起来      |
| [$.escapeSelector()](https://www.runoob.com/jquery/html-escapeSelector.html) | 转义CSS选择器中有特殊意义的字符或字符串          |
| [$.cssHooks](https://www.runoob.com/jquery/html-csshooks.html) | 提供了一种方法通过定义函数来获取和设置特定的CSS值     |

- JQuery遍历方法

| 方法                                       | 描述                                       |
| ---------------------------------------- | ---------------------------------------- |
| [add()](https://www.runoob.com/jquery/traversing-add.html) | 把元素添加到匹配元素的集合中                           |
| addBack()                                | 把之前的元素集添加到当前集合中                          |
| andSelf()                                | 在版本 1.8 中被废弃。addBack() 的别名               |
| [children()](https://www.runoob.com/jquery/traversing-children.html) | 返回被选元素的所有直接子元素                           |
| [closest()](https://www.runoob.com/jquery/traversing-closest.html) | 返回被选元素的第一个祖先元素                           |
| [contents()](https://www.runoob.com/jquery/traversing-contents.html) | 返回被选元素的所有直接子元素（包含文本和注释节点）                |
| [each()](https://www.runoob.com/jquery/traversing-each.html) | 为每个匹配元素执行函数                              |
| end()                                    | 结束当前链中最近的一次筛选操作，并把匹配元素集合返回到前一次的状态        |
| [eq()](https://www.runoob.com/jquery/traversing-eq.html) | 返回带有被选元素的指定索引号的元素                        |
| [filter()](https://www.runoob.com/jquery/traversing-filter.html) | 把匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素              |
| [find()](https://www.runoob.com/jquery/traversing-find.html) | 返回被选元素的后代元素                              |
| [first()](https://www.runoob.com/jquery/traversing-first.html) | 返回被选元素的第一个元素                             |
| [has()](https://www.runoob.com/jquery/traversing-has.html) | 返回拥有一个或多个元素在其内的所有元素                      |
| [is()](https://www.runoob.com/jquery/traversing-is.html) | 根据选择器/元素/jQuery 对象检查匹配元素集合，如果存在至少一个匹配元素，则返回 true |
| [last()](https://www.runoob.com/jquery/traversing-last.html) | 返回被选元素的最后一个元素                            |
| map()                                    | 把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象   |
| [next()](https://www.runoob.com/jquery/traversing-next.html) | 返回被选元素的后一个同级元素                           |
| [nextAll()](https://www.runoob.com/jquery/traversing-nextall.html) | 返回被选元素之后的所有同级元素                          |
| [nextUntil()](https://www.runoob.com/jquery/traversing-nextuntil.html) | 返回介于两个给定参数之间的每个元素之后的所有同级元素               |
| [not()](https://www.runoob.com/jquery/traversing-not.html) | 从匹配元素集合中移除元素                             |
| [offsetParent()](https://www.runoob.com/jquery/traversing-offsetparent.html) | 返回第一个定位的父元素                              |
| [parent()](https://www.runoob.com/jquery/traversing-parent.html) | 返回被选元素的直接父元素                             |
| [parents()](https://www.runoob.com/jquery/traversing-parents.html) | 返回被选元素的所有祖先元素                            |
| [parentsUntil()](https://www.runoob.com/jquery/traversing-parentsuntil.html) | 返回介于两个给定参数之间的所有祖先元素                      |
| [prev()](https://www.runoob.com/jquery/traversing-prev.html) | 返回被选元素的前一个同级元素                           |
| [prevAll()](https://www.runoob.com/jquery/traversing-prevall.html) | 返回被选元素之前的所有同级元素                          |
| [prevUntil()](https://www.runoob.com/jquery/traversing-prevuntil.html) | 返回介于两个给定参数之间的每个元素之前的所有同级元素               |
| [siblings()](https://www.runoob.com/jquery/traversing-siblings.html) | 返回被选元素的所有同级元素                            |
| [slice()](https://www.runoob.com/jquery/traversing-slice.html) | 把匹配元素集合缩减为指定范围的子集                        |

- JQuery的ajax方法

  | 方法                                       | 描述                                       |
  | ---------------------------------------- | ---------------------------------------- |
  | [$.ajax()](https://www.runoob.com/jquery/ajax-ajax.html) | 执行异步 AJAX 请求                             |
  | $.ajaxPrefilter()                        | 在每个请求发送之前且被 $.ajax() 处理之前，处理自定义 Ajax 选项或修改已存在选项 |
  | [$.ajaxSetup()](https://www.runoob.com/jquery/ajax-ajaxsetup.html) | 为将来的 AJAX 请求设置默认值                        |
  | $.ajaxTransport()                        | 创建处理 Ajax 数据实际传送的对象                      |
  | [$.get()](https://www.runoob.com/jquery/ajax-get.html) | 使用 AJAX 的 HTTP GET 请求从服务器加载数据            |
  | [$.getJSON()](https://www.runoob.com/jquery/ajax-getjson.html) | 使用 HTTP GET 请求从服务器加载 JSON 编码的数据          |
  | [$.getScript()](https://www.runoob.com/jquery/ajax-getscript.html) | 使用 AJAX 的 HTTP GET 请求从服务器加载并执行 JavaScript |
  | [$.param()](https://www.runoob.com/jquery/ajax-param.html) | 创建数组或对象的序列化表示形式（可用于 AJAX 请求的 URL 查询字符串）  |
  | [$.post()](https://www.runoob.com/jquery/ajax-post.html) | 使用 AJAX 的 HTTP POST 请求从服务器加载数据           |
  | [ajaxComplete()](https://www.runoob.com/jquery/ajax-ajaxcomplete.html) | 规定 AJAX 请求完成时运行的函数                       |
  | [ajaxError()](https://www.runoob.com/jquery/ajax-ajaxerror.html) | 规定 AJAX 请求失败时运行的函数                       |
  | [ajaxSend()](https://www.runoob.com/jquery/ajax-ajaxsend.html) | 规定 AJAX 请求发送之前运行的函数                      |
  | [ajaxStart()](https://www.runoob.com/jquery/ajax-ajaxstart.html) | 规定第一个 AJAX 请求开始时运行的函数                    |
  | [ajaxStop()](https://www.runoob.com/jquery/ajax-ajaxstop.html) | 规定所有的 AJAX 请求完成时运行的函数                    |
  | [ajaxSuccess()](https://www.runoob.com/jquery/ajax-ajaxsuccess.html) | 规定 AJAX 请求成功完成时运行的函数                     |
  | [load()](https://www.runoob.com/jquery/ajax-load.html) | 从服务器加载数据，并把返回的数据放置到指定的元素中                |
  | [serialize()](https://www.runoob.com/jquery/ajax-serialize.html) | 编码表单元素集为字符串以便提交                          |
  | [serializeArray()](https://www.runoob.com/jquery/ajax-serializearray.html) | 编码表单元素集为 names 和 values 的数组              |

- 杂项

  | 方法                                       | 描述                                       |
  | ---------------------------------------- | ---------------------------------------- |
  | [data()](https://www.runoob.com/jquery/misc-data.html) | 向被选元素附加数据，或者从被选元素获取数据                    |
  | [each()](https://www.runoob.com/jquery/misc-each.html) | 为每个匹配元素执行函数                              |
  | [get()](https://www.runoob.com/jquery/misc-get.html) | 获取由选择器指定的 DOM 元素                         |
  | [index()](https://www.runoob.com/jquery/misc-index.html) | 从匹配元素中搜索给定元素                             |
  | [$.noConflict()](https://www.runoob.com/jquery/misc-noconflict.html) | 释放变量 $ 的 jQuery 控制权                      |
  | [$.param()](https://www.runoob.com/jquery/misc-param.html) | 创建数组或对象的序列化表示形式（可在生成 AJAX 请求时用于 URL 查询字符串中） |
  | [removeData()](https://www.runoob.com/jquery/misc-removedata.html) | 移除之前存放的数据                                |
  | [size()](https://www.runoob.com/jquery/misc-size.html) | 在版本 1.8 中被废弃。返回被 jQuery 选择器匹配的 DOM 元素的数量 |
  | [toArray()](https://www.runoob.com/jquery/misc-toarray.html) | 以数组的形式检索所有包含在 jQuery 集合中的所有 DOM 元素       |
  | [pushStack()](https://www.runoob.com/jquery/misc-pushstack.html) | 将一个DOM元素集合加入到jQuery栈                     |
  | [$.when()](https://www.runoob.com/jquery/misc-when.html) | 提供一种方法来执行一个或多个对象的回调函数                    |

  ------

  ## jQuery 实用工具

  | 方法                                       | 描述                                       |
  | ---------------------------------------- | ---------------------------------------- |
  | $.boxModel                               | 在版本 1.8 中被废弃。检测浏览器是否使用W3C的CSS盒模型渲染当前页面   |
  | [$.browser](https://www.runoob.com/jquery/misc-browser.html) | 在版本 1.9 中被废弃。返回用户当前使用的浏览器的相关信息           |
  | [$.contains()](https://www.runoob.com/jquery/misc-contains.html) | 判断另一个DOM元素是否是指定DOM元素的后代                  |
  | [$.each()](https://www.runoob.com/jquery/misc_each.html) | 遍历指定的对象和数组                               |
  | [$.extend()](https://www.runoob.com/jquery/misc-extend.html) | 将一个或多个对象的内容合并到目标对象                       |
  | [$.fn.extend()](https://www.runoob.com/jquery/misc-fn-extend.html) | 为jQuery扩展一个或多个实例属性和方法                    |
  | [$.globalEval()](https://www.runoob.com/jquery/misc-globaleval.html) | 全局性地执行一段JavaScript代码                     |
  | [$.grep()](https://www.runoob.com/jquery/misc-grep.html) | 过滤并返回满足指定函数的数组元素                         |
  | [$.inArray()](https://www.runoob.com/jquery/misc-inarray.html) | 在数组中查找指定值并返回它的索引值（如果没有找到，则返回-1）          |
  | [$.isArray()](https://www.runoob.com/jquery/misc-isarray.html) | 判断指定参数是否是一个数组                            |
  | [$.isEmptyObject()](https://www.runoob.com/jquery/misc-isemptyobject.html) | 检查对象是否为空（不包含任何属性）                        |
  | [$.isFunction()](https://www.runoob.com/jquery/misc-isfunction.html) | 判断指定参数是否是一个函数                            |
  | [$.isNumeric()](https://www.runoob.com/jquery/misc-isnumeric.html) | 判断指定参数是否是一个数字值                           |
  | [$.isPlainObject()](https://www.runoob.com/jquery/misc-isplainobject.html) | 判断指定参数是否是一个纯粹的对象                         |
  | [$.isWindow()](https://www.runoob.com/jquery/misc-iswindow.html) | 判断指定参数是否是一个窗口                            |
  | [$.isXMLDoc()](https://www.runoob.com/jquery/misc-isxmldoc.html) | 判断一个DOM节点是否位于XML文档中，或者其本身就是XML文档         |
  | [$.makeArray()](https://www.runoob.com/jquery/misc-makearray.html) | 将一个类似数组的对象转换为真正的数组对象                     |
  | [$.map()](https://www.runoob.com/jquery/misc-map.html) | 指定函数处理数组中的每个元素(或对象的每个属性)，并将处理结果封装为新的数组返回 |
  | [$.merge()](https://www.runoob.com/jquery/misc-merge.html) | 合并两个数组内容到第一个数组                           |
  | [$.noop()](https://www.runoob.com/jquery/misc-noop.html) | 一个空函数                                    |
  | [$.now()](https://www.runoob.com/jquery/misc-now.html) | 返回当前时间                                   |
  | [$.parseHTML()](https://www.runoob.com/jquery/misc-parsehtml.html) | 将HTML字符串解析为对应的DOM节点数组                    |
  | [$.parseJSON()](https://www.runoob.com/jquery/misc-parsejson.html) | 将符合标准格式的JSON字符串转为与之对应的JavaScript对象       |
  | [$.parseXML()](https://www.runoob.com/jquery/misc-parsexml.html) | 将字符串解析为对应的XML文档                          |
  | [$.trim()](https://www.runoob.com/jquery/misc-trim.html) | 去除字符串两端的空白字符                             |
  | [$.type()](https://www.runoob.com/jquery/misc-type.html) | 确定JavaScript内置对象的类型                      |
  | [$.unique()](https://www.runoob.com/jquery/misc-unique.html) | 在jQuery 3.0中被弃用。对DOM元素数组进行排序，并移除重复的元素    |
  | [$.uniqueSort()](https://www.runoob.com/jquery/misc-uniquesort.html) | 对DOM元素数组进行排序，并移除重复的元素                    |
  | [**$.data()**](https://www.runoob.com/jquery/misc_data.html) | 在指定的元素上存取数据，并返回设置值                       |
  | [$.hasData()](https://www.runoob.com/jquery/misc-hasdata.html) | 确定一个元素是否有相关的jQuery数据                     |
  | [$.sub()](https://www.runoob.com/jquery/misc-jquery-sub.html) | 创建一个新的jQuery副本，其属性和方法可以修改，而不会影响原来的jQuery对象 |
  | [$.speed](https://www.runoob.com/jquery/misc-jquery-speed.html) | 创建一个包含一组属性的对象用来定义自定义动画                   |
  | [$.htmlPrefilter()](https://www.runoob.com/jquery/misc-jquery-htmlprefilter.html) | 通过jQuery操作方法修改和过滤HTML字符串                 |
  | [$.readyException()](https://www.runoob.com/jquery/misc-jquery-readyexception.html) | 处理包裹在jQuery()中函数同步抛出的错误                  |

  ------

  ## jQuery 回调对象

  jQuery 1.7 版本中新增的 jQuery.Callbacks() 函数,返回一个多功能对象，此对象提供了一种强大的方法来管理回调列表。它能够增加、删除、触发、禁用回调函数。

  | 方法                                       | 描述                      |
  | ---------------------------------------- | ----------------------- |
  | [$.Callbacks()](https://www.runoob.com/jquery/misc-callbacks.html) | 一个多用途的回调列表对象，用来管理回调函数列表 |
  | [callbacks.add()](https://www.runoob.com/jquery/misc-callbacks-add.html) | 在回调列表中添加一个回调或回调的集合      |
  | [callbacks.disable()](https://www.runoob.com/jquery/misc-callbacks-disable.html) | 禁用回调列表中的回调函数            |
  | [callbacks.disabled()](https://www.runoob.com/jquery/misc-callbacks-disabled.html) | 确定回调列表是否已被禁用            |
  | [callbacks.empty()](https://www.runoob.com/jquery/misc-callbacks-empty.html) | 从列表中清空所有的回调             |
  | [callbacks.fire()](https://www.runoob.com/jquery/misc-callbacks-fire.html) | 传入指定的参数调用所有的回调          |
  | [callbacks.fired()](https://www.runoob.com/jquery/misc-callbacks-fired.html) | 确定回调是否至少已经调用一次          |
  | [callbacks.firewith()](https://www.runoob.com/jquery/misc-callbacks-firewith.html) | 给定的上下文和参数访问列表中的所有回调     |
  | [callbacks.has()](https://www.runoob.com/jquery/misc-callbacks-has.html) | 判断回调列表中是否添加过某回调函数       |
  | [callbacks.lock()](https://www.runoob.com/jquery/misc-callbacks-lock.html) | 锁定当前状态的回调列表             |
  | [callbacks.locked()](https://www.runoob.com/jquery/misc-callbacks-locked.html) | 判断回调列表是否被锁定             |
  | [callbacks.remove()](https://www.runoob.com/jquery/misc-callbacks-remove.html) | 从回调列表中的删除一个回调或回调集合      |

  ------

  ## jQuery 延迟对象

  在jQuery 1.5中介绍了 Deferred 延迟对象，它是通过调用 jQuery.Deferred() 方法来创建的可链接的实用对象。它可注册多个回调函数到回调列表，调用回调列表并且传递异步或同步功能的成功或失败的状态。
  延迟对象是可链接的，类似于一个 jQuery 对象可链接的方式，区别于它有自己的方法。在创建一个 Deferred 对象之后，您可以使用以下任何方法，直接链接到通过调用一个或多个的方法创建或保存的对象。

  | 方法                                       | 描述                                       |
  | ---------------------------------------- | ---------------------------------------- |
  | [$.Deferred()](https://www.runoob.com/jquery/misc-jquery-deferred.html) | 返回一个链式实用对象方法来注册多个回调                      |
  | [deferred.always()](https://www.runoob.com/jquery/misc-deferred-always.html) | 当Deferred（延迟）对象被受理或被拒绝时，调用添加的处理程序        |
  | [deferred.done()](https://www.runoob.com/jquery/misc-deferred-done.html) | 当Deferred（延迟）对象被受理时，调用添加的处理程序            |
  | [deferred.fail()](https://www.runoob.com/jquery/misc-deferred-fail.html) | 当Deferred（延迟）对象被拒绝时，调用添加的处理程序            |
  | [deferred.isRejected()](https://www.runoob.com/jquery/misc-deferred-isrejected.html) | 从jQuery1.7开始已经过时，确定 Deferred 对象是否已被拒绝    |
  | [deferred.isResolved()](https://www.runoob.com/jquery/misc-deferred-isresolved.html) | 从jQuery1.7开始已经过时，确定 Deferred 对象是否已被解决    |
  | [deferred.notify()](https://www.runoob.com/jquery/misc-deferred-notify.html) | 给定一个参数，调用正在延迟对象上进行的回调函数( progressCallbacks ) |
  | [deferred.notifyWith()](https://www.runoob.com/jquery/misc-deferred-notifywith.html) | 给定上下文和参数，调用正在延迟对象上进行的回调函数( progressCallbacks ) |
  | [deferred.pipe()](https://www.runoob.com/jquery/misc-deferred-pipe.html) | 过滤 and/or 链式延迟对象的工具方法                    |
  | [deferred.progress()](https://www.runoob.com/jquery/misc-deferred-progress.html) | 当Deferred（延迟）对象生成进度通知时，调用添加处理程序          |
  | [deferred.promise()](https://www.runoob.com/jquery/misc-deferred-promise.html) | 返回 Deferred(延迟)的 Promise 对象              |
  | [deferred.reject()](https://www.runoob.com/jquery/misc-deferred-reject.html) | 拒绝 Deferred（延迟）对象，并根据给定的参数调用任何 failCallbacks 回调函数 |
  | [deferred.rejectWith()](https://www.runoob.com/jquery/misc-deferred-rejectWith.html) | 拒绝 Deferred（延迟）对象，并根据给定的 context 和 args 参数调用任何 failCallbacks 回调函数 |
  | [deferred.resolve()](https://www.runoob.com/jquery/misc-deferred-resolve.html) | 解决Deferred（延迟）对象，并根据给定的参数调用任何 doneCallbacks 回调函数 |
  | [deferred.resolveWith()](https://www.runoob.com/jquery/misc-deferred-resolveWith.html) | 解决Deferred（延迟）对象，并根据给定的context 和 args 参数调用任何 doneCallbacks 回调函数 |
  | [deferred.state()](https://www.runoob.com/jquery/misc-deferred-state.html) | 确定一个Deferred（延迟）对象的当前状态                  |
  | [deferred.then()](https://www.runoob.com/jquery/misc-deferred-then.html) | 当Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序     |
  | [.promise()](https://www.runoob.com/jquery/misc-promise.html) | 返回一个 Promise 对象，观察某种类型被绑定到集合的所有行动，是否已被加入到队列中 |

- JQuery属性

  | 方法                                       | 描述                                    |
  | ---------------------------------------- | ------------------------------------- |
  | [context](https://www.runoob.com/jquery/prop-context.html) | 在版本 1.10 中被废弃。包含被传递到 jQuery 的原始上下文    |
  | [jquery](https://www.runoob.com/jquery/prop-jquery.html) | 包含 jQuery 的版本号                        |
  | [jQuery.fx.interval](https://www.runoob.com/jquery/prop-jquery-fx-interval.html) | 改变以毫秒计的动画运行速率                         |
  | [jQuery.fx.off](https://www.runoob.com/jquery/prop-jquery-fx-off.html) | 对所有动画进行全局禁用或启用                        |
  | [jQuery.support](https://www.runoob.com/jquery/prop-jquery-support.html) | 包含表示不同浏览器特性或漏洞的属性集（主要用于 jQuery 的内部使用） |
  | [length](https://www.runoob.com/jquery/prop-length.html) | 包含 jQuery 对象中元素的数目                    |
  | [jQuery.cssNumber](https://www.runoob.com/jquery/prop-cssnumber.html) | 包含所有可以不使用单位的CSS属性的对象                  |


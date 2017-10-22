### 静态页面和动态页面

+ 如果请求的是一个html页面,浏览器直接返回

+ ​

+ 如果访问的是php页面,服务器会让php找到所有的<?php?>标签,解析后返回给浏览器.

+ 在php中这么写for循环,类似模板引擎

  + ```php
    //这么写for循环
    <?php for ($i = 0; $i < count($user); $i++) { ?>
      <li>hehe</li>
    <?php } ?>
    ```

+ include可以引入html页面到php中,这就表示可以直接在HTML页面中编写<?php?>标签,然后在php页面中识别.也可以用于将公有的页面引入.

+ 后台获取数据-->引入html页面-->修改页面

+ 事件里面注册事件时,里面的事假注册不用addEventListener,因为会重复注册.

+ 用表单提交信息:必须用form的action定义路径,并且每次提交,页面都会跳转刷新.同步方式

  + ```html
    <form action="fileReponse.php" method=post enctype="multipart/form-data">
      <input type="file" name="uf" id="" >
      <input type="submit" value="submit">
    </form>
    <!--传输文件数据至后台-->
    ```

  + ```php
    echo "<pre>";
    print_r($_FILES);
    //打印传输来的文件
    ```

  + ​







###  协议

+ http协议:请求和响应两个部分,给服务器发送请求报文,服务器返回响应报文.
+ 请求报文:请求行,请求头,请求体
+ get请求没有请求体,参数直接拼接到url中,但是post请求有请求体,请求体就是参数列表,content-type作为post请求是必须有的
+ 响应报文:200响应成功/304读缓存/404找不到资源/500表示服务端错误





### XMLHttpRequest

+ 不使用调单跟后端进行交互,因为使用表单交互页面会跳转,导致页面需要重新加载,这是同步方式.
+ 使用ajax就是使用了XMLHttpRequest发送一条http请求.请求包含三个部分,创建的对象需要设置这三个部分


+ XMLHttpRequest对象:

+ ```javascript
  //使用ajax发送get请求

  //创建一个xhr对象
  var xhr=new XMLHttpRequest;

  //1.设置请求行,如果有参数需要拼接到url后面
  xhr.open("get","url.php");
  //2.设置请求头
  //对于get请求来说,请求头都是浏览器自动完成,可不设置
  //3.设置请求体(get请求没有请求体)
  xhr.send(null);

  //获取响应的内容
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      //等于4说明响应完成
      //获取响应行
      xhr.status;
      //获取所有响应头
      xhr.getAllReponseHeader();
      //获取对应的响应头
      xhr.getReponseHeader("content-type");
      //响应完成后获取响应体
  	xhr.responseText;
    }
  };
  ```


  ```

  + 第一步设置请求行 url get;第一个参数:get/post;第二个参数是发送到的路径

+ 获取响应的内容,响应行

  + ```javascript

  ```

+ redystate:记录XMLHttpRequest对象的当前状态.等于4,表示可以获取服务器的数据了.响应完成了.

+ get请求发送,直接将参数拼接到url后,后端用$_GET获取参数.

+ ```javascript
  //post请求使用ajax发送

  var xhr=new XMLHttpRequest();

  //设置请求行,post请求url后面没有参数列表
  xhr.open("post","url.php");

  //设置请求头,post 必须设置请求头,后端才能拿到发送过去的数据
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

  //设置请求体,如果有参数,必须设置请求体
  xhr.send("uname=hucc&upass=123");

  //注册事件,等待服务器响应完成
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      //响应完成
      if(xhr.status==200){
        xhr.reponseText;
      }
    }
  }
  ```

+ xhr.open("method","url","true/false");第三个参数是是否发送异步请求.默认是异步





### XML

+ xml是用来传输数据,显示数据用HTML.
+ 第一行必须是版本信息:<?xml version="1.0" 
+ 必须有根元素,有且仅有一个.
+ php中用file_get_contents获取xml的文件,拿到的是字符串,在header中content-type修改成xml,html中获取响应体用responseXML.拿到的是document对象,可以用DOM对象的方法属性.





### json

+ json在数据传输过程中,实质还是一个字符串,但是有固定格式.把一个对象,转换成json格式的字符串,后台也可以解析json格式的字符串

+ ```javascript
  var result=JSON.stringify(obj);
  //将obj转换成json格式
  ```

+ json格式:

  + 存储在键值对中,键值对之间用逗号隔开
  + 键必须使用双引号括起来
  + json格式可以是一个对象也可以是数组

+ js中的对象和数组转换成json:

  + ```javascript
    var obj={
      name:"zs",
      age:19,
      desc:"hehe"
    }

    //参数是对象或者数组
    //返回json格式的字符串
    var result=JSON.stringify(obj);

    //数组转换为json格式
    var arr=["zs","ls","zl"];
    var resultArr=JSON.stringify(arr);
    ```

+ json转换成js中的对象和数组:

  + ```javascript
    var json='{"name":"zs","age":"17"}';
    var jsonArr='["zs","ls","ww"]';
    //parse方法把json字符串解析成js的对象或者数组
    var obj=JSON.parse(json);
    ```

+ ​






### php 2 json

+ php转json 关联数组 索引数组  json_encode():用于对变量进行json编码,成功则返回json数据,否则返回false.该函数只对UTF-8的数据有效.

  + ```php
    $arr=array();
    echo json_encode($arr);
    ```

  + ​

+ json转php的对象和数组  json_decode()用于对json格式的字符串进行解码,转换为PHP变量.待解码的json字符串必须是UTF-8编码数据.

  + ```php
    $json='{}';
    echo json_decode($json);
    ```

+ eval()方法,参数是字符串,并且把这个字符串当成代码来执行.

  + eval转换对象时,{}在js中是代码块的意思,所以eval("("+json对象+")");



### 封装ajax函数

+ 命名空间:

  + ```javascript
    var cc={
      ajax:function(options){
        //函数体
      }
    }
    //命名空间,以防止ajax函数跟别人的冲突
    //调用:
    cc.ajax({});
    ```

  + 对象拼串

  + ```JavaScript
    va robj={...};
    var arr=[];
    for(var k in obj){
      arr.push(k+"="+obj[k]);
    }
    return arr.join("&");
    //将参数对象{a:1,b:2}拼串成?a=1&b=2的格式.
    ```

  + ​







### JQuery AJAX

+ $.ajax():
+ json是有格式的字符串,1.对象,键值对,键加双引号;2.数组字符串.
+ 指定了dataType后,从后台传输回来的数据必须是json数据,否则无法接受.
+ 参数:beforeSend,发送前调用函数,一般用来做表单校验,在里面return false的话,这次ajax请求就不发送了.complete发送后调用,无论成功与否都会执行.
+ $.get();  \$.post();  \$.getJSON();   \$.getScript();载入服务端的js文件   \$("#div").load();载入服务器端的html页面,一般将共有的HTML页面单独拎出来,然后通过load方法来引入页面.







### 接口化开发

+ **表单序列化:必须有form标签,和name属性,$("#div").serialize();**
+ serializeArray





### 模板引擎

+ 1.引入模板引擎的js文件; 
+ 2.准备模板,需要在script标签里指定type类型 text/html;  
+ 3.准备数据,通过ajax从后台获取数据,生成对象;  
+ 4.让模板与数据相结合, template()方法,
  + 第一个参数是模本的id,
  + 第二个参数是对象数据,模板会遍历这个对象,将对象中所有的属性变成模板的变量.返回值就是通过模板与数据生成的HTML结构. 如果是arr数组,需要变成对象==>{list:arr}
+ 5.修改模板:{{}}
  + {{属性名}}
  + {{@value}}:识别标签
  + ​





### 三级联动

+ 省市县三级联动
+ 页面一加载,就把省份的信息加载好,发送jsonp请求
+ 省份选择后,用input  change事件,获取省份的value值,加载对应的市



### formData

+ 管理表单数据
+ 使用formData必须使用post请求
+ 使用new  FormData可以创建一个formData对象,参数可以传一个表单对象,将form对象中所有name属性的值拼串
+ 使用formData不需要指定请求头,浏览器自动添加合适的请求头
+ formData可以直接作为send的参数
+ formData有append方法,可以手动添加数据,自定义的name值





+ 文件异步上传:注册onchange事件,发送一个ajax请求,把文件上传到服务器服务器返回文件路径,把地址显示出来.拿到文件是img.files[0];



### 同源与跨域

- API;应用程序编程入口,JQuery是目前最受欢迎的js框架,使用css的选择器来访问和操作页面上的html元素即DOM对象.Prototype是包含属性和方法的库,用于操作html的DOM对象.MooTools也是一个框架提供了js的API
- CDN:内容分发网络.包含可分享代码库的服务器网络.在自己的网页中使用js框架时,只需要在script标签中引入该库即可.
- 同源策略:可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。它是由[Netscape](https://baike.baidu.com/item/Netscape/2778944)提出的一个著名的[安全策略](https://baike.baidu.com/item/%E5%AE%89%E5%85%A8%E7%AD%96%E7%95%A5/2890163)。现在所有支持JavaScript 的浏览器都会使用这个策略。所谓同源是指，域名，协议，端口相同。http://www.baidu.com:80
- 网站每次发送请求都会带着cookie,所以没有同源策略,其他网站会窃取用户的cookie.
- 同源策略会禁止不同源网站互相发送ajax请求,这时需要跨域
- 不受同源策略影响的:img标签,link标签,script标签:src指定路径,获取到的都是文件的内容,就是一个字符串.如果src引入js文件,服务器不作任何处理,直接把内容返回,如果src引入php文件,服务器作js解析后把内容返回.
- 跨域网络访问:同源策略控制了不同源之间的交互,交互通常分为:允许跨域写操作(链接,重定向及表单提交);允许跨域资源嵌入;不允许跨域读操作;  使用CORS允许跨域访问.​
- JSONP是json的一种使用模式.可以让网友从别的域名那获取资料,即跨域读取数据.这是因为同源策略.在页面中先声明函数,用script引入文件来调用函数.**模拟ajax请求**, 服务端返回的是函数的调用,把需要给浏览器的数据当做参数,浏览器端,先声明一个函数,需要数据时只需要动态创建script标签即可.然后script链接到服务端文件后直接调用声明的函数;src链接时给服务端传递一个参数,http:www.baidu.com?callback=fnName;这个参数固定叫callback,后台可以通过$_GET['callback']获取到我定义的函数名,
- jsonp的原理:跨域,因为同源策略,不让不同源互相发送ajax请求,不允许共享cookie,借助script标签,不受同源策略的限制,可以通过script发送一个get请求,服务端返回函数的调用,函数名通过callback参数去获取,把数据放到参数中,浏览器做的事情,声明一个函数,动态创建一个script标签,传递一个参数,callback=函数名
- **JQuery的jsonp:$.ajax,dataType:"jsonp",但是跟ajax请求无关,并且不用传callback**, 因为jq自己定义了callback名,就是success的函数,后台调用的也是success的函数
- **跨域行为是浏览器行为,是浏览器阻止了ajax行为,服务器与服务器之间不存在跨域的问题**
- 函数传参时,是将所有参数存储在一个数组中,在函数体内,可以通过argument对象来访问这个参数数组从而获取到传递给函数的每一个参数.
- 封装一个JQUery插件,就是给JQuery对象加一个方法.$.fn加一个方法.\$.fn.waterFall();
- 原型中this是JQuery对象,指的就是调用的JQuery对象.
- 图灵机器人有公开接口
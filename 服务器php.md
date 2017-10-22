### 服务器

+ IP:某台计算机的唯一标示.通过ip能够找到这台计算机
+ 域名:ip不好记忆,就给ip一个名字,通过域名能够找到对应的ip
+ DNS服务器:domain name system,因特网上作为域名和ip地址相互映射的分布式数据库.
+ 输入域名后,浏览器到DNS服务器查询域名的对应ip,返回对应的ip,通过ip找到要寻找的服务器.



+ 浏览器输入域名,查询本地hosts文件,如果有就直接返回ip地址,如果没有,就直接去DNS服务器查找,如果有就返回,否则404notfound.DNS劫持就是修改了本地的hosts文件导向木马网站的ip地址
+ 端口:通过端口才能找到具体的服务,默认端口是:80,若修改了端口,则每次都需要手动输入端口.





### PHP

+ php变量:不用声明,直接使用,变量的命名规则和js一样,php的变量必须以$开头.

+ php中拼串用" . "

+ 双引号识别变量,单引号直接当做文字.

+ echo只能打印基本数据类型,print_r() 用于输出复杂数据类型.var_dump输出完整的数据结构

+ 索引数组: 

  + ```php
    $indexArray=array("1","2","3");
    echo $indexArray[1];
    ```

+ 关联数组:类似js中的对象

  + ```php
    $arr=array("name"=>"张三","age"=>18);
    echo $arr["name"].$arr["age"];
    ```

+ 获取数组长度:count($arr);

+ 遍历关联数组:foreach($arr as $k=>$v){};



+ 表单处理;
+ html页面中的input:submit
  + action:表单提交地址
  + mathod:get/post 默认是get
  + name:只有写了name属性,后端才能获取到对应的值
  + input:submit:点击后,表单会提交
+ php获取HTML传输来的数据
  + $_GET:是一个数组,超全局变量,里面会存储所有get请求发送过来的请求.关联数组,然后处理数据后再次返回数据给前端,get不加密,4k限制
  + $_POST:也是一个数组,会存储所有post请求发送过来的请求,加密,大小不限制
  + 根据http规范,get用于信息获取,post表示可能修改或改变服务器上的资源的请求.
+ 文件上传
  + input:file
  + 文件上传必须用method:post;
  + 必须指定表单的类型,enctype="multipart/form-data";
  + 后台获取前端发送的文件:$_FILES 存放上传的文件
  + tmp_name:服务器中的临时存放路径,服务器不作响应,则会自动删除,所以得把$_FILES的信息存储起来.
  + 上传多个文件:multiple,并且name="name[]";
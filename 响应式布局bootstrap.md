### 响应式布局

+ flex:流式布局,
+ 响应式布局:一个网站能够兼容多个终端.





### 媒体查询

+ 小于768px的设备叫超小屏设备,比如手机;992px之内的叫做小屏设备,比如平板;1200px之内,叫做中屏设备,比如老式台式机;1200px以上,大屏设备,比如现在的笔电和台式.

+ 媒体查询:Media Query可以获取到终端设备的宽度

  + @media screen查询屏幕,and 连接条件, ()里面写条件,表示只有满足条件时,花括号里面的设置才会生效
  + width>=789px时,(min-width:789px)才会生效

+ ```css
  @media screen and (min-width:1200px) and (max-width:1920px) {
    body{
    	backgroundColor:#000;
    }
  };/*写在css中*/
  ```







### bootstrap框架

+ 偏向于开发响应式布局,移动设备优先的Web项目.
+ respond.js:用于兼容IE678下的媒体查询,并且不能运行在file协议下,得运行在http协议下.
+ 项目中引入框架时放在lib文件夹中
+ 版心.container自带15px的padding.可加div.row消除这15px
+ 布局容器
+ 栅格系统
  + 12格
  + 可嵌套
  + 列偏移:div.col-xs-offset-3:div向右偏移3格.
  + 列排序:div.col-xs-push-4:往后推4格;div.col-xs-pull-4:往前拉四格.可实现换位
+ $(window).trigger('resize')  触发resize事件
+ **手机和电脑的样式不一样时,直接style中写两个类,在js中判断设备屏幕大小,然后分别加上不同的类;pc和手机端分别加载不同的图片时,在页面结构的img中加data-msrc和data-psrc的自定义属性.在js中判断设备屏幕,再取出两个自定义属性值来加给img的src属性.**
+ data()  JQuery方法,用来获取自定义属性
+ dataset[]  js拿来获取自定义属性
+ $(window).width();拿到屏幕宽度
+ col-md-offset-2:往后推2格





### Less

+ //less注释;/\*css注释*/;css只会认识css注释,忽视less注释.
+ @var_color:#ccc;定义一个颜色变量,可以直接引用变量名来改变颜色.这么写:bgcolor: @var_color;
+ @direction:left;  可以直接这么写:border-@{direction}: 1px solid #ccc;
+ .btn( @width:1px ) { color: @width solid #ccc; }  声明一个公用的样式,@width可设置默认参数,这样调用就可以不传参数了.这个声明可直接在样式中调用.
+ &符号表示自己,&::before{};
+ @import "引入别的less文件";
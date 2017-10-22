### 小知识点

- 父盒子不设置高度,用子元素撑开,若子元素浮动脱标,则清除浮动即可.
- 同源 : `http` ,端口,域名一样
- `console.dir` 打印对象
- letter-spacing:设置字符间距.







### 新标签

+ ie678不兼容h5 的新标签,可在js中创建标签:doc.createElement("nav");创建的标签是行内样式,需加display:block;

+ 处理ie678的兼容问题:html5shiv.js插件引入.让ie识别h5新增标签,但是得加条件注释只让ie加载这个引入文件.

+ 条件注释:IE独有的注释 css骇客,
  + htm中简写:`cc:ie6` 会蹦出来条件注释,专门用来兼容ie678,只有ie识别这个注释.

+ input表单
  + 表单事件:
    + oninput:(事件名)ononinput注册事件,内容发生改变的时候会立即触发这个事件.
    + onchange:需要内容发生改变并且失去焦点的时候.
    + invalid事件:表单校验失败触发事件.
  + 表单属性:
    + placeholder:没有内容输入时的提示信息
    + multiple:支持多个文件上传.
    + autocomplete:自动补全,默认是on,关闭是off,一定要有name属性才生效.
    + form:配合form表单的id进行关联,input框可以写在任何地方.
    + list:配合datalist使用.
    + autofocus:自动获得焦点
  + 表单验证
    + pattern:自定义规则.值是正则表达式.
    + require:必须填写的input框,非空校验.

+ 音频
  + video视频标签
    + video标签之间插入的文本是提示信息,浏览器不支持video元素.
  + audio音频标签
  + \<source src="movie.mp4" type="video/mp4"> 写在video/audio标签里,兼容几种视频格式.

+ 标签属性

  + autoplay:自动播放
  + controls:是否显示默认播放控件
  + loop:循环播放
  + poster:视频没有播放时的预览海报,
  + width,height:播放窗口的宽高,只设置一个,会等比例缩放,设置两个,实际宽高会以小的为准.

+ 音视频DOM对象调用的几个方法:

  + play():控制视频播放;
  + pause():控制视频暂停;
  + load():重新载入视频;

+ 事件

  + play  pause  progress  error  timeupdate  ended  abort  empty  emptied  waiting  loadedmetadata

  ​

+ DOM对象扩展
  + querySelector():返回第一个找到的对象.
  + querySelectorAll():返回所有找到的对象,是一个伪数组.
  + 类名操作:classList.add()  remove()  contains()  toggle();
  + 自定义属性:data-aa,在标签中自定义属性,在js中获取用dataset,返回一个对象,用aa下标获取aa属性值.在js中设置demo.dataset["name"]="zy";类名中的_或者-要转化成驼峰命名.
  + 进度条:progress标签和meter标签

### C3

+ 关系选择符
  + e+f:选择e元素之后紧贴的f元素,就是f必须是e后面的第一个元素.
  + e~f:选择e后面所有的f元素
+ 属性选择器
  + q
+ 伪类选择器
  + li:first-child:匹配的是li的父元素下的第一个子元素,且必须是li元素.
  + li:last-child:匹配的是父元素下最后一个子元素,且必须是li元素
  + li:nth-child(num):num从1开始,num也可以写odd,even,2n,2n-1,-n+4(顺数四个).
  + li:nth-last-child(-n+4):倒数第四个,必须这么写,
  + span:nth-of-type(num):span的父元素下指定类型的元素.
  + input:focus 获得焦点的就会执行样式
  + li:not(:last-child):除了最后一个其他都作用样式
  + li:empty:匹配没有子元素和节点的li
  + input:checked  选中后执行样式
  + lorem  随机生成字符串
  + h3:target  锚点激活时会执行样式
  + 一组li，如何获取倒数4个？先获取li的长度；然后$（”ul li:gt("Li.length-4),获取大于长度-4的li
+ 伪元素选择符
  + div:before/div::before-->
    + 必须指定content:";可以给文本,也可以为空
    + **div子节点之前**
    + 默认生成行内元素,可转块或者脱标.
    + 生成的是一个伪元素,不是元素,DOM结构找不到.
    + p:first-letter  找第一个字符,首字母下沉
    + p:first-line 第一行
    + p::selection 文本被获取时执行的样式,c3新增,双冒号
    + input::-webkit-placeholder 修改input中placeholder的样式 有兼容性问题
    + 伪元素不存在hover之类的,伪元素不存在,
    + 伪元素做不透明度遮罩层时,设置zIndex放在最上面.
+ opacity:给设置了opacity盒子加一个罩布,会影响到盒子内子元素的不透明度
+ hsl(色调(0-360),饱和度(0-100%),亮度(0-100%));加a是不透明度.
+ 文字阴影:text-shadow:x偏移,y偏移,模糊值,颜色.
+ 边框阴影:box-shadow:inset,水平偏移,垂直偏移,模糊值,阴影外延值,颜色;  inset是内阴影,不写则默认是外阴影.
+ 边框圆角:border-radius:x轴四个数/y轴四个数;椭圆边角;
  + 百分比:相对盒子自身的高度和宽度;border-radius:50%;正椭圆



### 盒模型

+ box-sizing:content-box;标准盒模型.盒子实际大小=content+padding+border
+ box-sizing:border-box;怪异盒模型.盒子真实大小=width,border和padding不受影响,内容的大小会受到挤压,



### 背景属性

+ 边框图片border-image


+ bg-image:设置背景图

+ bg-size:背景图大小;

  + 设置像素,或者百分比相对盒子自身的大小,但是图片会变形.
  + contain:等比例缩放,但是会有留白.
  + cover:全部覆盖,会溢出一部分,结合bg-position:center使用;

+ bg-repeat:no-repeat;

+ bg-position:center;图片居中显示;

+ bg-clip:

  + content-box:背景区域等于width;
  + padding-box:背景区域等于width+padding
  + border-box:背景区域=width+padding+border;默认值
  + **bg-clip:content-box搭配bg-origin:content-box;使用,在设置下盒子的padding值可将背景图居中.**

+ bg-origin:用来定义背景图片的0,0点,原点.

  + 原点默认是padding的左上角.值是padding-box;
  + 也可设置为content-box,或者border-box,原点在各自左上角.

+ bg-position是设置距离原点的距离.可以是像素单位,

+ bg-clip:将需要的背景图之外的无用背景剪掉.

+ 多重背景:bg:url(),url(),....,可设置多张背景图.一般在最后写一个背景颜色.

  + ```css
    background: url("images/head.jpg") no-repeat center top,url("images/foot.jpg") no-repeat center bottom,#4a01ab;
    ```

### 渐变

+ 颜色可以写rgba();
+ bg-image:linear-gradient(45deg/to left,red,green);实质是生成一张图片
  + 第一个参数写方向或者角度,to right/45deg,	后面写两个及以上颜色来渐变.
  + 也可以写一个渐变范围,red 20%,green 80%;
  + linear-gradient()相当于url()的作用
+ 径向渐变:bg-image:radial-gradient;
  + radial-gradient(100px 50px at 50% 50%,red,green):at前面参数决定圆和椭圆,at后面紧跟圆心位置,颜色是渐变效果.

### 过渡

+ transition过渡:必须两个状态,某个属性值发生改变.
  + transition写在初始状态会对盒子所有的变化做补间动画.
  + transition写在结束状态,只会在变化时做补间动画,变化结束就没有动画效果了.
    + 特殊值:all,所有改变的属性都做动画.
    + transition-property:指定作动画的属性
    + transition-duration:动画持续时间,t-d:2s,4s;分别对各个属性做不同时间的动画,
    + transition-timing-function:linear/ease/ease-in/ease-out/ease-in-out;动画执行效果.还有steps(1,start/end),第一个参数是步数,蹦过去.
    + transition-delay:延迟执行
    + 连写:transition:all 1s linear 2s;持续时间写前面,延迟时间写后面.
    + 谁的状态发生改变就给谁加.给开始状态加,则开始结束都有动画,给结束状态加,则只有开始有动画,结束没有动画.



### 2D转换 transform

+ transform不能写多个transform,否则会覆盖,跟css其他属性一样.所以多个变化记得连写.

  + scale(x,y);xy轴缩放.:scale(缩放倍数);

  + transform-origin:left top;转换原点.值是方位词或者百分数,像素等等.也是给变化状态的元素加

  + transform:translate();位移,xy两个方向.百分比相对于盒子自身的宽高.不影响别的盒子.类似相对定位,不脱标,留坑.

  + 让一个定位的盒子居中:

    + ```css
      position: absolute;/*定位脱标*/
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);/*偏移自身一半距离*/
      ```

  + transform:rotate();旋转

  + transform:skew();扭曲

+ 属性连写:空格隔开;旋转会影响坐标轴,所以一般将rotate放在最后.注意transform属性相同时会覆盖.而且transition前后状态的连写属性位置不要变化.



### 3D转换

+ perspective:透视,一般取值800-1000px,屏幕距离物体的距离.给父元素加此属性.这个并不能设置元素的2d或者3d,仅仅是视觉上的近大远小的效果.
+ 3d的transform需要有透视才能看到z轴的旋转和平移.
+ 旋转会改变坐标系.
+ transform-style:preserve-3d;给父元素.让子元素占据3d空间.这时可去掉perspective属性.默认值是flat平面呈现.这个可以直接设置3d空间.
+ 记得给变化的元素加transition:all 1s;
+ backface-visibility:visible/hidden;指定盒子背面是否可见.
+ 只要子元素有3d的转换,父元素就必须加preserve-3d.
+ 属性连写:
  + [translate3d()](#translate3d)： 指定对象的3D位移。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略 
  + [rotate3d()](#rotate3d)： 指定对象的3D旋转角度，其中前3个参数分别表示旋转的方向x,y,z，第4个参数表示旋转的角度，参数不允许省略 
  + [scale3d()](#scale3d)： 指定对象的3D缩放。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略 



### 动画

+ 动画

  + animate.css--->使用别人封装好的动画
  + @keyframes 动画名 :定义动画序列,即帧动画.from开始状态,to结束状态,也可用百分比来做帧动画.
  + animation:动画名+持续时间+过渡类型(linear )+动画延迟时间+循环次数(infinite无限循环)+alternative(正反交替运动)+动画结束的状态(forwards/both动画停留在结束时的状态)+暂停动画(paused).
  + 连写时,持续时间必须写在延迟时间前面,且必须有name和duration.
    + animation-name
    + animation-duration:持续时间
    + animation-timing-function:ease/linear
    + animation-delay:延迟时间
    + animation-iteration-count:循环次数,infinite无穷循环
    + animation-direction:是否反向,alternate反向
    + animation-fill-mode:动画结束时的状态,forward/both,停在最后的状态
    + animation-play-state:停止动画,paused暂停,写在hover状态时停止动画.

+ web字体

  + @font-face:自定义字体,某一些logo文字之类会用,不会全网页都用特殊字体.

    + ```css
      @font-face{
        font-family:'myFont';/*指定自己的字体名称*/
        /*指定字体文件*/
        ...
      }
      body{
        font-family:myFont;/*调用*/
      ```

+ 字体图标

  + 矢量图,
  + 阿里巴巴字体图标库下载--引入文件--查看字体图标网查看使用步骤,
  + 可以直接将字体图标用:before和:after的content来显示\f0179.
  + 自己上传svg图标给阿里字体库,再次download会生成所需文件.

+ 过渡结束事件:transitionend事件,过渡动画结束时执行

  + ```javascript
    div.addEventListener("transitionend",callback);
    ```

  + ​



### 弹性布局 flex

+ display:flex;声明了盒子是一个弹性盒子.用于自适应.如下属性是父元素的,为了给子盒子设置布局规则.弹性盒子可以嵌套.
+ 父盒子的属性
  + 弹性盒子的布局规则:给盒子设置display:flex;则盒子有了主轴和侧轴,子元素在主轴上从左往右排列.
  + flex-direction:row 默认值/row-reverse 从右到左/column 从上往下排/column-reverse 从下往上;----调整主轴方向
  + justify-content:调整子元素在**主轴方向**的对齐方式.
    + flex-start:默认值,起始位置对齐排列
    + flex-end:结束位置对齐,但是盒子还是顺序排列
    + center:居中对齐.
    + space-between:左右中分布.
    + space-around:子盒子平均分布在父盒子中,两边为中间空白的二分之一.
  + align-items:用于调整子元素**侧轴**排列规则.针对不换行情况.
    + flex-start:默认值,在开始位置对齐
    + flex_end:在结束位置对齐,
    + center:中间对齐.
    + stretch:拉伸,子盒子没有高度的情况下,会被拉伸高度等于父盒子.
  + flex-wrap:控制换行
    + no-wrap:不换行,一行放不下子盒子,会挤压子盒子的宽度
    + wrap:开启flex的换行,一行挤不下就掉下去.
    + **wrap换行后用align-content来设置侧轴各行对齐方式,**其值与justify-content的值一样.
+ 弹性子盒子的属性
  + flex:设置子元素分配父元素的空间.占父元素空间几分之几.
  + margin:auto;使弹性子元素在两轴方向都居中.
  + order:权重,数值越小,位置越排列靠前,默认值是0.
  + align-self:优先级比align-items高,可以只给单独元素设置侧轴对齐方式.
+ max-width:最大宽度.min-width:最小宽度,限制了盒子的宽度.不会完全变形.手机端  max-width:640px;min-width: 320px;
+ 让一个元素绝对居中:在弹性盒子中,设置主轴侧轴值为center.或者是margin:auto;
+ flex-flow:flex-direction和flex-wrap的简写








### fullpage全屏滚动插件:

+ 在github中下载fullpage的插件.19.6k
+ 引入fullpage的js文件,css可引进.
+ 找到父盒子,调用fullpage函数.
+ 需要将内容垂直居中去掉:verticalcentered:false.
+ sectionscolor:每屏的颜色,传参数给fullpage函数.
+ afterload:function(a,i){}:index 可得知滚动了第几屏.
+ 鼠标滚轮事件:onmousewheel:e.wheelDelta鼠标的滚动量.有正负值.可监听鼠标上下滚动的方向.
+ 动画判断:index决定是哪一屏,然后在css中加入动画的结束状态的now样式,当index等于当前屏,添加now类.(.one.now)
+ transition过渡加给结束状态css中.
+ 代码中的空格用float:left;
+ 文字动画用steps:transition;steps(5,start);而且文字图片必须是盒子的背景图才会做出steps的效果,不能直接对图片本身做steps.
+ 倒数几个li: li:nth-last-child(-n+num)--倒数num个li执行样式.


+ 布局:block布局;inline布局;flex布局;

+ ###### 弹性盒子包含了一个或对个弹性子元素,**注意**弹性容器外及弹性子元素内是正常渲染的.弹性盒子只定义了弹性子元素如何在弹性容器内布局.




+ ​



### 网络状态

+ navigator.online;此属性值为true说明当前设备联网(互联网或者局域网)/值为false,说明当前设备脱机,保证肯定链接不了互联网.
+ online事件:当用户的设备链接网络时会触发,给window注册,必须从无网络链接到网络那瞬间才会触发
+ offline事件:当用户的设备断网时触发.断网的瞬间才会触发.
+ 判断用户网络状态:先用navigator.online判断当前网络状态,然后再用online/offline事件监听网络状态.



### 地理位置

+ navigator.geolocation.getCurrentPosition();获取用户的地理位置信息.参数一:函数,当成功获取到地理位置时,函数会执行.参数二,当获取失败时参数二函数会执行.

  + ```javascript
    navigator.geolocation.getCurrentPosition(function(position){
      //获取成功会把地理位置信息的对象传递过来
      //对象里会有经纬度的数据,直接调用属性获取值.
    },function(error){
      //定位失败会调用该方法
    });
    ```

  + 接入百度地图API--生成有效的密钥.

  + 直接获得经纬度是谷歌的,与百度使用的坐标系不一样,需要转换为百度的坐标后才能在百度地图上正确显示位置,先转换再显示.

  + 思路:获取当前地理位置(navigator.geolocation.getCurrentPosition())----利用百度的转换坐标系--

### web存储

+ 可以把一些数据存储到浏览器本地,下次使用直接使用本地数据,加快浏览器速度.
+ ​
+ cookie:只能存4KB的内容.存储用户名和密码和sessionID(服务端的).常用来自动登录,每次请求都带上cookie在浏览器和服务器之间来回传递.有过期时间.同源窗口共享.兼容所有的浏览器
  + document.cookie="name=zy";原生操作,麻烦
  + 使用JQuery.cookie插件来操作cookie.引入插件后操作如下:
    + $.cookie("name","zy");设置cookie
    + $.cookie("name");获取
    + $.removeCookie("name");删除cookie.
+ sessionStorage/localStorage:存储数据,操作方便,H5提出,会有兼容性问题,仅在本地存储
  + sessionStorage:5M,生命周期为关闭浏览器,不能多个窗口共享数据.
  + localStorage:永久生效,可手动删除,大小为5M左右,可多个窗口共享,
    + localStorage.setItem("name","zy");设置内容
    + localStorage.setItem("name");获取
    + localStorage.removeItem("name");删除
    + localStorage.clear();清空所有的内容





### 自定义播放器

+ 视频全屏:div.webkitRequestFullScreen();谷歌支持,加moz是火狐支持.

  ```javascript
  if(video.webkitRequestFullScreen){
    video.webkitRequestFullScreen();
  }else{
    video.mozRequestFullScreen();
  }else{不支持全屏}
  ```

+ input事件和change事件

+ video对象,方法onload() / play() / pause()

  + video对象有currentTime和duration.进度条控制视频播放进度:当前的range值/100=当前的视频进度currentTime/视频总长度duration.
  + 视频播放时让range值跟随:
    + video有timeupdate事件:当前播放位置更改时触发,可拿来获取实时currentTime值.
    + 用当前的range值/100=当前的视频进度currentTime/视频总长度duration.来设置range的value值
  + video.volume  视频的音量属性值

+ 自定义属性会放进dataset对象中,直接在标签中写data-src="";获取是this.dataset.src;

  + 获取自定义属性:自定义属性要以data-属性名;获取dataset.属性名.

+ awesomes.cn:前端资源库

+ 参考文档:  http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp





### 文件读取

+ fileReader对象:H5新增,用于读取文件,对象实时更新

+ 文件上传只能用change事件.先给input:file注册change事件.

+ input:file类型的input框,在这个DOM对象中有files属性可以拿到上传的文件的伪数组,input框指定multiple属性就可以上传多个文件,

  ```javascript
  var file=upload.files[0];//注册事件后拿到上传的文件
  ```

  ​

+ fileReader对象使用: 

  + 需要创建一个文件读取对象 

    ```javascript
    var fr=new FileReader();
    ```

  + 读取文件

    ```javascript
    fr.readAsText(file);//读取文本文件
    fr.readAsDataURL(file);//读取图片视频之类的文件,直接读取成图片数据
    ```

  + fr文件读取完成事件

    ```javascript
    //fr.onload();读取到数据后,载入显示
    fr.onload=function(){
      fr.result;//等于读取文件拿到的文件数据
      div.innerHTML="<img src='"+fr.result+"'>";//在页面的div中显示图片
    }
    ```


### 拖拽事件

+ draggable="true"/"false";添加了此属性的元素支持拖拽,img和a标签本身就支持拖拽.

+ 设置事件监听:
+ 拖拽元素
  + drag:整个拖拽过程中都会调用
  + drag
  + v
+ 目标元素:
  + dragover:拖拽经过事件,当停留在目标元素上时调用.
  + drop:先阻止浏览器默认行为,e.preventDefault();当在目标元素上松开鼠标时调用,拖拽的元素就会直接掉进目标元素中.
+ 图片从本地直接拖到浏览器会直接打开,是浏览器默认行为,
  + 在dragover事件里阻止浏览器默认行为.

  + 在drop事件中再次阻止浏览器默认行为,获取dataTransfer,用e.dataTransfer.files[0]获取到文件.然后使用fileReader对象读取拖拽到浏览器中的文件.

  + ```javascript
    var file = e.dataTransfer.files[0];//在drop事件中获取拖拽的文件
    ```

  + 然后用获取到的文件,创建fileReader对象,读取文件,等待文件读取结束后加入div中.
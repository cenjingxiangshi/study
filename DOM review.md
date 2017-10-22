### dom的基本方法

+ 获取属性:getAttribute("属性名");
+ 设置属性:setAttribute("属性名",属性值);
+ 删除属性:removeAttribute("属性名");
+ input选中是checked,select的option选中是selected
+ a标签不跳转要return false;所以注册点击事件不能用addEventListener("click",fn);
+ disabled selected checked:只要写了这个属性,就会生效;在js中用true和false来实现;
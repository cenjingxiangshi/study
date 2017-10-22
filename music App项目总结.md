

#### vue-cli的使用

[博客](http://www.jianshu.com/p/2769efeaa10a) 	

1. `npm install --global vue-cli` 全局安装vue-cli
2. 安装完成后在`C:\Users\Administrator\AppData\Roaming\npm` 中会生成几个vue开头的文件
3. `vue init webpack vuetest` 在项目文件目录中运行该命令，生成项目结构
4. `cnpm install` 在项目目录下安装所有依赖项
5. 端口默认是8080，修改的地址在项目目录`config/index.js` 中dev对象修改port为其他端口号；因为8080经常会撞

#### vue-lazyload插件

vue-layload用于你在你的vue项目中图片懒加载。[博客](http://www.8dou5che.com/2017/05/11/vue-lazyload/) 

#### fastclick插件

从点击屏幕上的元素到触发元素的 `click` 事件，移动浏览器会有大约 300 毫秒的等待时间。为什么这么设计呢？ 因为它想看看你是不是要进行双击（double tap）操作，fastclick 插件解决此问题

```js
// 在main.js中引入
import fastclick from 'fastclick'
fastclick.attach(document.body)
```

#### [stylus插件 css](http://www.zhangxinxu.com/jq/stylus/)

[stylus的张鑫旭博客](http://www.zhangxinxu.com/wordpress/2012/06/stylus-nodejs-expressive-dynamic-robust-css/)  

#### keep-alive   vue内置组件

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。主要用于保留组件状态或避免重新渲染。





```js
// 把控制台的vue下载提示隐藏 写在main.js中
Vue.config.productionTip = false
```

#### better-scroll 插件 列表滚动效果

[官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#起步) 

#### 黑洞投资下的子公司

实地地产和黑洞投资合作，客户购买了实地地产的房子，可以向握手分期申请家装分期，业主闪贷就是

家装分期就是业主向握手申请贷款，3期，6期到24期等，合作的家装公司提供服务，然后业主分期还款；必须是实地业主，有业主数据库；用手机号和身份证号匹配；

业主闪贷：蚂蚁借呗类似，用户注册的信息会走风控系统，得到一个评分，风控接口是百融金服的，百融金服对接了其他信用部门的系统，用户信息跑到百融后会得到一个评分，假设评分是70,50以下是不给额度，50-60是一万的额度，一分涨一100，最高是20w的额度，再有一个接口是根据评分返回额度；

宅抵贷：线下申请，页面只是展示信息，电话点击后呼叫是调用的APPcan的api

打包成APP用的appcan


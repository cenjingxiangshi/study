##npm

**注意点**

1. `npm install` 文件夹名称跟要下载的模块不能重名,报错为`ENOSELF` 

### [request模块](https://www.npmjs.com/package/request) 

简介:Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

```js
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});
```

**案例** 

提取出一个网站的局部信息生成一个数据对象,比如,提取出智联招聘网站的招聘职位和公司名称组成对象,集合成数组

[`cheerio` 模块](https://www.npmjs.com/package/cheerio) :nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。

```js
//官网示例:
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
$('h2.title').text('Hello there!')
$('h2').addClass('welcome')
 
$.html()
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html> 
Installatio
```

[在线案例实现](http://www.jianshu.com/p/0a870a924ba1)  node.js + request + cheerio实现

```js
//抓取拉钩的职位和公司信息存入本地json文档中
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = 'https://www.lagou.com/zhaopin/';
//构建 http 请求报文
var option = {
  hostname: url,
  port: 443,
  path: '/',
  method: 'GET',
  //不设置请求体会拿不到响应
  headers: {
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6'
  }
};
// console.log('body:', body); // Print the HTML for the Google homepage. 
//chaoi
request(option, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // 使用Cheerio对抓取到的内容进行解析
    var $ = cheerio.load(body, {
      ignoreWhitespace: true,
      xmlMode: true
    });

    //我的数据
    $('.list_item_top').each(function (i, v) {
      var model = {
        job: $(v).find('h3').text(),
        company: $(v).find('a').text()
      };
      jobs.push(model);
    });
    fs.writeFile('jobs.json', JSON.stringify(jobs), function (err) {
      if (err)
        throw err;
      console.log('The file has been saved!');
    })
  }
});
```



### lodash

简介:这是一个具有一致接口、[模块化](https://www.npmjs.com/browse/keyword/lodash-modularized)、高性能等[特性](http://lodashjs.com/#features)的 JavaScript 工具库;Lodash makes JavaScript easier by taking the hassle out of working with arrays,numbers, objects, strings, etc. Lodash’s modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions
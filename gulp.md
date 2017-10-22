# gulp

> gulp运行在nodejs环境下，而不是运行在浏览器中。因此使用gulp之前，需要使用npm安装gulp。

## 安装node

gulp是运行在nodejs环境下，因此需要安装nodejs

```javascript
node -v    #查看node版本
npm  -v    #查看npm版本
```

## npm基本使用

> npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）
>
> [npm](https://www.npmjs.com/)也是全球最大的开源库生态系统，上面管理了javascript相关的将近50W个包。使用非常的方便。

### 修改镜像地址

npm默认访问的https://www.npmjs.com/，这是国外的网站，访问和下载速度会很慢。

[淘宝镜像](http://npm.taobao.org/) 这是一个完整 `npmjs.org` 镜像，你可以用此代替官方版本(只读)，同步频率目前为 **10分钟** 一次以保证尽量与官方服务同步。在国内，下载速度会得到质的提升

```bash
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

### 基本使用步骤

- 输入`npm init` 进行初始化
  - 会生成一个`package.json`文件。
  - `package.json`是node项目的配置文件，用于管理包之间的依赖。
- `npm install jquery --save`就可以下载jquery的包了
  - `--save`会把内容添加到`package.json`中，默认下载最新版本的jquery
  - `npm install jquery@1.12.4 --save` 下载指定版本的jquery文件。
  - `nmp info jquery`查看jquery这个包的信息
- `npm remove 包名称 --save` 移除包的依赖，并修改`package.json`

关于`package.json`,npm可以根据该文件，配合`npm install`命令自动下载依赖的包，不用每次都拷贝依赖的内容，只需要一个`package.json`即可。

通过npm配合require在node中非常的常用，现在大伙知道安装包的大致步骤即可。

## Gulp 前端自动化构建工具

> Gulp.js 是一个自动化构建工具,开发者可以使用它在项目开发过程中自动执行常见任务。

### Gulp能做什么？

- less/sass文件转换css文件
- html文件、css文件、js文件以及图片的压缩
- 自动补充属性的前缀。
- 多浏览器的同步

这些操作都需要手动去完成，繁琐但是不难，如果是用了gulp，这些工作只需要一句话就能完成，实行自动化构建，从而提高了工作的效率。

[官网](http://www.gulpjs.com/)

[中文网](http://www.gulpjs.com.cn/)

其他构建工具：Grunt、webpack



gulp的应用场景

+ 项目发布前，对项目进行构建
+ 自动完成一系列重复的操作

```javascript
js/css/html文件的压缩，混淆，监视文件变化，同步浏览器等。
less转换成css文件。
```



### gulp的使用步骤

```javascript
安装nodejs --> 全局安装gulp --> 项目安装gulp以及gulp插件 --> 配置gulpfile.js --> 运行任务
```

### 安装gulp

- 全局安装gulp
  - `npm install --global gulp` 执行gulp命令时能够使用gulp命令
  - --global :全局安装在`C:\Users\Administrator\AppData\Roaming\npm`目录，并且会写入系统变量，可以在任何目录下使用`gulp`命令
- 作为项目的开发依赖（devDependencies）安装
  - `npm install --save-dev gulp` 本地安装gulp为了使用gulp功能
  - `--save`与`--save-dev`的区别，后者只有开发时会使用到，在生产环境中，并不会依赖。



### 核心方法

```javascript
task() //gulp是以任务为单位实现功能
src()  //传入路径参数，获取要处理的指定文件
dest() //指定处理后的文件输出路径
watch()//监视文件的变化，做出响应的处理。
```



使用步骤 ：

1. 在文件夹的根目录中，创建一个`gulpfile.js`文件
   1. 文件名固定，因为将来执行gulp命令时，会搜索`gulpfile.js`文件
2. 在gulpfile.js文件中写gulp任务
3. `gulp 任务名称`执行gulp任务

### 安装gulp插件

- `gulp-less` 将less文件转换成css文件
- `gulp-uglify` 压缩和混淆js代码
- `gulp-cssnano` 压缩css代码
- `gulp-htmlmin` 压缩html代码
- `gulp-rename` 文件重命名

安装命令：`npm install gulp-名称 --save-dev`进行安装

```javas
npm install gulp-less --save-dev
npm install gulp-uglify --save-dev
npm install gulp-cssnano --save-dev
npm install gulp-htmlmin --save-dev
npm install gulp-rename --save-dev


npm install --save-dev gulp-less gulp-uglify gulp-cssnano gulp-htmlmin gulp-rename
```

## gulp常用插件

### gulp之js压缩

```javascript
//1. 引入gulp的包
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename")

//2. 创建gulp任务
gulp.task('js', function () {
  //src获取到要压缩的文件，传入数组可以压缩多个文件，路径可以使用通配符
  gulp.src("./jquery.js")
    .pipe( uglify())//使用uglify插件
    .pipe(rename({ suffix: '.min' }))    //使用rename插件，压缩后的文件会带上.min后缀
    .pipe( gulp.dest("./dist") );//dest:指定输出路径
});
```

最后：在gulpfile.js所在的目录执行`gulp js`命令即可。



### gulp之less转css

```javascript
var less = require('gulp-less');;
//less转css任务
gulp.task("less", function () {
  gulp.src("./less/index.less")
    .pipe(less())
    .pipe(gulp.dest("./css"));
});
```



### gulp之html压缩

```javascript
gulp.task("html", function () {
  gulp.src("./index.html")
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS:true,
      minifyJS:true
    }))
    .pipe(gulp.dest("./dist"));
});
```

### 同时执行多个任务

```
// 同时执行多个任务，default是默认的名字，可以直接使用gulp命令执行。
gulp.task("default", ["js","less","html"],function () {
  console.log("任务执行完毕");
});
```



思考：将gulp应用到博学谷中



### gulp之Broswer-sync

[Browsersync + Gulp.js](http://www.browsersync.cn/docs/gulp/)

```
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "你的域名或IP"
    });
});
```
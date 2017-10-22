### webpack

#### 模块化标准

`CommonJS：  nodejs ;` A`MD： require.js`  `CMD：` `UMD：统称` 

**模块化** 

2009年之前，没有任何的模块化标准

**`webpack` 支持的模块化标准** 

`Webpack 支持 CommonJS  AMD  ES6 ` 

**`webpack的安装` ** 

```
npm install webpack -g
```

**webpack的基本使用** 

webpack是一个工具
当我们使用npm全局安装好之后，就可以使用一个命令  webpack

#### 最基本的使用语法

1. 最简单的命令调用

```
webpack 入口文件 出口文件
```

webpack支持的是模块化方式的项目打包， 非模块化的内容，无法进行打包操作！

1. 可以预先写好配置文件，然后直接执行webpack
   webpack配置文件名: `webpack.config.js` 

```js
module.exports = {
      //设置入口文件
      entry: "./main.js",
      //设置出口文件的保存目录以及文件名
      output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
      },
      //module中配置所有的加载器规则
      module: {
        //所有的规则
        rules: [
          {
            //test属性是一个正则表达式，用来匹配文件名
            test: /.css$/,
            use: 'style-loader'
            //如果需要使用多个loader
            //use: [
            //{
            //loader: 'style-loader'
            //},
            //{
            //loader: 'css-loader'
            //}
            //]
          }
        ]
      },
  	plugins:[
      new htmlWebpackPlugin()
    ]
}
```

**使用webpack打包css文件** 

1. webpack本身只能处理js代码作为模块
2. 但是webpack可以将所有类型的文件都视为一个个单独的模块，这些模块全都可以被打包，只是不同的文件类型作为模块的时候，我们需要为这些其他类型的模块单独指定loader

**下载loader** 

loader的安装还是通过npm

**style-loader** 依赖于 css-loader`

**less-loader** 依赖于 less

**autoprefixer-loader** 依赖于 postcss-safe-parser

**插件的使用** 

1. `npm installl html-webpack-plugin` 
2. 首先要在`webpack.config.js` 中进行配置

```js
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ]
```

使用该插件的时候，报错
`Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'` 

上面的错误，是由于全局安装了webpack，导致lib目录中的内容无法找到，最终报错！

解决方案： 直接将webpack进行本地安装即可
`npm install webpack@2.2.1 -D` 
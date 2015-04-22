# e-combo
一个基于node的`combo`服务器，主要用来练手。

## Getting Started

首先，checkout当前项目的代码。

```
git clone https://github.com/chyingp/e-combo
```

进入项目根路径，安装相关依赖。

```
npm install
```

可以看到，主要依赖了`express`、`cssmin`、`uglifyjs`三个模块。

```
adeMacBook-Pro-3:node_modules a$ tree -L 1
.
├── cssmin
├── express
└── uglify-js
```

运行下面命令，启动服务，默认是采用端口3000。

```
node index.js
```

接着，在浏览器里访问 [http://127.0.0.1:3000/c/=/require.js,jquery.js](http://127.0.0.1:3000/c/=/require.js,jquery.js) ，就会看到合压缩合并后的`require.js`,`jquery.js`。

## URL配置参数

目前只在URL里暴露了两个参数，分别是`max-age`、`compress`。

* max-age：静态资源缓存的时间。如果没有传，则不设置。
* compress：是否压缩返回结果。默认为是。

例子：[http://127.0.0.1:3000/c/=/require.js,jquery.js?max-age=3000&compress=0](http://127.0.0.1:3000/c/=/require.js,jquery.js) 。将缓存时间设置为3000s，同时返回结果不压缩。

## 规则解释

规则比较简单。从上面的例子可以看到，访问combo服务的URL主要由两部分组成。

* `http://127.0.0.1:3000/c/=/`：服务器会将`/c/=/`开头的资源请求，转发到combo服务。
* `require.js,jquery.js`：需要合并请求的资源文件，路径相对于`public`目录。

## 其他

由于是练手用的，日志记录、容错处理、性能优化等都没有考虑。

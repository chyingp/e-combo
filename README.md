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

接着，在浏览器里访问 http://127.0.0.1:3000/c/=/require.js,jquery.js，就会看到合压缩合并后的`require.js`,`jquery.js`。


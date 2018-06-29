# KD 2018.6月 webpack 入门培训

# webpack 安装

> 本次基于 webpack@4.10.2，webpack-cli@0.0.8-development
>
> 如果是本地安装的包，则运行的时候需要在前面加上”npx“，如 npx webpack -d
>
> 如果直接使用git中的包，下载后 执行：
>
> ``` java
>  npm install 
> ```

``` javascript
安装：npm install -D webpack@4.10.2 webpack-cli@0.0.8-development 
```

## 交互方式1：webpack cli 命令

打包模式：

``` javascript
webpack --mode development	简写 webpack -d
webpack --mode production	简写 webpack -p
默认 production
```

监控文件变化并实时打包：

```javascript
webpack --watch
```

**需要注意，在使用webpack-dev-server的时候，需要开启监控**

## 交互方式2：webpack-dev-server

安装：

```javascript
npm install webpack-dev-server -D
```

使用：

```javascript
webpack-dev-server --inline --hot
```

# path模块

- 2个变量：

  __dirname：当前被处理文件所在目录的绝对路径

  __filename：当前被处理文件的绝对路径

- 常用方法：

  引入path：const path = require(‘path’);

  path.resolve(path1, path2,…, pathN)：获取绝对路径，相当于cmd的cd命令

  path.join(path1, path2,…, pathN)：路径结合、合并，生成的路径

  path.relative(from, to)：获取路径之间的相对关系

> 更多path设置：http://nodejs.cn/api/path.html 

# webpack.config.js 配置 

## entry

不同参数类型效果

## output

不同参数效果

## mode

## devServer

### publicPath

### HMR说明

> HMR原理：https://zhuanlan.zhihu.com/p/30669007

## module

### babel loader使用

## plugins

### clean-webpack-plugin使用

# 其他说明

## 命名：

- 对于plugin，声明的对象使用 Pascal命名方式，如：

  ``` c#
  const CleanWebpackPlugin = require("clean-webpack-plugin");
  ```

  

- 对于Module，声明的对象使用 camel命名方式，如 CleanWebpackPlugin

  ```c#
  const webpack = require("webpack");
  ```

  
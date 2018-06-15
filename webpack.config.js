const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    // entry:"./src/test.js",
    // entry:["./src/test.js","./src/index.js"],
    entry:{
        p_index:"./src/index.js",
        p_test:"./src/test.js",
        P_pathdemo:"./src/pathdemo.js"
    },

    output:{
        filename:"[name].js",
        path:path.resolve("dist")
    },

    devServer:{
        port:9090,
        inline:true,
        hot:true
    },
plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin("dist")
],
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            // presets: ["env"]
          }
        }]
      }
    ]
  },
    mode:"development"  //development    none
}
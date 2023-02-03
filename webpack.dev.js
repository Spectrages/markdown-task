const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//require("dotenv").config({ override: true });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    //port: process.env.PORT
  },  
});
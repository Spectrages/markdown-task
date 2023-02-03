const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
/*
const dotenv = require("dotenv").config({ override: true });
const devURL = dotenv.parsed.BASE_URL;
const devPORT = dotenv.parsed.PORT;
*/
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: "127.0.0.1",
    port: 8080,
  },  
});
/*

const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
​
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "My test app",
            filename: "./index.html",
            template: "./src/index.html",
            title: 'Production',
​
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'sass-loader',
                ]
            }
        ]
    }
};

*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
        hash: true,
        title: "My test app",
        filename: "./index.html",
        template: "./src/index.html",
        title: 'Production',
     }),
     new MiniCssExtractPlugin()
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
        {
            test: /\.(s*)css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                'sass-loader',
            ]
        }
    ]
}
 };
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.ts',
        workerQuickSort: './src/script/workers/workerQuickSort.ts',
        workerHeapSort: './src/script/workers/workerHeapSort.ts',
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "My test app",
            filename: "./index.html",
            template: "./src/index.html",
            title: 'Production',
            excludeChunks: ['workerQuickSort', 'workerHeapSort']
        }),
        new MiniCssExtractPlugin(),
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
                ],
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
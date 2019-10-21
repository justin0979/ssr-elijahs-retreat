const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const htmlPlugin = () =>
  new HtmlWebpackPlugin({
    template: './src/template.html',
    css: ['css/styles.css'],
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      utf8: {
        charset: 'utf-8'
      }
    }
  });

module.exports = merge(baseConfig, {
  entry: {
    client: ['babel-polyfill', './src/client/index.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: 'public',
    port: 3000,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    htmlPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ]
});

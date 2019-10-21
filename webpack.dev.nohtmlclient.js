const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

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
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ]
});

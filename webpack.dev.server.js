const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    server: ['babel-polyfill', './src/server/index.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [webpackNodeExternals()],
  mode: 'development'
});

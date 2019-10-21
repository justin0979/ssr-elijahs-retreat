const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['src', 'src/client', 'src/server', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.jpg',
      '.jpeg',
      '.gif',
      '.svg',
      '.png',
      '.json'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [new TerserWebpackPlugin(), new CleanWebpackPlugin()]
};

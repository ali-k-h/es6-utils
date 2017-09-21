var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill','./src/xhrPromise-es6.js','./src/eventEmitter.js'],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}
};

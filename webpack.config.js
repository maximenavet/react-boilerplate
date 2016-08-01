var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: "./index.js",
  output: {
      path: path.join(__dirname, "/build"),
      filename: "bundle.js",
      publicPath: "/assets",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React boilerplate',
      reactHtml: '<%- reactHtml %>',
      template: './assets/views/index.ejs',
      filename: 'index.ejs',
    }),
    new WriteFilePlugin({
      test: /\.ejs$/,
      log: false,
    })
  ],
  devServer: {
    outputPath: path.join(__dirname, "/build"),
    proxy: {
      '/*': {
        target: 'http://localhost:9090/',
        secure: false,
      }
    },
  }
}

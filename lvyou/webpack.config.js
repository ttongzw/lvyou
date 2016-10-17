'use strict';

var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = function(basePath) {
  var entry = {},
    projectDirs = fs.readdirSync(basePath);
  projectDirs.forEach(function(projectDir) {
    var stats = fs.statSync(basePath + '/' + projectDir);
    if (stats.isDirectory()) {
      var files = fs.readdirSync(basePath + '/' + projectDir);
      files.forEach(function(file) {
        if (file.indexOf('entry.js') != -1) {
          entry[projectDir + '/' + file.replace('.js', '')] = basePath + '/' + projectDir + '/' + file;
        }
      });
    }
  });
  return entry;
}

module.exports = {
  entry: entries('./js'),
  output: {
    filename: '[name].js',
    // publicPath: "/dist/",
    path: __dirname + '/dist/js/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!scss'
    }]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"), 
    // new ExtractTextPlugin("[name].css")
  ]
}

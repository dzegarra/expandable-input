#!/usr/bin/env node

var resolvePath = require('path').resolve

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

// returns a Compiler instance
var compiler = webpack({
  entry: [
    './expandable-input.js',
    './expandable-input.css'
  ],
  output: {
    path: resolvePath(__dirname, '../dist'),
    filename: 'expandable-input.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  modulesDirectories: [
    'node_modules'
  ],
  plugins: [
    new ExtractTextPlugin('expandable-input.css')
  ]
})

compiler.run(function (error, stats) {
  if (error) {
    throw error
  }
})

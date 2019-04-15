'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  mode: 'production',

  entry: './home.js',
  output: {
    filename: 'build.js',
    library: 'home'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    })
  ],

  // resolve: {
  //   modulesDirectories: ['node_modules'],
  //   extensions: ['', '.js']
  // },
  //
  // resolveLoader: {
  //   modulesDirectories: ['node_modules'],
  //   moduleTemplates: ['*-loader'],
  //   extensions: ['', '.js']
  // },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },


};

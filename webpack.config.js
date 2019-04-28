'use strict';

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    app: './app'
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/', //url /app.js (Internet path of file)
    filename: '[name].js'
  },

  mode: 'development',

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],

  //оптимизирует код, создает отдельный js файл с общим(одниковым у всех файлов) кодом
  optimization: {
    // minimize output files
    minimize: false,
    minimizer: [
      new UglifyJSPlugin({
        cache: false,
        sourceMap: true,
        extractComments: true
      })
    ],
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'commons',
          test: 'commons',
          // enforce: true,
          minChunks: 2
        }
      }
    }
  },

  module: {

    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.(pug|jade)$/,
      loader: 'pug-loader'
    }, {
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  }

};

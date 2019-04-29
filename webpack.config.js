'use strict';

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// при продакшене только добавлять hash


module.exports = {
  context: __dirname + '/frontend',

  entry: {
    app: './app',
  },

  output: {
    path: __dirname + '/public/assets',
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: '[name]'
  },

  mode: 'development',

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
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
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'commons',
          test: 'commons',
          minChunks: 2
        }
      }
    }
  },

};

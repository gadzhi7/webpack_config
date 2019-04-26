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
    publicPath: '/public/', //url /app.js (Internet path of file)
    filename: '[name].js'
  },

// делает чтобы вместо lodash была такая переменая (проблема бывает когда один и тот же плагин используют и у нас в сборке и в библиотеках подключенные через cdn)
  // externals: {
  //   lodash: '_'
  // },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],

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
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader?optional[]=runtime',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }

};

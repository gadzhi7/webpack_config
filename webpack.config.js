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
        test: /\.m?js$/,
        include: __dirname + '/frontend',
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /old.js$/,
        // use: "imports-loader?workSettings=>{delay:500}!exports-loader?Work"
        // exporse делает чтобы экспорт этого модуля попало в глобальную переменную с именем Work
        use: "expose-loader?Work!imports-loader?workSettings=>{delay:500}!exports-loader?Work"
      }
    ],
    noParse: /angular\/angular.js/
  },


  // no correctly
  // resolve: {
  //   alias: {
  //     vendor: path.resolve(__dirname, '/vendor')
  //   }
  // }

};

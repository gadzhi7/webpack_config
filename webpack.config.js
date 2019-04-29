'use strict';

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    home: './home',
    about: './about',
    common: './common'
  },

  output: {
    path: __dirname + '/public/assets',
    publicPath: '/assets/', //url /app.js (Internet path of file)
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
    // собственный плагин автора, берущий текущий путь и удаляет текущую сборку с файлами от старой сборки
    // {
    //   apply: (compiler) => {
    //     rimraf.sync(compiler.otions.output.path)
    //   }
    // },
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("styles.css", {allChunks: true})
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
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          "css-loader",
          "sass-loader"
        ]
      })
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },

};

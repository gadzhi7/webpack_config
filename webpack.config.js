'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// при том случает если backend будет заниматься подстановкой url файлой с json файла в html
const AssetsPlugin = require('assets-webpack-plugin');
//сам компилирует html, альтернатива приведеному выше
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rimraf = require('rimraf');

// при продакшене только добавлять hash
function addHash (template, hash) {
  return NODE_ENV == 'production' ?
    template.replace(/\.[^.]+$/, `.[${hash}]$&`) :template
}

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
    filename: addHash('[name].js', 'chunkhash'),
    chunkFilename: addHash('[id].js', 'chunkhash'),
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
    //     rimraf.sync(compiler.options.output.path)
    //   }
    // },
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin(addHash("[name].css", 'hash'), {allChunks: true, disable: process.env.NODE_ENV=='development'}),
    new AssetsPlugin({
      filename: 'assets.json',
      path: __dirname + '/public/assets'
    }),
    new HtmlWebpackPlugin(),

    //если не указан -hot в скрипте
    // new webpack.HotModuleReplacementPlugin()
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
      loader: addHash('file?name=[path][name].[ext]?[hash]', 'hash:6')
    }]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // для горячей перезагрузки
    hot: true,
    //откуда отдает файлы
    // contentBase: __dirname + /backend
    proxy: [{
        path: /.*/,
        target: 'http://localhost:3000'
      }]
  }

};

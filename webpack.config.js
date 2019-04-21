'use strict';

// 3.4 информация о сборке

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context:  __dirname + '/frontend',
  entry: {
    home: './home.js',
    about: './about.js',
    commons: './commons.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },

  mode: 'production',

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    // плагин когда выдает ошибку не компилирует файлы
    new webpack.NoEmitOnErrorsPlugin(),
    // плагин который ...
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    }),
  ],

//оптимизирует код, создает отдельный js файл с общим(одниковым у всех файлов) кодом
  optimization: {
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

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
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
    // у moment.js много скрытых модулей (языков) и он подгружает всех, а мы фильтруем и подключаем только ru/en
    new webpack.ContextReplacementPlugin( /moment[/\\]locale$/, /ru|en-gb/)
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
    },
    {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }
  ]
  },


};

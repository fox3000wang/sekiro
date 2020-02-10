/* eslint-disable */
'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      components: resolve('src/component'),
      selectors: resolve('src/selectors'),
      log: resolve('src/utils/logger'),
    },
  },
  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.worker.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: false,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
        ],
        include: [resolve('src')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/,
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      },
    ],
  },
};

"use strict";
const path = require("path");
const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    index: path.resolve(__dirname, "../src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  // eval-source-map is faster for development
  devtool: "#eval-source-map",
  plugins: [
    new VueLoaderPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true
    })
  ],
  resolve: {
    extensions: [".vue", ".ts", ".js", ".json"]
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: [{
          loader: "vue-loader"
        }]
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
              babelrc: true
            }
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};
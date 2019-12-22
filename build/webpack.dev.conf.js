"use strict";
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

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


    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [{
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
    }]
  }
};
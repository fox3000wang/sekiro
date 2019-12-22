/* eslint-disable */
"use strict";

const fs = require("fs");
const ora = require("ora");
const rm = require("rimraf");
const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const webpackConfig = require("./webpack.dev.conf");
const spinner = ora("building for production...");
spinner.start();

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n\n`
  );

  if (stats.hasErrors()) {
    console.log(chalk.red("  Build failed with errors.\n"));
    process.exit(1);
  }

  console.log(chalk.cyan("  Build complete.\n"));
});
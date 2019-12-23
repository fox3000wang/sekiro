/* eslint-disable */
'use strict';
const packageJson = require('../package.json');

module.exports = {
  NODE_ENV: '"production"',
  VERSION: '"' + packageJson.version + '"',
};

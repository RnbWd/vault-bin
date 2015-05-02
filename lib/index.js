'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '0.1.0';

var BASE = 'https://dl.bintray.com/mitchellh/vault/vault_' + VERSION;

module.exports = new BinWrapper()
  .src(BASE + '_darwin_amd64.zip', 'darwin', 'x64')
  .src(BASE + '_linux_amd64.zip', 'linux', 'x64')
  .src(BASE + '_linux_arm.zip', 'linux', 'arm')
  .src(BASE + '_windows_amd64.zip/', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use('vault');

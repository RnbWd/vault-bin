'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');

var VERSION = pkg.vaultVersion || '0.1.1';

var BASE = 'https://dl.bintray.com/mitchellh/vault/vault_' + VERSION;

module.exports = new BinWrapper()
  .src(BASE + '_darwin_386.zip/', 'darwin', 'x32')
  .src(BASE + '_darwin_amd64.zip/', 'darwin', 'x64')
  .src(BASE + '_linux_386.zip/', 'linux', 'x32')
  .src(BASE + '_linux_amd64.zip/', 'linux', 'x64')
  .src(BASE + '_linux_arm.zip/', 'linux', 'arm')
  .src(BASE + '_windows_amd64.zip/', 'win32', 'x32')
  .src(BASE + '_windows_386.zip/', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'vault.exe' : 'vault');

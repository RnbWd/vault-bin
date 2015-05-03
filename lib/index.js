'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '0.1.0';

var BASE = 'https://dl.bintray.com/mitchellh/vault/vault_' + VERSION;
var CHECKSUMS = 'https://dl.bintray.com/mitchellh/vault/vault_0.1.0_SHA256SUMS?direct';

module.exports = new BinWrapper({checksums: CHECKSUMS})
  .src(BASE + '_darwin_amd64.zip/', 'darwin', 'x64')
  .src(BASE + '_linux_amd64.zip/', 'linux', 'x64')
  .src(BASE + '_linux_arm.zip/', 'linux', 'arm')
  .src(BASE + '_windows_amd64.zip/', 'win32', 'x32')
  .src(BASE + '_windows_386.zip/', 'win32', 'x64')
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'vault.exe' : 'vault');

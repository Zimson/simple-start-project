"use strict";

const gulp    = require('gulp');
const server  = require('browser-sync').create();
const plugins = require('../gulp.plugin-config');


/**
 * запуск сервера с собранным сайтом
 */
gulp.task('dev-serve', () => {
  server.init(plugins.browserSyncDev);
});

"use strict";

const gulp    = require('gulp');
const server  = require('browser-sync').create();
const plugins = require('../gulp.plugin-config');


/**
 * запуск сервера для разработки,
 * экспорт для возможности делать перезагрузку в других задачах
 */
gulp.task('dev-serve', () => {
  server.init(plugins.browserSyncDev);
});

module.exports.server = server;

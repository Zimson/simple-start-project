"use strict";

const gulp   = require('gulp');
const server = require('./dev-serve').server;


/**
 * таск перезагрузки браузера
 */
function reloadTask(done) {
  server.reload();
  done();
}


gulp.task('reload', reloadTask);

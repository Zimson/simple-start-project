"use strict";

const gulp    = require('gulp');
const syncy   = require('syncy');
const paths   = require('../gulp.pathes-config');
const plugins = require('../gulp.plugin-config');


/**
 * синхронизация ресурсов с src папками:
 *   при удалении билд будет проверяться на наличие лишних файлов, которые почистятся
 */
gulp.task('sync:build', (done) => {
  syncy(paths.src.sync, paths.build.img, plugins.syncyConfig)
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

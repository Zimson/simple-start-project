"use strict";

const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.pathes-config');
const $       = require('gulp-load-plugins')();

const gutil = require('gulp-util');



/**
 * билд html:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  revCollector - добавление хэшированного css
 *
 *  htmlmin - минификация
 *
 *  size - gzip
 */
gulp.task('html:build', () => {
  return gulp.src([paths.src.manifest_json, paths.build.html])
    .pipe($.plumber())
    .pipe($.revCollector({
      replaceReved: true
    }))
    .pipe($.htmlmin(plugins.htmlminConfig))
    .pipe($.size(plugins.sizeConfig))
    .pipe(gulp.dest(paths.build.all));
});

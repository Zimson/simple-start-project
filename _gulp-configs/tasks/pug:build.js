"use strict";

const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.pathes-config');
const $       = require('gulp-load-plugins')();


/**
 * компиляция pug-файлов при сборке:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  pug - компиляция в html
 *
 *  useref - переименование src путей скриптов, стилей
 */
gulp.task('pug:build', () => {
  return gulp.src(paths.src.pug)
    .pipe($.plumber())
    .pipe($.pug(plugins.pugConfig))
    .pipe($.useref(plugins.userefConfig))
    .pipe(gulp.dest(paths.build.all))
});

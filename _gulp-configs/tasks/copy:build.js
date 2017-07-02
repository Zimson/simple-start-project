"use strict";

const gulp  = require('gulp');
const paths = require('../gulp.pathes-config');


/**
 * копирование различных ресурсов в папку build
 */
gulp.task('copy:build', () => {
  return gulp.src(paths.src.copy, {base: './src'})
    .pipe(gulp.dest(paths.build.all));
});

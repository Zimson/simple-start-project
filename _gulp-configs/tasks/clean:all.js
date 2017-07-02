"use strict";

const gulp  = require('gulp');
const del   = require('del');
const paths = require('../gulp.pathes-config');


/**
 * полная очистка директории build при сборке
 */
gulp.task('clean:all', () => {
  return del(paths.del.all);
});

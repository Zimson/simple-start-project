"use strict";

const gulp  = require('gulp');
const del   = require('del');
const paths = require('../gulp.pathes-config');


/**
 * очистка директории build при сборке, кроме папки картинки
 */
gulp.task('clean', () => {
  return del(paths.del.build);
});

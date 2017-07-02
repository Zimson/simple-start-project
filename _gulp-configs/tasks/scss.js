"use strict";

const gulp         = require('gulp');
const plugins      = require('../gulp.plugin-config');
const paths        = require('../gulp.pathes-config');
const autoprefixer = require('autoprefixer');
const flexfix      = require('postcss-flexbugs-fixes');
const mqpacker     = require('css-mqpacker');
const $            = require('gulp-load-plugins')();


/**
 * компиляция scss-файлов:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  sourcemap.init, sourcemap.write - пишет sourcemap
 *
 *  sass.sync - компиляция scss в css с обработкой ошибок
 *
 *  postcss - обработка скомпилированного css
 *    autoprefixer - автопрефиксер
 *    mqpacker - сортировка стилей по медиа выражениям,
 *      объединяет раскиданные медиавыражения
 *    flexfix - ставит хаки для багов flexbox, в основном IE
 *
 *  rename - сливаем все стили в один файл, переименовываем
 */
gulp.task('scss', () => {
  return gulp.src(paths.src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync(plugins.scssConfig)
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer(plugins.autoprefixerConfig),
      mqpacker(plugins.mqpackerConfig),
      flexfix()
    ]))
    .pipe($.sourcemaps.write())
    .pipe($.rename('styles.css'))
    .pipe(gulp.dest(paths.dest.styles))
});

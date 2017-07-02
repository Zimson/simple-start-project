"use strict";

const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.pathes-config');
const $       = require('gulp-load-plugins')();

/**
 * добавлен модуль emmity для пересборки только изменённых pug-файлов,
 * а не всех зависимых.
 * @type {IEmittyApi}
 */
const emitty = require('emitty').setup('src', 'pug', {
  makeVinylFile: true
});

// флаг запущен вотчер, или нет
global.watchFlag         = false;

// объект под данные и пути изменённого pug-файла
global.emittyChangedFile = {
  path: '',
  stats: {}
};


/**
 * компиляция pug-файлов:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  $.if(!plugins.watch, $.newer) - при первом запуске проверяет,
 *    если уже есть скомпилированные в html pug-файлы, то заново не компилирует.
 *    на вотчерах снова перекомпиляция включается
 *
 *  emitty.stream - разрешение компиляции только изменённого pug-файла
 *
 *  pug - компиляция в html
 */
gulp.task('pug', () => {
  return gulp.src(paths.src.pug)
    .pipe($.plumber())
    .pipe($.if(!plugins.watch, $.newer({
      dest: paths.dest.pug,
      ext: '.html'})))
    .pipe($.if(global.watchFlag, emitty.stream(global.emittyChangedFile.path, global.emittyChangedFile.stats)))
    .pipe($.pug(plugins.pugConfig))
    .pipe(gulp.dest(paths.dest.pug));
});

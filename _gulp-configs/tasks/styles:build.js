"use strict";

const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const pathes  = require('../gulp.pathes-config');
const del     = require('del');
const $       = require('gulp-load-plugins')();


/**
 * сборка сss-файлов:
 *  csso - минификация
 *
 *  rev - добавляет хэш к изменённому css-файлу
 *
 *  .on('end') - удаление исходного сss-файла без хэша
 *
 *  rev.manifest - запоминает последний хэш, для будущей сверки
 */
gulp.task('styles:build', (done) => {
  return gulp.src(pathes.src.styles)
    .pipe($.csso())
    .pipe($.rev())
    .pipe(gulp.dest(pathes.build.styles))
    .on('end', () => {
      del([pathes.src.styles]);
      done();
    })
    .on('error', (err) => done(err))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(pathes.src.manifest));
});

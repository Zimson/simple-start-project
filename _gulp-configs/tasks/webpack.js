"use strict";

const gulp          = require('gulp');
const paths         = require('../gulp.pathes-config');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const webpackConfig = require('../../webpack.config');
const server        = require('./dev-serve').server;
const $             = require('gulp-load-plugins')();


/**
 * сборка js-файлов c помощью webpack:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  webpackStream(webpackConfig, webpack) - передаёт управление webpack,
 *    вторым параметром указана текущая версия webpack 3+,
 *    не используется вшитый в webpackStream webpack 1+
 *
 *  .on('data') - по окончанию сборки js обновляет окно браузера
 */
gulp.task('webpack', () => {
  return gulp.src(paths.src.webpack)
    .pipe($.plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.dest.webpack))
      .on('data', () => {
        server.reload();
      });
});

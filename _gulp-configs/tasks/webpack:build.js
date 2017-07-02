"use strict";

const gulp          = require('gulp');
const paths         = require('../gulp.pathes-config');
const plugins       = require('../gulp.plugin-config');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const webpackConfig = require('../../webpack.config');
const $             = require('gulp-load-plugins')();


/**
 * сборка js-файлов c помощью webpack в build:
 *  plumber - не обрывает поток обработки при ошибках
 *
 *  webpackStream(webpackConfig, webpack) - передаёт управление webpack,
 *    вторым параметром указана текущая версия webpack 3+,
 *    не используется вшитый в webpackStream webpack 1+
 *
 *  size - gzip файла
 */
gulp.task('webpack:build', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe($.plumber())
    .pipe($.size(plugins.sizeConfig))
    .pipe(gulp.dest(paths.build.js));
});

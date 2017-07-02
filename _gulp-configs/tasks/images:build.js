"use strict";

const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.pathes-config');
const $       = require('gulp-load-plugins')();


/**
 * билд картинок:
 *  newer - проверяет наличие в папке назначения готовых картинок,
 *    если уже обрабатываемая есть, повторно не собирает
 *
 *  imagemin, size - минификация и gzip
 */
gulp.task('images:build', () => {
  return gulp.src(paths.src.images)
    .pipe($.newer(paths.build.img))
    .pipe($.imagemin(plugins.imageminConfig))
    .pipe($.size(plugins.sizeConfig))
    .pipe(gulp.dest(paths.build.img))
});

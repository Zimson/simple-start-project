'use strict';

const gulp        = require('gulp');
const HubRegistry = require('gulp-hub');
const paths       = require('./_gulp-configs/gulp.pathes-config');
const server      = require('./_gulp-configs/tasks/dev-serve').server;
const hub         = new HubRegistry(['./_gulp-configs/tasks/*.js']);

/**
 * хаб галп-тасков, подгружает все таски из указанной папки
 */
gulp.registry(hub);
// ----------------------------------------------------------


// вотчеры, обёрнутые в одну функцию
function watchTask() {
  // вотчер запущен
  global.watchFlag  = true;

  // стили
  gulp.watch(paths.src.scss_watch, gulp.series('scss', 'reload'));

  // шаблоны
  gulp.watch(paths.src.pug_watch, gulp.series('pug', 'reload'))
    .on('all', (event, filepath, stats) => {
      // передаём путь к изменённому файлу и его данные
      global.emittyChangedFile = {
        path: filepath,
        stats
      };
    });

  // картинки, при любом изменении, обновляет окно браузера
  gulp.watch(paths.src.images)
    .on('all', () => {
      server.reload();
    });
}
// ------------------------------------------------


// дефолтный dev-task
gulp.task('default', gulp.series(
    gulp.parallel(
      'pug',
      'scss'
    ),
    gulp.parallel(
      'webpack',
      'dev-serve',
      watchTask
    )
  )
);
// --------------------------------------------------------------


// сборка
gulp.task('build', gulp.series(
  'clean',
  'pug:build',
  'scss:build',
  gulp.parallel(
    'styles:build',
    'html:build',
    'webpack:build',
    'images:build',
    'copy:build'
  ),
  'sync:build'
));


// сервер билда
gulp.task('build:serve', gulp.series('dist-serve'));

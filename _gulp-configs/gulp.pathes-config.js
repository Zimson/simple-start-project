"use strict";

module.exports = {
  // output
  dest: {
    scss: 'build/css/',
    styles: 'src/css',
    pug: 'src/',
    webpack: 'src/js/'
  },

  // input
  src: {
    webpack: [
      'src/js/**/*.js',
      '!src/js/app.js'
    ],
    copy: [
      'src/fonts/**/*.{woff,woff2}',
      'src/*.pdf',
      'src/*.xml',
      'src/*.ico'
    ],
    pug: [
      'src/**/*.pug',
      '!src/**/_*.pug'
    ],
    manifest: './src/manifests/',
    manifest_json: './src/manifests/**/*.json',
    pug_watch: 'src/**/*.pug',
    scss: 'src/scss/style.scss',
    scss_watch: 'src/scss/**/**.scss',
    styles: 'build/css/styles.css',
    images: 'src/img/**/*.{png,jpg,gif}',
    sync: ['./src/img/**'],
    html: 'src/*.html'
  },

  // build paths
  build: {
    all: './build',
    styles: './build/css',
    js: './build/js',
    img: './build/img',
    html: './build/*.html'
  },

  // paths for delete
  del: {
    all: 'build/',
    build: [
      'build/**',
      '!build',
      '!build/img',
      '!build/img/*.*',
      '!build/img/mobile',
      '!build/img/mobile/*.*',
      '!build/img/mobile/2x',
      '!build/img/mobile/2x/*.*',
      '!build/img/2x',
      '!build/img/2x/*.*'
    ]
  }
};

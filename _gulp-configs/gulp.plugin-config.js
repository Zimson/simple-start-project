
const normalize = require('node-normalize-scss').includePaths;
// -------------------------------------------------------------


const browserSyncDev = {
  port: 9000,
  open: true,
  notify: false,
  server: {
    baseDir: ['./', './src']
  }
};

const browserSyncProd = {
  port: 9001,
  open: true,
  notify: false,
  server: {
    baseDir: ['./,', './build/']
  }
};

const pugConfig = {
  pretty: true
};

const scssConfig = {
  outputStyle: 'expanded',
  precision: 10,
  includePaths: [
    '.',
    normalize
  ],
};

const autoprefixerConfig = {
  browsers: [
    'last 3 versions',
    '> 1%'
  ],
};

const mqpackerConfig = {
  sort: true
};

const imageminConfig = {
  interlaced: true,
  progressive: true,
  optimizationLevel: 3,
  svgoPlugins: [
    {
      removeViewBox: true
    },
  ],
};

const userefConfig = {
  searchPath: ['./', './src/', './node_modules/'],
};

const sizeConfig = {
  gzip: true
};

const syncyConfig = {
  base: './src/img'
};

const htmlminConfig = {
  collapseWhitespace: true
};


module.exports = {
  browserSyncDev,
  browserSyncProd,
  pugConfig,
  scssConfig,
  autoprefixerConfig,
  mqpackerConfig,
  imageminConfig,
  userefConfig,
  sizeConfig,
  syncyConfig,
  htmlminConfig
};

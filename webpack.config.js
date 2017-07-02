"use strict";

const webpack       = require('webpack');
const path          = require('path');
const isDevelopment = !process.env.NODE_ENV || (process.env.NODE_ENV === 'development');



module.exports = {
  context: __dirname + '/src/js',
  entry: {
    app: ['./_index.js']
  },

  watch: isDevelopment,

  devtool: isDevelopment ? 'cheap-module-inline-source-map' : 'false',

  output: {
    path: path.join(__dirname, "src/js"),
    filename: 'index.js',
    publicPath: '/js/'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};


if (!isDevelopment) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}

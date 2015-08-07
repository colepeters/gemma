// NPM modules
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var stylelint = require('stylelint')
var reporter = require('postcss-reporter')

// Local imports
var config = require('./config')

// Lint source CSS using Stylelint
// Rules are defined in config.js
gulp.task('lint', function () {
  return gulp.src('./src/**/*.css')
  .pipe(postcss([
    stylelint({
      'rules': config.rules
    }),
    reporter({
      clearMessages: true
    })
  ]))
})

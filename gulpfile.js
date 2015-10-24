// NPM modules
var gulp = require('gulp')
var cssnext = require('cssnext')
var postcss = require('gulp-postcss')
var stylelint = require('stylelint')
var reporter = require('postcss-reporter')
var rename = require('gulp-rename')

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

gulp.task('compile', function () {
  return gulp.src('./src/gemma.css')
  .pipe(postcss([
    cssnext({
      compress: true
    })
  ]))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public'))
})

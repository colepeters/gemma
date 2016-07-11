var gulp = require('gulp')
var postcss = require('gulp-postcss')

// Lint source CSS using Stylelint
gulp.task('lint', function () {
  return gulp.src('./src/**/*.css')
  .pipe(postcss([
    require('stylelint')({
      'rules': require('../stylelintrc.json')
    }),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]))
})


var gulp = require('gulp')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')

var BROWSER_SUPPORT_LIST = [
  'Chrome >= 41',
  'Safari >= 8',
  'Firefox >= 36',
  'ie >= 10',
  'iOS >= 8',
  'Android >= 4.4.2',
  'ChromeAndroid >= 4.4.2'
]

gulp.task('compile', function () {
  return gulp.src('./src/gemma.css')
  .pipe(postcss([
    require('postcss-import'),
    require('postcss-cssnext')({
      browsers: BROWSER_SUPPORT_LIST
    })
  ]))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public'))
})

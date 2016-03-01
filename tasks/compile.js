var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnext = require('cssnext')
var rename = require('gulp-rename')

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

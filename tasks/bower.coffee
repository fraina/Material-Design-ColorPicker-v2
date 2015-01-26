module.exports = (gulp, $, config)->
  gulp.task 'bower', ->
    gulp.src 'bower_components/**/*'
    .pipe gulp.dest config.paths.build + 'bower/'
    .pipe $.browserSync.reload stream: true

  bowerSrc = require 'gulp-bower-src'
  filter = $.filter '**/*.js', '!**/*.min.js'
  gulp.task 'bower:build', ->
    bowerSrc()
    .pipe filter
    .pipe $.uglify()
    .pipe filter.restore()
    .pipe gulp.dest config.paths.build + 'bower/'

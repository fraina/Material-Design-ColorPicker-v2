module.exports = (gulp, $, config)->
  gulp.task 'src', ->
    gulp.src ['src/**', '!src/css/**/*', '!src/**/*.+(coffee|jade|md)']
    .pipe $.changed config.paths.build
    .pipe gulp.dest config.paths.build
    .pipe $.browserSync.reload stream: true

module.exports = (gulp, $, config)->
  gulp.task 'todo', ->
    gulp.src ['src/**/*.+(styl|sass|scss|coffee|js)']
    .pipe $.todo()
    .pipe gulp.dest './'

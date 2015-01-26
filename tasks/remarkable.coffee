module.exports = (gulp, $, config)->
  gulp.task 'remarkable', ->
    gulp.src 'src/**/*.md'
    .pipe $.changed config.paths.build
    .pipe $.remarkable config.remarkable
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.build
    .pipe $.browserSync.reload stream: true

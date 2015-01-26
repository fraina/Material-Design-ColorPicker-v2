module.exports = (gulp, $, config)->
  gulp.task 'marked', ->
    gulp.src 'src/**/*.md'
    .pipe $.changed config.paths.build
    .pipe $.marked config.marked
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.build
    .pipe $.browserSync.reload stream: true

module.exports = (gulp, $, config)->
  gulp.task 'image', ->
    gulp.src config.paths.img + '**/*'
    .pipe $.image()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.img

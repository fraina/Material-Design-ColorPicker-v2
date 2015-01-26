module.exports = (gulp, $, config)->
  gulp.task 'lint', ->
    gulp.src 'src/js/**/*.js'
    .pipe $.eslint()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe $.eslint.format()

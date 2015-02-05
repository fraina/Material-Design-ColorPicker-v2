module.exports = (gulp, $, config)->
  gulp.task 'coffeelint', ->
    gulp.src 'src/js/**/*.coffee'
    .pipe $.coffeelint()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe $.coffeelint.reporter()

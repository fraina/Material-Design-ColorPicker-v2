module.exports = (gulp, $, config)->
  gulp.task 'js', ->
    gulp.src 'src/js/**/*.js'
    .pipe $.changed config.paths.js
    .pipe $.eslint()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe $.eslint.format()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.js
    .pipe $.browserSync.reload stream: true

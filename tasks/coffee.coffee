module.exports = (gulp, $, config)->
  gulp.task 'coffee', ->
    gulp.src 'src/js/**/*.coffee'
    .pipe $.changed config.paths.js, extension: '.js'
    .pipe $.coffee bare: true
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.js
    .pipe $.browserSync.reload stream: true

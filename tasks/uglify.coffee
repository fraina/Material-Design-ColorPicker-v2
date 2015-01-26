module.exports = (gulp, $, config)->
  gulp.task 'uglify', ->
    gulp.src config.paths.js + '**/*.js'
    .pipe $.uglify()
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.js

module.exports = (gulp, $, config)->
  gulp.task 'jade', ->
    gulp.src ['src/**/*.jade', '!src/**/_*.jade']
    .pipe $.changed config.paths.build, extension: '.html'
    .pipe $.jade config.jade
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.build
    .pipe $.browserSync.reload stream: true

module.exports = (gulp, $, config)->
  gulp.task 'rjs', ->
    config.rjs.options.baseUrl = config.paths.js
    $.requirejs config.rjs.options
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.js
    .on 'data', ->
      gulp.start 'uglify'
    return

module.exports = (gulp, $, config)->
  gulp.task 'compass', ->
    config.compass.sass = 'src/css/'
    config.compass.css = config.paths.css
    config.compass.image = config.paths.img
    config.compass.javascript = config.paths.js
    config.compass.font = config.paths.font

    gulp.src 'src/css/**/*.+(sass|scss)'
    .pipe $.compass config.compass
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe $.browserSync.reload stream: true

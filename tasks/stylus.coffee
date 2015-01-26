module.exports = (gulp, $, config)->
  nib = require 'nib'
  gulp.task 'stylus', ->
    gulp.src ['src/css/**/*.styl', '!src/css/**/_*.styl']
    .pipe $.stylus
        use: nib()
        compress: true
        sourcemap:
          inline: true
          sourceRoot: '.'
    .pipe $.sourcemaps.init
        loadMaps: true
    .pipe $.sourcemaps.write '.',
        includeContent: false
        sourceRoot: '.'
    .on 'error', (error) ->
      $.logger.info error.toString()
      @emit 'end'
    .pipe gulp.dest config.paths.css
    .pipe $.browserSync.reload stream: true

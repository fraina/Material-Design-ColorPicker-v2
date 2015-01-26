module.exports = (gulp, $, config)->
  del = require 'del'
  gulp.task 'clean', ->
    del config.paths.build
    return

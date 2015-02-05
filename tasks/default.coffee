module.exports = (gulp, $, config)->
  gulp.task 'default', ->
    $.runSequence 'src', ['remarkable', 'jade', 'compass', 'coffee', 'bower'], ['watch', 'webserver']

module.exports = (gulp, $, config)->
  gulp.task 'default', ->
    $.runSequence 'src', ['remarkable', 'jade', 'compass', 'js', 'coffee', 'bower'], ['watch', 'webserver']

module.exports = (gulp, $, config)->
  gulp.task 'build', ->
    $.runSequence 'clean', 'src', ['image', 'remarkable', 'jade', 'compass', 'js', 'coffee', 'bower:build'], ['rjs', 'htmlmin'], 'rev'

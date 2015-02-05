module.exports = (gulp, $, config)->
  gulp.task 'build', ->
    $.runSequence 'clean', 'src', ['remarkable', 'jade', 'compass', 'coffee', 'bower:build'], ['rjs', 'htmlmin'], 'rev'

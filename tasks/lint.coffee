module.exports = (gulp, $, config)->
  gulp.task 'lint', ->
    $.runSequence 'eslint', 'coffeelint'

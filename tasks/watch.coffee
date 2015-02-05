module.exports = (gulp, $, config)->
  gulp.task 'watch', ->
    gulp.watch ['src/**', '!src/css/**/*', '!src/**/*.+(coffee|jade|md)'], ['src']
    gulp.watch 'src/**/*.md', ['remarkable']
    gulp.watch 'src/**/*.jade', ['jade']
    gulp.watch 'src/css/**/*.+(sass|scss)', ['compass']
    gulp.watch 'src/js/**/*.coffee', ['coffee']
    gulp.watch 'bower_components/**/*', ['bower']
    if config.mock
      gulp.watch config.mock, ->
        config.restartServer = true
        gulp.start 'webserver'
    return

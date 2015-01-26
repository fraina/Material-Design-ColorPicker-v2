module.exports = (gulp, $, config)->
  gulp.task 'htmlmin', ->
    gulp.src [config.paths.build + '**/*.html', '!build/bower/**/*']
    .pipe $.htmlmin collapseWhitespace: true
    .pipe gulp.dest config.paths.build

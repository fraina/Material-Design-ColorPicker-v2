module.exports = (gulp, $, config)->
  gulp.task 'doc', ['coffee', 'js'], ->
    gulp.src 'src/js/**/*.+(js|coffee)'
    .pipe $.docco config.docco
    .pipe gulp.dest config.paths.build + 'docco/'

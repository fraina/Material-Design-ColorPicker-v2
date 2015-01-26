module.exports = (gulp, $, config)->
  deploy = require 'gulp-gh-pages'
  gulp.task 'deploy', ->
    gulp.src config.paths.build + '**/*'
    .pipe deploy(config.deploy)

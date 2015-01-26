module.exports = (gulp, $, config)->
  source = ['./bower.json', './component.json', './package.json']

  gulp.task 'bump:major', ->
    gulp.src source
    .pipe $.bump type:'major'
    .pipe gulp.dest './'

  gulp.task 'bump:minor', ->
    gulp.src source
    .pipe $.bump type:'minor'
    .pipe gulp.dest './'

  gulp.task 'bump:patch', ->
    gulp.src source
    .pipe $.bump type:'patch'
    .pipe gulp.dest './'

  gulp.task 'bump:prerelease', ->
    gulp.src source
    .pipe $.bump type:'prerelease'
    .pipe gulp.dest './'

  gulp.task 'bump', ->
    gulp.src source
    .pipe $.bump version: $.util.env.to
    .pipe gulp.dest './'

module.exports = (gulp, $, config)->
  gulp.task 'webserver', ->
    express = require 'express'
    bodyParser = require 'body-parser'
    http = require 'http'
    portScanner = require 'portscanner'
    spa = require 'browser-sync-spa'
    app = express()
    app.use bodyParser.urlencoded
      extended: true
      parameterLimit: 10000
      limit: 1024 * 1024 * 10
    path = require 'path'

    if config.mock
      if config.restartServer
        config.devServer.close()
        config.restartServer = false

      mockName = path.resolve __dirname+'/../', config.mock
      delete require.cache[mockName]
      routes = require mockName
      app.use '/', routes

    mockPort = mockPort || 3000
    app.use express.static config.paths.build
    portScanner.findAPortNotInUse 3000, 65535, '127.0.0.1', (error, mockPort) ->
      config.devServer = http.createServer(app).listen(mockPort)

    if ! config.BSIsReady
      options =
        proxy: 'localhost:' + mockPort
        port: config.port
        logPrefix: 'Laima'
        logConnections: true
        tunnel: true

      options.open = if config.open then config.open else false
      $.browserSync options
      $.browserSync.use spa()
      config.BSIsReady = true

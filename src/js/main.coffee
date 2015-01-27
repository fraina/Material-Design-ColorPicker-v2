# global requirejs
requirejs.config
  paths:
    jquery: "../bower/jquery/dist/jquery.min"
    underscore: "../bower/lodash/dist/lodash.underscore.min"
    backbone: "../bower/backbone/backbone"
    i18n: "../bower/requirejs-i18n/i18n"
    text: "../bower/requirejs-text/text"
    mock: "../bower/mockjs/dist/mock"

  shim:
    underscore:
      exports: "_"

    backbone:
      deps: [
        "underscore"
        "jquery"
      ]
      exports: "Backbone"

    backstretch:
      deps: ["jquery"]

require [
  "jquery"
  "underscore"
  "backbone"
  "views/palette"
  "views/picker"
], ($, _, Backbone, Palette, Picker) ->
  "use strict"

  new Palette()
  new Picker()

  Backbone.history.start()

  return

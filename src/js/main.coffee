# global requirejs
requirejs.config
  paths:
    jquery: "../bower/jquery/dist/jquery.min"
    underscore: "../bower/lodash/dist/lodash.underscore.min"
    backbone: "../bower/backbone/backbone"
    i18n: "../bower/requirejs-i18n/i18n"
    text: "../bower/requirejs-text/text"
    mock: "../bower/mockjs/dist/mock"
    react: "../bower/react/react-with-addons"
    JSXTransformer: "../bower/react/JSXTransformer"
    jsx: "../bower/jsx-requirejs-plugin/js/jsx"

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

  jsx:
    fileExtension: '.jsx'

require [
  "jquery"
  "underscore"
  "backbone"
  "views/palette"
  "views/picker"
  "jsx!views/react"
], ($, _, Backbone, Palette, Picker, ReactTest) ->
  "use strict"

  new Palette()
  new Picker()

  Backbone.history.start()

  return

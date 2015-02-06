# global requirejs
requirejs.config
  paths:
    jquery: "../bower/jquery/dist/jquery.min"
    underscore: "../bower/lodash/lodash.min"
    backbone: "../bower/backbone/backbone"
    i18n: "../bower/requirejs-i18n/i18n"
    text: "../bower/requirejs-text/text"
    mock: "../bower/mockjs/dist/mock"
    react: "../bower/react/react-with-addons"
    JSXTransformer: "../bower/react/JSXTransformer"
    jsx: "../bower/jsx-requirejs-plugin/js/jsx"
    BRMixin: "../bower/backbone-react-component/lib/component"

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
  "jsx!views/colorPicker"
], ($, _, Backbone, colorPicker) ->
  "use strict"

  Backbone.history.start()

  return

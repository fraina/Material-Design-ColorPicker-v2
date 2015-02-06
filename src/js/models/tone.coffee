define [
  'backbone'
  'underscore'
], (Backbone, _) ->
  'use strict'

  Palette = Backbone.Model.extend

    defaults:
      "picked": false

  return Palette

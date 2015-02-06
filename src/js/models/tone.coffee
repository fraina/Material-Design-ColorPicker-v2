define [
  'backbone'
  'underscore'
], (Backbone, _) ->
  'use strict'

  Palette = Backbone.Model.extend

    defaults:
      "picked": false

      Backbone.Model.prototype.set.apply(this, arguments)

  return Palette
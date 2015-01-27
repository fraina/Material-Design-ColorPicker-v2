define [
  'backbone'
  'underscore'
], (Backbone, _) ->
  'use strict'

  Palette = Backbone.Model.extend

    initialize: ->
      console.log(@attributes)


  return Palette
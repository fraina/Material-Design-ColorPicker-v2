define [
  'backbone'
  'models/tone'
], (Backbone, Model) ->
  'use strict'

  Palette = Backbone.Collection.extend

    model: Model
    url: 'js/data.json'

    initialize: ->


  return Palette

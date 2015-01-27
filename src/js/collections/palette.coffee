define [
  'backbone'
  'underscore'
  'models/tone'
], (Backbone, _, Model) ->
  'use strict'

  Palette = Backbone.Collection.extend

    model: Model
    url: 'js/data.json'

    initialize: ->
      console.log('collection')

  return Palette
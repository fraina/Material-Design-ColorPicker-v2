define [
  'backbone'
  'underscore'
  'models/tone'
], (Backbone, _, Model) ->
  'use strict'

  Picker = Backbone.Collection.extend

    model: Model

    initialize: ->
      console.log('[collection] Picker')

  return Picker
define [
  'backbone'
  'models/picked'
], (Backbone, Model) ->
  'use strict'

  Picker = Backbone.Collection.extend

    model: Model

    initialize: ->


  return Picker

define [
  'backbone'
  'underscore'
], (Backbone, _) ->
  'use strict'

  Picked = Backbone.Model.extend

    initialize: ->
      console.log(@attributes)


  return Picked
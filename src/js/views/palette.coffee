define [
  'jquery'
  'backbone'
  'underscore'
  'collections/palette'
  'text!templates/palette.html'
], ($, Backbone, _, PaletteCollection, Template) ->
  'use strict'

  Palette = Backbone.View.extend

    collection: PaletteCollection
    template: _.template(Template)

    initialize: ->
      temp = new @collection
      temp.fetch()
      $('.palette').append(@template)


  return Palette

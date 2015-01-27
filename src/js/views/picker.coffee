define [
  'jquery'
  'backbone'
  'underscore'
  'collections/picker'
  'text!templates/picker.html'
], ($, Backbone, _, PickerCollection, Template) ->
  'use strict'

  Picker = Backbone.View.extend

    collection: PickerCollection
    template: _.template(Template)

    initialize: ->
      $('.palette').append(@template)


  return Picker

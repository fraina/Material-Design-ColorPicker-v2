define(['backbone', 'models/tone'], function(Backbone, Model) {
  'use strict';
  var Palette;
  Palette = Backbone.Collection.extend({
    model: Model,
    url: 'js/data.json',
    initialize: function() {}
  });
  return Palette;
});

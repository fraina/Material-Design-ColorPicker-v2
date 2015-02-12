define(['backbone', 'models/picked'], function(Backbone, Model) {
  'use strict';
  var Picker;
  Picker = Backbone.Collection.extend({
    model: Model,
    initialize: function() {}
  });
  return Picker;
});

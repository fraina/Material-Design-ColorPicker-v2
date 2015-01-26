define(function (require) {
  // todo Dropping this file when developing.
  'use strict';

  var Backbone = require('backbone');
  var models = {};

  models.Sample = Backbone.Model.extend({
    urlRoot: '/api/samples'
  });

  return models;
});

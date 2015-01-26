'use strict';

requirejs.config({
  baseUrl: '../build/js',
  paths: {
    jquery: '../bower/jquery/dist/jquery.min',
    underscore: '../bower/lodash/dist/lodash.underscore.min',
    backbone: '../bower/backbone/backbone',
    i18n: '../bower/requirejs-i18n/i18n',
    text: '../bower/requirejs-text/text',
    mocha: '../bower/mocha/mocha',
    chai: '../bower/chai/chai',
    specs: '../../test/specs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    }
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
  var chai = require('chai');
  var mocha = require('mocha');

  // Chai
  var should = chai.should();

  mocha.setup('bdd');

  require([
    'specs/model-test'
  ], function() {
    mocha.run();
  });

});

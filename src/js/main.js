/*global requirejs*/
requirejs.config({

  paths: {
    jquery: '../bower/jquery/dist/jquery.min',
    underscore: '../bower/lodash/dist/lodash.underscore.min',
    backbone: '../bower/backbone/backbone',
    i18n: '../bower/requirejs-i18n/i18n',
    text: '../bower/requirejs-text/text',
    backstretch: '../bower/jquery-backstretch/jquery.backstretch.min',
    mock: '../bower/mockjs/dist/mock'
  },

  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    backstretch: {
      deps: ['jquery']
    }
  }
});

require([
  'jquery',
  'underscore',
  'backbone',
  'backstretch'
], function ($, _, Backbone) {

  'use strict';

  // -----------------------------------
  //  Welcome page
  // -----------------------------------

  function qrCode(content, width, height) {
    width = (! width) ? 120 : width;
    height = (! height) ? 120 : height;
    content = encodeURIComponent(content);

    return 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
  }

  var $bgList = $('.bgChanger-list li'),
    $phoneScreen = $('.content-phoneScreenBg');

  $('.qrcode').html('<img src=\'' + qrCode(window.location, 200, 200) + '\' />');
  $bgList.click(function () {
    $.backstretch($(this).attr('data-bg'), {fade: 750});
    $phoneScreen.backstretch($(this).attr('data-bg'), {fade: 750});
  });

  $.backstretch($bgList.first().attr('data-bg'));
  $phoneScreen.backstretch($bgList.first().attr('data-bg'));
  // ----------------------------------

  Backbone.history.start();
});

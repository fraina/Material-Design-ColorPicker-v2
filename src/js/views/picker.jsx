(function(factory) {
  'use strict';

  define([
    'react',
    'BRMixin'
  ], factory);

})(function(
  React,
  BRMixin
) {
  'use strict';

  var Picked = React.createClass({
    render: function() {
      // 選中的顏色
    }
  })

  var Picker = React.createClass({
    mixins: [BRMixin],

    render: function() {
      return <a>picker</a>
    }
  });

  return Picker;

})
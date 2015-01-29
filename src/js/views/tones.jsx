(function(factory) {
  'use strict';

  define([
    'react'
  ], factory);

})(function(
  React
) {
  'use strict';

  var Tone = React.createClass({
    render: function() {
      var currentColor = {
        background: '#' + this.props.list.hex
      }
      return <a className='palette-tone' style={currentColor}>{this.props.list.hex}</a>
    }
  });

  return Tone;

})
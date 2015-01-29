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
      var currentColor;
      if (this.props.status) {
        currentColor = {background: '#' + this.props.list.hex}
      } else {
        currentColor = {background: '#000'}
      }
      return <a className='palette-tone' style={currentColor}>{this.props.list.hex}</a>
    }
  });

  return Tone;

})
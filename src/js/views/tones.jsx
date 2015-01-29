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
        currentColor = {background: '#' + this.props.paletteColor}
      }
      return <a className='palette-tone' style={currentColor}></a>
    }
  });

  return Tone;

})
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
        background: '#' + this.props.data.hex
      }
      return <a className='palette-tone' style={currentColor}>{this.props.data.hex}</a>
    }
  });

  var Tones = React.createClass({
    render: function() {
      return <Tone data={this.props.list}/>;
    }
  });

  return Tones;

})
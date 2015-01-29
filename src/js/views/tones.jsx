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

  var Tone = React.createClass({
    mixins: [BRMixin],

    clickHandler: function(e) {
      this.props.pickerCollect.add({'tempV': '1'})
      console.log(this.props.pickerCollect)
    },

    render: function() {
      var currentColor;
      if (this.props.status) {
        currentColor = {background: '#' + this.props.list.hex}
      } else {
        currentColor = {background: '#' + this.props.paletteColor}
      }
      return <a className='palette-tone' style={currentColor} onClick={this.clickHandler}></a>
    }
  });

  return Tone;

})
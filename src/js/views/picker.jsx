(function(factory) {
  'use strict';

  define([
    'jquery',
    'react'
  ], factory);

})(function(
  $,
  React
) {
  'use strict';

  var PickedColor = React.createClass({
    clickHandler: function() {
      var $picker = $('.picker');
      if ($picker.hasClass('is-active')) {
        $picker.toggleClass('is-active');
      }
    },

    render: function() {
      var currentHex = this.props.model.get('hex'),
          currentColor = {background: '#' + currentHex};
      return (
        <span className="picker-color" style={currentColor} onClick={this.clickHandler}>
          <span className="picker-colorHex">{currentHex}</span>
        </span>
      )
    }
  })

  var Picker = React.createClass({
    getInitialState: function() {
      return {
        colorList: []
      };
    },

    componentDidMount: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect,
          colors = [];
      pickedCollect.on('add remove reset change', function() {
        colors.length = 0;
        for (var i = 0; i < pickedCollect.length; i++){
          colors[i] = pickedCollect.models[i].get('hex');
        }
        this.setState({ colorList: colors })
      }.bind(this));
    },

    render: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect;
      return (
        <div className="picker-colors">
          {this.state.colorList.map(function(color) {
            var currentModel = pickedCollect.findWhere({hex: color});
            return (
              <PickedColor model={currentModel} />
            )
          })}
        </div>
      )
    }
  });

  return Picker;

})
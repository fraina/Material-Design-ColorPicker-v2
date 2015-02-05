(function(factory) {
  'use strict';

  define([
    'jquery',
    'react',
    'BRMixin'
  ], factory);

})(function(
  $,
  React,
  BRMixin
) {
  'use strict';

  var PickedColor = React.createClass({
    getInitialState: function() {
      return {
        model: this.props.model
      };
    },

    clickHandler: function() {
      var $picker = $('.picker');
      if ($picker.hasClass('is-active')) {
        $picker.toggleClass('is-active');
      }
    },

    render: function() {
      var currentHex = this.state.model.id,
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
      this.props.pickedCollect.on('add', function() {
        for (var i = 0; i < pickedCollect.length; i++){
          colors[i] = pickedCollect.models[i].get('id');
        }
        this.setState({ colorList: colors })
        console.log(this.getDOMNode());
      }.bind(this));
    },

    render: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect;
      return (
        <div className="picker-colors">
          {this.state.colorList.map(function(color) {
            var currentModel = pickedCollect.findWhere({id : color});
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
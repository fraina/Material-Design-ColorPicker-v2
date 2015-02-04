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

    getInitialState: function() {
      return {
        tmp: []
      };
    },

    componentDidMount: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect,
          tmp = [];
      this.props.pickedCollect.on('add', function() {
        for (var i = 0; i < pickedCollect.length; i++){
          tmp[i] = pickedCollect.models[i].get('id');
        }
        this.setState({ tmp: tmp })
      }.bind(this));
    },

    render: function() {
      return (
        <a>{this.state.tmp}</a>
      )
    }
  });

  return Picker;

})
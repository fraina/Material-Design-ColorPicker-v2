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

  // #### 已選顏色色卡 ####
  var PickedColor = React.createClass({
    clickHandler: function(e) {
      var $picker = $('.picker'),
          trashMode = ($('.icon-trash').hasClass('is-deletable'));
      if ($picker.hasClass('is-active')) {
        e.stopPropagation()
      } else {
        $picker.removeClass('is-active');
      }

      if (trashMode) {
        var props = this.props,
            pickedCollect = props.pickedCollect,
            model = props.model,
            targetDom = model.get('targetDom');
        targetDom.removeClass('is-selected');
        pickedCollect.remove(model);
        e.stopPropagation()
      }
    },

    hexClickHandler: function(e) {
      var tar = $(e.target);
      tar.select();
      e.stopPropagation()
    },

    render: function() {
      var currentHex = this.props.model.get('hex'),
          currentColor = {background: '#' + currentHex};
      return (
        <span
          className="picker-color"
          style={currentColor}
          onClick={this.clickHandler}>
          <input
            className="picker-colorHex"
            value={currentHex}
            onClick={this.hexClickHandler}
            readOnly />
          <div className="picker-color--info">
            <span>{this.props.model.get('paletteName')}</span>
            <span>{this.props.model.get('tone')}</span>
          </div>
        </span>
      )
    }
  })


  // #### 清空所有已選顏色 ####
  var PickedClear = React.createClass({
    clearAllClickHandler: function(e) {
      var props = this.props,
          pickedCollect = props.pickedCollect;
      pickedCollect.each(function(model) {
        var targetDom = model.get('targetDom');
        targetDom.removeClass('is-selected');
      })
      this.props.pickedCollect.reset();
      e.stopPropagation();
    },

    render: function() {
      return (
        <a className="picker-color--clearAll dn" onClick={this.clearAllClickHandler}>
          <i className="icon-trashAll"></i>
        </a>
      )
    }
  })


  // #### 選色器本體 ####
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
          <PickedClear pickedCollect={pickedCollect}/>
          {this.state.colorList.map(function(color) {
            var currentModel = pickedCollect.findWhere({hex: color});
            return (
              <PickedColor
                model={currentModel}
                pickedCollect={pickedCollect} />
            )
          })}
        </div>
      )
    }
  });

  return Picker;

})

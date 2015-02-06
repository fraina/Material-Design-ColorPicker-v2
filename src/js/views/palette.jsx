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

  // #### 子元件：色卡 ####
  var Tone = React.createClass({

    clickHandler: function() {
      var props = this.props,
          collection = props.pickedCollect,
          palette = props.model.paletteName,
          tone = props.list,
          $locker = $('.flaticon-locker');

      function pickedCollectAdd() {
        props.pickedCollect.add({
          'hex': tone.hex,
          'paletteName': palette,
          'tone': tone.tone
        })
      }

      if (! $locker.hasClass('is-locked')){
        pickedCollectAdd()
      } else {
        if (! props.pickedCollect.findWhere({hex: tone.hex})) {
          pickedCollectAdd()
        }
      }
    },

    render: function() {
      var props = this.props,
          currentColor;

      if (props.status) {
        currentColor = {background: '#' + props.list.hex}
      } else {
        currentColor = {background: '#' + props.paletteColor}
      }
      return <a className='palette-tone' style={currentColor} onClick={this.clickHandler}></a>
    }
  });


  // #### 色調 ####
  var Palette = React.createClass({

    getInitialState: function() {
      return {
        isShow: false
      };
    },

    hoverHandler: function(e) {
      var show = !this.state.isShow;
      this.setState({ isShow: show });
    },

    render: function() {
      var props = this.props,
          show = this.state.isShow,
          model = props.model,
          paletteColor = props.model.color[5].hex,
          pickedCollect = props.pickedCollect;
      return (
        <div className='palette-tones'
             onMouseEnter={this.hoverHandler}
             onMouseLeave={this.hoverHandler}>
          {props.model.color.map(function(tone) {
            return <Tone model={model} list={tone} status={show} paletteColor={paletteColor} pickedCollect={pickedCollect}/>
          })}
        </div>
      )
    }
  });

  return Palette;

})

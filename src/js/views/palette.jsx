(function(factory) {
  'use strict';

  define([
    'react',
    'jsx!views/tones'
  ], factory);

})(function(
  React,
  Tones
) {
  'use strict';

  var Palette = React.createClass({

    getInitialState: function() {
      return {
        isShow: false
      };
    },

    hoverHandler: function(e) {
      var isShow = !this.state.isShow;
      this.setState({ isShow: isShow });
    },

    render: function() {
      var show = this.state.isShow,
          paletteColor = this.props.model.color[5].hex;
      return (
        <div
          className='palette-tones'
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
          {this.props.model.color.map(function(tone) {
            return <Tones list={tone} status={show} paletteColor={paletteColor}/>
          })}
        </div>
      )
    }
  });

  return Palette;

})

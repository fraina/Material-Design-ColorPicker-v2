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
        isShow: true
      };
    },

    clickHandler: function(e) {
      console.log(this.props.model.paletteName)
      this.props.isShow = !this.props.isShow;
      this.setState({ isShow: false });
    },

    render: function() {
      var show = this.props.isShow;
      return (
        <div className='palette-tones' onClick={this.clickHandler}>
          {this.props.model.color.map(function(tone) {
            return <Tones list={tone} status={show}/>
          })}
        </div>
      )
    }
  });

  return Palette;

})

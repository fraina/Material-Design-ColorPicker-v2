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
    render: function() {
      return (
        <div className='palette-tones'>
          {this.props.colors.map(function(tone) {
            return <Tones list={tone}/>
          })}
        </div>
      )
    }
  });

  return Palette;

})

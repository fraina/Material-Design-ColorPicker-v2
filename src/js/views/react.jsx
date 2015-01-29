(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'jsx!views/tones'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  Collection,
  Tones
) {
  'use strict';

  var HelloMessage = React.createClass({
    mixins: [BRMixin],
    render: function() {
      return (
        <ul id='palette'>
          {this.props.collection.map(function(model) {
            return (
              <li className='palette-list'>
                <div className='palette-tones'>
                  {model.color.map(function(tone) {
                    return <Tones list={tone}/>
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      );
    }
  });

  var collection = new Collection();
  collection.fetch()

  React.render(<HelloMessage collection={collection} />, document.getElementById('wrapper'));

})
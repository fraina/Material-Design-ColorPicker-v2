(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'jsx!views/palette'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  Collection,
  Palette
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
                <Palette model={model} isShow={true}/>
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
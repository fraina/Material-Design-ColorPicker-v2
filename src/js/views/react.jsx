(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'collections/picker',
    'jsx!views/palette'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  CollectionPalette,
  CollectionPicker,
  Palette
) {
  'use strict';

  var HelloMessage = React.createClass({
    mixins: [BRMixin],
    render: function() {
      var pickerCollect = this.props.pickerCollect;
      return (
        <ul id='palette'>
          {this.props.collection.map(function(model) {
            return (
              <li className='palette-list'>
                <Palette model={model} isShow={true} pickerCollect={pickerCollect}/>
              </li>
            )
          })}
        </ul>
      );
    }
  });

  var collectionPalette = new CollectionPalette();
  var collectionPicker = new CollectionPicker();
  collectionPalette.fetch()

  React.render(<HelloMessage collection={collectionPalette} pickerCollect={collectionPicker}/>, document.getElementById('wrapper'));

})
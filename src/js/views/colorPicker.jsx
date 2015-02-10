(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'collections/picker',
    'jsx!views/palette',
    'jsx!views/picker',
    'jsx!views/toolbar'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  CollectionPalette,
  CollectionPicker,
  Palette,
  Picker,
  ToolBar
) {
  'use strict';

  var ColorPicker = React.createClass({

    mixins: [BRMixin],

    clickHandler: function() {
      var $picker = $('.picker');
      $picker.toggleClass('is-active');
    },

    render: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect,
          paletteCollect = props.collection;
      return (
        <ul id='palette'>
          {paletteCollect.map(function(model) {
            return (
              <li className='palette-list'>
                <Palette model={model} isShow={true} pickedCollect={pickedCollect}/>
              </li>
            )
          })}
          <li className='picker' onClick={this.clickHandler}>
            <ToolBar pickedCollect={pickedCollect}/>
            <Picker pickedCollect={pickedCollect}/>
          </li>
        </ul>
      );
    }
  });

  var collectionPalette = new CollectionPalette();
  var collectionPicker = new CollectionPicker();
  collectionPalette.fetch();

  React.render(<ColorPicker collection={collectionPalette} pickedCollect={collectionPicker}/>, document.getElementById('wrapper'));

})

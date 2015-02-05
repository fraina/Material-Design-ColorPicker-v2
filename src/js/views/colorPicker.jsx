(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'collections/picker',
    'jsx!views/palette',
    'jsx!views/picker'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  CollectionPalette,
  CollectionPicker,
  Palette,
  Picker
) {
  'use strict';

  var HelloMessage = React.createClass({

    mixins: [BRMixin],

    clickHandler: function() {
      var $picker = $('.picker');
      $picker.toggleClass('is-active');
    },

    render: function() {
      var props = this.props,
          pickedCollect = this.props.pickedCollect;
      return (
        <ul id='palette'>
          {props.collection.map(function(model) {
            return (
              <li className='palette-list'>
                <Palette model={model} isShow={true} pickedCollect={pickedCollect}/>
              </li>
            )
          })}
          <li className='picker' onClick={this.clickHandler}>
            <Picker pickedCollect={pickedCollect}/>
            <ul className="ghbtns">
              <li><iframe src="http://ghbtns.com/github-btn.html?user=Fraina&repo=Material-Design-ColorPicker&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
              <li><iframe src="http://ghbtns.com/github-btn.html?user=Fraina&repo=Material-Design-ColorPicker&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
            </ul>
          </li>
        </ul>
      );
    }
  });

  var collectionPalette = new CollectionPalette();
  var collectionPicker = new CollectionPicker();
  collectionPalette.fetch()

  React.render(<HelloMessage collection={collectionPalette} pickedCollect={collectionPicker}/>, document.getElementById('wrapper'));

})
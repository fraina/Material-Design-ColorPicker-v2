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

  var ToolBarLocker = React.createClass({
    clickHandler: function() {
      var $locker = $('.flaticon-locker')
      $locker.toggleClass('is-locked');
    },

    render: function() {
      return (<i className="flaticon-locker" onClick={this.clickHandler}></i>)
    }
  })

  var ToolBarTrash = React.createClass({
    clickHandler: function() {
      this.props.pickedCollect.reset();
    },

    render: function() {
      return (<i className="flaticon-trash" onClick={this.clickHandler}></i>)
    }
  })

  var ToolBar = React.createClass({
    clickHandler: function() {
      var $picker = $('.picker');
      if (! $picker.hasClass('is-active')) {
        $picker.attr('class', 'picker is-active');
      } else {
        $picker.removeClass('is-active');
      }
    },

    render: function() {
      var props = this.props,
          pickedCollect = props.pickedCollect;

      return (
        <div className="toolbar" onClick={this.clickHandler}>
          <i className="flaticon-note"></i>
          <ToolBarLocker />
          <ToolBarTrash pickedCollect={pickedCollect}/>
          <ul className="ghbtns">
            <li><iframe src="http://ghbtns.com/github-btn.html?user=Fraina&repo=Material-Design-ColorPicker-v2&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
            <li><iframe src="http://ghbtns.com/github-btn.html?user=Fraina&repo=Material-Design-ColorPicker-v2&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
          </ul>
        </div>
      )
    }
  })

  return ToolBar

})
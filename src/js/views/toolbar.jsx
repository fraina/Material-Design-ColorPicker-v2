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


  var ToolBarInfo = React.createClass({
    clickHandler: function() {
      var $info = $('.flaticon-list'),
          $picker_colors = $('.picker').find('.picker-colors');
      $info.toggleClass('is-showInfo');
      $picker_colors.toggleClass('show-info');
    },

    render: function() {
      return (<i className="flaticon-list" onClick={this.clickHandler}></i>)
    }
  })

  var ToolBarFilter = React.createClass({
    clickHandler: function() {
      var $locker = $('.flaticon-filter')
      $locker.toggleClass('is-filtering');
    },

    render: function() {
      return (<i className="flaticon-filter is-filtering" onClick={this.clickHandler}></i>)
    }
  })

  var ToolBarTrash = React.createClass({
    clickHandler: function(e) {
      var $tar = $(e.target),
          $clearAll = $('.picker-color--clearAll');
      $tar.toggleClass('is-deletable');
      $clearAll.toggleClass('dn');
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
          <ToolBarInfo />
          <ToolBarTrash pickedCollect={pickedCollect}/>
          <ToolBarFilter />
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

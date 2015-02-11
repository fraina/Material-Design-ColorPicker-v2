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
      var $info = $('.icon-list'),
          $picker_colors = $('.picker').find('.picker-colors');
      $info.toggleClass('is-showInfo');
      $picker_colors.toggleClass('show-info');
    },

    render: function() {
      return (<i className="icon-list" onClick={this.clickHandler}></i>)
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
      return (<i className="icon-trash" onClick={this.clickHandler}></i>)
    }
  })

  var ToolBarRepeatable = React.createClass({
    getInitialState: function() {
      return {
        isRepeatable: false
      };
    },

    clickHandler: function() {
      var $repeat = $('.icon-repeat'),
          $repeatTip = $('.toolbar-tip');
      $repeat.toggleClass('is-repeatable');
      $repeatTip.toggleClass('is-repeatable');
      this.setState({isRepeatable: !this.state.isRepeatable});
    },

    render: function() {
      var isRepeatable = this.state.isRepeatable;
      return (
        <i className="icon-repeat" onClick={this.clickHandler}>
          <ToolBarRepeatableTip isRepeatable={isRepeatable}/>
        </i>
      )
    }
  })

  var ToolBarRepeatableTip = React.createClass({
    render: function() {
      var content = '';
      if (this.props.isRepeatable) {
        content = 'Repeatable';
      } else {
        content = 'Unrepeatable';
      }
      return (<span className="toolbar-tip">{content}</span>)
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
          <i className="icon-note"></i>
          <ToolBarInfo />
          <ToolBarTrash pickedCollect={pickedCollect}/>
          <ToolBarRepeatable />
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

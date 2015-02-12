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


  // #### 切換是否顯示色卡詳細資訊 ####
  var ToolBarInfo = React.createClass({
    clickHandler: function() {
      var $picker_colors = $('.picker').find('.picker-colors');
      $(this.getDOMNode()).toggleClass('is-showInfo');
      $picker_colors.toggleClass('show-info');
    },

    render: function() {
      return (<i className="icon-list" onClick={this.clickHandler}></i>)
    }
  })


  // #### 切換已選色卡是否可刪除 ####
  var ToolBarTrash = React.createClass({
    clickHandler: function() {
      var $clearAll = $('.picker-color--clearAll');
      $(this.getDOMNode()).toggleClass('is-deletable');
      $clearAll.toggleClass('dn');
    },

    render: function() {
      return (<i className="icon-trash" onClick={this.clickHandler}></i>)
    }
  })


  // #### 切換同樣色卡是否可重複選取 ####
  var ToolBarRepeatable = React.createClass({
    getInitialState: function() {
      return {
        isRepeatable: false
      };
    },

    clickHandler: function() {
      $(this.getDOMNode()).toggleClass('is-repeatable');
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


  // #### 色卡是否可重複選取提示文字 ####
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


  // #### Github btn ####
  var ToolBarGitHubBtn = React.createClass({
    render: function() {
      var repository = 'http://ghbtns.com/github-btn.html?user=Fraina&repo=Material-Design-ColorPicker-v2';
      return (
        <ul className="ghbtns">
          <li><iframe src={repository + "&type=watch&count=true"} allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
          <li><iframe src={repository + "&type=fork&count=true"} allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe></li>
        </ul>
      )
    }
  })


  // #### 工具列 ####
  var ToolBar = React.createClass({
    clickHandler: function(e) {
      e.stopPropagation();
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
          <ToolBarGitHubBtn />
        </div>
      )
    }
  })

  return ToolBar

})

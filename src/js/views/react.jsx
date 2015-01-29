(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin
) {
  'use strict';

  var HelloMessage = React.createClass({
    mixins: [BRMixin],
    render: function() {
      return (<div>{this.props.foo}</div>);
    }
  });

  var model = new Backbone.Model({foo: 'bar'});
  React.render(<HelloMessage model={model} />, document.getElementById('test'));
  // Update the UI
  model.set('foo', 'Hello world!');

})
(function(factory) {
  'use strict';

  define([
    'react'
  ], factory);

})(function(
  React
) {
  'use strict';

  var HelloMessage = React.createClass({
    render: function() {
      return (<div>Hello {this.props.name}</div>);
    }
  });

  React.render(
    <HelloMessage />,
    document.getElementById('test')
  );

  return this

})
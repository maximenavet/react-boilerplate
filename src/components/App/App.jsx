import React, { PropTypes } from 'react';

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
})

export default App;

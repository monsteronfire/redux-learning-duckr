import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <p>Hello world</p>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);

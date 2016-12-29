import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends Component {
  render() {
    let place = 'world';
    return (
      <h1>Hello pro react to the { place }</h1>
    );
  }
}



ReactDOM.render(<HelloWorld />, document.getElementById('app'));
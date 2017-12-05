import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        'hamburger',
        'pizza',
        'hot dogs',
        'icea cream',
        'cake',
        'cookies'
      ]
    }
  }

  render() {
    let listDisplay = this.state.list.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        { listDisplay }
      </div>
    );
  }
}

export default App;

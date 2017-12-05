import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterList: "",
      items: [
        'hamburger',
        'pizza',
        'hot dogs',
        'ice cream',
        'cake',
        'cookies'
      ]
    }
  }

  listChange( filter ) {
    this.setState({ filterList: filter })
  }

  render() {
    let listDisplay = this.state.items.filter( (element, index) => {
      return element.includes( this.state.filterList );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={ (element) => this.listChange( element.target.value ) } type="text" />
        { listDisplay }
      </div>
    );
  }
}

export default App;

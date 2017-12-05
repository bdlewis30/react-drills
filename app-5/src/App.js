import React, { Component } from 'react';
import './App.css';
import Image from './Image';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image catImg={"https://http.cat/100"} />
      </div>
    );
  }
}
import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>1989: The Best Year Ever!</h1>
        <MovieList />
  
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import IndexBanner from './components/IndexBanner';
import './App.css';
import './skeleton.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import IndexBanner from './components/IndexBanner';
import Workcard from './components/Workcard';
import './App.css';
import './skeleton.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
        <div className="latest-work row">
          <div className="one column"></div>
          <div className="ten columns">
            <Workcard/>
          </div>
          <div className="one column"></div>
        </div>
      </div>
    );
  }
}

export default App;

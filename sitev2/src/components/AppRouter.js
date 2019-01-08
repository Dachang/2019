import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from '../Homepage.js';
import Motb from '../pages/Motb.js';

export default class AppRouter extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/motb/" component={Motb} />
          <Route path="/lbi/" component={Homepage} />
        </div>
      </Router>
    );
  }

}

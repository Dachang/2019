import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from '../Homepage.js';
import Motb from '../pages/Motb.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default class AppRouter extends PureComponent {

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/motb/" component={Motb} />
            <Route path="/lbi/" component={Homepage} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }

}

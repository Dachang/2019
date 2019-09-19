import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from '../Homepage.js';
import Motb from '../pages/Motb.js';
import Abc from '../pages/Abc.js';
import Lbi from '../pages/Lbi.js';
import Fig from '../pages/Fig.js';
import Cdi from '../pages/Cdi.js';
import ScrollToTop from '../components/ScrollToTop.js';

export default class AppRouter extends PureComponent {

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/motb/" component={Motb} />
            <Route path="/lbi/" component={Lbi} />
            <Route path="/cdi-mobile/" component={Cdi} />
            <Route path="/airbnbchina/" component={Abc} />
            <Route path="/figmeasure/" component={Fig} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }

}

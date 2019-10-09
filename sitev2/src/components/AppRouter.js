import React, { PureComponent, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from "../components/AsyncComponent";
import ScrollToTop from '../components/ScrollToTop.js';

const AsyncHome = asyncComponent(() => import("../Homepage.js"));
const AsynbMotb = asyncComponent(() => import("../pages/Motb.js"));
const AsyncAbc = asyncComponent(() => import("../pages/Abc.js"));
const AsyncLbi = asyncComponent(() => import("../pages/Lbi.js"));
const AsyncFig = asyncComponent(() => import("../pages/Fig.js"));
const AsyncCdi = asyncComponent(() => import("../pages/Cdi.js"));

export default class AppRouter extends PureComponent {

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <div>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/motb/" component={AsynbMotb} />
              <Route path="/lbi/" component={AsyncLbi} />
              <Route path="/cdi-mobile/" component={AsyncCdi} />
              <Route path="/airbnbchina/" component={AsyncAbc} />
              <Route path="/figmeasure/" component={AsyncFig} />
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }

}

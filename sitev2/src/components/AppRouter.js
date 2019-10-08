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
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Switch>
              <div>
                <Route path="/" exact component={AsyncHome} />
                <Route path="/motb/" exact component={AsynbMotb} />
                <Route path="/lbi/" exact component={AsyncLbi} />
                <Route path="/cdi-mobile/" exact component={AsyncCdi} />
                <Route path="/airbnbchina/" exact component={AsyncAbc} />
                <Route path="/figmeasure/" exact component={AsyncFig} />
              </div>
            </Switch>
          {/* </Suspense> */}
        </ScrollToTop>
      </Router>
    );
  }

}

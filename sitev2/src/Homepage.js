import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IndexBanner from './components/IndexBanner';
import Workcard from './components/Workcard';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import LazyLoad from 'react-lazyload';
import './App.css';
import './skeleton.css';

import AbcWorkcardTinySrc from './assets/image/abc_workcard.jpg';
import AbcWorkcardSrc from './assets/image/abc_workcard@2x.jpg';
import MotbWorkcardTinySrc from './assets/image/motb_workcard.jpg';
import MotbWorkcardSrc from './assets/image/motb_workcard@2x.jpg';
import LbiWorkcardTinySrc from './assets/image/lbi_workcard.jpg';
import LbiWorkcardSrc from './assets/image/lbi_workcard@2x.jpg';
import FigWorkcardTinySrc from './assets/image/fig_workcard.jpg';
import FigWorkcardSrc from './assets/image/fig_workcard@2x.jpg';
import CdiWorkcardTinySrc from './assets/image/cdi_workcard.jpg';
import CdiWorkcardSrc from './assets/image/cdi_workcard@2x.jpg';
import EarWorkcardTinySrc from './assets/image/early_workcard.jpg';
import EarWorkcardSrc from './assets/image/early_workcard@2x.jpg';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
        <div id="index-banner-trigger"></div>
        <LazyLoad height={200} once offset={100}>
          <div className="latest-work first-row row">
            <div className="twelve columns">
              <Workcard
                previewSource={AbcWorkcardTinySrc}
                trueSource={AbcWorkcardSrc}
                title="Airbnb"
                pagelink="/airbnbchina"
                time="2018.4 - Present"
                description="Design owner of China guest experience (search & decide)."
                cardTheme="light"
              />
            </div>
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="latest-work second-row row">
            <div className="twelve columns">
              <Workcard
                previewSource={MotbWorkcardTinySrc}
                trueSource={MotbWorkcardSrc}
                title="MOTB"
                pagelink="/motb"
                time="2017.3 - 2018.3"
                description="The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology."
              />
            </div>
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="latest-work third-row row">
            <div className="twelve columns">
              <div className="row">
                <div className="six columns left">
                  <Workcard
                    previewSource={LbiWorkcardTinySrc}
                    trueSource={LbiWorkcardSrc}
                    title="1938Projekt"
                    pagelink="/lbi"
                    time="2017.12 - 2018.2"
                    description="Silver award in the Graphis Design Annual 2019."
                  />
                </div>
                <div className="six columns right">
                  <Workcard
                    previewSource={FigWorkcardTinySrc}
                    trueSource={FigWorkcardSrc}
                    title="Figmeasure"
                    pagelink="/figmeasure"
                    time="2019.8"
                    description="A plugin for figma, spec your design at ease."
                  />
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="latest-work third-row row last">
            <div className="twelve columns">
              <div className="row">
                <div className="six columns left">
                  <Workcard
                    previewSource={CdiWorkcardTinySrc}
                    trueSource={CdiWorkcardSrc}
                    title="CDI Soul"
                    pagelink="/cdi-soul"
                    time="2016.6 - 2016.12"
                    description="Control your living space at a flash."
                  />
                </div>
                <div className="six columns right">
                  <Workcard
                    previewSource={EarWorkcardTinySrc}
                    trueSource={EarWorkcardSrc}
                    title="Earlier Work"
                    pagelink="/earlier"
                    time="2013 - 2016"
                    description="Collections from the past."
                  />
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <AboutMe/>
          <Footer
            theme="dark"
          />
        </LazyLoad>
      </div>
    );
  }
}

export default Homepage;

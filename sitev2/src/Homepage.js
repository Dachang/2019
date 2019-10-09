import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IndexBanner from './components/IndexBanner';
import Workcard from './components/Workcard';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';
import './skeleton.css';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
        <div className="latest-work first-row row">
          <div className="twelve columns">
            <Workcard
              imageSources={process.env.PUBLIC_URL + "/static/media/image/abc_workcard"}
              title="Airbnb"
              pagelink="/airbnbchina"
              time="2018.4 - Present"
              description="Design owner of China guest experience (search & decide)."
              cardTheme="light"
            />
          </div>
        </div>
        <div className="latest-work second-row row">
          <div className="twelve columns">
            <Workcard
              imageSources={process.env.PUBLIC_URL + "/static/media/image/motb_workcard"}
              title="MOTB"
              pagelink="/motb"
              time="2017.3 - 2018.3"
              description="The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology."
            />
          </div>
        </div>
        <div className="latest-work third-row row">
          <div className="twelve columns">
            <div className="row">
              <div className="six columns left">
                <Workcard
                  imageSources={process.env.PUBLIC_URL + "/static/media/image/lbi_workcard"}
                  title="1938Projekt"
                  pagelink="/lbi"
                  time="2017.12 - 2018.2"
                  description="Silver award in the Graphis Design Annual 2019."
                />
              </div>
              <div className="six columns right">
                <Workcard
                  imageSources={process.env.PUBLIC_URL + "/static/media/image/fig_workcard"}
                  title="Figmeasure"
                  pagelink="/figmeasure"
                  time="2019.8"
                  description="A plugin for figma, spec your design at ease."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="latest-work third-row row last">
          <div className="twelve columns">
            <div className="row">
              <div className="six columns left">
                <Workcard
                  imageSources={process.env.PUBLIC_URL + "/static/media/image/cdi_workcard"}
                  title="CDI Mobile"
                  pagelink="/cdi-mobile"
                  time="2016.6 - 2016.12"
                  description="Control your living space at a flash."
                />
              </div>
              <div className="six columns right">
                <Workcard
                  imageSources={process.env.PUBLIC_URL + "/static/media/image/early_workcard"}
                  title="Earlier Work"
                  to="/cdi-mobile"
                  time="2013 - 2016"
                  description="Collections from the past."
                />
              </div>
            </div>
          </div>
        </div>
        <AboutMe/>
        <Footer
          theme="dark"
        />
      </div>
    );
  }
}

export default Homepage;

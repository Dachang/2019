import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IndexBanner from './components/IndexBanner';
import Workcard from './components/Workcard';
import AboutMe from './components/AboutMe';
import './App.css';
import './skeleton.css';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
        <div className="latest-work first-row row">
          <div className="twelve columns">
            <Link to="/airbnbchina">
              <Workcard
                imageSources={process.env.PUBLIC_URL + "/static/media/image/abc_workcard"}
                title="Airbnb"
                time="2018.4 - Present"
                description="Design owner of China guest experience (search & decide)."
                cardTheme="light"
              />
            </Link>
          </div>
        </div>
        <div className="latest-work second-row row">
          <div className="twelve columns">
            <Link to="/motb">
              <Workcard
                imageSources={process.env.PUBLIC_URL + "/static/media/image/motb_workcard"}
                title="MOTB"
                time="2017.3 - 2018.3"
                description="The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology."
              />
            </Link>
          </div>
        </div>
        <div className="latest-work third-row row">
          <div className="twelve columns">
            <div className="row">
              <div className="six columns left">
                <Link to="/lbi">
                  <Workcard
                    imageSources={process.env.PUBLIC_URL + "/static/media/image/lbi_workcard"}
                    title="1938Projekt"
                    time="2017.12 - 2018.2"
                    description="Silver award in the Graphis Design Annual 2019."
                  />
                </Link>
              </div>
              <div className="six columns right">
                <Link to="/figmeasure">
                  <Workcard
                    imageSources={process.env.PUBLIC_URL + "/static/media/image/fig_workcard"}
                    title="Figmeasure"
                    time="2019.8"
                    description="A plugin for figma, spec your design at ease."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-work third-row row">
          <div className="twelve columns">
            <div className="row">
              <div className="six columns left">
                <Link to="/cdi-mobile">
                  <Workcard
                    imageSources={process.env.PUBLIC_URL + "/static/media/image/cdi_workcard"}
                    title="CDI Mobile"
                    time="2016.6 - 2016.12"
                    description="Control your living space at a flash."
                  />
                </Link>
              </div>
              <div className="six columns right">
                <Workcard
                  imageSources={process.env.PUBLIC_URL + "/static/media/image/early_workcard"}
                  title="Earlier Work"
                  time="2013 - 2016"
                  description="Once upon a time, stuff that entertained."
                />
              </div>
            </div>
          </div>
        </div>
        <AboutMe/>
      </div>
    );
  }
}

export default Homepage;

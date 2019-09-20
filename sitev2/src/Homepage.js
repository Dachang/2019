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
          <div className="one column"></div>
          <div className="ten columns">
            <Link to="/airbnbchina">
              <Workcard
                imageSources="/static/media/image/abc_workcard"
                title="Airbnb China"
                description="Design owner of China guest search experience. (2018.4 - Present)"
              />
            </Link>
          </div>
          <div className="one column"></div>
        </div>
        <div className="latest-work second-row row">
          <div className="one column"></div>
          <div className="ten columns">
            <Link to="/motb">
              <Workcard
                imageSources="/static/media/image/motb_workcard"
                title="Museum of the Bible"
                description="The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology. (2017.3 - 2018.3)"
              />
            </Link>
          </div>
          <div className="one column"></div>
        </div>
        <div className="latest-work third-row row">
          <div className="one column"></div>
          <div className="ten columns">
            <div className="row">
              <div className="six columns left">
                <Link to="/lbi">
                  <Workcard
                    imageSources="/static/media/image/lbi_workcard"
                    title="The 1938Projekt"
                    description="Silver award in the Graphis Design Annual 2019.  (2017.12 - 2018.2)"
                  />
                </Link>
              </div>
              <div className="six columns right">
                <Link to="/figmeasure">
                  <Workcard
                    imageSources="/static/media/image/fig_workcard"
                    title="Figmeasure"
                    description="A plugin for figma, spec at ease (2019.8)"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="one column"></div>
        </div>
        <div className="latest-work third-row row">
          <div className="one column"></div>
          <div className="ten columns">
            <div className="row">
              <div className="six columns left">
                <Link to="/cdi-mobile">
                  <Workcard
                    imageSources="/static/media/image/cdi_workcard"
                    title="CDI Mobile"
                    description="Control your living space at a flash. (2016.6 - 2016.12)"
                  />
                </Link>
              </div>
              <div className="six columns right">
                <Workcard
                  imageSources="/static/media/image/early_workcard"
                  title="Earlier Work"
                  description="Once upon a time, stuff that entertained ... (2013 - 2016)"
                />
              </div>
            </div>
          </div>
          <div className="one column"></div>
        </div>
        <AboutMe/>
      </div>
    );
  }
}

export default Homepage;

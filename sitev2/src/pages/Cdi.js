import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import ProgressiveImage from '../components/ProgressiveImage';

import '../styles/Cdi.css';
import '../App.css';
import '../skeleton.css';

import CdiLogoTinySrc from '../assets/image/cdi-logo.png';
import CdiLogoSrc from '../assets/image/cdi-logo@2x.png';
import CdiLabSpaceTinySrc from '../assets/image/cdi-lab-space.png';
import CdiLabSpaceSrc from '../assets/image/cdi-lab-space@2x.png';

import CdiSoulASrc from '../assets/image/cdi-soul-a@2x.png';
import CdiSoulBSrc from '../assets/image/cdi-soul-b@2x.png';
import CdiSoulCSrc from '../assets/image/cdi-soul-c@2x.png';
import CdiSoulDSrc from '../assets/image/cdi-soul-d@2x.png';
import CdiSoulESrc from '../assets/image/cdi-soul-e@2x.png';
import CdiSoulFSrc from '../assets/image/cdi-soul-f@2x.png';
import CdiSoulGSrc from '../assets/image/cdi-soul-g@2x.png';
import CdiSoulHSrc from '../assets/image/cdi-soul-h@2x.png';
import CdiMobilePosterTinySrc from '../assets/image/cdi-mobile-poster.jpg';
import CdiMobilePosterSrc from '../assets/image/cdi-mobile-poster@2x.jpg';
import CdiMobileEventTinySrc from '../assets/image/cdi-mobile-event.png';
import CdiMobileEventSrc from '../assets/image/cdi-mobile-event@2x.png';
import CdiMobileMenuTinySrc from '../assets/image/cdi-mobile-menu.png';
import CdiMobileMenuSrc from '../assets/image/cdi-mobile-menu@2x.png';
import CdiMobileACTinySrc from '../assets/image/cdi-mobile-ac.png';
import CdiMobileACSrc from '../assets/image/cdi-mobile-ac@2x.png';
import CdiMobileCurtainTinySrc from '../assets/image/cdi-mobile-curtain.png';
import CdiMobileCurtainSrc from '../assets/image/cdi-mobile-curtain@2x.png';
import CdiMobileReserveTinySrc from '../assets/image/cdi-mobile-reserve.png';
import CdiMobileReserveSrc from '../assets/image/cdi-mobile-reserve@2x.png';
import CdiMobileSigninTinySrc from '../assets/image/cdi-mobile-signin.png';
import CdiMobileSigninSrc from '../assets/image/cdi-mobile-signin@2x.png';
import CdiDigitalLandscapeTinySrc from '../assets/image/cdi-digital-landscape.png';
import CdiDigitalLandscapeSrc from '../assets/image/cdi-digital-landscape@2x.png';
import CdiDigitalPortraitTinySrc from '../assets/image/cdi-digital-portrait.png';
import CdiDigitalPortraitSrc from '../assets/image/cdi-digital-portrait@2x.png';

function CDIBanner(props) {
  return (
    <div className="cdi-banner">
      <div className="row logo">
        <div className="four columns"></div>
        <div className="four columns" data-parallax='{"scale" : 3, "smoothness" : 2}' data-parallax2='{"y" : -800, "smoothness" : 2}'>
          <ProgressiveImage
            className="cdi-logo wow zoomIn"
            altName="cdi-logo"
            preview={CdiLogoTinySrc}
            image={CdiLogoSrc}
          />
        </div>
        <div className="four columns"></div>
      </div>
      <div className="row intro">
        <div className="three columns"></div>
        <div className="six columns">
          <h1 className="wow fadeIn" data-wow-delay="0.5s">Smart Space in Your Pocket</h1>
          <p className="wow fadeIn" data-wow-delay="0.5s">CDI Soul provides new ways of interaction for user  to control and configure the room facilities(lights, air conditioners, doors) in order to adjust the environment properties such as lighting, in-door  temprature and entrance authority. Meanwhile the digital guidance in lab space continuously displays real-time information(location, news, events) to people in the lab environment.</p>
          <p className="wow fadeIn" data-wow-delay="0.5s">As one of the interface designer & developer of this project, I built an <a href="https://apps.apple.com/cn/app/cdi-mobile/id1073358593" target="_blank">iOS app</a> as well as a digital guidance kiosk with Unity3D.</p>
        </div>
        <div className="three columns"></div>
      </div>
    </div>
  )
}

function CDILabSpace(props) {
  return (
    <div className="cdi-poster row">
      <div className="three columns"></div>
      <div className="six columns wow fadeIn" data-wow-delay="0.5s">
        <ProgressiveImage
          className="cdi-logo"
          altName="cdi-logo"
          preview={CdiLabSpaceTinySrc}
          image={CdiLabSpaceSrc}
        />
        <p>CDI (Center for digital innovation) Spatial Structure and Hardwares </p>
      </div>
      <div className="three columns"></div>
    </div>
  )
}

function CDISoulSystem(props) {
  return (
    <div className="cdi-soul-system row">
      <div className="three columns"></div>
      <div className="six columns wow fadeIn">
        <h1>What is Behind Soul System</h1>
        <p>CDI Soul System is a powerful, well-designed digital system that developed by students at CDI. Different from traditional smart home systems based on Bluetooth wireless Zigbee, using a variety of control gateway clusters, CDI Soul System has created a mass automation solution which is stable and precise for controlling a single facility with the combination of core logic based local central server OS and public Web Service, upon which CDI Mobile was built on.</p>
        <div className="row modules first wow fadeIn">
          <div className="three columns">
            <img src={CdiSoulASrc}/>
            <p>Automation</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulBSrc}/>
            <p>Reservation</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulCSrc}/>
            <p>Digital Guide</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulDSrc}/>
            <p>Fast Config</p>
          </div>
        </div>
        <div className="row modules second wow fadeIn">
          <div className="three columns">
            <img src={CdiSoulESrc}/>
            <p>Energy Saving</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulFSrc}/>
            <p>Authority</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulGSrc}/>
            <p>News & Events</p>
          </div>
          <div className="three columns">
            <img src={CdiSoulHSrc}/>
            <p>Mobile Remote</p>
          </div>
        </div>
      </div>
      <div className="three columns"></div>
    </div>
  )
}

function CDIMobile(props) {
  return (
    <div className="cdi-mobile row">
      <div className="row info wow fadeIn" date-wow-delay="0.2s">
        <div className="three columns"></div>
        <div className="six columns">
          <h1>CDI Mobile</h1>
          <p>Using CDI Mobile, staffs at CDI (Center for Digital Innovation) can easily manipulate various facilities such as lightings, air conditioners, doors, curtains, etc. It enables a brand new way of configuring environmental factors, which has never been so convenient and effective.</p>
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row poster">
        <ProgressiveImage
          className="cdi-logo wow fadeIn"
          altName="cdi-logo"
          preview={CdiMobilePosterTinySrc}
          image={CdiMobilePosterSrc}
        />
      </div>
      <div className="row screens wow fadeIn">
        <div className="three columns"></div>
        <div className="six columns">
          <div className="row">
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileEventTinySrc}
                image={CdiMobileEventSrc}
              />
              <p>Checking events & news</p>
            </div>
            <div className="two columns"></div>
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileMenuTinySrc}
                image={CdiMobileMenuSrc}
              />
              <p>Switching lab spaces</p>
            </div>
          </div>
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row screens wow fadeIn">
        <div className="three columns"></div>
        <div className="six columns">
          <div className="row">
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileACTinySrc}
                image={CdiMobileACSrc}
              />
              <p>Lightings & AC</p>
            </div>
            <div className="two columns"></div>
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileCurtainTinySrc}
                image={CdiMobileCurtainSrc}
              />
              <p>Curtains up</p>
            </div>
          </div>
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row screens wow fadeIn">
        <div className="three columns"></div>
        <div className="six columns">
          <div className="row">
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileReserveTinySrc}
                image={CdiMobileReserveSrc}
              />
              <p>Making reservations</p>
            </div>
            <div className="two columns"></div>
            <div className="five columns">
              <ProgressiveImage
                className="cdi-logo"
                altName="cdi-logo"
                preview={CdiMobileSigninTinySrc}
                image={CdiMobileSigninSrc}
              />
              <p>Signing in with credentials</p>
            </div>
          </div>
        </div>
        <div className="three columns"></div>
      </div>
    </div>
  )
}

function CDIDigitalDisplay(props) {
  return (
    <div className="cdi-digital-display">
      <div className="row">
        <div className="three columns"></div>
        <div className="six columns wow fadeIn">
          <h1>Digital Guide Display</h1>
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row">
        <div className="two columns"></div>
        <div className="eight columns">
          <ProgressiveImage
            className="cdi-logo wow fadeIn"
            dataWowDelay="0.2s"
            altName="cdi-logo"
            preview={CdiDigitalLandscapeTinySrc}
            image={CdiDigitalLandscapeSrc}
          />
        </div>
        <div className="two columns"></div>
      </div>
      <div className="row">
        <div className="three columns"></div>
        <div className="six columns wow fadeIn">
          <p>Digital Information System provides completely real-time informations, which is powered by CDI Soul web services. News, events and other essential informations are continuously fetched.</p>
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row">
        <div className="three columns"></div>
        <div className="six columns">
          <ProgressiveImage
            className="cdi-logo wow fadeIn"
            dataWowDelay="0.2s"
            altName="cdi-logo"
            preview={CdiDigitalPortraitTinySrc}
            image={CdiDigitalPortraitSrc}
          />
        </div>
        <div className="three columns"></div>
      </div>
      <div className="row">
        <div className="three columns"></div>
        <div className="six columns wow fadeIn">
          <p>Administrators can easily configure properties of the entire system at once by using CDI Soul command center. Configurables like update cycle, tint colors, carousel images can be quick modified globally.</p>
        </div>
        <div className="three columns"></div>
      </div>
    </div>
  )
}

function CDIFooter(props) {
  return (
    <div className="cdi-footer row">
      <div className="three columns"></div>
      <div className="six columns">
        <h1>Visit the Lab</h1>
        <p>The entire system has been put into use since 2016 at Center for Digital Innovation, Shanghai, China.</p>
        <p>For more information please visit the <a href="https://cdi.tongji.edu.cn/" target="_blank">official website</a></p>
      </div>
      <div className="three columns"></div>
    </div>
  )
}

export default class Cdi extends PureComponent {

  render() {
    return (
      <div className="project-cdi-mobile">
        <BackButton/>
        <LazyLoad height={200} once offset={100}>
          <CDIBanner/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <CDILabSpace/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <CDISoulSystem/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <CDIMobile/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <CDIDigitalDisplay/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <CDIFooter/>
        </LazyLoad>
        <Footer
          theme="light"
        />
      </div>
    );
  }

}

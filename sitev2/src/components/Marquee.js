import React, { PureComponent } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import {isMobile} from 'react-device-detect';
import '../styles/Marquee.css';

export default class Marquee extends PureComponent {

  render() {
    return (
      <div className="marquee row">
        <div className="one column"></div>
        <div className="main-content ten columns">
          <Controller>
              <Scene triggerElement="#index-banner-trigger" duration={600} offset={-320} enabled={!isMobile}>
                <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} >
                  <div className="row">
                    <div className="eleven columns wow fadeIn">
                      <h1>
                        Hi, I’m DC,<br></br>a digital experience designer & developer
                        living in Beijing.
                      </h1>
                      <p>
                        I'm an Experience Designer at Airbnb China.
                        <br></br>Previously, I was a creative developer at C&G Partners, New York.
                        <br></br>I build interactive experiences, digital products, services & more.
                      </p>
                    </div>
                    <div className="one column"></div>
                  </div>
                </Tween>
              </Scene>
          </Controller>
        </div>
        <div className="one column"></div>
      </div>
    );
  }

}

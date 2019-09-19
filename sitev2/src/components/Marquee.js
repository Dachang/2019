import React, { PureComponent } from 'react';
import '../styles/Marquee.css';

export default class Marquee extends PureComponent {

  render() {
    return (
      <div className="marquee row">
        <div className="one column"></div>
        <div className="main-content ten columns">
          <div className="row">
            <div className="seven columns">
              <h1>
                Hi, I’m Dachang,<br></br>a digital experience designer & developer
                based in Beijing, China.
              </h1>
              <p>
                I'm an Experience Designer at Airbnb China.
                <br></br>Previously, I was a creative developer at C&G Partners, New York.
                <br></br>I build interactive experiences, digital products, services & more.
                <br></br>Below are a few things I've designed / developed:
              </p>
            </div>
            <div className="five columns"></div>
          </div>
        </div>
        <div className="one column"></div>
      </div>
    );
  }

}

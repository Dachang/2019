import React, { PureComponent } from 'react';
import '../styles/Marquee.css';

export default class Marquee extends PureComponent {

  render() {
    return (
      <div className="marquee row">
        <div className="one column"></div>
        <div className="main-content ten columns">
          <div className="row">
            <div className="nine columns wow fadeIn">
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
            <div className="three columns"></div>
          </div>
        </div>
        <div className="one column"></div>
      </div>
    );
  }

}

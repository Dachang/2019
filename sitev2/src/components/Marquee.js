import React, { PureComponent } from 'react';
import '../styles/Marquee.css';

export default class Marquee extends PureComponent {

  render() {
    return (
      <div className="marquee row">
        <div className="two columns"></div>
        <div className="main-content eight columns">
          <div className="row">
            <div className="nine columns">
              <h1>
                Hi, I’m Dachang,<br></br>a digital experience designer & developer
                based in Beijing, China.
              </h1>
              <p>
                I build interactive experiences, digital products, services & more.
                <br></br>Used to work as a creative developer at C&G Partners, New York.
                <br></br>Now working as an experience designer at Airbnb China.
              </p>
            </div>
            <div className="three columns"></div>
          </div>
        </div>
        <div className="two columns"></div>
      </div>
    );
  }

}

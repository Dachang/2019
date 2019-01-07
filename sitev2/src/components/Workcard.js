import React, { PureComponent } from 'react';
import '../styles/Workcard.css';

export default class Workcard extends PureComponent {

  render() {
    return (
      <div className="work-card">
        <img
          className="cover"
          alt="museum of the bible interactive system"
          src="/static/media/image/motb_workcard.jpg"
          srcset="/static/media/image/motb_workcard@2x.jpg 2x"
        />
      <div className="card-info row">
        <div className="one column"></div>
        <div className="eight columns">
          <h4>Museum of the Bible Interactive System, 2017</h4>
          <p>The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.</p>
          <a>Read more</a>
        </div>
        <div className="three columns"></div>
      </div>
      </div>
    );
  }

}

import React, { PureComponent } from 'react';
import '../styles/ProjectBanner.css';

export default class ProjectBanner extends PureComponent {

  render() {
    return (
      <div
        className="project-banner">
        <img
          className="cover"
          alt="museum of the bible interactive system"
          src={this.props.imageSources + ".jpg"}
          srcset={this.props.imageSources + "@2x.jpg 2x"}
        />
        <div className="cover-dark-hover"></div>
        <div className="project-info row">
          <div className="one column"></div>
          <div
            className="ten columns">
            <div
              className="row">
              <div
                className="seven columns">
                <h1 className="project-info-header wow fadeIn">Museum of the Bible Interactive System</h1>
                <p className="project-intro  wow fadeIn" data-wow-delay="0.2s">
                  The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.<br/><br/>
                  As the main interaction designer & developer of this project, I crafted 12 digital interactives from interaction / motion design, to live kiosk application with various design & tech stack.<br/><br/>
                  The museum is open to public since November, 2017, check out the <a>official website</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="one column"></div>
        </div>
      </div>
    );
  }

}

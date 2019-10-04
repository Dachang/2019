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
          srcSet={this.props.imageSources + "@2x.jpg 2x"}
        />
        <div className="cover-dark-hover wow fadeIn" data-wow-delay="0.2s"></div>
        <div className="project-info row">
          <div className="one column"></div>
          <div
            className="ten columns">
            <div
              className="row">
              <div
                className="ten columns">
                <h1 className="project-info-header wow fadeIn">{this.props.title}</h1>
                <p className="project-intro  wow fadeIn" data-wow-delay="0.2s" dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
              </div>
            </div>
          </div>
          <div className="one column"></div>
        </div>
      </div>
    );
  }

}

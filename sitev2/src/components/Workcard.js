import React, { PureComponent } from 'react';
import '../styles/Workcard.css';

export default class Workcard extends PureComponent {

  render() {
    return (
      <div className="work-card wow fadeIn">
        <img
          className="cover"
          alt="museum of the bible interactive system"
          src={this.props.imageSources + ".jpg"}
          srcSet={this.props.imageSources + "@2x.jpg 2x"}
        />
        <div className={"card-info row " + this.props.cardTheme}>
          <div className="one column"></div>
          <div className="eight columns">
            <h4>{this.props.title}</h4>
            <p className="time-label">{this.props.time}</p>
            <p>{this.props.description}</p>
            <a>Read more</a>
          </div>
          <div className="three columns"></div>
        </div>
      </div>
    );
  }

}

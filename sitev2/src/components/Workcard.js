import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Workcard.css';

export default class Workcard extends PureComponent {

  render() {
    return (
      <div className="work-card">
        <img
          className="cover wow fadeIn"
          alt="museum of the bible interactive system"
          src={this.props.imageSources + ".jpg"}
          srcSet={this.props.imageSources + "@2x.jpg 2x"}
        />
        <Link to={this.props.pagelink ? this.props.pagelink : "/"}>
          <div className={"card-info row wow fadeIn " + this.props.cardTheme} data-wow-delay="0.2s">
            <div className="one column"></div>
            <div className="eight columns">
              <h4>{this.props.title}</h4>
              <p className="time-label">{this.props.time}</p>
              <p>{this.props.description}</p>
              <p className="link-label">Read more</p>
            </div>
            <div className="three columns"></div>
          </div>
        </Link>
      </div>
    );
  }

}

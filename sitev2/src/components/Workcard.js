import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from '../components/ProgressiveImage';
import '../styles/Workcard.css';

export default class Workcard extends PureComponent {

  render() {
    return (
      <div className="work-card wow fadeIn">
        <ProgressiveImage
          className="wow fadeIn"
          altName="museum of the bible interactive system"
          preview={this.props.previewSource}
          image={this.props.trueSource}
        />
        <Link to={this.props.pagelink ? this.props.pagelink : "/"}>
          <div className={"card-info row " + this.props.cardTheme}>
            <div className="one column"></div>
            <div className="eight columns" data-parallax={'{"y" : -240, "smoothness" : 2}'}>
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

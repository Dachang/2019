import React, { PureComponent } from 'react';
import TrackVisibility from 'react-on-screen';
import '../styles/VideoCard.css';

function PlayButton(props) {
  return (
    <div
      className="play-button wow fadeIn"
      data-wow-delay="0.75s"
      onClick={props.clickHandler}>
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.8503 6.64082L0.450311 0.0408199C0.250311 -0.074968 0 0.06935 0 0.300452V13.5005C0 13.7316 0.250311 13.8759 0.450311 13.7601L11.8503 7.16008C12.0499 7.04453 12.0499 6.75637 11.8503 6.64082V6.64082Z" fill="#FFF500"/>
      </svg>
      <p>Replay</p>
    </div>
  )
}

class VideoBackground extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      videoIsPlayed : false
    }
    this.playVideo = this.playVideo.bind(this);
    this.forcePlayVideo = this.forcePlayVideo.bind(this);
  }

  componentDidMount() {

  }

  playVideo() {
    if (!this.state.videoIsPlayed) {
      this.refs.vidRef.play();
      this.setState({
        videoIsPlayed: true
      });
    }
  }

  forcePlayVideo() {
    this.refs.vidRef.play();
  }

  render() {
    return (
      <div 
        className="video-background"
        onMouseOver={this.playVideo}>
        <PlayButton
          clickHandler={this.forcePlayVideo}
        />
        <video
          ref="vidRef"
          width="99.5%"
          preload="true"
          muted
          draggable={false}>
          <source
            src={process.env.PUBLIC_URL + this.props.videoSrc}
            type="video/mp4">
          </source>
        </video>
      </div>
    )
  }

}

export default class VideoCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered : false,
      videoPlayed: false,
      videoIsPlaying: false
    }
  }

  render() {
    return (
      <div data-parallax={'{"y" : ' + this.props.yOffset + ', "smoothness" : 2}'}>
        <div
         className="video-card wow fadeIn" data-wow-delay="0.2s">
           <VideoBackground
             videoSrc = {this.props.videoSrc}
           />
           <img
             className="cover"
             alt="motb-highlight-gospel-and-spirituals"
             src={this.props.imageSrc}
           />
        </div>
        <div className="highlight-info row">
          <div className="one column"></div>
          <div className="seven columns">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
          </div>
          <div className="four columns"></div>
        </div>
      </div>
    );
  }

}

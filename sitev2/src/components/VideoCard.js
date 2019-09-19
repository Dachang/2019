import React, { PureComponent } from 'react';
import '../styles/VideoCard.css';

function PlayButton(props) {
  return (
    <div
      className="play-button"
      onClick={props.clickHandler}>
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.8503 6.64082L0.450311 0.0408199C0.250311 -0.074968 0 0.06935 0 0.300452V13.5005C0 13.7316 0.250311 13.8759 0.450311 13.7601L11.8503 7.16008C12.0499 7.04453 12.0499 6.75637 11.8503 6.64082V6.64082Z" fill="#FFF500"/>
      </svg>
      <p>play video</p>
    </div>
  )
}

function VideoBackground(props) {
  return (
    <div className="video-background">
      <video
        width="100%"
        preload
        autoPlay
        loop
        muted
        draggable={false}>
        <source
          src="/static/media/videos/NamesInteractive_01.mp4"
          type="video/mp4">
        </source>
      </video>
    </div>
  )
}

export default class VideoCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered : false,
      showVideoBackground: false,
      videoIsPlaying: false
    }
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    console.log("play video");
    this.setState({
      showVideoBackground: !this.state.showVideoBackground
    });
  }

  render() {
    return (
      <div data-parallax={'{"y" : ' + this.props.yOffset + ', "smoothness" : 2}'}>
        <PlayButton
          clickHandler={this.playVideo}
        />
        <div
         className="video-card"
         onMouseEnter={this.cardOnHover}>
           {this.state.showVideoBackground &&
             <VideoBackground/>
           }
           <img
             className="cover"
             alt="motb-highlight-gospel-and-spirituals"
             src={this.props.imageSrc + ".png"}
             srcSet={this.props.imageSrc + "@2x.png"}
           />
        </div>
        <div className="highlight-info row">
          <div className="one column"></div>
          <div className="six columns">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
          </div>
          <div className="five columns"></div>
        </div>
      </div>
    );
  }

}

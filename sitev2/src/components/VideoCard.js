import React, { PureComponent } from 'react';
import '../styles/VideoCard.css';

export default class VideoCard extends PureComponent {

  render() {
    return (
      <div
       className="video-card"
       data-parallax='{"y" : -300, "smoothness" : 5}'>
         <img
           className="cover"
           alt="motb-highlight-gospel-and-spirituals"
           src="/static/media/image/motb_highlight_gospel.png"
           srcset="/static/media/image/motb_highlight_gospel@2x.png"
         />
      </div>
    );
  }

}

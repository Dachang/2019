import React, { PureComponent } from 'react';
import ProjectBanner from '../components/ProjectBanner.js';
import VideoCard from '../components/VideoCard.js';
import '../styles/Motb.css';

export default class Motb extends PureComponent {

  render() {
    return (
      <div className="project-motb">
        <ProjectBanner
          imageSources="/static/media/image/motb_project_banner"
        />
        <div className="highlight-section row">
          <VideoCard
            yOffset="-320"
            imageSrc="/static/media/image/motb_highlight_gospel"
            title="Gospels and spirituals"
            description="An interactive showcased soundtracks from 24 artists, who performed six different gospels that inspried by the Bible. Soundtracks are sampled, parsed and visualized into waves, as spiritual lyrics highlighting on the side."
          />
        </div>
        <div className="highlight-section row">
          <VideoCard
            imageSrc="/static/media/image/motb_highlight_bol"
            title="Bible Out Loud"
            description="An interactive recorded soundtracks that people read the Bible with minority languages from all over the world."
          />
        </div>
      </div>
    );
  }

}

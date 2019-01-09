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
          <VideoCard/>
        </div>
      </div>
    );
  }

}

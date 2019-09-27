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
          title="Museum of the Bible"
          description={"The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.<br/><br/> As the main interaction designer & front-end developer of this project, I crafted 12 digital interactives from interaction / motion design, to live kiosk applications with node JS web stack (React JS / Angular JS / Webpack).<br/><br/> The museum is open to public since November, 2017."}
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

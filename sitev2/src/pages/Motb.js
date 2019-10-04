import React, { PureComponent } from 'react';
import ProjectBanner from '../components/ProjectBanner.js';
import VideoCard from '../components/VideoCard.js';
import BackButton from '../components/BackButton';
import '../styles/Motb.css';

function Floorplan(props) {
  return (
    <div className="motb-floorplan wow fadeIn">
      <div className="row motb-floorplan-title">
        <div className="one column"></div>
        <div className="ten columns">
          <h1>Interactive Space</h1>
          <div className="row">
            <div className="four columns">
              <div className="row">
                <div className="one column gov"><div className="kiosk-label gov"></div></div>
                <div className="ten columns"><p>The government table</p></div>
              </div>
            </div>
            <div className="four columns quiz">
                <div className="one column"><div className="kiosk-label quiz"></div></div>
                <div className="ten columns"><p>Bible quiz</p></div>
            </div>
            <div className="four columns lit">
                <div className="one column"><div className="kiosk-label lit"></div></div>
                <div className="ten columns"><p>Bible in literature</p></div>
            </div>
          </div>
          <div className="row">
            <div className="four columns">
                <div className="row">
                  <div className="one column jsp"><div className="kiosk-label jsp"></div></div>
                  <div className="ten columns"><p>Joshua player & recorder</p></div>
                </div>
              </div>
              <div className="four columns ps">
                  <div className="one column"><div className="kiosk-label ps"></div></div>
                  <div className="ten columns"><p>Personal stories</p></div>
              </div>
              <div className="four columns ias">
                  <div className="one column"><div className="kiosk-label ias"></div></div>
                  <div className="ten columns"><p>IAS donor kiosk</p></div>
              </div>
          </div>
        </div>
        <div className="one column"></div>
      </div>
      <div className="row motb-floorplan-bg">
        <img
          className="wow fadeIn"
          alt="motb-floorplan-bg"
          src={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan.png"}
          srcSet={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan@2x.png 2x"}
        />
        <img
          className="foreground wow fadeIn"
          data-wow-delay="0.75s"
          alt="motb-floorplan-bg"
          src={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan_fore.png"}
          srcSet={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan_fore@2x.png 2x"}
        />
      </div>
    </div>
  )
}

export default class Motb extends PureComponent {
  render() {
    return (
      <div className="project-motb">
        <BackButton/>
        <ProjectBanner
          imageSources={process.env.PUBLIC_URL + "/static/media/image/motb_project_banner"}
          title="Museum of the Bible"
          description={"The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.<br/><br/> As the main interaction designer & front-end developer of this project, I crafted 12 digital interactives from interaction / motion design, to live kiosk applications with node JS web stack (React JS / Angular JS / Webpack).<br/><br/> The museum is open to public since November, 2017."}
        />
        <div className="highlight-section row first">
          <VideoCard
            yOffset="-320"
            videoSrc="/static/media/videos/gospel_short.mp4"
            imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
            title="Interactive: Gospels and Spirituals"
            description="The interactive showcased soundtracks from 24 artists, who performed six different gospels that inspried by the Bible. Soundtracks are sampled, parsed and visualized into waves, as spiritual lyrics highlighting on the side."
          />
        </div>
        <div className="highlight-section row">
          <VideoCard
            yOffset="-320"
            videoSrc="/static/media/videos/bol.mp4"
            imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
            title="Interactive: Bible Out Loud"
            description="The interactive recorded soundtracks that people read the Bible with minority languages from all over the world."
          />
        </div>
        <div className="highlight-section row">
          <VideoCard
            yOffset="-320"
            videoSrc="/static/media/videos/hmr.mp4"
            imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
            title="Interactive: Human Right Series"
            description="A collection of six interactives that digitalized exhibit documents, videos & collections of how 10 historical legends fight for human rights & justice, eliminate slavery, with vivid media and rich interactions."
          />
        </div>
        <div className="highlight-section row">
          <VideoCard
            yOffset="-320"
            videoSrc="/static/media/videos/bom.mp4"
            imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
            title="Interactive: Bible on the Map"
            description="The interactive digital map scrolls infinitely, showcased 200+ cities / towns / landmarks in U.S.A that are named after Bible references."
          />
        </div>
        <div className="highlight-section row">
          <VideoCard
            yOffset="-320"
            videoSrc="/static/media/videos/bn.mp4"
            imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
            title="Interactive: Biblical Names"
            description="The interactive showcased 1000+ names that are inspired / originated from Bible references, documented with the first appearance in Bible of each entry."
          />
        </div>
        <Floorplan/>
      </div>
    );
  }

}

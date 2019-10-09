import React, { PureComponent } from 'react';
import ProjectBanner from '../components/ProjectBanner.js';
import ProgressiveImage from '../components/ProgressiveImage';
import VideoCard from '../components/VideoCard.js';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import LazyLoad from 'react-lazyload';
import '../styles/Motb.css';
import '../App.css';
import '../skeleton.css';

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
        <ProgressiveImage
          className="cover wow fadeIn"
          altName="motb-floorplan-bg"
          preview={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan.png"}
          image={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan@2x.png"}
        />
        <ProgressiveImage
          className="foreground wow fadeIn"
          altName="motb-floorplan-bg"
          preview={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan_fore.png"}
          image={process.env.PUBLIC_URL + "/static/media/image/motb_floorplan_fore@2x.png"}
        />
      </div>
    </div>
  )
}

function OnsiteGallery(props) {
  return (
    <div className="motb-onsite-gallery wow fadeIn">
      <div className="row motb-gallery-title">
        <div className="one column"></div>
        <div className="ten columns">
          <h1>Onsite Gallery</h1>
          <p>The interactive system is deployed on the second floor of MOTB exhibition hall, which features long-term exhibitions, digital interactive kiosks, as well as rare artifact collections.</p>
        </div>
        <div className="one column"></div>
      </div>
      <div className="row motb-gallery-grids first wow fadeIn">
        <div className="one column"></div>
        <div className="ten columns">
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_gospel.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_gospel@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_map.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_map@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_ps.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_ps@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_quiz.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_quiz@2x.jpg"}
            />
          </div>
        </div>
        <div className="one column"></div>
      </div>
      <div className="row motb-gallery-grids third wow fadeIn">
        <div className="one column"></div>
        <div className="ten columns">
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsitea.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsitea@2x.jpg"}
            />
        </div>
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsiteb.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsiteb@2x.jpg"}
            />
        </div>
        </div>
        <div className="one column"></div>
      </div>
      <div className="row motb-gallery-grids second wow fadeIn">
        <div className="one column"></div>
        <div className="ten columns">
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_loud.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_loud@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_work.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_work@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_name.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_name@2x.jpg"}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_hr.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_hr@2x.jpg"}
            />
          </div>
        </div>
        <div className="one column"></div>
      </div>
      <div className="row motb-gallery-grids third wow fadeIn">
        <div className="one column"></div>
        <div className="ten columns">
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsitec.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsitec@2x.jpg"}
            />
        </div>
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsited.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/motb-grid_onsited@2x.jpg"}
            />
        </div>
        </div>
        <div className="one column"></div>
      </div>
    </div>
  )
}

function ComeAndVisit(props) {
  return (
    <div className="motb-visit wow fadeIn">
      <div className="one column"></div>
      <div className="ten columns">
        <h1>Come & Visit!</h1>
        <p>The museum is located at 400 4th St. SW in Washington, D.C.<br></br>
        Daily Hours: 10 a.m. - 5 p.m.<br></br></p><a href="https://www.museumofthebible.org" target="_blank">Official Website</a>
      </div>
      <div className="one column"></div>
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
          description={"The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.<br/><br/> As the interaction designer & front-end developer of this project, I crafted 12 digital interactives from interaction / motion design, to live kiosk applications with node JS web stack (React JS / Angular JS / Webpack).<br/><br/> The museum is open to public since November, 2017."}
        />
        <LazyLoad height={200}>
          <div className="highlight-section row first">
            <VideoCard
              yOffset="-320"
              videoSrc="/static/media/videos/gospel_short.mp4"
              imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
              title="Interactive: Gospels and Spirituals"
              description="The interactive showcased soundtracks from 24 artists, who performed six different gospels that inspried by the Bible. Soundtracks are sampled, parsed and visualized into waves, as spiritual lyrics highlighting on the side."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc="/static/media/videos/bol.mp4"
              imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
              title="Interactive: Bible Out Loud"
              description="The interactive recorded soundtracks that people read the Bible with minority languages from all over the world."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc="/static/media/videos/hmr.mp4"
              imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
              title="Interactive: Human Right Series"
              description="A collection of six interactives that digitalized exhibit documents, videos & collections of how 10 historical legends fight for human rights & justice, eliminate slavery, with vivid media and rich interactions."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc="/static/media/videos/bom.mp4"
              imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
              title="Interactive: Bible on the Map"
              description="The interactive digital map scrolls infinitely, showcased 200+ cities / towns / landmarks in U.S.A that are named after Bible references."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc="/static/media/videos/bn.mp4"
              imageSrc={process.env.PUBLIC_URL + "/static/media/image/motb_highlight_gospel"}
              title="Interactive: Biblical Names"
              description="The interactive showcased 1000+ names that are inspired / originated from Bible references, documented with the first appearance in Bible of each entry."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <Floorplan/>
        </LazyLoad>
        <LazyLoad height={200}>
          <OnsiteGallery/>
        </LazyLoad>
        <LazyLoad height={200}>
          <ComeAndVisit/>
          <Footer
            theme="dark"
          />
        </LazyLoad>
      </div>
    );
  }

}

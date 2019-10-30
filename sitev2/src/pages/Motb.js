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

import MotbFloorplanTinySrc from '../assets/image/motb_floorplan.png';
import MotbFloorplanSrc from '../assets/image/motb_floorplan@2x.png';
import MotbFloorplanForeTinySrc from '../assets/image/motb_floorplan_fore.png';
import MotbFloorplanForeSrc from '../assets/image/motb_floorplan_fore@2x.png';
import MotbGridGospelTinySrc from '../assets/image/motb-grid_gospel.jpg';
import MotbGridGospelSrc from '../assets/image/motb-grid_gospel@2x.jpg';
import MotbGridMapTinySrc from '../assets/image/motb-grid_map.jpg';
import MotbGridMapSrc from '../assets/image/motb-grid_map@2x.jpg';
import MotbGridPSTinySrc from '../assets/image/motb-grid_ps.jpg';
import MotbGridPSSrc from '../assets/image/motb-grid_ps@2x.jpg';
import MotbGridQuizTinySrc from '../assets/image/motb-grid_quiz.jpg';
import MotbGridQuizSrc from '../assets/image/motb-grid_quiz@2x.jpg';
import MotbGridOnsiteATinySrc from '../assets/image/motb-grid_onsitea.jpg';
import MotbGridOnsiteASrc from '../assets/image/motb-grid_onsitea@2x.jpg';
import MotbGridOnsiteBTinySrc from '../assets/image/motb-grid_onsiteb.jpg';
import MotbGridOnsiteBSrc from '../assets/image/motb-grid_onsiteb@2x.jpg';
import MotbGridOnsiteCTinySrc from '../assets/image/motb-grid_onsitec.jpg';
import MotbGridOnsiteCSrc from '../assets/image/motb-grid_onsitec@2x.jpg';
import MotbGridOnsiteDTinySrc from '../assets/image/motb-grid_onsited.jpg';
import MotbGridOnsiteDSrc from '../assets/image/motb-grid_onsited@2x.jpg';
import MotbGridLoudTinySrc from '../assets/image/motb-grid_loud.jpg';
import MotbGridLoudSrc from '../assets/image/motb-grid_loud@2x.jpg';
import MotbGridworkTinySrc from '../assets/image/motb-grid_work.jpg';
import MotbGridworkSrc from '../assets/image/motb-grid_work@2x.jpg';
import MotbGridnameTinySrc from '../assets/image/motb-grid_name.jpg';
import MotbGridnameSrc from '../assets/image/motb-grid_name@2x.jpg';
import MotbGridhrTinySrc from '../assets/image/motb-grid_hr.jpg';
import MotbGridhrSrc from '../assets/image/motb-grid_hr@2x.jpg';
import MotbBannerTinySrc from '../assets/image/motb_project_banner_small.jpg';
import MotbBannerSrc from '../assets/image/motb_project_banner.jpg';
import MotbVideoBgSrc from '../assets/image/motb_highlight_gospel@2x.png';

import MotbVideoGospelSrc from '../assets/video/gospel_short.mp4';
import MotbVideoBolSrc from '../assets/video/bol.mp4';
import MotbVideoBnSrc from '../assets/video/bn.mp4';
import MotbVideoBomSrc from '../assets/video/bom.mp4';
import MotbVideoHmrSrc from '../assets/video/hmr.mp4';

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
          preview={MotbFloorplanTinySrc}
          image={MotbFloorplanSrc}
        />
        <ProgressiveImage
          className="foreground wow fadeIn"
          altName="motb-floorplan-bg"
          preview={MotbFloorplanForeTinySrc}
          image={MotbFloorplanForeSrc}
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
              preview={MotbGridGospelTinySrc}
              image={MotbGridGospelSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridMapTinySrc}
              image={MotbGridMapSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridPSTinySrc}
              image={MotbGridPSSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridQuizTinySrc}
              image={MotbGridQuizSrc}
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
              preview={MotbGridOnsiteATinySrc}
              image={MotbGridOnsiteASrc}
            />
        </div>
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridOnsiteBTinySrc}
              image={MotbGridOnsiteBSrc}
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
              preview={MotbGridLoudTinySrc}
              image={MotbGridLoudSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridworkTinySrc}
              image={MotbGridworkSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridnameTinySrc}
              image={MotbGridnameSrc}
            />
          </div>
          <div className="three columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridhrTinySrc}
              image={MotbGridhrSrc}
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
              preview={MotbGridOnsiteCTinySrc}
              image={MotbGridOnsiteCSrc}
            />
        </div>
        <div className="six columns">
            <ProgressiveImage
              altName="motb-floorplan-bg"
              preview={MotbGridOnsiteDTinySrc}
              image={MotbGridOnsiteDSrc}
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
          previewSource={MotbBannerTinySrc}
          realSource={MotbBannerSrc}
          title="Museum of the Bible"
          description={"The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology.<br/><br/> As the interaction designer & front-end developer of this project, I crafted 12 digital interactives from interaction / motion design, to live kiosk applications with node JS web stack (React JS / Angular JS / Webpack).<br/><br/> The museum is open to public since November, 2017."}
        />
        <LazyLoad height={200} once offset={100}>
          <div className="highlight-section row first">
            <VideoCard
              yOffset="-320"
              videoSrc={MotbVideoGospelSrc}
              imageSrc={MotbVideoBgSrc}
              title="Interactive: Gospels and Spirituals"
              description="The interactive showcased soundtracks from 24 artists, who performed six different gospels that inspried by the Bible. Soundtracks are sampled, parsed and visualized into waves, as spiritual lyrics highlighting on the side."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc={MotbVideoBolSrc}
              imageSrc={MotbVideoBgSrc}
              title="Interactive: Bible Out Loud"
              description="The interactive recorded soundtracks that people read the Bible with minority languages from all over the world."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc={MotbVideoHmrSrc}
              imageSrc={MotbVideoBgSrc}
              title="Interactive: Human Right Series"
              description="A collection of six interactives that digitalized exhibit documents, videos & collections of how 10 historical legends fight for human rights & justice, eliminate slavery, with vivid media and rich interactions."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc={MotbVideoBomSrc}
              imageSrc={MotbVideoBgSrc}
              title="Interactive: Bible on the Map"
              description="The interactive digital map scrolls infinitely, showcased 200+ cities / towns / landmarks in U.S.A that are named after Bible references."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="highlight-section row">
            <VideoCard
              yOffset="-320"
              videoSrc={MotbVideoBnSrc}
              imageSrc={MotbVideoBgSrc}
              title="Interactive: Biblical Names"
              description="The interactive showcased 1000+ names that are inspired / originated from Bible references, documented with the first appearance in Bible of each entry."
            />
          </div>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <Floorplan/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <OnsiteGallery/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <ComeAndVisit/>
          <Footer
            theme="dark"
          />
        </LazyLoad>
      </div>
    );
  }

}

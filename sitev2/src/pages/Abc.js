import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import '../styles/Abc.css';
import '../App.css';
import '../skeleton.css';
import ProgressiveImage from '../components/ProgressiveImage';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

import AbcSprintTinySrc from '../assets/image/abc-highlight-sprint.jpg';
import AbcSprintSrc from '../assets/image/abc-highlight-sprint@2x.jpg';
import AbcResearchTinySrc from '../assets/image/abc-highlight-research.jpg';
import AbcResearchSrc from '../assets/image/abc-highlight-research@2x.jpg';
import AbcWorkshopTinySrc from '../assets/image/abc-highlight-workshop.jpg';
import AbcWorkshopSrc from '../assets/image/abc-highlight-workshop@2x.jpg';
import AbcFramerTinySrc from '../assets/image/abc-highlight-framer.jpg';
import AbcFramerSrc from '../assets/image/abc-highlight-framer@2x.jpg';
import AbcDiscoverTinySrc from '../assets/image/abc_phase_discover.jpg';
import AbcDiscoverSrc from '../assets/image/abc_phase_discover@2x.jpg';
import AbcRefineTinySrc from '../assets/image/abc_phase_refine.jpg';
import AbcRefineSrc from '../assets/image/abc_phase_refine@2x.jpg';
import AbcFinalizeTinySrc from '../assets/image/abc_phase_finalize.jpg';
import AbcFinalizeSrc from '../assets/image/abc_phase_finalize@2x.jpg';
import AbcIterateTinySrc from '../assets/image/abc_phase_iterate.jpg';
import AbcIterateSrc from '../assets/image/abc_phase_iterate@2x.jpg';
import AbcSearchTinySrc from '../assets/image/abc-highlight-search.png';
import AbcSearchSrc from '../assets/image/abc-highlight-search@2x.png';
import AbcMapTinySrc from '../assets/image/abc-highlight-map.png';
import AbcMapSrc from '../assets/image/abc-highlight-map@2x.png';
import AbcFilterTinySrc from '../assets/image/abc-highlight-filter.png';
import AbcFilterSrc from '../assets/image/abc-highlight-filter@2x.png';
import AbcPDPTinySrc from '../assets/image/abc-highlight-pdp.jpg';
import AbcPDPSrc from '../assets/image/abc-highlight-pdp@2x.jpg';
import AbcGalleryTinySrc from '../assets/image/abc-highlight-gallery.jpg';
import AbcGallerySrc from '../assets/image/abc-highlight-gallery@2x.jpg';
import AbcVidBackgroundSrc from '../assets/image/abc-highlight-review.jpg';

function AbcBanner(props) {
  return (
    <div className="abc-banner project-info row">
      <div className="one column"></div>
      <div
        className="ten columns">
        <div className="row" data-parallax='{"y" : -320, "smoothness" : 2}'>
          <h1 className="project-info-header wow fadeIn">Airbnb</h1>
          <p className="project-intro  wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.35s">
            Design owner of China guest experience (search & decide).<br/>
            Iterate product features with XFN peers, see through launches with business impact.<br/>
            Drive design visions that outline product team roadmap.
          </p>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function AbcActivity(props) {
  return (
    <div className="abc-activity row">
      <div className="two columns"></div>
      <div className="eight columns">
        <h1 className="project-info-header wow fadeIn">Beyond Interface</h1>
        <div className="row abc-highlight-cards wow fadeIn" data-wow-delay="0.2s">
          <div className="six columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcSprintTinySrc}
              image={AbcSprintSrc}
            />
            <h4>Design Sprints</h4>
          </div>
          <div className="six columns right">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcResearchTinySrc}
              image={AbcResearchSrc}
            />
            <h4>Research Sessions</h4>
          </div>
        </div>
        <div className="row abc-highlight-cards wow fadeIn" data-wow-delay="0.2s">
          <div className="six columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcWorkshopTinySrc}
              image={AbcWorkshopSrc}
            />
            <h4>Creative Coding Workshop</h4>
          </div>
          <div className="six columns right">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcFramerTinySrc}
              image={AbcFramerSrc}
            />
            <h4>Framer 101</h4>
          </div>
        </div>
      </div>
      <div className="two columns"></div>
    </div>
  )
}

function AbcWorkphase(props) {
  return (
    <div className="abc-workphase row">
      <Controller>
        <Scene triggerElement="#workphase-refine-trigger" duration={100} offset={-120}>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
            <div className="wokphase-hover-refine"></div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerElement="#workphase-finalize-trigger" duration={200} offset={-120}>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
            <div className="wokphase-hover-finalize"></div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerElement="#workphase-iterate-trigger" duration={200} offset={-120}>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
            <div className="wokphase-hover-iterate"></div>
          </Tween>
        </Scene>
      </Controller>
      <div className="one column"></div>
      <div className="ten columns">
        <h1 className="project-info-header wow fadeIn">Work Phase</h1>
        <div className="row workphase-card-bg discover wow fadeIn">
          <div className="eight columns" data-parallax='{"y" : -320, "smoothness" : 2}'>
            <ProgressiveImage
              className="workphase-card-img"
              altName="abc-highlight-card-cover"
              preview={AbcDiscoverTinySrc}
              image={AbcDiscoverSrc}
            />
          </div>
          <div className="four columns" data-parallax='{"y" : -240, "smoothness" : 2}'>
            <h4>Discover</h4>
            <p>Understand problems.<br/> 
            Dive into research findings & data.<br/> 
            Define how success measures.<br/> 
            Align on scope with stakeholders.</p>
          </div>
        </div>
        <div id="workphase-refine-trigger"></div>
        <div className="row workphase-card-bg refine wow fadeIn">
          <div className="four columns" data-parallax='{"y" : -240, "smoothness" : 2}'>
            <h4>Refine</h4>
            <p>Explore system site map.<br/> 
            Draft UI and style sheets.<br/> 
            Synthsize design process.<br/> 
            Outline near to long term solutions.</p>
          </div>
          <div className="eight columns" data-parallax='{"y" : -320, "smoothness" : 2}'>
            <ProgressiveImage
              className="workphase-card-img"
              altName="abc-highlight-card-cover"
              preview={AbcRefineTinySrc}
              image={AbcRefineSrc}
            />
          </div>
        </div>
        <div id="workphase-finalize-trigger"></div>
        <div className="row workphase-card-bg finalize wow fadeIn">
          <div className="eight columns" data-parallax='{"y" : -320, "smoothness" : 2}'>
            <ProgressiveImage
              className="workphase-card-img"
              altName="abc-highlight-card-cover"
              preview={AbcFinalizeTinySrc}
              image={AbcFinalizeSrc}
            />
          </div>
          <div className="four columns" data-parallax='{"y" : -240, "smoothness" : 2}'>
            <h4>Finalize</h4>
            <p>Build hi-fi prototypes.<br/> 
            Organize usability testing.<br/> 
            Specs handoff to engineers.<br/> 
            Design sanity check before launch.<br/> 
            </p>
          </div>
        </div>
        <div id="workphase-iterate-trigger"></div>
        <div className="row workphase-card-bg iterate wow fadeIn">
          <div className="four columns" data-parallax='{"y" : -240, "smoothness" : 2}'>
            <h4>Iterate</h4>
            <p>Evaluation from A/B test.<br/> 
            Iterate on low-lights.<br/> 
            Archive & share future learings.<br/> </p>
          </div>
          <div className="eight columns" data-parallax='{"y" : -320, "smoothness" : 2}'>
            <ProgressiveImage
              className="workphase-card-img"
              altName="abc-highlight-card-cover"
              preview={AbcIterateTinySrc}
              image={AbcIterateSrc}
            />
          </div>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}


function AbcFooter(props) {
  return (
    <div className="abc-footer row">
      <div className="two columns"></div>
      <div className="eight columns">
        <h1 className="wow fadeIn">To Be Continued</h1>
        <p className="project-intro  wow fadeIn" data-wow-delay="0.4s" data-wow-duration="0.35s">
         Content may be hidden due to non-disclosure agreements.<br/>
         For additional information, please reach out accordingly.
        </p>
      </div>
      <div className="two columns"></div>
    </div>
  )
}

function AbcHighlightsTri(props) {
  return (
    <div className={"abc-highlight row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
      <div className="two columns"></div>
      <div className="eight columns abc-highlight-cards">
        <h1 className="project-info-header wow fadeIn">Product Design</h1>
        <div className=" row">
          <div className="four columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcSearchTinySrc}
              image={AbcSearchSrc}
            />
            <h4>Search</h4>
          </div>
          <div className="four columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcMapTinySrc}
              image={AbcMapSrc}
            />
            <h4>Location</h4>
          </div>
          <div className="four columns last">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={AbcFilterTinySrc}
              image={AbcFilterSrc}
            />
            <h4>Filter</h4>
          </div>

        </div>
      </div>
      <div className="two columns"></div>
    </div>
  )
}

function AbcVideoCard(props) {
  return (
    <div className="abc-video-card">
      <video
        width="100%"
        preload={true}
        autoPlay
        loop
        muted
        draggable={false}>
        <source
          src={process.env.PUBLIC_URL + props.videoSource}
          type="video/mp4">
        </source>
      </video>
      <img
        className="abc-highlight-card-cover"
        alt="abc-highlight-card-cover"
        src={AbcVidBackgroundSrc}
      />
    </div>
  )
}

function AbcHighlightsLeftDual(props) {
  return (
    <div className={"abc-highlight dual row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
        <div className="two columns"></div>
        <div className="eight columns abc-highlight-cards">
          <div className=" row">
            <div className="eight columns">
              <ProgressiveImage
                className="abc-highlight-card-cover"
                altName="abc-highlight-card-cover"
                preview={AbcPDPTinySrc}
                image={AbcPDPSrc}
              />
              <h4>Decide</h4>
            </div>
            <div className="four columns">
              <AbcVideoCard
                videoSource="/static/media/videos/abc_highlight_review.mp4"
                imageSource="/static/media/image/abc-highlight-review"
              />
              <h4>Review</h4>
            </div>
          </div>
        </div>
        <div className="two columns"></div>
    </div>
  )
}

function AbcHighlightsRightDual(props) {
  return (
    <div className={"abc-highlight rightdual row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
        <div className="two columns"></div>
        <div className="eight columns abc-highlight-cards">
          <div className=" row">
            <div className="four columns">
              <AbcVideoCard
                videoSource="/static/media/videos/abc_highlight_tour.mp4"
                imageSource="/static/media/image/abc-highlight-review"
              />
              <h4>Home Tour</h4>
            </div>
            <div className="eight columns">
              <ProgressiveImage
                className="abc-highlight-card-cover"
                altName="abc-highlight-card-cover"
                preview={AbcGalleryTinySrc}
                image={AbcGallerySrc}
              />
              <h4>Gallery</h4>
            </div>
          </div>
        </div>
        <div className="two columns"></div>
    </div>
  )
}

export default class ABC extends PureComponent {

  render() {
    return (
      <div className="project-airbnb-china">
        <BackButton/>
        <div className="airbnb-banner-background wow fadeIn" data-wow-delay="0.2s">
          <div id="belo-animation" className="animate"></div>
        </div>
        <AbcBanner/>
        <LazyLoad height={200} once offset={100}>
          <AbcHighlightsTri
            rowCount="first"
          />
          <AbcHighlightsLeftDual/>
          <AbcHighlightsRightDual/>  
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <AbcWorkphase/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <AbcActivity/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <div className="airbnb-footer-background">
            <div id="belo-animation-alter" className="animate"></div>
          </div>
          <AbcFooter/>
          <Footer
            theme="light"
          />
        </LazyLoad>
      </div>
    );
  }

}

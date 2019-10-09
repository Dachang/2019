import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import '../styles/Abc.css';
import '../App.css';
import '../skeleton.css';
import ProgressiveImage from '../components/ProgressiveImage';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

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
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-sprint.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-sprint@2x.jpg"}
            />
            <h4>Design Sprints</h4>
          </div>
          <div className="six columns right">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-research.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-research@2x.jpg"}
            />
            <h4>Research Sessions</h4>
          </div>
        </div>
        <div className="row abc-highlight-cards wow fadeIn" data-wow-delay="0.2s">
          <div className="six columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-workshop.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-workshop@2x.jpg"}
            />
            <h4>Creative Coding Workshop</h4>
          </div>
          <div className="six columns right">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-framer.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-framer@2x.jpg"}
            />
            <h4>Framer 101</h4>
          </div>
        </div>
      </div>
      <div className="two columns"></div>
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
        <h1 className="project-info-header wow fadeIn">Product</h1>
        <div className=" row">
          <div className="four columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-search.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-search@2x.jpg"}
            />
            <h4>Search</h4>
          </div>
          <div className="four columns">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-filter.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-filter@2x.jpg"}
            />
            <h4>Filter</h4>
          </div>
          <div className="four columns last">
            <ProgressiveImage
              className="abc-highlight-card-cover"
              altName="abc-highlight-card-cover"
              preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-map.jpg"}
              image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-map@2x.jpg"}
            />
            <h4>Location</h4>
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
        src={process.env.PUBLIC_URL + props.imageSource + ".jpg"}
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
                preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-pdp.jpg"}
                image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-pdp@2x.jpg"}
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
                preview={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-gallery.jpg"}
                image={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-gallery@2x.jpg"}
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
        <LazyLoad height={200}>
          <AbcHighlightsTri
            rowCount="first"
          />
          <AbcHighlightsLeftDual/>
          <AbcHighlightsRightDual/>  
        </LazyLoad>
        <LazyLoad height={200}>
          <AbcActivity/>
        </LazyLoad>
        <LazyLoad height={200}>
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

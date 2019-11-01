import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import BackButton from '../components/BackButton';
import ProgressiveImage from '../components/ProgressiveImage';
import Footer from '../components/Footer';
import '../styles/Fig.css';
import '../App.css';
import '../skeleton.css';

import FigFeatureSpacingBottomTinySrc from '../assets/image/fig-feature-spacing.png';
import FigFeatureSpacingBottomSrc from '../assets/image/fig-feature-spacing@2x.png';
import FigFeatureSpacingAfterTinySrc from '../assets/image/fig-feature-spacing-after.png';
import FigFeatureSpacingAfterSrc from '../assets/image/fig-feature-spacing-after@2x.png';
import FigFeatureFontTinySrc from '../assets/image/fig-feature-font.png';
import FigFeatureFontSrc from '../assets/image/fig-feature-font@2x.png';
import FigFeatureFontAfterTinySrc from '../assets/image/fig-feature-font-after.png';
import FigFeatureFontAfterSrc from '../assets/image/fig-feature-font-after@2x.png';
import FigFeatureMultiTinySrc from '../assets/image/fig-feature-multi.png';
import FigFeatureMultiSrc from '../assets/image/fig-feature-multi@2x.png';
import FigFeatureMultiAfterTinySrc from '../assets/image/fig-feature-multi-after.png';
import FigFeatureMultiAfterSrc from '../assets/image/fig-feature-multi-after@2x.png';
import FigGetTinySrc from '../assets/image/fig-get.png';
import FigGetSrc from '../assets/image/fig-get@2x.png';
import FigVidSrc from '../assets/video/figmeasure-rec.mp4';

function FigVideoCard(props) {
  return (
    <div className="fig-video-card">
      <video
        width="100%"
        preload={true}
        autoPlay
        loop
        muted
        draggable={false}>
        <source
          src={props.videoSource}
          type="video/mp4">
        </source>
      </video>
    </div>
  )
}

function SizingGraph(props) {
  return (
    <div className="sizing-graph-wrapper wow fadeIn" data-wow-delay="0.25s">
      <svg width="410" height="409" viewBox="0 0 410 409" fill="none">
        <circle cx="205" cy="205" r="200" fill="url(#paint0_linear)"/>
        <rect x="5.5" y="5.5" width="399" height="399" stroke="#1ABDFF"/>
        <rect x="400.5" y="0.5" width="9" height="9" fill="white" stroke="#1ABDFF"/>
        <rect x="0.5" y="0.5" width="9" height="9" fill="white" stroke="#1ABDFF"/>
        <rect x="400.5" y="399.5" width="9" height="9" fill="white" stroke="#1ABDFF"/>
        <rect x="0.5" y="399.5" width="9" height="9" fill="white" stroke="#1ABDFF"/>
        <defs>
        <linearGradient id="paint0_linear" x1="205" y1="5" x2="205" y2="405" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF6C5C"/>
        <stop offset="1" stop-color="#943FFF"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function FigBanner(props) {
  return (
    <div className="fig-banner project-info row">
      <div className="one column"></div>
      <div
        className="five columns">
        <div className="row">
          <h1 className="project-info-header wow fadeIn">Figmeasure</h1>
          <p className="project-intro  wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.35s">
          A clone of sketch-measure on figma. Specify sizing, spacing and style of your components with a few clicks!<br/>
          Designed and developed by DC.
          </p>
        </div>
      </div>
      <div className="six columns">
        <FigVideoCard
          videoSource={FigVidSrc}
        />
      </div>
    </div>
  )
}

function FigFeaturesSizing(props) {
  return (
    <div className="fig-features row">
      <div className="one column"></div>
      <div className="ten columns">
        <div className="row">
          <div className="six columns">
            <SizingGraph/>
          </div>
          <div className="six columns">
            <p className="subtitle">01-sizing</p>
            <h4 className="title">Width, height with flexible positioning</h4>
            <p className="paragraph">Sizing specs generated at ease, with various directions of positioning.</p>
          </div>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function FigFeaturesSpacing(props) {
  return (
    <div className="fig-features row right">
      <div className="one column"></div>
      <div className="ten columns">
        <div className="row">
          <div className="seven columns">
            <p className="subtitle">02-spacing</p>
            <h4 className="title">Margins & paddings between objects</h4>
            <p className="paragraph">Figmeasure will automatically detect grouping relations for padding specs.</p>
          </div>
          <div className="five columns">
            <ProgressiveImage
              className="fig-feature-spacing-bottom"
              altName="fig-feature-spacing-bottom"
              preview={FigFeatureSpacingBottomTinySrc}
              image={FigFeatureSpacingBottomSrc}
            />
            <ProgressiveImage
              className="fig-feature-spacing-bottom wow fadeIn"
              dataWowDelay="0.5s"
              altName="fig-feature-spacing-bottom"
              preview={FigFeatureSpacingAfterTinySrc}
              image={FigFeatureSpacingAfterSrc}
            />
          </div>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function FigFeaturesFont(props) {
  return (
    <div className="fig-features row font">
      <div className="one column"></div>
      <div className="ten columns">
        <div className="row">
          <div className="six columns">
            <div className="placeholder">
              <ProgressiveImage
                className="fig-feature-spacing-bottom"
                altName="fig-feature-spacing-bottom"
                preview={FigFeatureFontTinySrc}
                image={FigFeatureFontSrc}
              />
              <ProgressiveImage
                className="fig-feature-spacing-bottom wow fadeIn"
                dataWowDelay="0.5s"
                altName="fig-feature-spacing-bottom"
                preview={FigFeatureFontAfterTinySrc}
                image={FigFeatureFontAfterSrc}
              />
            </div>
          </div>
          <div className="six columns">
            <p className="subtitle">03-style</p>
            <h4 className="title">Font & layer design attributes</h4>
            <p className="paragraph">Display fill, stroke, border-settings, font-family all at once.</p>
          </div>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function FigFeaturesMulti(props) {
  return (
    <div className="fig-features row right">
      <div className="one column"></div>
      <div className="ten columns">
        <div className="row">
          <div className="seven columns">
            <p className="subtitle">04-handy</p>
            <h4 className="title">Selecting multiple objects</h4>
            <p className="paragraph">Command + click on however much layers still works like a charm.</p>
          </div>
          <div className="five columns">
            <ProgressiveImage
              className="fig-feature-spacing-bottom"
              altName="fig-feature-spacing-bottom"
              preview={FigFeatureMultiTinySrc}
              image={FigFeatureMultiSrc}
            />
            <ProgressiveImage
              className="fig-feature-spacing-bottom wow fadeIn"
              dataWowDelay="0.5s"
              altName="fig-feature-spacing-bottom"
              preview={FigFeatureMultiAfterTinySrc}
              image={FigFeatureMultiAfterSrc}
            />
          </div>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function FigGet(props) {
  return (
    <div className="fig-get">
      <div className="row">
        <div className="one column"></div>
        <div className="ten columns">
          <h1 className="wow fadeIn">Get it now.</h1>
          <p className="wow fadeIn">Currently <a href="https://www.figma.com/c/plugin/743719183188104088/Figmeasure" target="_blank">Figmeasure</a> is published under Airbnb organization, <br/>migration work for public access are undergoing.</p>
          <a className="wow fadeIn" href="https://github.com/Dachang/Figmeasure" target="_blank">Source code</a>
        </div>
        <div className="one column"></div>
      </div>
      <ProgressiveImage
        className="fig-feature-spacing-bottom wow fadeIn"
        altName="fig-feature-spacing-bottom"
        preview={FigGetTinySrc}
        image={FigGetSrc}
      />
    </div>
  )
}

export default class Fig extends PureComponent {

  render() {
    return (
      <div className="project-figmeasure">
        <BackButton/>
        <FigBanner/>
        <LazyLoad height={200} once offset={100}>
          <FigFeaturesSizing/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <FigFeaturesSpacing/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <FigFeaturesFont/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <FigFeaturesMulti/>
        </LazyLoad>
        <LazyLoad height={200} once offset={100}>
          <FigGet/>
        </LazyLoad>
        <Footer
          theme="dark"
        />
      </div>
    );
  }

}

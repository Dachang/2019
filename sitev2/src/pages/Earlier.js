import React, { PureComponent } from 'react';
import BackButton from '../components/BackButton';
import ProgressiveImage from '../components/ProgressiveImage';
import '../styles/Earlier.css';
import '../App.css';
import '../skeleton.css';

import earlierSrc from '../assets/file/dachang_liu_2014_2016.pdf';
import earlierATinySrc from '../assets/image/earlierA.jpg';
import earlierASrc from '../assets/image/earlierA@2x.jpg';
import earlierBTinySrc from '../assets/image/earlierB.jpg';
import earlierBSrc from '../assets/image/earlierB@2x.jpg';
import earlierCTinySrc from '../assets/image/earlierC.jpg';
import earlierCSrc from '../assets/image/earlierC@2x.jpg';
import earlierDTinySrc from '../assets/image/earlierD.jpg';
import earlierDSrc from '../assets/image/earlierD@2x.jpg';
import earlierETinySrc from '../assets/image/earlierE.jpg';
import earlierESrc from '../assets/image/earlierE@2x.jpg';
import earlierFTinySrc from '../assets/image/earlierF.jpg';
import earlierFSrc from '../assets/image/earlierF@2x.jpg';
import earlierGTinySrc from '../assets/image/earlierG.jpg';
import earlierGSrc from '../assets/image/earlierG@2x.jpg';

export default class Earlier extends PureComponent {
  
    render() {
      return (
        <div className="project-earlier">
          <BackButton/>
          <div className="row title">
            <div className="three columns"></div>
            <div className="six columns">
              <h1>Earlier work</h1>
              <p>Here are a few things I've built between 2014-2016, you can find more details <a href={earlierSrc} target="_blank">here</a>.</p>
            </div>
            <div className="three columns"></div>
          </div>
          <div className="row gallery">
            <div className="two columns"></div>
            <div className="eight columns">
              <div className="row first">
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierATinySrc}
                    image={earlierASrc}
                  />
                </div>
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierBTinySrc}
                    image={earlierBSrc}
                  />
                </div>
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierCTinySrc}
                    image={earlierCSrc}
                  />
                </div>
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierDTinySrc}
                    image={earlierDSrc}
                  />
                </div>
              </div>
              <div className="row second">
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierETinySrc}
                    image={earlierESrc}
                  />
                </div>
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierFTinySrc}
                    image={earlierFSrc}
                  />
                </div>
                <div className="three columns">
                  <ProgressiveImage
                    className="cdi-logo"
                    altName="cdi-logo"
                    preview={earlierGTinySrc}
                    image={earlierGSrc}
                  />
                </div>
                <div className="three columns">
                  <div className="fill"></div>
                </div>
              </div>
            </div>
            <div className="two columns"></div>
          </div>
        </div>
      );
    }
  
  }
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default class Footer extends PureComponent {

  render() {
    return (
      <div className={"site-footer wow fadeIn " + this.props.theme} data-wow-delay="0.2s" >
        <div className="one column"></div>
        <div className="ten columns">
            <div className="devider"></div>
            <div className="row">
                <div className="eight columns">
                    <Link to="/"><h4>DC'S PORTFOLIO</h4></Link>
                    <p>© 2019 DC’s Portfolio | Designed and developed by Dachang Liu</p>
                </div>
                <div className="four columns">
                    <div className="row elsewhere-links">
                        <div className="four columns">
                            <a href="https://www.linkedin.com/in/dachangliu/" target="_blank" className="footer-icon-wrapper">
                                <h4>LINKEDIN</h4>
                            </a>
                        </div>
                        <div className="four columns">
                            <a href="mailto: dachang221@126.com" className="footer-icon-wrapper">
                                <h4>CONTACT</h4>
                            </a>
                        </div>
                        <div className="four columns">
                            <a href={process.env.PUBLIC_URL + "/static/media/files/dachang_liu_designer_airbnb.pdf"} target="_blank"  className="footer-icon-wrapper">
                                <h4>RESUME</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="one column">

        </div>
      </div>
    );
  }

}

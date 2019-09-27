import React, { PureComponent } from 'react';
import '../styles/Abc.css';

function AbcBanner(props) {
  return (
    <div className="abc-banner row">
      <div className="project-info row">
        <div className="one column"></div>
        <div
          className="ten columns">
          <div className="row">
            <h1 className="project-info-header wow fadeIn">Airbnb China</h1>
            <p className="project-intro  wow fadeIn" data-wow-delay="0.2s">
              Design owner of China guest search & decide experience.<br/>
              Iterate product features with XFN peers, see through launches with business impact.<br/>
              Drive design visions that outline product team roadmap.
            </p>
          </div>
        </div>
        <div className="one column"></div>
      </div>
    </div>
  )
}

export default class ABC extends PureComponent {

  render() {
    return (
      <div className="project-airbnb-china">
        <div id="belo-animation" class="animate"></div>
      </div>
    );
  }

}

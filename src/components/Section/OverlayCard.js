import React from 'react';
import Rotator from 'react-rotating-text';
import web_src_one from '../../assets/img/cordelia-cruise-overlay-card-1_mobile.png';
import web_src_two from '../../assets/img/cordelia-cruise-overlay-card-2_mobile.png';
import web_src_three from '../../assets/img/cordelia-cruise-overlay-card-3_mobile.png';
import mobile_src_one from '../../assets/img/cordelia-cruise-overlay-card-1_mobile.png';
import mobile_src_two from '../../assets/img/cordelia-cruise-overlay-card-2_mobile.png';
import mobile_src_three from '../../assets/img/cordelia-cruise-overlay-card-3_mobile.png';

function OverlayCard({ isMobile }) {
  // overlayCard section - oc-section

  return (
    <section className="oc-section">
      <div className="oc-section__vertical-align">
        <div className="oc-section__vertical-align__card">
          <img alt="cordelia cruises" src={isMobile ? mobile_src_one : web_src_one} />
          <div className="oc-section__vertical-align__card__content">
            <h5>Healthy Waves</h5>
            <p>Enjoy safe holidays with healthy waves</p>
          </div>
        </div>
        <div className="oc-section__vertical-align__card">
          <img alt="cordelia cruises" src={isMobile ? mobile_src_two : web_src_two} />
          <div className="oc-section__vertical-align__card__content">
            <h5>Kids sail free</h5>
            <p>Enjoy safe holidays with healthy waves</p>
          </div>
        </div>
        <div className="oc-section__vertical-align__card">
          <img alt="cordelia cruises" src={isMobile ? mobile_src_three : web_src_three} />
          <div className="oc-section__vertical-align__card__content">
            <h5>book by paying ₹500</h5>
            <p>Enjoy safe holidays with healthy waves</p>
          </div>
        </div>
      </div>
    </section>
  );
}

OverlayCard = React.memo(OverlayCard);

export { OverlayCard };

import React from 'react';
import mobileSrc from '../../assets/img/cruise-transparent_mobile.png';

function BackgroundOverlay({isMobile}) {
  // bo-section - background-overlay-section

  return (
    <section className="bo-section">
      <div className="bo-section__top">
        <h3>
          THE <strong>EMPRESS</strong>
        </h3>
        <p>Lorem Ipsum is a simply dummy text used in typing industry since 1500’s.</p>
      </div>
      <div className="bo-section__image">
        <img alt="Cordelia cruises" src={mobileSrc} />
        <button className="cc-button cc-button--primary">KNOW MORE</button>
      </div>
    </section>
  );
}

BackgroundOverlay = React.memo(BackgroundOverlay);

export { BackgroundOverlay };

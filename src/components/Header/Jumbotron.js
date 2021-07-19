import React from 'react';
import banner from '../../assets/img/banner.png';
import bannerMobile from '../../assets/img/banner_mobile.png';

function Jumbotron({ isMobile }) {
  return (
    <section className="jumbotron">
      <figure>
        <img alt="cordelia cruises" src={isMobile ? bannerMobile : banner} />
      </figure>
      <div className="jumbotron__content">
        <h3>This September, sail to India’s only coral island chain, Lakshadweep</h3>
        <button className="cc-button cc-button--outline">Know More</button>
      </div>
    </section>
  );
}

Jumbotron = React.memo(Jumbotron);

export { Jumbotron };

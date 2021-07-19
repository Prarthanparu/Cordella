import React from 'react';
import mobileSrc from '../../assets/img/home-page-destination_mobile.png';

function ImageTags({ isMobile }) {
  // it-section - image-tags-section

  return (
    <section className="it-section">
      <div className="it-section__top">
        <h3>
          OUR <strong>DESTINATIONS</strong>
        </h3>
      </div>
      <div className="it-section__image">
        <img alt="Cordelia cruises" src={mobileSrc} />
      </div>
      <div className="it-section__tags">
        <ul>
          <li>Diu</li>
          <li className="it-section__tags--active">Mumbai</li>
          <li>Goa</li>
          <li>Cochin</li>
          <li>Chennai</li>
          <li>Lakshadweep</li>
          <li>Male</li>
          <li>Colombo</li>
          <li>Trincomalee</li>
          <li>Jaffna</li>
          <li>Galle</li>
        </ul>
        <button className="cc-button cc-button--primary">KNOW MORE</button>
      </div>
    </section>
  );
}

ImageTags = React.memo(ImageTags);

export { ImageTags };

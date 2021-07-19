import React from 'react';
import Rotator from 'react-rotating-text';
import Image from '../../assets/img/cordelia-cruises-content-image-section.png';
import MobileImage from '../../assets/img/cordelia-cruises-content-image-section-mobile.png';

function ContentImage({ isMobile }) {
  //ci - content-image

  return (
    <section className="ci-section">
      <div className="ci-section__content">
        <h3>
          Experience
          <span>
            <Rotator items={['Lakshadweep', 'Diu', 'Mumbai', 'Colombo']} color="#ea725b" />
          </span>
          like never before
        </h3>
        <p>Welcome aboard India’s only premium cruise liner, Cordelia Cruises.</p>
        <strong>Now you can just Book with 5000 INR. </strong>
      </div>
      <div className="ci-section__image">
        <figure>
          <img alt="cordelia cruises" src={isMobile ? MobileImage : Image} />
        </figure>
        <div className="ci-section__image__overlay">
          <p>
            Odio quam nulla posuere tempus, ornare amet ultricies. Vivamus semper cras egestas vestibulum massa metus
            mauris.
          </p>
          <button className="cc-button cc-button--outline">Avail Now</button>
        </div>
      </div>
    </section>
  );
}

ContentImage = React.memo(ContentImage);

export { ContentImage };

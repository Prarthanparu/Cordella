import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__top">
        <h3>
          SUBSCRIBE TO <strong>OUR NEWSLETTER</strong>
        </h3>
        <p>Be the first to know all our updates & offers</p>
      </div>
      <form className="newsletter-section__form">
        <div className="newsletter-section__form__input-group">
          <input placeholder="Your email address" type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </form>
    </section>
  );
}

Newsletter = React.memo(Newsletter);

export { Newsletter };

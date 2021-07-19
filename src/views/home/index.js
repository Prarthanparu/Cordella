import React from 'react';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';
import Header from '../../components/Header/HeaderNoBanner';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import Footer from '../../components/Footer/Footer';
import { Jumbotron } from '../../components/Header';
import * as Section from '../../components/Section';

function Home() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    _isMobileScreen();
    window.addEventListener('resize', _isMobileScreen);
    return () => {
      window.removeEventListener('resize', _isMobileScreen);
    };
  }, []);

  const _isMobileScreen = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
      return;
    }
    setMobile(false);
  };

  return (
    <div className="home-page">
      <NotificationBanner />
      <div className="fixed-menu">
        <Header transparent={true} />
      </div>
      <Jumbotron isMobile={isMobile} />
      <Section.ContentImage isMobile={isMobile} />
      <Section.BackgroundOverlay isMobile={isMobile} />
      <Section.ImageTags isMobile={isMobile} />
      <Section.Newsletter />
      <Section.OverlayCard isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default Home;

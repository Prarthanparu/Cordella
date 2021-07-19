import styles from "./Header.module.scss";
import Logo from "../../assets/img/logo.png";
import Banner from "../../assets/img/banner.png";
import Container from "../Container";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header className={styles.siteHeader}>
        <Container>
        <div className={styles.siteIdentity}>
          <a href="#">
            <img src={Logo} alt="Site Name" />
          </a>
        </div>
        <nav className={styles.siteNavigation}>
          <ul className={styles.nav}>
          <li>
              <Link  to = {"/cruise-routes"}>Find a cruise </Link>
            </li>
            <li>
              <Link  to ="/destination">Destinations </Link>
            </li>
            <li>
              <a href="#">My Bookings</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        </Container>
      </header>
      <img src={Banner} alt="Site Name" style={{width:"100%",objectFit:"cover"}} />
    </div>
  );
}

export default Header;

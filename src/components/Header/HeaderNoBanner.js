import styles from "./Header.module.scss";
import Logo from "../../assets/img/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import Container from "../Container";
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className={`Header ${props.className?props.className:""}`}>
      <header className={styles.siteHeader}>
        <Container>
        <div className={styles.siteIdentity}>
          <a href="#">
            <img src={Logo} alt="Site Name" />
          </a>
        </div>
        <nav className={styles.siteNavigation}>
          <div className={styles.menu}>
          <MenuIcon style={{ color: "white" }}/>
          </div>
          <ul className={styles.nav}>
            <li>
              <Link  to = {"/cruise-routes"}>Find a cruise </Link>
            </li>
            <li>
              <Link  to ="/destination">Destinations </Link>
            </li>
            {/* <li>
              <a href="#">Destinations</a>
            </li> */}
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
    </div>
  );
}

export default Header;

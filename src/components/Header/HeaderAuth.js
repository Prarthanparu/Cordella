import styles from "./HeaderAuth.module.scss";
import Logo from "../../assets/img/logo.png";
import { Avatar, Button, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  EllipsisOutlined,
  DownOutlined,
  DollarCircleOutlined,
  EuroCircleOutlined,
  PoundOutlined,
} from "@ant-design/icons";

function HeaderAuth() {
  const currencyMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<DollarCircleOutlined />}>
        Dollar
      </Menu.Item>
      <Menu.Item key="2" icon={<PoundOutlined />}>
        INR
      </Menu.Item>
      <Menu.Item key="3" icon={<EuroCircleOutlined />}>
        EURO
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    console.log("click", e);
  }

  function handleButtonClick(e) {
    console.log("click left button", e);
  }

  return (
    <div className={styles.siteHeaderContainer}>
      <header className={styles.siteHeader}>
        <div className={styles.siteIdentity}>
          <a href="#">
            <img src={Logo} alt="Site Name" />
          </a>
        </div>
        <nav className={styles.siteNavigation}>
          <ul className={styles.nav}>
            <li key="1">
              <a href="/cruise-routes">Find a cruise</a>
            </li>
            <li key="2">
              <a href="#">Destinations</a>
            </li>
            <li key="3">
              <a href="#">My Bookings</a>
            </li>
            <li key="4">
              <a href="#">Blog</a>
            </li>
            <li key="5">
              <a href="#">Contact</a>
            </li>
            <li key="6">
              <Button style={{ color: "#EA725B" }}>Web Check In</Button>
            </li>
            <li key="7">
              <EllipsisOutlined style={{ color: "#fff" }} />
            </li>
            <li key="8">
              <Dropdown overlay={currencyMenu}>
                <Button>
                  <PoundOutlined /> INR <DownOutlined />
                </Button>
              </Dropdown>
            </li>
            <li key="9">
              <Avatar
                icon={<UserOutlined style={{ color: "#919191" }} />}
                style={{ backgroundColor: "#fff" }}
              ></Avatar>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderAuth;

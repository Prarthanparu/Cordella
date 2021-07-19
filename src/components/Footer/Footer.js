import styles from "./Footer.module.scss";
import { Row, Col } from "antd";
import WhiteLogo from "../../assets/img/footer-logo.png";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import Container from "../Container";

function Footer() {
  return (
    <div className="Footer">
      <footer className={styles.siteFooter}>
       <Container>
          <Row>
            {/* <Col span={1}></Col> */}
            <Col className="col-12 col-md-6 col-lg-4">
              <div className={styles.siteFooterIdentity}>
                <img src={WhiteLogo} alt="Site Name" />
                <div>
                  <h5>Cordelia Cruises</h5>
                  <h6 className={styles.header6}>A city on the sea</h6>
                </div>
              </div>
              <p className={styles.textJustify}>
                Cordelia Cruises by Waterways Leisure Tourism Pvt Ltd is India’s
                premium cruise liner. True to its name, Cordelia aspires to
                promote and drive the cruise culture in India through experiences
                that are stylish, luxurious and most importantly, inherently
                Indian.
              </p>
              <ul className={styles.socialIcons}>
                <b>Follow Us:</b>
                <li>
                  <a className={styles.facebook} href="#">
                    <FacebookFilled />
                  </a>
                </li>
                <li>
                  <a className={styles.instagram} href="#">
                    <InstagramFilled />
                  </a>
                </li>
                <li>
                  <a className={styles.linkedin} href="#">
                    <LinkedinFilled />
                  </a>
                </li>
                <li>
                  <a className={styles.twitter} href="#">
                    <TwitterCircleFilled />
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-6 col-md-6 col-lg-2 my-3">
              <h6>Quick Links</h6>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Destination
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Group Booking Form
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Lost and Found
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Agent Login
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">FAQ</a>
                </li>
              </ul>
            </Col>
            <Col className="col-6 col-md-6 col-lg-3 my-3">
              <h6>Privacy & Policy</h6>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Onboard Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Healthy Waves Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Clean Waves Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Passenger Cruise Ticket Contract
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3 my-3">
              <h6>Contact Us</h6>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    <MailFilled />{" "}
                    <span style={{ marginLeft: "8px" }}>
                      info@cordeliacruises.com
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    <PhoneFilled />{" "}
                    <span style={{ marginLeft: "8px" }}>022688111111</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col
              span={22}
              style={{ borderTop: "0.5px solid rgba(255, 255, 255, 0.5)" }}
            >
              <p className={styles.copyrightText}>
                &copy; 2021 Cordelia Cruises All Right Reserved
              </p>
            </Col>
            <Col span={1}></Col>
          </Row>
          </Container>
      </footer>
    </div>
  );
}

export default Footer;

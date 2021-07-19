import styles from "./TopEverything.module.scss";
import cx from "./TopEverything.module.scss";
import { Row, Col } from "antd";

function TopEverything() {
  const destinations = [
    "Diu",
    "Mumbai",
    "Lakshadweep",
    "Colombo",
    "Male",
    "Muscat",
  ];
  const itineraries = [
    "Diu",
    "Mumbai",
    "Lakshadweep",
    "Colombo",
    "Male",
    "Muscat",
  ];
  const activities = [
    "Diu",
    "Mumbai",
    "Lakshadweep",
    "Colombo",
    "Male",
    "Muscat",
  ];
  const ports = ["Diu", "Mumbai", "Lakshadweep", "Colombo", "Male", "Muscat"];
  return (
    <div className={styles.TopEverything}>
      <Row gutter={16}>
        <Col className={("gutter-row", styles.topCorners)} span={6}>
          <h6>Top Destinations</h6>
          <ul>
            {destinations.map((dest, i) => (
              <li key={i}>
                <a>{dest}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col className={("gutter-row", styles.topCorners)} span={6}>
          <h6>Top Itineraries</h6>
          <ul>
            {itineraries.map((dest, i) => (
              <li key={i}>
                <a>{dest}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col className={("gutter-row", styles.topCorners)} span={6}>
          <h6>Top Activities</h6>
          <ul>
            {activities.map((dest, i) => (
              <li key={i}>
                <a>{dest}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col className={("gutter-row", styles.topCorners)} span={6}>
          <h6>Top Ports</h6>
          <ul>
            {ports.map((dest, i) => (
              <li key={i}>
                <a>{dest}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default TopEverything;

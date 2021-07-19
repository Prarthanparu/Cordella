import { Row, Col, Card, Button } from "antd";
import styles from "./CommonCards.module.scss";

function TextImage(props) {
  const title = "Wedding VOWS with the ocean VIEWS";
  const cruise_descriptions = [
    "Lorem ipsum is a simply dummy text used in typing industry since 1500sLorem ipsum is a simply dummy",
    "Lorem ipsum is a simply dummy text used in typing industry since 1500sLorem ipsum is a simply dummy",
  ];
  return (
    <Row style={{paddingBottom: "74px"}}>
      <Col className="gutter-row" span={10}>
        <Card className={styles.textCard}>
          <h6>{title}</h6>
          {cruise_descriptions.map((para, i) => (
              <p key={i}>{para}</p>
          ))}
          <Button type="primary">Explore More</Button>
        </Card>
      </Col>
      <Col className="gutter-row" span={2}></Col>
      <Col className="gutter-row" span={12}>
        <Card>
          <div key="TextImageBackground" className={styles.TagCardImageSection}></div>
        </Card>
      </Col>
    </Row>
  );
}

export default TextImage;

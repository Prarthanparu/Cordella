import { Row, Col, Card, Avatar } from "antd";
import { ChromeOutlined } from "@ant-design/icons";
import styles from "./FeatureCards.module.scss";

const { Meta } = Card;

function FeatureCards(props) {
  const title = "Safe Something";
  const cruise_name =
    "Lorem ipsum is a simply dummy text used in typing industry since 1500sLorem ipsum is a simply dummy";
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <Card className={styles.featureCard}>
          <div className={styles.avatarDiv}>
            <Avatar
              shape="square"
              size={64}
              icon={<ChromeOutlined style={{ color: "#ffffff" }} />}
              style={{ background: "#EA725B" }}
            ></Avatar>
          </div>
          <Meta title={title} description={cruise_name} />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card className={styles.featureCard}>
          <div className={styles.avatarDiv}>
            <Avatar
              shape="square"
              size={64}
              icon={<ChromeOutlined style={{ color: "#ffffff" }} />}
              style={{ background: "#EA725B" }}
            ></Avatar>
          </div>
          <Meta title={title} description={cruise_name} />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card className={styles.featureCard}>
          <div className={styles.avatarDiv}>
            <Avatar
              shape="square"
              size={64}
              icon={<ChromeOutlined style={{ color: "#ffffff" }} />}
              style={{ background: "#EA725B" }}
            ></Avatar>
          </div>
          <Meta title={title} description={cruise_name} />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card className={styles.featureCard}>
          <div className={styles.avatarDiv}>
            <Avatar
              shape="square"
              size={64}
              icon={<ChromeOutlined style={{ color: "#ffffff" }} />}
              style={{ background: "#EA725B" }}
            ></Avatar>
          </div>
          <Meta title={title} description={cruise_name} />
        </Card>
      </Col>
    </Row>
  );
}

export default FeatureCards;

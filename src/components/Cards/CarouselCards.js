import { Avatar, Button, Card, Col, Row, Tag } from "antd";
import styles from "./CarouselCards.module.scss";
import Banner from "../../assets/img/sample_image.png";
import { ArrowRightOutlined, FireFilled } from "@ant-design/icons";

export const CarouselCards = () => {
  return <></>;
};

export const LandCruisePackages = (props) => {
  const tags = ["tags", "tags", "tags"];
  return (
    <Card
      hoverable
      style={{ width: 390 }}
      cover={<img alt="example" src={Banner} />}
    >
      <div style={{ padding: "10px" }}>
        <h1 style={{ fontSize: "20px" }}>8 NIGHT FABULOUS KERALA</h1>
        <h2 style={{ fontSize: "14px", color: "#EA725B" }}>
          2N Mumbai-Kochi Cruise + 3N Kerala Land Holidays
        </h2>
        {tags.map((tag) => (
          <Tag style={{ margin: "10px 5px" }}>{tag}</Tag>
        ))}
        <Row>
          <Col span={12}>
            <span>Starting From</span>
            <h1>₹25,025</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <a>
              Explore More <ArrowRightOutlined />
            </a>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export const BestSeller = (props) => {
  return (
    <Card
      hoverable
      style={{ width: 390 }}
      cover={<img alt="example" src={Banner} />}
    >
      <div style={{ padding: "10px" }}>
        <h1 style={{ fontSize: "20px" }}>8 NIGHT FABULOUS KERALA</h1>
        <h2 style={{ fontSize: "14px", color: "#EA725B" }}>
          2N Mumbai-Kochi Cruise + 3N Kerala Land Holidays
        </h2>
        <Row>
          <Col span={12}>
            <span>Starting From</span>
            <h1>₹25,025</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <a>
              Explore More <ArrowRightOutlined />
            </a>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export const CruiseInspirations = (props) => {
  return (
    <Card
      hoverable
      style={{ width: 390 }}
      cover={<img alt="example" src={Banner} />}
    >
      <div style={{ padding: "10px" }}>
        <h1 style={{ fontSize: "20px" }}>8 NIGHT FABULOUS KERALA</h1>
        <Row style={{ color: "#EA725B" }}>
          <Col span={12}>
            <a>Admin</a>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <a>03-March-2021</a>
          </Col>
        </Row>
        <br />
        <p style={{ color: "#919191" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <br />
        <span style={{ color: "#EA725B", fontWeight: "bolder" }}>
          Read More
        </span>
      </div>
    </Card>
  );
};

export const TestimonialCard = (props) => {
  return (
    <Card hoverable style={{ width: 240, textAlign: "center" }}>
      <p style={{ color: "#919191" }}>
        <FireFilled /> Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <Row>
        <Col span={12} style={{ textAlign: "left" }}>
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Col>
        <Col span={12}>
          <a>Mayank Bhardwaj</a>
          <p style={{ color: "#919191" }}>Gujurat, India</p>
        </Col>
      </Row>
    </Card>
  );
};

export const BannerCards = (props) => {
  return (
    <Card
      cover={
        <div className={styles.BannerCardBackground}>
          <div className={styles.BannerCardText}>
            <h1>Healthy Waves</h1>
            <p>
              Lorem ipsum is a simply dummy text used in typingindustry since
              1500s for the typography purpose.
            </p>
            <Button type="primary">View Offers</Button>
          </div>
        </div>
      }
    ></Card>
  );
};

CarouselCards.Packages = LandCruisePackages;
CarouselCards.BestSeller = BestSeller;
CarouselCards.CruiseInspirations = CruiseInspirations;
CarouselCards.TestimonialCard = TestimonialCard;
CarouselCards.BannerCard = BannerCards;

export default CarouselCards;

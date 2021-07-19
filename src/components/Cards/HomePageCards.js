import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Carousel, Col, Form, Input, Row, Tag } from "antd";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import styles from "./CommonCards.module.scss";
import FeatureCards from "./FeatureCards";
import CarouselCards from "./CarouselCards";
import ImageText from "./ImageText";
import TextImage from "./TextImage";
import Rotator from "react-rotating-text";
import TopEverything from "../TopEverything/TopEverything";

const { CheckableTag } = Tag;

export const MovingTextCard = (props) => {
  const destinationArray = ["Diu", "Mumbai", "Colombo"];
  return (
    <div className={styles.MovingTextCardBackground}>
      <Row>
        <Col span={12} className={styles.MovingTextCardText}>
          <h1>Experience</h1>
          <h1 style={{ color: "#EA725B" }}>
            <Rotator items={destinationArray} />
          </h1>
          <h1>like never before</h1>
          <br />
          <p>
            Welcome aboard India’s only premium cruise liner, Cordelia Cruises.
          </p>
          <br />
          <br />
          <h3>Now you can just Book with 5000 INR.</h3>
        </Col>
        <Col span={12}>
          <div className={styles.MovingTextCardImageSection}>
            <div className={styles.MovingTextCardImageSectionText}>
              <p style={{ color: "white" }}>
                Odio quam nulla posuere tempus, ornare amet ultricies. Vivamus
                semper cras egestas vestibulum massa metus mauris.
              </p>
              <Button style={{ background: "transparent", color: "white" }}>
                Avail Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export const HomePageCards = (props) => {
  return (
    <div className={styles.TextOverImageBackground}>
      <div className={styles.TextOverImageText}>
        <h1>The Empress</h1>
        <p>
          Lorem Ipsum is a simply dummy text used in typing industry since
          1500’s.
        </p>
        <Button type="primary">Know More</Button>
      </div>
    </div>
  );
};

export const FeaturesCards = (props) => {
  return (
    <div className={styles.FeatureCardsBackground}>
      <FeatureCards></FeatureCards>
    </div>
  );
};

export const TopEverythingComponent = (props) => {
  return (
    <div className={styles.TopEverythingBackground}>
      <TopEverything></TopEverything>
    </div>
  );
};

export const TagCards = (props) => {
  const [selectedTags, setselectedTags] = useState(["Colombo"]);
  const tagsData = [
    "Diu",
    "Mumbai",
    "Colombo",
    "Male",
    "Diu",
    "Mumbai",
    "Colombo",
    "Male",
  ];
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);
    setselectedTags({ selectedTags: nextSelectedTags });
  };
  return (
    <div className={styles.TagCardsBackground}>
      <Row>
        <Col span={12}>
          <div className={styles.TagCardImageSection}></div>
        </Col>
        <Col span={2}></Col>
        <Col span={10} className={styles.TagCardTextSection}>
          <h1>Our Destinations</h1>
          {tagsData.map((tag, i) => (
            <CheckableTag
              key={i}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
              style={{ margin: "0 10px" }}
            >
              {tag}
            </CheckableTag>
          ))}
          <br />
          <br />
          <Button type="primary">Explore All</Button>
        </Col>
      </Row>
    </div>
  );
};

export const ImageTextOverlayCards = (props) => {
  return (
    <div className={styles.ImageTextOverlayCardsBackground}>
      <h1>SEACATION for every occasion</h1>
      <ImageText style={{ paddingBottom: "74px" }}></ImageText>
      <TextImage style={{ paddingBottom: "74px" }}></TextImage>
      <ImageText></ImageText>
    </div>
  );
};

export const NewsLetterCard = (props) => {
  return (
    <div className={styles.NewsLetterCardBackground}>
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <Row>
        <Col span={10}>
          <p style={{ color: "#919191", height: "50px", lineHeight: "50px" }}>
            Be the first to know all our updates & offers
          </p>
        </Col>
        <Col
          span={14}
          style={{
            display: "flex",
            width: "100%",
            height: "50px",
            justifyContent: "flex-end",
          }}
        >
          <Form
            layout="inline"
            style={{
              WebkitBoxShadow: "-2px 17px 5px -7px rgba(0,0,0,0.12)",
              MozBoxShadow: "-2px 17px 5px -7px rgba(0,0,0,0.12)",
              boxShadow: "-2px 17px 5px -7px rgba(0,0,0,0.12)",
            }}
          >
            <Form.Item>
              <Input
                placeholder="Enter Your Email Address"
                style={{ border: "none", height: 50, width: 416 }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  border: "1px solid #EA725B",
                  background: "#EA725B",
                  color: "#ffffff",
                  height: 50,
                  width: 220,
                  margin: "0px",
                }}
              >
                SUBSCRIBE
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export const BannerCarouselBackground = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <RightCircleTwoTone twoToneColor="#EA725B" />,
    prevArrow: <LeftCircleTwoTone twoToneColor="#EA725B" />,
  };
  return (
    (
      <div className={styles.BannerCarouselBackground}>
        <Carousel autoplay>
          <div>
            <CarouselCards.BannerCard />
          </div>
          <div>
            <CarouselCards.BannerCard />
          </div>
          <div>
            <CarouselCards.BannerCard />
          </div>
          <div>
            <CarouselCards.BannerCard />
          </div>
        </Carousel>
      </div>
    ),
    (
      <div className={styles.BannerCarouselBackground}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <CarouselCards.BannerCard />
            </div>
            <div>
              <CarouselCards.BannerCard />
            </div>
            <div>
              <CarouselCards.BannerCard />
            </div>
            <div>
              <CarouselCards.BannerCard />
            </div>
          </Slider>
        </div>
      </div>
    )
  );
};

HomePageCards.MovingTextCard = MovingTextCard;
HomePageCards.FeaturesCards = FeaturesCards;
HomePageCards.TagCards = TagCards;
HomePageCards.ImageTextOverlayCards = ImageTextOverlayCards;
HomePageCards.NewsLetterCard = NewsLetterCard;
HomePageCards.BannerCarouselBackground = BannerCarouselBackground;
HomePageCards.TopEverythingComponent = TopEverythingComponent;

export default HomePageCards;

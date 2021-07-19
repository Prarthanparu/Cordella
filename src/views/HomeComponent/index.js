import { useState } from "react";
import Header from "../../components/Header/HeaderNoBanner";
import Footer from "../../components/Footer/Footer";
import { Row, Col } from 'antd'
import MainContent from './MainContent'
import ImageMain from '../../assets/img/main-img1.png'
import VideoImage from '../../assets/img/videoImage.png'
import './index.scss'
import { Collapse } from 'antd';
import Container from "../../components/Container";

const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
        Aenean pellentesque viverra morbi id et.
    </p>
);

function HomeComponent() {


    return (
        <>
            <Header className="mb-5" />
            <Container>
            <div className="headerContent">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={15} className="headingMain">
                        <h1>
                            Lakshadweep & Goa Cruise
                        </h1>
                        <h3>
                            Sat, 21 November 2021
                        </h3>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <Row>
                            <Col sm={12} md={10}>
                                <h5>
                                    FROM
                                </h5>
                                <h4>
                                    27,000
                                </h4>
                                <p>+ Taxes and other fees</p>
                            </Col>
                            <Col xs={24} sm={24} md={14}>
                                <div className="bookBtn">
                                    <h1>
                                        Book now
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="mainContainer">
                <MainContent />
                <div className="collapseContainer">
                    <h2>
                        FAQs
                    </h2>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" key="1">
                            {text}
                        </Panel>
                        <Panel header="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" key="2">
                            {text}
                        </Panel>
                        <Panel header="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" key="3">
                            {text}
                        </Panel>
                    </Collapse>
                </div>
            </div>
            </Container>
            <Footer />
        </>
    );
}

export default HomeComponent;

import { Row, Col } from 'antd'
import ImageMain1 from '../../assets/img/main-img1.png'
import ImageMain2 from '../../assets/img/main-img2.png'
import ImageMain3 from '../../assets/img/main-img3.png'
import ImageMain4 from '../../assets/img/main-img4.png'
import VideoImage from '../../assets/img/videoImage.png'
import VideoImage1 from '../../assets/img/videoImage1.png'
import VideoImage2 from '../../assets/img/videoImage2.png'
import VideoImage3 from '../../assets/img/videoImage3.png'
import SlideImage1 from '../../assets/img/slide-image1.png'
import SlideImage2 from '../../assets/img/slide-image2.png'
import SlideImage3 from '../../assets/img/slide-image3.png'
import SlideImage4 from '../../assets/img/slide-image4.png'
import DisplayImage1 from '../../assets/img/displayImage1.png'
import DisplayImage2 from '../../assets/img/displayImage2.png'
import PlayBtn from '../../assets/img/PlayBtn.js'
import CalenderIcon from '../../assets/img/calenderIcon.js'
import Carousel from "react-multi-carousel";

import ArrowLeft from '../../assets/img/ArrowLeft'
import ArrowRight from '../../assets/img/ArrowRight'

import "react-multi-carousel/lib/styles.css";
import './index.scss'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const responsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1
    }
};


function MainContent() {

    const array = [
        {
            heding: 'Departure from Mumbai',
            mainImage: ImageMain1,
            videoImage: VideoImage,
        },
        {
            mainImage: ImageMain2,
            videoImage: VideoImage1,
            heding: 'Explore Lakshadweep'
        },
        {
            mainImage: ImageMain3,
            videoImage: VideoImage2,
            heding: 'Explore Goa'
        },
        {
            mainImage: ImageMain4,
            videoImage: VideoImage3,
            heding: 'Day at sea (Onboard Activities)'
        },
    ]


    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                <div className={`${currentSlide === 0 ? 'disable' : ''} iconOut leftIcon`} onClick={() => previous()} >
                    <ArrowLeft />
                </div>
                <div className="iconOut" onClick={() => next()} >
                    <ArrowRight />
                </div>
            </div>
        );
    };

    return (
        <>
            {
                array.map(val => {
                    return (
                        <>
                            <Row>
                                <Col sm={24} md={12} xs={24} >
                                    <h2>{val.heding}</h2>
                                </Col>
                                <Col sm={24} md={12} xs={24} >
                                    <Row className="conatentIcon">
                                        <CalenderIcon />
                                        <h4 >Day 1</h4>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={24} lg={24} className="mainImage">
                                    <img src={val.mainImage} />
                                </Col>
                            </Row>
                            <Row className="videoDes">
                                <Col sm={24} md={14}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur magna platea sodales venenatis. Ullamcorper eget ultrices ultrices lorem sed auctor diam auctor suspendisse. Consectetur velit tortor curabitur scelerisque elit. Sit nisl felis erat imperdiet neque eu cursus lectus senectus. Quis nec odio quis nulla auctor eget..
                                    </p>
                                </Col>
                                <Col sm={24} md={2}>
                                </Col>
                                <Col sm={24} md={8}>
                                    <div className="videoContainer">
                                        <img src={val.videoImage} />
                                        <div className="videoContainerIcon">
                                            <PlayBtn />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="sliderMain">
                                <h2>
                                    Things to do in Lakshadweep
                                </h2>
                                <Carousel arrows={false} customButtonGroup={<ButtonGroup />} itemClass="sliderList" sliderClass="sliderUl" responsive={responsive}>
                                    <div className="sliderContent">
                                        <img src={SlideImage1} />
                                        <div className="sliderText">
                                            <h3>
                                                11 Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage2} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage3} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage4} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage1} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage2} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent">
                                        <img src={SlideImage3} />
                                        <div className="sliderText">
                                            <h3>
                                                Lorem ipsum dolor sit
                                            </h3>
                                            <p>
                                                Vitae nulla volutpat sapien mattis risus nisl, pharetra ultricies. Dictum nam iaculis sit amet accumsan, aliquet bibendum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sliderContent" />
                                </Carousel>
                            </div>
                        </>
                    )
                })
            }

            <div className="sliderMain">
                <h2>
                    Travellers Reviews
                </h2>
                <Carousel  arrows={false} customButtonGroup={<ButtonGroup />} itemClass="sliderList2" responsive={responsive2}>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage1} />
                            <h5>
                                Peter Parker
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage1} />
                            <h5>
                                Cody Fisher
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage2} />
                            <h5>
                                Wade Warren
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage2} />
                            <h5>
                                Wade Warren
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage2} />
                            <h5>
                                Wade Warren
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage2} />
                            <h5>
                                Wade Warren
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                    <div className="sliderContentFooter">
                        <div className="sliderFooterText">
                            <img className="displayImage" src={DisplayImage2} />
                            <h5>
                                Wade Warren
                            </h5>
                            <p>
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”   </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default MainContent;

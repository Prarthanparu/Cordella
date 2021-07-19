import Header from "../../components/Header/HeaderNoBanner";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/UI/Card";
import Carousel from "../../components/UI/Carousel";
import "./shore.scss";
import CardbgImg from "../../assets/img/bg-package-card.png";
import Slider1 from "../../assets/img/imageSlide1.jpg";
import Beach from "../../assets/img/beach.jpg";
import Packge1 from "../../assets/img/packge1.jpg";
import Packge2 from "../../assets/img/packge2.jpg";
import Packge3 from "../../assets/img/packge3.jpg";


function Home() {
  return (
    <div className="App">
      <Header className="mb-5"/>
      <div className="packag--save--section">
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-lg-8">
              <Card className="cardpackage--bg mb-4 mb-lg-0">
                <div className="full--bgcard-view" style={{ backgroundImage: `url(${CardbgImg})` }}>
                  <div className="package--choose-txt">
                    <h3>Choose PACKAGES and Save upto 25%</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.1</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-12 col-lg-4">
              <Card className="cardbox--tablecard">
                <div className="card-body p-4 p-xl-5">
                  <div className="cardtable--bookitems">
                    <h3 className="pricedtl--title">Price Details</h3>
                    <table class="table tableprice--dtl">
                      <tbody>
                        <tr className="tr-bookview">
                          <td>Total Booking Amount</td>
                          <td>₹55,123.00</td>
                        </tr>
                        <tr className="tr-bookview">
                          <td className="text-success">Discount</td>
                          <td className="text-success">-₹2,123.00</td>
                        </tr>
                        <tr className="tr-bookview">
                          <td className="total-amt--book pt-2">Total Payable Amount</td>
                          <td className="extra--book-td pt-2">₹56,246</td>
                        </tr>
                      </tbody>
                    </table>                    
                    <div className="text-right">
                        <button className="btn btn-proceed">PROCEED</button>
                      </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-section--wraper pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-head-view pb-3"><h3 className="heading-h3">EXPLORE <strong>ACTIVITIES</strong></h3></div>
            </div>
            <div className="col-12">
              <div className="main-full-content-wrapper">
                <ul className="nav-tab-pills mb-5">
                  <li className="nav-items--main active"><a className="navLink--tab" href="#">LAKSHADWEEP</a></li>
                  <li className="nav-items--main"><a className="navLink--tab" href="#">COCHIN</a></li>
                  <li className="nav-items--main"><a className="navLink--tab" href="#">GOA</a></li>
                </ul>
                <div className="content-body-wrapper-tab">
                  <h4 className="subtab--title">ACTIVITIES IN GOA</h4>
                  <div className="wigite-conten--main">
                    <div className="row row-grid-List">
                      <div className="col-12 col-md-3 col-lg-5 pl-0 pr-0">
                         <Carousel id="slide1" imgs={[Slider1,Beach]}/>
                        {/* <div className="image--slide-widgit">
                      
                        </div> */}
                      </div>
                      <div className="col-12 col-md-9 col-lg-7 px-0">
                        <div className="inclusin-flex--wrapContent">
                          <div className="topHead--excurr">
                              <h4>Inclusion: -</h4>
                              <p>Transfers, Entrances, Bottle of water, Excursion Insurance & local guide charges</p>
                          </div>
                          <div className="disc-exccur-txt">
                            <p>Leave pier & drive through Commercial districts Pettah & Fort- Continue the drive passing old parliament, St. Lucia church, mosque, Hindu temple & Gangarama temple on to Town Hall- Photo stop at Colombo town hall & Victoria park -Continue the drive passing Colombo museum, independence square, elite residential area of Cinnamon gardens (photo stops)-Visit & shopping at traditional handicraft/gem/souvenir shop-Drive back to the Local Restaurant -Lunch at local restaurant  -Drive back to pier and aboard the ship </p>
                          </div>
                          <div className="bottom-view--transf">
                            <div className="leftSide--tranitem">
                              <ul className="mb-md-0">
                                <li>Duration: <span>4HRS</span></li>
                                <li className="mb-0">Transfered By: <span>SIC Tour (Coach)</span></li>
                              </ul>
                            </div>
                            <div className="rightRemove--btn">
                              <button type="text" className="btn btn-remove">REMOVE</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row-grid-List">
                      <div className="col-12 col-md-3 col-lg-5 pl-0 pr-0">
                       <Carousel id="slide2" imgs={[Beach,Slider1]}/>
                        {/* <div className="image--slide-widgit">
                          <img src={Beach} alt="gg" />
                        </div> */}
                      </div>
                      <div className="col-12 col-md-9 col-lg-7 px-0">
                        <div className="inclusin-flex--wrapContent">
                          <div className="topHead--excurr">
                              <h4>Inclusion: -</h4>
                              <p>Transfers, Entrances, Bottle of water, Excursion Insurance & local guide charges</p>
                          </div>
                          <div className="disc-exccur-txt">
                            <p>Leave pier & drive through Commercial districts Pettah & Fort- Continue the drive passing old parliament, St. Lucia church, mosque, Hindu temple & Gangarama temple on to Town Hall- Photo stop at Colombo town hall & Victoria park -Continue the drive passing Colombo museum, independence square, elite residential area of Cinnamon gardens (photo stops)-Visit & shopping at traditional handicraft/gem/souvenir shop-Drive back to the Local Restaurant -Lunch at local restaurant  -Drive back to pier and aboard the ship </p>
                          </div>
                          <div className="bottom-view--transf">
                            <div className="leftSide--tranitem">
                              <ul className="mb-md-0">
                                <li>Duration: <span>4HRS</span></li>
                                <li className="mb-0">Transfered By: <span>SIC Tour (Coach)</span></li>
                              </ul>
                            </div>
                            <div className="rightRemove--btn">
                              <button type="text" className="btn btn-add">ADD</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="package-section--wraper pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-head-view pb-3"><h3 className="heading-h3">EXPLORE <strong>SPA PACKAGES</strong></h3></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="package-col-Img">
                <img src={Packge1} />
                <div className="package--name-posit"><h4 className="package--title">SILVER PACKAGE</h4></div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="package-col-Img">
                <img src={Packge2} />
                <div className="package--name-posit"><h4 className="package--title">GOLD PACKAGE</h4></div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="package-col-Img">
                <img src={Packge3} />
                <div className="package--name-posit"><h4 className="package--title">COUPLE PACKAGE</h4></div>
              </div>
            </div>
          </div>

        </div>
      </div>




      <Footer/>
    </div>
  );
}

export default Home;

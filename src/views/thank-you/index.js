import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Card from "../../components/UI/Card";
import Footer from "../../components/Footer/Footer";
import "./thank-you.scss";
import CheckIcon from "../../assets/img/check-icon.svg";
import InteriarImg from "../../assets/img/interiar-img.jpg";
import ShipIcon from "../../assets/img/ship-icon.svg";





function RoomSelection() {
  return (
    <div className="Home">
      <Header className="mb-5"/>
        <div className="thank-you-section">
          <div className="container">
            <div class="row">
              <div className="col-12">
                <div className="thankyou--pg text-center">
                  <h1 className="title-fst">Thank you!</h1>
                  <h3 className="sub-title-scnd"><img src={CheckIcon} /> Your Booking is confirmed</h3>
                  <p className="booking-id">Booking ID: <span>C-2104060105</span></p>
                  <p className="inform--ticket">E-Ticket has been sent to your registered mobile nubmer and Email ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-card--section">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <Card className="cardtnk-bg">
                  <div className="card-header card-title-main">
                    <h3 className="title-card-heading">BOOKING SUMMARY</h3>
                  </div>
                  <div className="card-body p-0">
                    <div className="row rowbody--card">
                      <div className="col-12 col-lg-3">
                        <div className="summary-loaction-col">
                          <div className="txt--local--sum">
                            <h5 className="statehead--local">Colombo</h5>
                            <span className="city--localhead">SRI LANKA</span>
                          </div>
                          <div className="bottom-timeorder">
                            <h4><span>IST 08:00 am</span><span>Sat, 29 July 2021</span></h4>
                            <p className="txt--col--viewmain">Colombo International Port, Colombo , Sri Lanka</p>
                            <span className="mapLink--sumry"><a href="#" className=""><i>Google Map Link</i></a></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="order--locatin-ship">
                          <div className="ship--icon-middle">
                            <div className="Img--iconShip"><img src={ShipIcon} /></div>
                            <span className="in-out--ship">2 halting ports</span>
                          </div>
                          <div className="halting--port-last">
                            <p><strong>Halting Ports</strong>: <span>Cochin (30 July 2021)</span><span>Chennai (04 August 2021)</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-3">
                        <div className="summary-loaction-col">
                          <div className="txt--local--sum">
                            <h5 className="statehead--local">MUMBAI</h5>
                            <span className="city--localhead">INDIA</span>
                          </div>
                          <div className="bottom-timeorder">
                            <h4><span>IST 08:00 am</span><span>Sat, 09 august 2021</span></h4>
                            <p className="txt--col--viewmain">Mumbai International Port, Mumbai , India</p>
                            <span className="mapLink--sumry"><a href="#" className=""><i>Google Map Link</i></a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Card className="cardtnk-bg">
                  <div className="card-header card-title-main">
                    <h3 className="title-card-heading">CABIN DETAILS</h3>
                  </div>
                  <div className="card-body p-0">
                    <div className="row rowbody--card">
                      <div className="col-12 col-lg-6">
                        <div className="card-detail-grid-box">
                          <h4 className="detial--title-activity">Cabin 1</h4>
                          <div className="interior--box-card">
                            <div className="thankyou--cabin-img">
                              <img className="Img--room" src={InteriarImg} />
                            </div>
                            <div className="thnk--dtl-info">
                              <div className="dtl--rightflex--wig">
                                <h5 className="interior--title">INTERIOR</h5>
                                <div className="room-viewtxt">
                                  <span className="cmn--txt--room">Deck No: 05</span>
                                  <span className="cmn--txt--room">Room No: 2996</span>
                                </div>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Total Guests: <span>03 Guests</span></span>
                                </div>
                                <ul className="listcard--nameview">
                                  <li className="tt-list--itemsmain">Samuel John</li>
                                  <li className="tt-list--itemsmain">Esther Howard</li>
                                  <li className="tt-list--itemsmain">Jenny Wilson</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="card-detail-grid-box">
                          <h4 className="detial--title-activity">Cabin 2</h4>
                          <div className="interior--box-card">
                            <div className="thankyou--cabin-img">
                              <img className="Img--room" src={InteriarImg} />
                            </div>
                            <div className="thnk--dtl-info">
                              <div className="dtl--rightflex--wig">
                                <h5 className="interior--title">OCEAN VIEW</h5>
                                <div className="room-viewtxt">
                                  <span className="cmn--txt--room">Deck No: 05</span>
                                  <span className="cmn--txt--room">Room No: 2996</span>
                                </div>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Total Guests: <span>03 Guests</span></span>
                                </div>
                                <ul className="listcard--nameview">
                                  <li className="tt-list--itemsmain">Samuel John</li>
                                  <li className="tt-list--itemsmain">Esther Howard</li>
                                  <li className="tt-list--itemsmain">Jenny Wilson</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Card className="cardtnk-bg">
                  <div className="card-header card-title-main">
                    <h3 className="title-card-heading">SHORE EXCURSION DETAILS</h3>
                  </div>
                  <div className="card-body p-0">
                    <div className="row rowbody--card">
                      <div className="col-12 col-lg-6">
                        <div className="card-detail-grid-box">
                          <h4 className="detial--title-activity">Activity 1</h4>
                          <div className="interior--box-card">
                            <div className="thankyou--cabin-img">
                              <img className="Img--room" src={InteriarImg} />
                            </div>
                            <div className="thnk--dtl-info">
                              <div className="dtl--rightflex--wig">
                                <h5 className="interior--title">CHENNAI CITY TOUR</h5>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Date: <span>04 August 2021</span></span>
                                </div>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Port: <span>Chennai</span></span>
                                </div>
                                <div className="short--disc-thanky">
                                  <p>Lorem ipsum is a simply dummy text used in typing industry since 1500’s</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="card-detail-grid-box">
                          <h4 className="detial--title-activity">Activity 2</h4>
                          <div className="interior--box-card">
                            <div className="thankyou--cabin-img">
                              <img className="Img--room" src={InteriarImg} />
                            </div>
                            <div className="thnk--dtl-info">
                              <div className="dtl--rightflex--wig">
                                <h5 className="interior--title">CHENNAI CITY TOUR</h5>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Date: <span>04 August 2021</span></span>
                                </div>
                                <div className="room-tottal-gst">
                                  <span className="spn--totl-gst">Port: <span>Chennai</span></span>
                                </div>
                                <div className="short--disc-thanky">
                                  <p>Lorem ipsum is a simply dummy text used in typing industry since 1500’s</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Card className="cardtnk-bg">
                  <div className="card-header card-title-main">
                    <h3 className="title-card-heading">PAYMENT DETAILS</h3>
                  </div>
                  <div className="card-body p-0">
                    <div className="row rowbody--card">
                      <div className="col-12 col-md-7 col-xl-8">
                        <div className="cancell-txt-content">
                          <h4 className="title-txt-cancwl">Cancellation & Reschedule Policy</h4>
                          <ul className="items--cancel--list">
                            <li>Cancellation fee will be applicable only on cabin fare</li>
                            <li>Port Charges & gratuity will be refunded completely.</li>
                            <li>Free rescheduling is limited to one time</li>
                            <li>Rescheduled itinerary must commence on or before 31st March 2022</li>
                            <li>Fare difference is applicable for higher cabin category or increase in sailing nights</li>
                          </ul>
                          <p>For more Detailed information <a className="btn-more-dtl" href="#">click here</a></p>
                        </div>
                      </div>
                      <div className="col-12 col-md-5 col-xl-4">
                        <div className="payment--priceTable-sumry">
                          <h4 className="title--sumry-paymnt">Payment Summary</h4>
                          <ul className="payment-sumary-list">
                            <li className="payment-sumary-td"><span className="payment-title-sum payment-title-sum-1">Cabin 1</span><span className="payment-title-sum payment-title-sum-2">₹12,256</span></li>
                            <li className="payment-sumary-td"><span className="payment-title-sum payment-title-sum-1">Cabin 2</span><span className="payment-title-sum payment-title-sum-2">₹22,256</span></li>
                            <li className="payment-sumary-td"><span className="payment-title-sum payment-title-sum-1">Port Charges</span><span className="payment-title-sum payment-title-sum-2">₹2,256</span></li>
                            <li className="payment-sumary-td sumry-discount"><span className="payment-title-sum payment-title-sum-1">Discount</span><span className="payment-title-sum payment-title-sum-2">₹2,256</span></li>
                            <li className="payment-sumary-td"><span className="payment-title-sum payment-title-sum-1">GST</span><span className="payment-title-sum payment-title-sum-2">₹3,256</span></li>
                            <li className="payment-sumary-td total-amt-sumry mt-3"><span className="payment-title-sum payment-title-sum-1">Grand Total</span><span className="payment-title-sum payment-title-sum-2">₹92,000</span></li>
                            <li className="payment-sumary-td total-amt-sumry"><span className="payment-title-sum payment-title-sum-1">Amount Paid</span><span className="payment-title-sum payment-title-sum-2">₹92,000</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="text-center thank-you-btn">
                  <span className="mb-3 mb-sm-0"><button type="button" className="btn btn--choose mr-0 mr-sm-2">Choose add-on</button></span>
                  <span><button type="button" className="btn btn--webcheck ml-0 ml-sm-2">Web Check In</button></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default RoomSelection;

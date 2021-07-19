import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Card from "../../components/UI/Card";
import Footer from "../../components/Footer/Footer";
import DeleteIcon from "../../assets/img/delete-icon.svg";
import BedIcon from "../../assets/img/bed-icon.svg";
import Minus from "../../assets/img/minus.svg";
import Plus from "../../assets/img/plus.svg";
import "./guest.scss";


function RoomSelection() {
  return (
    <div className="Home">
      <Header />
        <div className="container">
          <BookingFlowCards.ProgressBar />
        </div>
        <div className="cabin-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="heading--main">
                  <h3 className="title--main">Add Cabin & Guests</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3">
                <div className="cabin-boxgrid">
                  <h4 className="title-cabin">CHAIRMAN’S SUITE</h4>
                  <span className="guest--view">Guests: 02</span>
                  <span className="guest--view">Guests: 02</span>
                  <span className="guest--view">Room No.: 9062</span>
                  <div className="delticon"><button type="button" className="btn btn-delt"><img src={DeleteIcon} /></button></div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="cabin-boxgrid">
                  <h4 className="title-cabin">INTERIOR</h4>
                  <span className="guest--view">Guests : 01</span>
                  <span className="guest--view">Deck No.: 07</span>
                  <span className="guest--view">Room No.: 9064</span>
                  <div className="delticon"><button type="button" className="btn btn-delt"><img src={DeleteIcon} /></button></div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="cabin-boxgrid">
                  <h4 className="title-cabin">INTERIOR</h4>
                  <span className="guest--view">Guests : 01</span>
                  <span className="guest--view">Deck No.: 07</span>
                  <span className="guest--view">Room No.: 9064</span>
                  <div className="delticon"><button type="button" className="btn btn-delt"><img src={DeleteIcon} /></button></div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="cabin-boxgrid">
                  <h4 className="title-cabin">INTERIOR</h4>
                  <span className="guest--view">Guests : 01</span>
                  <span className="guest--view">Deck No.: 07</span>
                  <span className="guest--view">Room No.: 9064</span>
                  <div className="delticon"><button type="button" className="btn btn-delt"><img src={DeleteIcon} /></button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabin--section--main pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="heading--main">
                  <h3 className="title--main mb-4">Cabins</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <Card>
                  <div className="card-body">
                    <div className="formcard--cabin">
                      <h4 className="small--title mb-3">Guest 1: <span>Adult</span></h4>
                      <div className="">
                        <form className="">
                          <div className="form-group form-row mb-0">
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="First Name" className="form-control" />
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="Last Name" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <select className="form-control">
                                <option>Select your Gender</option>
                                <option>1</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="date" placeholder="" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <div className="d-flex number--txt form-control p-0">
                                <input type="text" placeholder="+91" className="form-control-num numcontrol--v" />
                                <input type="text" placeholder="10 Digit Mobile Number" className="form-control-num" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="email" placeholder="Email Address" className="form-control" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-12 col-lg-4">
                <Card>
                  <div className="card-body">
                    <div className="formcard--cabin">
                      <h4 className="small--title mb-3">Guest 2: <span>Adult</span></h4>
                      <div className="">
                        <form className="">
                          <div className="form-group form-row mb-0">
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="First Name" className="form-control" />
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="Last Name" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <select className="form-control">
                                <option>Select your Gender</option>
                                <option>1</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="date" placeholder="" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <div className="d-flex number--txt form-control p-0">
                                <input type="text" placeholder="+91" className="form-control-num numcontrol--v" />
                                <input type="text" placeholder="10 Digit Mobile Number" className="form-control-num" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="email" placeholder="Email Address" className="form-control" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>              
              <div className="col-12 col-lg-4">
                <Card>
                  <div className="card-body">
                    <div className="formcard--cabin">
                      <h4 className="small--title mb-3">Guest 3: <span>Adult</span></h4>
                      <div className="">
                        <form className="">
                          <div className="form-group form-row mb-0">
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="First Name" className="form-control" />
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                              <input type="text" placeholder="Last Name" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <select className="form-control">
                                <option>Select your Gender</option>
                                <option>1</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="date" placeholder="" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <div className="d-flex number--txt form-control p-0">
                                <input type="text" placeholder="+91" className="form-control-num numcontrol--v" />
                                <input type="text" placeholder="10 Digit Mobile Number" className="form-control-num" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group form-row">
                            <div class="col-12">
                              <input type="email" placeholder="Email Address" className="form-control" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12">
                <div className="choose-addon text-center">
                  <button className="btn btn-choose-btn">Choose Add-On</button>
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

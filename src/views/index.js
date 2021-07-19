import React, { Component } from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/index"
import CruiseRoutes from "./cruise-routes/index"
import RoomSelection from "./room-selection/index"
import CabinSelection from "./cabin-selection/index"
import CabinSelection1 from "./cabin-selection1/index"
import ThankYou from "./thank-you/index"
import GuestSelection from "./guest-selection/index"
import DeckSelection from "./deck-selection/index"
import BookingSummary from "./booking-summary/index"
import GuestDetails from "./guest-details/index"
import ShoreExcursions from "./shore-excursions/index"
import PaymentDetails from "./payment-details/index"
import ConfirmedBookingDetails from "./confirmed-booking-details/index"
import My404Component from "./404"
import HomeComponent from './HomeComponent/index'
import WebCheckInComponent from "./web-check-in/index"
import BoardingPassComponent from "./boarding-pass"

class App extends Component {
  render() {
    return (
    <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/cruise-routes' component={CruiseRoutes} />
              <Route path='/room-selection1' component={RoomSelection} />
              <Route path='/room-selection' component={CabinSelection} />
              <Route path='/cabin-selection' component={CabinSelection1} />
              <Route path='/guest-selection' component={GuestSelection} />
              <Route path='/thank-you' component={ThankYou} />
              <Route path='/deck-selection' component={DeckSelection} />
              <Route path='/booking-summary' component={BookingSummary} />
              <Route path='/guest-details' component={GuestDetails} />
              <Route path='/itinerary' component={ShoreExcursions} />
              <Route path='/payment-details' component={PaymentDetails} />
              <Route path='/confirmed-booking-details' component={ConfirmedBookingDetails} />
              <Route path='/destination' component={HomeComponent} />
              <Route path='/web-check-in' component={WebCheckInComponent} />
              <Route path='/boarding-pass' component={BoardingPassComponent} />
              <Route path='/404' component={My404Component} />
              <Redirect from='*' to='/404' />
          </Switch>
      </Router>
    );
  }
}

export default App;

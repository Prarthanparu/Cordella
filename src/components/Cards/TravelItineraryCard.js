import React, { useState, useEffect } from "react";
import styles from "./TravelItineraryCard.module.scss";
import { Row, Col, Card, Button } from "antd";
import moment from 'moment'
import {ReactComponent as DiscountIcon} from '../../assets/icons/discount.svg';
import routeImg from '../../assets/img/cruise-routes/card.png';
import { getRoutes } from '../../redux/actions/routeAction';
import { EnvironmentFilled, InfoCircleOutlined } from "@ant-design/icons";
import Carousel from "../UI/Carousel";
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
const { Meta } = Card;

function TravelItineraryCard(props) {
  let history = useHistory();
  const {data:{ports,itineraries}} = props;
  const title = "NIGHT CRUISE";
  const cruise_name = itineraries[0].ship.name;
  const starting_price = "₹27,000";
  const offer_description = "2 offers available on this itinerary";
 
  const onBook = () =>{
    history.push('/cabin-selection')
  }

console.log(ports, itineraries);

  return (
    <div className="container">
      <div className="TravelItineraryCard TravelCard--listgrid">
        <Card className={styles.travelItineraryCard}
          style={{
            borderRadius: "10px",
            WebkitBoxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
            MozBoxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
            padding: "0px"
          }}
          bodyStyle={{padding: "0"}}
        >
          <div className={styles.container}>
            <Carousel imgs={[routeImg]}/>
              <div className="rightSide--RouteBody">
                <div className="card-body">
                  <div className="row">
                    <div className={cx("col-md-8",styles.description)}>
                      <Meta className="find-cruise-title" title={`${itineraries.length? itineraries[0].nightCount : ''} ${title}`} description={cruise_name}/>
                      <div className="portrow-grid mt-4">
                        <div className={cx("portflex-port", styles.portName)}> Ports:   </div>
                        <div className="portgrid--arealist">
                          <div id="port" className={cx("portlocation-main", styles.travelPortsList)}>
                          {ports.map((port, i) => (
                            <div key={i} className={cx(styles.travelPortsListItem,"listrout--port") }>
                              <EnvironmentFilled />
                              <span className="ml-1">{port.port.name}</span>
                            </div>
                          ))}
                          <a href="#">Route Map</a>
                        </div>
                        </div>
                      </div>
                      <div className={cx("row mt-4",styles.dateSection)}>
                        <div className={cx("col-12 mb-2", styles.cruseDateHeading)}>Cruise Dates</div>
                        <div className={cx("col-12")}>
                          <ul className="dateCruise--btnmore">
                            {itineraries.map((date, i) =>{
                              if(i<4){
                                return (
                                  <li className="btnmore--Itemdate" key={i}><Button className={ cx(`${i==0?styles.selected:''}`) }> {moment(date.startTime).format("ddd, D MMM YYYY")}</Button></li>
                                )
                              }
                            })}
                          </ul>  
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={styles.offerSection}>
                        <DiscountIcon className="mr-2"/> 2 offers available on this itinerary
                      </div>
                      <div className={styles.documentSection}>
                        <div className="font-weight-bold text-capitalize mr-2">Mandatory Documents</div>
                        <InfoCircleOutlined />
                      </div>
                      <div className={styles.priceDetailWrapper}>
                          <div className="text-uppercase">Starting From</div>
                          <div className={styles.priceDetail}>
                            <h1 className={cx(styles.price)}> {starting_price} </h1>
                            <span>/&nbsp;person</span>
                          </div>
                          <p>+ Insurance, Taxes & Fees</p>
                          <a href="#" style={{textDecoration:"underline"}}>View inclusions</a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="view--all--datebtn"><a className="route-btn-btn" href="#">View All Dates</a></div>
                    </div>
                    <div className="col-12 col-md-6 bookingnow---routin--save">
                      <div className={styles.bookItineraryWrapper}>
                        <span className="d-inline mr-3 explore--intery"><a href="/itinerary">Explore Itinerary</a></span>
                        <Button onClick = {onBook} type="primary">Book Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TravelItineraryCard;

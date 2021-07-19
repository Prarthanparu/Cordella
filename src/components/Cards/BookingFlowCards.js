import React, {useState} from "react";
import { Row, Col, Button, Radio, Space  } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import Card from "../UI/Card";
import classes from './BookingFlowCards.module.scss';
import cx from 'classnames';
import {ReactComponent as BedIcon} from '../../assets/icons/bed-icon.svg';
import {ReactComponent as ArrowDownIcon} from '../../assets/icons/arrowDown-icon.svg';

import DepartureIcon from "../../assets/img/departure-icon.svg";
import ArrivalIcon from "../../assets/img/arrival-icon.svg";

export const BookingFlowCards = () => {
  return <></>;
};

export const ProgressBar = (props) => {
  return (
    <Row style={{ padding: "74px 0px" }}>
      <Col className="col-4 col-lg-2" >
        <Button type="primary arrow-left-btn">
          <ArrowLeftOutlined />
        </Button>
      </Col>
      <Col className="col-12 col-lg-8 order-3 order-lg-2">
        <ProgressStepper />
      </Col>
      <Col className="col-8 col-lg-2 order-2 order-lg-3" style={{ textAlign: "right" }}>
        <Button type="primary" className="btn-modify">Modify Booking</Button>
      </Col>
    </Row>
  );
};

export const BookingSummary = (props) => {
  return (
    <div className={`${classes.bookingSummary}`}>
      <div className={classes.heading}>Booking Summary</div>
      <div className={cx(classes.row, "no-gutters")}>
        <div className={cx("col-md-6 col-12 mt-4 pr-2")}>
            <p className={classes.sectionHeading}>Booking Details</p>
            <BookingDetails>
              <BookingDetails.Footer>
                  <a href="#">Cancellation and Reschedule policy</a>
              </BookingDetails.Footer>
            </BookingDetails>
          </div>
          <div className={cx("col-md-6 col-12 mt-4 pl-2")}>
            <p className={classes.sectionHeading}>Price Details</p>
            <PriceDetails/>
          </div>
      </div>
    </div>
  );
};

const BookingDetails = (props) => {
  console.log(props.children);
   return (
      <Card className={cx(classes.bookingDetail)}>
        <div className={classes.cardContent}>
          <div className="ship-detail" style={{marginBottom:"20px"}}>
            <p className={`mb-0 ${classes.secondaryText}`}>Ship</p>
            <h5 className={`font-weight-bold ${classes.primaryText}`}>Empress</h5>
          </div>
          <div className={cx("row borderline--summary")} style={{marginBottom:"20px"}}>
            <div className={cx("col-6")}>
              <div className="icon-summry-book"><img src={DepartureIcon} /></div>
              <div className={cx(classes.secondaryText)}>Departure</div>
              <div className={cx(classes.primaryText, "font-weight-bold")}>Goa, India</div>
              <div className={cx(classes.primaryText, "font-weight-bold")}>Sun, May 23, 2021 4:00PM</div>
            </div>
            <div className={cx("col-6")}>
              <div className="icon-summry-book"><img src={ArrivalIcon} /></div>
              <div className={cx(classes.secondaryText)}>Arrival</div>
              <div className={cx(classes.primaryText, "font-weight-bold")}>Goa, India</div>
              <div className={cx(classes.primaryText, "font-weight-bold")}>Tue, May 25, 2021 12:00PM</div>
            </div>
          </div>
          <div className={cx(classes.cabinDetails)} style={{marginBottom:"20px"}}>
            <div className={cx("row")} style={{marginBottom: "8px"}}>
              <div className={cx("col-1 ")}>
                <BedIcon/>
              </div>
             <div className={cx("col-10")}>
              <div className={cx(classes.secondaryText)}>Cabin 1</div>
             </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("col-1")}></div>
              <div className={cx("col-10", classes.primaryText, "font-weight-bold")}>
                <div>Interior</div>
                <div> Deck No: 9</div>
                <div>Room No: 9169</div>
                <div>1 Guest</div>
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </Card>
   );
};

BookingDetails.Footer = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

const PriceDetails = (props) => {
  return(
    <Card className={`${classes.priceDetail}`}>
      <div className={classes.cardContent}>
        <div className={`${classes.section}`}>
          <div className={classes.heading}>
            <div className={classes.sectionRow}>
              <span>Adult</span>
              <span>&#8377;18024</span>
            </div>
          </div>
          <div className={classes.subHeading}>
            <div className={classes.sectionRow}>
              <span>Cabin Fare:</span>
              <span>&#8377;1800</span>
            </div>
            <div className={classes.sectionRow}>
              <span>Port Charge:</span>
              <span>&#8377;2034</span>
            </div>
            <div className={classes.sectionRow}>
              <span>Gratuity:</span>
              <span>&#8377;2314</span>
            </div>
          </div>
        </div>
        
        <div className={`${classes.section}`}>
          <div className={classes.heading}>
            <div className={classes.sectionRow}>
              <span>Promo Code</span>
              <span>&#8377;0</span>
            </div>
          </div>
          <div className={classes.subHeading}>
            <div className={classes.sectionRow}>
              <span>Cabin Fare:</span>
              <span>&#8377;0</span>
            </div>
          </div>
        </div>
        
        <div className={`${classes.section}`}>
          <div className={classes.heading}>
            <div className={classes.sectionRow}>
              <span>Sub Total</span>
              <span>&#8377;18024</span>
            </div>
          </div>
          <div className={classes.subHeading}>
            <div className={classes.sectionRow}>
              <span>Cabin Fare:</span>
              <span>&#8377;18024</span>
            </div>
          </div>
        </div>
      
        <div className={`${classes.section}`}>
          <div className={classes.heading}>
            <div className={classes.sectionRow}>
              <span>Taxes</span>
              <span>&#8377;3244</span>
            </div>
          </div>
          <div className={classes.subHeading}>
            <div className={classes.sectionRow}>
              <span>GST:</span>
              <span>&#8377;3244</span>
            </div>
          </div>
        </div>
      </div>
      <PriceDetailFooter text="Grand Total" value="32993"/> 
    </Card>
  );
};

const BillingDetails = (props)=>{
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Card className={`${classes.billingDetail}`}>
      <div className={classes.cardContent}>
        <div className={`${classes.section}`}>
          <div className={cx(classes.heading,classes.label)}>Apply Promo Code</div>
          <div className={cx("input-group mb-3",classes.formGroup)}>
            <input type="text" className={cx("form-control")} placeholder="EX: HAPPY769" aria-label="Promo code" aria-describedby="basic-addon2"/>
            <div className={cx("input-group-append",classes.inputAppendBtn)}>
              <span className="input-group-text" id="basic-addon2">Apply</span>
            </div>
          </div>
        </div>

        <div className={`${classes.section}`}>
          <div className={classes.flex}>
            <div className={cx(classes.heading,classes.label, "mr-4")}>Do You have pan card?</div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>NO</Radio>
            </Radio.Group>
          </div>
          <div className={cx("row")}>
            <div className="col-lg-6 mt-2">
              <input type="text" className="form-control" placeholder="Enter your Pan number" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="col-lg-6 mt-2">
              <input type="text" className="form-control" placeholder="Enter your Pan name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>
        </div>

        
        <div className={`${classes.section}`}>
          <div className={classes.flex}>
            <div className={cx(classes.heading,classes.label, "mr-4")}>have GSTIN?</div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>NO</Radio>
            </Radio.Group>
          </div>
        </div>
        <hr className={classes.dashed}/>
        <div className={classes.section}>
          <Radio.Group onChange={onChange} value={value} style={{fontSize:"16px !important"}}>
            <Space direction="vertical">
              <Radio value={1}>Reserve now by paying 25%</Radio>
              <Radio value={2}>Book now by paying 100%</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>  
      <PriceDetailFooter text="Grand Total" value="32993"/> 
    </Card>
  );
}

const PriceDetailFooter = (props)=>{
  const {text, value} = props;
  return (
    <div className={`${classes.cardFooter}`}>
      <div><span>{text}</span></div>
      <div><span>&#8377;{value}</span></div>
    </div>
  );
}

export const PaymentSumarry = (props)=>{
  return(
    <div className={`${classes.bookingSummary}`}>
      <div className={classes.heading}>Payment</div>
      <div className={cx(classes.row, "no-gutters")}>
        <div className={cx("col-md-6 col-12 mt-4 pr-2")}>
            <p className={classes.sectionHeading}>Booking Details</p>
            <BookingDetails>
              <BookingDetails.Footer className={classes.paymentDetailFooter}>
                <div>Price Details</div>
                <div><ArrowDownIcon/></div>
              </BookingDetails.Footer>
            </BookingDetails>
          </div>
          <div className={cx("col-md-6 col-12 mt-4 pl-2")}>
            <p className={classes.sectionHeading}>Billing Details</p>
            <BillingDetails/>
          </div>
      </div>
    </div>
  );
}

BookingFlowCards.ProgressBar = ProgressBar;
BookingFlowCards.BookingSummary = BookingSummary;
BookingFlowCards.PaymentSumarry = PaymentSumarry;
export default BookingFlowCards;

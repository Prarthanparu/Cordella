import { useState } from "react";
import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import { Button } from "antd";
import Footer from "../../components/Footer/Footer";
import Modal from '../../components/Modal/index';
import { CloseOutlined } from "@ant-design/icons";
import './index.scss';
import FooterButtonSection from "../../components/UI/FooterButtonSection";
import Container from "../../components/Container/index";

function RoomSelection() {
  const centerButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem'
  };
  const [isModalShow, setIsModalShow] = useState(false);
  const addGuestInfoClickHandler = (event) => {
    setIsModalShow(true);
  };

  const modalCloseHandler = () => {
    setIsModalShow(false);
  };

  return (
    <div className="Home">
      <Modal show={isModalShow} onClose={modalCloseHandler} >
        <div className="card-body">
          <div className="modal-close">
            <CloseOutlined style={{ color: '#EA725B' }} onClick={modalCloseHandler} />
          </div>
          <div className="modal-content">
            <p className="modal-heading">TCS will be applied on next step.
              Please keep your PAN card ready.</p>
            <div className="sub-content">
              <i>&#8226;</i>
              <p className="modal-text">As per Income Tax Act, 1961, the TCS @5% has been added to amount payable for booking international tour pakcages. You will be able to claim credit of such TCS amount against Income Tax payable at time of filling return against the PAN shared.</p>
            </div>
            <div className="sub-content uppercase">
              <i>&nbsp;</i>
              <div>With PAN CARD : 5%</div>
            </div>
            <div className="sub-content uppercase">
              <i>&nbsp;</i>
              <div>Without PAN CARD : 10%</div>
            </div>
          </div>
          <div className="modal-footer">
            <Button type="primary" onClick={modalCloseHandler}>
              Proceed
            </Button>
          </div>
        </div>
      </Modal>
      <Header />
      <Container>
        <BookingFlowCards.ProgressBar />
        <BookingFlowCards.BookingSummary />
        <FooterButtonSection text="Add Guest Info" onClick={addGuestInfoClickHandler} />
      </Container>
      <Footer />
    </div>
  );
}

export default RoomSelection;

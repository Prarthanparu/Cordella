import { useState } from "react";
import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Footer from "../../components/Footer/Footer";
import FooterButtonSection from "../../components/UI/FooterButtonSection";
import SelectedCabinList from "./SelectedCabinList";
import CabinSection from "./CabinSection";
import OfferSection from "./OfferSection";
import Container from "../../components/Container/index";
import CabinDetailModal from "./CabinDetailModal";

function RoomSelection() {
  const [cabinDetailShow, setCabinDetailShow] = useState(false);
  const selectDeckClickHandler= (e) => {
    console.log("Select Deck");
  };

  const cabinDetailCloseHandler = () => {
    setCabinDetailShow(false);
  };

  const cabinDetailHandler = (selectedCabin) => {
    console.log(selectedCabin);
    setCabinDetailShow(true);
  };

  const cabinSelectHandler = (selectedCabin) => {
    console.log(selectedCabin);
    setCabinDetailShow(false);
  };

  return (
    <>
    <CabinDetailModal 
    isShow={cabinDetailShow}
    onClose={cabinDetailCloseHandler}
    onSelect={cabinSelectHandler}/>
    <div className="Home">
      <Header />
      <Container>
        <BookingFlowCards.ProgressBar />
        <SelectedCabinList/>
          <div className="row">
            <CabinSection className="col-md-6 col-12 mt-5" onDetail={cabinDetailHandler} onCabinSelect={cabinSelectHandler}/>
            <OfferSection className="col-md-6 col-12 mt-5"/>
          </div>
      </Container>
      <FooterButtonSection text="Select Deck" onClick={selectDeckClickHandler} />
      <Footer />
    </div>
    </>
  );
}

export default RoomSelection;

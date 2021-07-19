import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container";
import FooterButtonSection from "../../components/UI/FooterButtonSection";

function RoomSelection() {
  return (
    <div className="Home">
      <Header />
      <Container>
        <BookingFlowCards.ProgressBar />
        <BookingFlowCards.PaymentSumarry/>
        <FooterButtonSection text="Proceed To Pay"/>
      </Container>
      <Footer />
    </div>
  );
}

export default RoomSelection;

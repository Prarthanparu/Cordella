import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Footer from "../../components/Footer/Footer";

function RoomSelection() {
  return (
    <div className="Home">
      <Header />
      <BookingFlowCards.ProgressBar />
      <Footer />
    </div>
  );
}

export default RoomSelection;

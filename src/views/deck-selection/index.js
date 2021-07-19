import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Footer from "../../components/Footer/Footer";
import Container from '../../components/Container/index';
import SelectedCabinList from "../cabin-selection/SelectedCabinList";
import DeckSection from "./DeckSection";
import FooterButtonSection from '../../components/UI/FooterButtonSection';

function RoomSelection() {
  return (
    <div className="Home">
      <Header />
      <Container>
        <BookingFlowCards.ProgressBar />
        <SelectedCabinList deckNumbers={["03","07"]} className="mb-5"/>
        <DeckSection/>
        <FooterButtonSection text="Select Room"/>
      </Container>
      <Footer />
    </div>
  );
}

export default RoomSelection;

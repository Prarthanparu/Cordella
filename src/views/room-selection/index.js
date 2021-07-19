import { useState } from "react"
import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container";
import Heading from "../../components/Room-Selection/Heading";
import Availablevisible from "../../components/Room-Selection/Availablevisible";
import Pagecontent from "../../components/Room-Selection/Pagecontent";


function RoomSelection() {
  const [selection, setSelection] = useState([])

	for (let i = 0; i <= 35; i++) {
		selection.push(true)
	}


	const toggleButton = (i) => {
		let temp = selection
		temp.map((item, index) => {
			if (index == i) {
				selection[i] = !temp[i];
			}
		})
		setSelection([...temp])
	}
  return (
    <div className="Home">
      <Header />
      <BookingFlowCards.ProgressBar />
      <Heading />
			<Availablevisible />
			<Pagecontent toggleButton={toggleButton} selection={selection} />
      <Footer />
    </div>
  );
}

export default RoomSelection;

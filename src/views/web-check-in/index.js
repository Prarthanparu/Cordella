import React from 'react';
import Details from "../../components/WebCheckIn/Details";
import Form from "../../components/WebCheckIn/Form";
// import FormFooter from "../../components/WebCheckIn/Footer";
import Header from "../../components/Header/HeaderNoBanner";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/index";

function WebCheckIn(props) {
    return (
        <div>
            <Header className="mb-5" />
            <Container>
                <h3>Web Check-IN</h3>
            <Details/>
            <Form/> 
            {/* <FormFooter/> */}
            </Container>
            <Footer />
        </div>
    );
}

export default WebCheckIn;
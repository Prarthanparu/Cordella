import React from "react";
import CheckIn from "../../components/BoardingPass/CheckIn"
import Header from "../../components/Header/HeaderNoBanner";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/index";

function BoardingPass(props) {
  return (
    <>
    <Header className="mb-5" />
      <Container>
      <h2
        style={{
          color: "#500E4B",
          fontWeight: "500",
          fontSize: "24px",
          marginLeft: "30px",
          marginTop: "30px",
        }}
      >
        Web Check-In
      </h2>
      <CheckIn />
      </Container>
      <Footer />
    </>
  );
}

export default BoardingPass;

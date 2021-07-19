import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/boarding-pass/qrcode.png";

const TripInfo = () => {
  return (
    <>
      <Info>
        <InfoBox>
          <section>
            <h6>Ship Name</h6>
            <p>The Knight Rider</p>
          </section>
          <section>
            <h6>Departure</h6>
            <p>Mumbai</p>
            <p>Sat,16 Oct 2021</p>
            <p>08:00PM</p>
          </section>
        </InfoBox>
      </Info>
      <Info>
        <InfoBox>
          <section>
            <h2>MS Andy Symond</h2>
          </section>
          <section>
            <h6>Arrival</h6>
            <p>Mumbai</p>
            <p>Mon,18 Oct 2021</p>
            <p>08:00AM</p>
          </section>
        </InfoBox>
      </Info>
      <Info>
        <InfoBox>
          <section>
          <SpaceTop>
            <p>
              Room Category
              <span
                style={{
                  fontSize: "18px",
                  color: "#535353",
                }}
              >
                : Interior
              </span>
            </p>
            <p>
              Deck No
              <span style={{ fontSize: "18px", color: "#535353" }}>: 11</span>
            </p>
            <p>
              Room No
              <span style={{ fontSize: "18px", color: "#535353" }}>: 9004</span>
            </p>
            </SpaceTop>
          </section>
        </InfoBox>
      </Info>
      <Info>
        <InfoBox>
          <section>
            <SpaceTop>
            <p>Group 1</p>
            <p style={{ fontSize: "18px", color: "#535353" }}>1200 - 1230 pm</p>
            </SpaceTop>
          </section>
        </InfoBox>
      </Info>
      <Info>
        <InfoBox>
          <section>
            <p>Scan QR Code</p>
            <img src={Image} alt="" />
          </section>
        </InfoBox>
      </Info>
    </>
  );
};

export default TripInfo;

const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  text-align: justify;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    justify-content: start;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  > section {
    padding: 25px;
    @media screen and (max-width: 600px) {
      padding: 10px;
    }
    > h6 {
      font-size: 14px;
      color: #535353;
      padding: 2px;
      font-weight: normal;
    }
    > p {
      font-weight: 500;
      font-size: 18px;
      line-height: 130%;
      color: #500e4b;
      padding: 3px;
      text-align: start;
    }
    > h2 {
      font-weight: bold;
      font-size: 20px;
      color: #500e4b;
      margin-top: 25px;
    }
    > img {
      width: 154px;
      height: 133px;
      margin-top: 20px;
    }
  }
`;

const SpaceTop = styled.div`{
margin-top:120px;
@media screen and (max-width: 600px) {
    margin-top:0px;
  }

}
`;

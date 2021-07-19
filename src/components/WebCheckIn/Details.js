import React from 'react'
import styled from 'styled-components';
import GuestDetails from './GuestDetails';

function Details() {
    return (
        <Container>
            <CardBody>
                <h4>Booking Details</h4>
                <CardContent>
                    <h6 className="mb-2">Ship Name</h6>
                    <p>The Knight Rider</p>
                    <section >
                        <ul>
                            <li style={{"color":"gray","fontWeight":"400"}}>Departure</li>
                            <li>Mumbai</li>
                            <li>Sat,16 Oct 2021</li>
                            <li>08:00PM</li>
                        </ul>
                        <ul>
                            <li style={{"color":"gray","fontWeight":"400"}}>Arrival</li>
                            <li>Mumbai</li>
                            <li>Mon,18 Oct 2021</li>
                            <li>08:00AM</li>
                        </ul>
                    </section>
                    <section >
                        <ul>
                            <li style={{"color":"gray","fontWeight":"400"}}>Cabin 1</li>
                            <li>Interior</li>
                            <li>Deck No: 11</li>
                            <li>Room No: 9000</li>
                            <li>Guest: 04</li>
                        </ul>
                        <ul>
                            <li style={{"color":"gray","fontWeight":"400"}}>Cabin 2</li>
                            <li>Balcony</li>
                            <li>Deck No: 17</li>
                            <li>Room No: 007</li>
                            <li>Guest: 07</li>
                        </ul>
                    </section>
                </CardContent>
            </CardBody>
            <CardBody>
                <h4>Guest Details</h4>
                <CardContent>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"0"}}>Cabin 1</p>
                    <GuestDetails/>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"10px"}}>Cabin 2</p>
                    <GuestDetails/>
                </CardContent>
            </CardBody>
            <CardBody>
                <h4>Pricing Details</h4>
                <CardPricingDetails>
                     <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"0"}}>Cabin 1</p>
                    <section>
                        <span>Gross Fair</span><span style={{"float":"right","margin-right":"10px"}}>$57,000</span><br />
                        <span>Discount</span><span style={{"float":"right","margin-right":"10px"}}>$4104</span><br />
                        <span>Amount</span><span style={{"float":"right","margin-right":"10px"}}>$53,496</span><br />
                        <span>Tax</span><span style={{"float":"right","margin-right":"10px"}}>$9750</span><br />
                        <span style={{"color":"#500E4B","fontWeight":"600"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","fontWeight":"600"}}>$63,800</span><br />
                    </section>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"20px"}}>Cabin 2</p>
                    <section>
                        <span>Gross Fair</span><span style={{"float":"right","margin-right":"10px"}}>$57,000</span><br />
                        <span>Discount</span><span style={{"float":"right","margin-right":"10px"}}>$4104</span><br />
                        <span>Amount</span><span style={{"float":"right","margin-right":"10px"}}>$53,496</span><br />
                        <span>Tax</span><span style={{"float":"right","margin-right":"10px"}}>$9750</span><br />
                        <span style={{"color":"#500E4B","fontWeight":"600"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","fontWeight":"600"}}>$63,800</span><br />
                    </section>
                    <p style={{"borderTop":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"15px"}}></p>
                    <section>
                     <span style={{"color":"#500E4B","fontWeight":"600","fontSize":"16px"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","color":"#500E4B","fontWeight":"600","fontSize":"16px"}}>$1,63,800</span><br />
                    </section>
                    
                </CardPricingDetails>
            </CardBody>
            

        </Container>
    )
}

export default Details;

const Container = styled.div`
display: flex;
flex-flow:wrap;
height: auto;
justify-content:center;
flex-direction: row;
padding-top:10px;
padding-bottom:25px;
@media screen and (max-width:600px){
    justify-content:left;
}
`;

const CardBody = styled.div`

flex:0.25;
padding:20px;
width:100%;
height:auto;
@media screen and (max-width:1200px){
    width:40%%;
    
    
}
@media screen and (max-width:600px){
    width:20%%;
    margin-left:5px;
    flex-direction:column;
}
>h4{
    color: #500E4B;
    font-size:800;
    font-family: 'Poppins', sans-serif;
    margin-bottom:10px;
}

`;

const CardContent = styled.div`
width:350px;
height:500px;
padding:10px;
font-family: 'Poppins', sans-serif;
box-sizing:border-box;
border-radius:10px;
border:1px solid #500E4B;
box-shadow: 0px 6px 13px -5px rgba(147, 50, 158, 0.5);
@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    flex-direction:column;
}
>h6{
    margin-left:35px;
    font-size:12px;
    margin-bottom:-10px;
   color:gray;
}
>p{
    margin-left:35px;
   font-weight:800;
    color: #500E4B;
    
}
>section{
    margin-top:3px;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    text-align:left;
    >ul{
         list-style-type: none;
         padding-left:0;
         >li{
        font-size: 14px;
         color: #500E4B;
         font-weight:700;
         margin:5px;
    }
    }   
}
`;

const CardPricingDetails = styled.div`
width:350px;
height:500px;
padding:10px;
font-family: 'Poppins', sans-serif;
box-sizing:border-box;
border-radius:10px;
border:1px solid #500E4B;
box-shadow: 0px 6px 13px -5px rgba(147, 50, 158, 0.5);
@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    flex-direction:column;
}
>p{
    margin-left:35px;
   font-weight:800;
    color: #500E4B;
    
}
>section{
>span{
    font-size:14px;
    color:gray;
    margin-left:10px;
    font-weight:400;
}
}

`;




import React from 'react'
import styled from 'styled-components';
import ShareIcon from '@material-ui/icons/Share';
import PrintIcon from '@material-ui/icons/Print';
import GetAppIcon from '@material-ui/icons/GetApp';
import TripInfo from './TripInfo';

const Details=()=> {
    return (
        <Container>
            <FirstDiv>
                <h5>Boarding Pass (Web Check-In)</h5>
                <nav>
                    <li>Search<span><ShareIcon style={{"color":"#500E4B","fontSize":"large","marginLeft":"2px"}}/></span> </li>
                    <li>Print<span><PrintIcon style={{"color":"#500E4B","fontSize":"large","marginLeft":"2px"}}/></span></li>
                    <li>Download <span><GetAppIcon style={{"color":"#500E4B","fontSize":"large","marginLeft":"2px"}}/></span></li>
                </nav>
                
            </FirstDiv>
            <HeadingBanner>
                <h5>Trip Information</h5>
            </HeadingBanner>
            <ThirdDiv>
                <TripInfo/>
            </ThirdDiv>
            <HeadingBanner>
                <h5>Important Information</h5>
            </HeadingBanner>
            <FifthDiv>
                <p>&#8213; Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non <br/> deserunt ullamco est sit aliqua dolor do amet sint. </p>
                <p>&#8213; Amet minim mollit non deserunt.</p>
                <p>&#8213; Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                <p>&#8213; Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </FifthDiv>   
        </Container>
    )
}

export default Details;

const Container = styled.div`
height: auto;
margin-top:100px;
margin-bottom:100px;
border: 0.3px solid rgba(80, 14, 75, 0.5);
box-sizing: border-box;
border-radius: 10px;
@media screen and (max-width:1200px){
     justify-content: center;
   margin-bottom:20px;
   

}
@media screen and (max-width:600px){
    
    justify-content: center;
   margin-bottom:20px;
}

`;

const FirstDiv = styled.div`
display: flex;
flex-direction:row;
padding: 25px;
>h5{
    flex:0.7;
    font-weight: 500;
    font-size: 18px;
    color: #500E4B;
   @media screen and (max-width:600px){
    width:20%%;
    margin-left:5px;
    font-size: 10px;
    flex:0.8;
   
}
  
}
>nav{
    display: flex;
    flex:0.3;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
    width: 80%;
   justify-content:space-between;
    >li{
       display: flex;
       justify-content:center;
       font-size:16px;
       color: #500E4B;
         @media screen and (max-width:600px){
   
    margin-left:5px;
    font-size: 5px;
    color: white;
    flex:0.1;
}
    }
   
}
`;

const HeadingBanner = styled.div`
background-color:green;
display: flex;
padding: 8px;
margin: 10px 25px 20px 25px;
background: rgba(80, 14, 75, 0.6);
>h5{
font-weight: 500;
font-size: 16px;
color:white;
}
@media screen and (max-width:1200px){
    width:40%%;
    
    
}
@media screen and (max-width:600px){
    width:20%%;
    margin-left:25px;
    >h5{
        font-size: 12px;
    }
}

`;


const ThirdDiv = styled.div`
display: flex;
margin-right:25px;
margin-left:25px;
@media screen and (max-width:800px){
    
    flex-direction: column;
}
@media screen and (max-width:600px){
    
    
}
`;

const FourthDiv = styled.div`
background-color:pink;
`;

const FifthDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;

margin: 10px 55px 20px 55px;
>p{
font-family: Roboto;
font-style: italic;
font-weight: normal;
font-size: 14px;
color: #535353;
padding:5px;
text-align: justify;
}
   

`;



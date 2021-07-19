import React,{useState} from 'react';
import styled from 'styled-components';
import Axios from 'axios';


function Guests() {

    const url="https://cordelia.fortelogic.in/api/bookings";

    const [data,setData] = useState({
        card:" ",
        cardNumber:" ",
        state:" ",
        country:" ",
        mealType:" "
    })

    const handle =(e)=>{
        const newData = {...data};
        newData[e.target.id]=e.target.value;
        setData(newData);
        console.log(newData);
    }
    const submit =(e)=>{
        e.preventDefault();
        Axios.post(url,{
            card:data.card,
            cardNumber:parseInt(data.cardNumber),
            state:data.state,
            country:data.country,
            mealType:data.mealType
        })
        .then(res =>{
            console.log(res.data);
        })
    }
    
    return (
            <CardContent  onSubmit={(e)=> submit(e)} >
                <FormBody>
                    <section >
                            <label for="type">Choose Identification Type</label>
                            <input onChange={(e)=>handle(e)} id="card" value={data.card} type="text" placeholder="Aadhar Card"/>
                            <input onChange={(e)=>handle(e)} id="cardNumber" value={data.cardNumber} type="text" placeholder="Enter your 12 digits Aadhar Number" />
                    </section>
                    <section>
                        <label for="type">State</label>
                        <input onChange={(e)=>handle(e)} id="state" value={data.state} type="text" placeholder="Maharastra" />
                    </section>
                    <section>
                            <label for="type">Country</label>
                            <input onChange={(e)=>handle(e)} id="country" value={data.country} type="text" placeholder="India" />   
                    </section>
                    <section>
                            <label for="type">Meal Type</label>
                            <input onChange={(e)=>handle(e)} id="mealType" value={data.mealType} type="text" placeholder="Choose Meal Type" />
                    </section>
                </FormBody>
               
            </CardContent>
    )
}


export default Guests;

const CardContent = styled.div`
width:350px;
display: flex;
flex-direction:column;
height:auto;
padding:10px;

font-family: 'Poppins', sans-serif;

@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    
}
<<<<<<< HEAD
    color: #500E4B;
=======
    color: #93329E;
>>>>>>> master
`;





const FormBody = styled.div`
display: flex;
flex-direction:column;
>section{
    display: flex;
    flex-direction:column;

    >label{
    padding:2px;
    font-size:14px;
    font-weight: 500;
        }
    >input{
    padding:9px;
    margin-bottom:10px;
    border:1px solid #DDDD;
    border-radius:10px; 
    }
}
    `;


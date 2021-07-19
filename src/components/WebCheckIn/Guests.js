import React,{useState} from 'react';
import styled from 'styled-components';
import Axios from 'axios';


function Guests() {

   
    
    return (
            <CardContent   >
                <FormBody>
                    <section >
                            <label for="type">Choose Identification Type</label>
                            <input type="text" placeholder="Aadhar Card"/>
                            <input type="text" placeholder="Enter your 12 digits Aadhar Number" />
                    </section>
                    <section>
                        <label for="type">State</label>
                        <input type="text" placeholder="Maharastra" />
                    </section>
                    <section>
                            <label for="type">Country</label>
                            <input type="text" placeholder="India" />   
                    </section>
                    <section>
                            <label for="type">Meal Type</label>
                            <input  type="text" placeholder="Choose Meal Type" />
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


import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/HeaderNoBanner";
import BookingFlowCards from "../../components/Cards/BookingFlowCards";
import Card from "../../components/UI/Card";
import Footer from "../../components/Footer/Footer";
import DeleteIcon from "../../assets/img/delete-icon.svg";
import BedIcon from "../../assets/img/bed-icon.svg";
import Minus from "../../assets/img/minus.svg";
import Plus from "../../assets/img/plus.svg";
import bookinImgBanner from "../../assets/img/sidebaner-booking.jpg";
import "./cabinsec.scss";
import { useHistory } from 'react-router-dom';


function RoomSelection() {
  let history = useHistory();
  const [cabins, setCabins] = useState([
    {
      name: 'Cabin 1',
      guest: {
        total: 0,
        adults: 0,
        children: 0,
        infants: 0
      }
    }
  ])
const [selectedCabin, setSelectedCabin] = useState(0)
let selectRoom = () => {
  history.push('/room-selection')
}
let addCabin = () => {
  let obj = {
    name: `Cabin ${cabins.length + 1}`, guest: {
      total: 0,
      adults: 0,
      children: 0,
      infants: 0
    }
  }
  setCabins([
    ...cabins,
    obj
  ])
}
let removeCabin = (index) => {
  if (cabins.length < 2) return
  let temp = cabins[index].name
  let filteredData = cabins.filter(cabin => cabin.name !== temp)
  setCabins(filteredData)
}

let onAddPerson = (name) =>{
  setCabins(prevState =>{
    return prevState.map((val,i) =>{
      if(i == selectedCabin)
      {
        val.guest[name] = val.guest[name] + 1
      }
      return val;
    })
  })
}
let onRemovePerson = () =>{
  
}
 console.log("ccc", cabins)
return (
  <div className="Home">
    <Header />
    <div className="cabin-wrapper-body mb-5 pb-5">
      <div className="container">
        <BookingFlowCards.ProgressBar />
      </div>
      <div className="cabin-section mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading--main">
                <h3 className="title--main">Add Cabin & Guests</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {cabins.map((cabin, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="cabin-boxgrid">
                    <h4 className="title-cabin">{cabin.name}</h4>
                    <span className="guest--view">Guest: {cabin.guest.total}</span>
                    {
                      cabin.name == 'Cabin 1' ?
                        null :
                        <div className="delticon"><button onClick={() => removeCabin(i)} type="button" className="btn btn-delt"><img src={DeleteIcon} /></button></div>
                    }

                  </div>
                </div>
              )
            })}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="btn-card--bth">
                <button onClick={addCabin} type="button" className="btn btn-cardadd add-cabin">Add Cabin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cabin--section--main">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-5 col-xl-4">
              <Card className="">
                <div className="card-body">
                  <div className="cabinadd--field">
                    <h4>{cabins[selectedCabin].name}</h4>
                    <p><img src={BedIcon} className="mr-2" />Cabin can accomodate 2,3 or 4 Guests</p>
                    <div className="listMore--items--vat">
                      <ul className="mb-5">
                        <li>
                          <div className="widgit--guest--list">
                            <div className="iconbutton-comn">
                              <button type="button" className="btn btn-minus"><img src={Minus} /></button>
                            </div>
                            <div className="items--filltxt">
                              <span className="fst-txtnv">{cabins[selectedCabin].guest.adults}</span>
                              <span className="fst-txtnv adultxt">Adults</span>
                              <span className="scnd-txtnv">12 & Above</span>
                            </div>
                            <div className="iconbutton-comn">
                              <button onClick = {() => onAddPerson('adults')} type="button" className="btn btn-plus"><img src={Plus} /></button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="widgit--guest--list">
                            <div className="iconbutton-comn">
                              <button type="button" className="btn btn-minus"><img src={Minus} /></button>
                            </div>
                            <div className="items--filltxt">
                              <span className="fst-txtnv">{cabins[selectedCabin].guest.children}</span>
                              <span className="fst-txtnv adultxt">Children</span>
                              <span className="scnd-txtnv">2 Years - 12 Years</span>
                            </div>
                            <div className="iconbutton-comn">
                              <button  onClick = {() => onAddPerson('children')} type="button" className="btn btn-plus"><img src={Plus} /></button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="widgit--guest--list">
                            <div className="iconbutton-comn">
                              <button type="button" className="btn btn-minus"><img src={Minus} /></button>
                            </div>
                            <div className="items--filltxt">
                              <span className="fst-txtnv">{cabins[selectedCabin].guest.infants}</span>
                              <span className="fst-txtnv adultxt">Infants</span>
                              <span className="scnd-txtnv">6 Month - 2 Years</span>
                            </div>
                            <div className="iconbutton-comn">
                              <button  onClick = {() => onAddPerson('infants')} type="button" className="btn btn-plus"><img src={Plus} /></button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p>* Infants below 6 months are not allowed to travel</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-12 col-lg-7 col-xl-8">
              <div className="booknow--bannerImg">
                <img src={bookinImgBanner} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center room-btnview">
                <button onClick={selectRoom} type="" className="ant-btn ant-btn-primary ant-btn-lg">Select Room Type</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}

export default RoomSelection;

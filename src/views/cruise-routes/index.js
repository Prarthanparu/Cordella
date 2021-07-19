import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from '../../redux/actions/routeAction';
import NotificationBanner from "../../components/NotificationBanner/NotificationBanner";
import Header from "../../components/Header/Header";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import Footer from "../../components/Footer/Footer";
import CruiseRoutesCards from "../../components/Cards/CruiseRoutesCards";
import './index.css';


function CruiseRoutes() {
  const dispatch = useDispatch();
  const [routes, setRoutes] = useState([]);
  const { routeData } = useSelector((state) => ({
    routeData: state.route.routeData
  }));

  useEffect(async () => {
    await dispatch(getRoutes());
  }, []);

  useEffect(async () => {
    setRoutes(routeData);
  }, [routeData]);

  const onFilterApplied = (filters) => {
    if(routeData && filters.length != 0){
      setRoutes(routeData.filter(route=>
        route.itineraries.filter( itinerary => filters.includes(itinerary.nightCount.toString())).length != 0
      ));
    }else{
      setRoutes(routeData);
    }
  }

  const onSortApplied = (sortBy) => {
    console.log(sortBy);
    if(routeData && sortBy){
      setRoutes(routes.sort(x=>x.itineraries[0].nightCount));
    }
  }

  return (
    <div className="Home">
      <NotificationBanner />
      <Header />
      <SearchComponent />
      <CruiseRoutesCards filterBy={onFilterApplied} sortBy={onSortApplied}/>
      <CruiseRoutesCards.TravelItineraryCards routeData={routes} />
      <Footer />
    </div>
  );
}

export default CruiseRoutes;

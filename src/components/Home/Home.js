import React from "react";
import Carousel from "../Carousel/Carousel";
import { useLoaderData } from "react-router-dom";
import HotelData from "../HotelData/HotelData";
import "./Home.css";
import CarouselData from "../CarouselData/CarouselData";
import OffersAndDeals from "../OffersAndDeals/OffersAndDeals";

const Home = () => {
  const getApi = useLoaderData();
  // console.log(getApi);
  return (
    <div className="home-parent-div">
      <Carousel></Carousel>
      <div>
        <h1 className="heading">Rooms & Suites</h1>
        <div className="hr"></div>
        <div className="map-div my-11 container">
          {getApi.map((data) => (
            <HotelData data={data} key={data.id}></HotelData>
          ))}
        </div>
      </div>
      <CarouselData className=""></CarouselData>
      <OffersAndDeals></OffersAndDeals>
    </div>
  );
};

export default Home;

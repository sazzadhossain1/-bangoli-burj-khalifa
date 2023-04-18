import React from "react";
import "./HotelData.css";

const HotelData = ({ data }) => {
  console.log(data);
  const { img, name, description, icon, persone, price } = data;
  return (
    <div className="hotel-products-div">
      <div className="iconAndName">
        <div className="icon-div">
          <h4 className="icon">{icon}</h4>
        </div>
        <h4 className="name">{name}</h4>
      </div>
      <img className="img" src={img} alt="" />
      <p className="description">{description}</p>
      <div>
        <p>{persone}</p>
        <p>{price}</p>
        <button>Booking Now</button>
      </div>
    </div>
  );
};

export default HotelData;

import "./HotelData.css";
import { FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotelData = ({ data }) => {
  const { img, name, description, icon, persone, price } = data;

  return (
    <div>
      <div className="hotel-products-div">
        <div className="iconAndName">
          <div className="icon-div">
            <h4 className="icon">{icon}</h4>
          </div>
          <h4 className="name">{name}</h4>
        </div>
        <img className="img" src={img} alt="" />
        <p className="description">{description}</p>
        <div className="person-price-btn">
          <div className="heroIcon-div">
            <FaPeopleArrows className="mr-3"></FaPeopleArrows>
            <p className="person">
              <span className="p">P</span>erson {persone}
            </p>
          </div>
          <p className="price">
            <span className="dollar">$</span> {price}
          </p>
          <Link to={`/bookingNow`}>
            <button className="booking-btn">Booking Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelData;

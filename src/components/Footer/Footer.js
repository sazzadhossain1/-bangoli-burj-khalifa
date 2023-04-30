import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent-container">
      <div className="footer-grid-div">
        <div className="margin-auto-div">
          <h3 className="hotel">H O T E L</h3>
          <h1>Bangoi Burj Khalifa</h1>
          <p>Address</p>
          <p>555 Banani Road, Dhaka, Bangladesh</p>
          <p>Banani</p>
          <p>Dhaka</p>
          <p>Bangladesh</p>
          <p>Contact</p>
          <p>017xxxxxxxx</p>
          <p>sazzadtomal1@gamil.com</p>
        </div>
        <div className="margin-auto-div">
          <h1>Rooms</h1>
          <p>Standard Room</p>
          <p>Double Room</p>
          <p>Family Room</p>
          <p>Standard Suite</p>
          <p>California Suite</p>
          <p>Deluxe Suite</p>
        </div>
        <div className="margin-auto-div">
          <h1>About us</h1>
          <p>Overview</p>
          <p>Contact</p>
          <p>What to see</p>
          <p>Places to visit</p>
          <p>Hotel Activities</p>
          <p>Excursions</p>
        </div>
        <div className="margin-auto-div">
          <h1>Awards</h1>
          <img
            className="img-img"
            src="https://hotel.bold-themes.com/summer/wp-content/uploads/sites/2/2016/02/summer-awards.png"
            alt=""
          />
          <p className="awards-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            minima natus! Provident, quod error ipsam fugiat consectetur rerum
            veritatis unde minima necessitatibus reiciendis repellendus at
            inventore commodi facilis similique soluta perferendis, eligendi
            eum, architecto explicabo repudiandae sit itaque porro. Sed deleniti
            velit quia ullam sit aut nobis iste laboriosam possimus.
          </p>
        </div>
      </div>
      <h3 className="copyRight">Copyright @ 2023</h3>
    </div>
  );
};

export default Footer;

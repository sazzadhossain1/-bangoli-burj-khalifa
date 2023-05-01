import React from "react";
import "./OffersAndDeals.css";

const OffersAndDeals = () => {
  return (
    <div className="offersAndDeals-div">
      <h1 className="offers-heading">Offers & Deals</h1>
      <div className="grid-offers-div">
        <div className="first-child">
          <img
            className="offers-img"
            src="https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-770x436.jpg"
            alt=""
          />
          <div className="child-flex-div">
            <p className="gettogether">GET TOGETHER</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Family vacation</p>
        </div>
        <div className="second-child">
          <img
            className="offers-img"
            src="https://www.travelandleisure.com/thmb/nZ0wsnSK-Wk8YkAVHqur46f2nmE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sandos-finisterra-FAMALLINC0222-d033ea25e5cf4e839e2083e4094f115a.jpg"
            alt=""
          />
          <div className="child-flex-div">
            <p className="gettogether">CELEBRATE</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Newlyweds weekend</p>
        </div>
        <div className="third-child">
          <img
            className="offers-img"
            src="https://media.cnn.com/api/v1/images/stellar/prod/210902101650-underscored-grand-hyatt-baha-mar-baha-bay-lazy-river.jpg?q=x_0,y_0,h_1800,w_3200,c_fill/h_720,w_1280/f_webp"
            alt=""
          />

          <div className="child-flex-div">
            <p className="gettogether">PROCRASTINATE</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Lazy weekend</p>
        </div>
      </div>
    </div>
  );
};

export default OffersAndDeals;

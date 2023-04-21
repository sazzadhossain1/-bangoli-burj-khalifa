import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselData.css";

const CarouselData = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <div className="container mx-auto carousel-parent-div">
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
          <img
            src="https://hotel.bold-themes.com/summer/wp-content/uploads/sites/2/2016/02/summer-single-room-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        <div>
          <h3>Slide 5</h3>
        </div>
        <div>
          <h3>Slide 6</h3>
        </div>
        <div>
          <h3>Slide 7</h3>
        </div>
        <div>
          <h3>Slide 8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselData;

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
    <div className="container  mx-auto carousel-parent-div">
      <h1 className="branches text-center text-white ">Our Branches</h1>

      <Slider className="" {...settings}>
        <div className="carousel-div mr-10">
          <h3 className="country">Bangladesh Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DFgVOq-DR90A86lDxhIT4byDMNHpZMSPjw&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">India Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPm3a4rg63_Cq4Q6kp5YmJlkqydOfAwUHlRFPLasevLCMpARRs1Y6bXl0T-KSzYhZt34&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">Nepal Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DFgVOq-DR90A86lDxhIT4byDMNHpZMSPjw&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">Singapoor Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ItqWGurZN5q6LW19Ee6OuKTMEjRD7GJyRA&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">Malaysia Branch</h3>
          <img
            className="carousel-img"
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPm3a4rg63_Cq4Q6kp5YmJlkqydOfAwUHlRFPLasevLCMpARRs1Y6bXl0T-KSzYhZt34&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">USA Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1GLXZ4g_zut-gMFe9EGYb0Mk0Gb3qeytag6FFwgWByZO9b9SjOjLwiP04dWczQeEhOI&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">Dubai Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DFgVOq-DR90A86lDxhIT4byDMNHpZMSPjw&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
        <div className="carousel-div">
          <h3 className="country">Pakisthan Branch</h3>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1GLXZ4g_zut-gMFe9EGYb0Mk0Gb3qeytag6FFwgWByZO9b9SjOjLwiP04dWczQeEhOI&usqp=CAU"
            alt=""
          />
          <p>
            Location: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sit aut modi facilis voluptates? Quaerat, dolor sapiente soluta
            suscipit nobis repellat.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselData;

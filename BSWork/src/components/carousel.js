import React from "react";
import Slider from "react-slick";
import "../slick-carousel/slick/_slick.css";
import "../slick-carousel/slick/_slick-theme.css";
import "./slider.css"
import Card from "./card";
import CardBS from "./cardbs";
import bombay from "../images/bombay.jpeg";
import bombay1 from "../images/bombay1.jpeg";
import bombay2 from "../images/bombay2.jpeg";
import bombay3 from "../images/bombay3.jpeg";
import BS_Card from "../bscomponents/BS_Card";


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2> Simple Slider </h2>
      <div className="slider-container">
      <Slider {...settings}>
      
        <BS_Card />
        <BS_Card />
        <BS_Card />
        <BS_Card />
        <BS_Card />
        <BS_Card />
      </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
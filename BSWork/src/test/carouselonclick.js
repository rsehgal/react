import React, { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import BS_Card from '../bscomponents/BS_Card';
import BS_Carousel from '../bscomponents/BS_Carousel';
import { FaTimes } from 'react-icons/fa';
import jsonData from "../data/headerdata.json";

const CarouselOnClick = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleCardClick = () => {
    //alert("Card clicked...");
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div className="App">
      <div className={showCarousel ? "blur-background" : ""} onClick={handleCardClick}> 
        <BS_Card card_img="images/bombay.jpeg" />
        
      </div>

      {showCarousel && (
        <div className="carousel-wrapper  center-align">
          <div className="overlay"></div>
          <div className="carousel-content">
          <Button variant="outline-light " className="close-button rounded-circle" onClick={handleCloseCarousel}>
            <FaTimes />
          </Button>
          <BS_Carousel className="custom-carousel" jsonData={jsonData}/>
          </div>
        </div>
      )}

    </div>
  );
};

export default CarouselOnClick;

import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function CarouselHand() {
  return (
   <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./tana.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./fianarantsoa.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./mahajanga.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default CarouselHand;
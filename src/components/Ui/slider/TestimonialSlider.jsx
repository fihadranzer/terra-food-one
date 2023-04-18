import React from "react";
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import ava04 from '../../../assets/images/ava-4.jpg'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          consectetur ipsum quam esse corrupti perspiciatis obcaecati rerum
          iusto doloribus magnam earum mollitia libero, praesentium asperiores
          quibusdam impedit ducimus quidem! Iste.
        </p>
        <div>
            <img src={ava01} alt="avatar" />
            <h6>John Kabir</h6>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

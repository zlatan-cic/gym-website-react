import React, { useState } from "react";

import "./Testimonials.css";

import { testimonialsData } from "../../data/testimonialsData";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLenght = testimonialsData.length;

  return (
    <div className="testimonial-container">
      <div className="testimonials">
        <div className="left-t">
          <h4>testimonials</h4>
          <h1>
            Discover Our <span className="stroke-text">Success</span> Stories
          </h1>
          <div className="review">{testimonialsData[selected].review}</div>
          <div>
            <h3 className="container-name">
              <span className="name">{testimonialsData[selected].name}</span> /{" "}
              <span> {testimonialsData[selected].status} </span>
            </h3>
          </div>
          <div className="arrows">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(testimonialLenght - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={LeftArrow}
              alt=""
            />
            <img onClick={() => {
                selected === testimonialLenght - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            src={RightArrow} alt="" />
          </div>
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

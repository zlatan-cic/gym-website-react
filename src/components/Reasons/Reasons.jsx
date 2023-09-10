import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons-cotainer">
        <div className="left-r">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className="right-r">
          <span>Some reasons</span>
          <div>
            <h3>
              <span className="stroke-text">Why</span> Choose us?
            </h3>
            <div className="details-r">
              <div>
                <img src={tick} alt=""></img>
                <p>Over +140 expert coaches</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Train smarter and faster than before</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>1 free program for new members</p>
              </div>
              <div>
                <img src={tick} alt="" />
                <p>Realible partners</p>
              </div>
            </div>
            <div className="partners">
              <p>OUR PARTNERS</p>
              <div className="partners-img">
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
                <img src={nb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

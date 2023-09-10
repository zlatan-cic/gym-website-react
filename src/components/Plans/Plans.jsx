import React from "react";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

function Plans() {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <h3>
          Ready to <span className="stroke-text">start</span> your journey now
          with <span className="stroke-text">us</span>.
        </h3>
      </div>
      {/* Plasns card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <div>{plan.name}</div>
            <div>€ {plan.price}</div>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={WhiteTick} alt="" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits →</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;

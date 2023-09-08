import React from "react";

import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

import "./Programs.css";

const ProgramCards = () => {
  return (
    <>
    {programsData.map((program) => (
      <div className="category" key={program.heading}>
        {program.image}
        <div>{program.heading}</div>
        <div>{program.details}</div>
        <div className="join-now"><span>Join now</span><img src={RightArrow}/></div>
      </div>
    ))}
    </>
  );
};

export default ProgramCards;

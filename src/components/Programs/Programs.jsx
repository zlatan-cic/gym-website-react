import React from "react";

import "./Programs.css";

import ProgramCards from "./ProgramCards";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        <ProgramCards/>
      </div>
    </div>
  );
};

export default Programs;

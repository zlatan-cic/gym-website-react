import React from "react";

import "./Programs.css";
import { programsData } from "../../data/programsData";
import ProgramCards from "./ProgramCards";

const Programs = () => {
  return (
    <>
      <div className="programs" id="programs">
        <div className="container-header">
          <div className="programs-header">
            <h2>
              <span className="stroke-text">DISCOVER OUR </span> PROGRAMS FOR{" "}
              <span className="stroke-text">PERSONAL GROWTH</span>
            </h2>
          </div>
        </div>
        <div className="container-programs">
          <div className="programs-categories">
            <ProgramCards programsData={programsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;

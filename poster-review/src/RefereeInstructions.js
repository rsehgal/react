import React from "react";

const RefereeInstructions = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-success text-white fw-bold fs-5">
          📋 Instructions for Referees
        </div>
        <div className="card-body">
          <ol className="fs-6 lh-lg">
            <li className="mb-3">
              You are requested to evaluate the manuscripts based on the :
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">Scientific Merit</li>
                <li className="list-group-item">Completeness of work</li>
                <li className="list-group-item">Clarity in Presentation</li>
              </ul>and assign 
              <span className="fw-bold text-primary"> Merit Points (1–10)</span>, 
              where <span className="fw-bold">1 = poorest</span> and <span className="fw-bold">10 = best</span>.  
              Merit Points above <span className="text-success fw-bold">8</span> have a high chance of selection for oral presentation.
              The manuscripts getting Merits Point below 4 are likely to be rejected. <span className="fw-bold text-primary"><br/>Please don't enter merit points and poster or oral in the remarks.</span>
            </li>

            <li className="mb-3">
              <span className="fw-bold text-danger">
                Please note that a maximum of only 20% papers may be selected for Oral presentation.
              </span>  
              Please follow this criterion while giving your marks.
            </li>

            <li className="mb-3">
              For <span className="fw-bold text-danger">Rejected contributions</span>, please provide reason in 
              <span className="fw-bold"> Referee Remarks</span> and assign 
              <span className="fw-bold"> Merit Points = 1</span>.
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">Out of scope</li>
                <li className="list-group-item">Scientifically incorrect</li>
                <li className="list-group-item">Material not sufficient</li>
                <li className="list-group-item">Already published or reported earlier</li>
              </ul>
            </li>

            <li className="mb-3">
              If a paper (a) has been placed in the wrong topic, or (b) does not follow template guidelines,  
              please indicate in <span className="fw-bold">Referee Remarks</span>.
            </li>

            <li className="mb-3">
              If there is a scope for combining similar contributions by the same authors, it may be suggested.
            </li>

            <li>
              <span className="fw-bold text-warning">
                After entering the Remarks and Merit points, please click the <u>Save</u> button.
              </span>  
              <br />
              
              If you <span className="fw-bold text-danger">DO NOT click Save</span>, your remarks and points will <span className="fw-bold text-danger">NOT BE SAVED, even if you lock.</span>
               Remarks and points can be modified any time before finally locking your decision.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RefereeInstructions;

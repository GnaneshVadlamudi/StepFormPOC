import React, { Fragment } from "react";

const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step
}) => (
  <Fragment>
    <hr />
    {step > 1 && (
      <button className="btn btn-default btn-block" onClick={previousStep}>
        Go Back
      </button>
    )}
    {step < totalSteps ? (
      <button className="btn btn-primary btn-block" onClick={nextStep}>
        Save & Continue
      </button>
    ) : (
      <button className="btn btn-success btn-block" onClick={nextStep}>
        Finish
      </button>
    )}
    <hr />
  </Fragment>
);

export default Stats;

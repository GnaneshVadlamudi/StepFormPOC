import React from "react";
import Stats from "./Stats";

const Submit = (props) => {
  const submit = () => {
    alert("You did it! Yay!"); // eslint-disable-line
  };

  return (
    <div>
      <div className={"text-center"}>
        <h3>Review & Submit</h3>
        <hr />
      </div>
      <Stats step={4} {...props} nextStep={submit} />
    </div>
  );
};

export default Submit;

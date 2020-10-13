import React from "react";
import Stats from "./Stats";

const ExamInfo = (props) => {
  const validate = () => {
    if (confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div>
      {props.form.firstname && <h3>Hey {props.form.firstname}! 👋</h3>}
      <h3 className="text-center">Exam Details</h3>

      <label>First Name :</label>
      <input
        type="text"
        className="form-control"
        name="firstname"
        placeholder="First Name"
        onChange={update}
      />
      <Stats step={2} {...props} previousStep={validate} />
    </div>
  );
};

export default ExamInfo;

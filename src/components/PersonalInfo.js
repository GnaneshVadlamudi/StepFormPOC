import React from "react";
import Stats from "./Stats";

const PersonalInfo = (props) => {
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div>
      <h3 className="text-center">Personal Information</h3>

      <label>First Name :</label>
      <input
        type="text"
        className="form-control"
        name="firstname"
        placeholder="First Name"
        onChange={update}
      />
      <Stats step={1} {...props} />
    </div>
  );
};

export default PersonalInfo;

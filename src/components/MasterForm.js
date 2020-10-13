import React, { Fragment, useState } from "react";
import StepWizard from "react-step-wizard";

import styles from "./wizard.less";
import PersonalInfo from "./PersonalInfo";
import ExamInfo from "./ExamInfo";
import InstitutionInfo from "./InstitutionInfo";
import Submit from "./Submit";

const MasterForm = () => {
  const [state, updateState] = useState({
    form: {}
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {
    // console.log(stats);
  };

  return (
    <Fragment>
      <div className="container">
        <h3>React Step Wizard</h3>
        <div className={"jumbotron"}>
          <div className="row">
            <div
              className={`col-12 col-sm-6 offset-sm-3 ${styles["rsw-wrapper"]}`}
            >
              <StepWizard onStepChange={onStepChange} isHashEnabled>
                <PersonalInfo
                  hashKey={"personalInformation"}
                  update={updateForm}
                />
                <ExamInfo hashKey={"examDetails"} form={state.form} />
                <InstitutionInfo
                  hashKey={"institutionDetails"}
                  form={state.form}
                />
                <Submit hashKey={"submit"} />
              </StepWizard>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MasterForm;

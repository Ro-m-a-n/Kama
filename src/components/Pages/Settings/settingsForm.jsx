import { Field, reduxForm } from "redux-form";
import { Input } from "../../Global/FormsControl/FormsControl";
import React from "react";


const SettingsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name={"messageFromInput"}              
      />
      <button>save</button>
    </form>
  );
};

const SettingsReduxForm = reduxForm({
  form: "settings",
})(SettingsForm);
export default SettingsReduxForm;

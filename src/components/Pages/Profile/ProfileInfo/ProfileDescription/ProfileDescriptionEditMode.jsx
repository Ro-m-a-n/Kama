import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../../Global/FormsControl/FormsControl";
import {
  maxLengthTC,
  Required,
} from "./../../../../../utilites/validators/Validators";

let maxLength = maxLengthTC(30);
const ProfileDescriptionEditMode = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>{props.error && <div> {props.error}</div>}</div>
      <div>
        <Field
          component={Input}
          name={"fullName"}
          placeholder="Full name"
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <Field component={"input"} name={"lookingForAJob"} type={"checkbox"} />
        Looking for a job?
      </div>

      <div>
        <Field
          component={Textarea}
          name={"lookingForAJobDescription"}
          placeholder="My professional skills"
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={Textarea}
          name={"aboutMe"}
          placeholder="About me"
          validate={[Required, maxLength]}
        />
      </div>

      <div>
        <b>Contacts :</b>
        {Object.keys(props.initialValues.contacts).map((key) => {
          return (
            <div key={key}>
              <b> {key}: </b>
              <Field
                key={key}
                component={Input}
                name={"contacts." + key}
                placeholder={key}
                validate={[maxLength]}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileDescriptionReduxForm = reduxForm({
  form: "Profile_description",
})(ProfileDescriptionEditMode);
export default ProfileDescriptionReduxForm;

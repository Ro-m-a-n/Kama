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
      <div>
        <Field
          component={Input}
          name={"fullName"}
          placeholder="Full name"
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"lookingForAJob"}
          type={"checkbox"}
        />
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
      
      {/* <div>
        <b>Contacts :</b>

        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};
const ProfileDescriptionReduxForm = reduxForm({
  form: "Profile_description",
})(ProfileDescriptionEditMode);
export default ProfileDescriptionReduxForm;

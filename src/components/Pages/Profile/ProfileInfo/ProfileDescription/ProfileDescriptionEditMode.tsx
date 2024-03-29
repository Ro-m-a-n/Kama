import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../../Global/FormsControl/FormsControl";
import {
  maxLengthTC,
  Required,
} from "../../../../../utilites/validators/Validators";
import { ContactsType } from "../../../../../Redux/profileReducer";

type propsType = {
  initialValues: ContactsType;
};
type formSubmitType = {};
let maxLength = maxLengthTC(40);
const ProfileDescriptionEditMode: React.FC<
  InjectedFormProps<formSubmitType & propsType> 
> = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="profile_description__editMode"
    >
      <div>
        <button>save</button>
      </div>
      <div>{props.error && <div> {props.error}</div>}</div>
      <div>
        <b> Name: </b>
        <Field
          component={Input}
          name={"fullName"}
          placeholder="Full name"
          validate={[Required, maxLength]}
        />
      </div>
      <div className="checkbox_Profile">
        <Field component={"input"} name={"lookingForAJob"} type={"checkbox"} />
        {"Looking for a job?"}
      </div>

      <div>
        <b> My professional skills: </b>
        <Field
          component={Textarea}
          name={"lookingForAJobDescription"}
          placeholder="My professional skills"
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <b> About me:</b>
        <Field
          component={Textarea}
          name={"aboutMe"}
          placeholder="About me"
          validate={[Required, maxLength]}
        />
      </div>

      <div>
        <b>Contacts :</b>
        {Object.keys(props.initialValues).map((key) => {
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
const ProfileDescriptionReduxForm = reduxForm<formSubmitType & propsType>({
  form: "Profile_description",
})(ProfileDescriptionEditMode);
export default ProfileDescriptionReduxForm;

import "../../../../Global/AddText.css";
import { Field } from "redux-form";
import {
  maxLengthTC,
  notEmpty,
} from "./../../../../../utilites/validators/Validators";
import { Textarea } from "../../../../Global/FormsControl/FormsControl";

let maxLength = maxLengthTC(150);

export const AddMessageForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      className={`addText_wrap`}
    >
      <Field
        name="message"
        component={Textarea}
        placeholder="Enter your message"
        validate={[maxLength, notEmpty]}
      />
      <button className="addText__add">Add</button>
    </form>
  );
};

export default AddMessageForm;

import "../../../../Global/AddText.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Required, maxLengthTC } from './../../../../../utilites/validators/Validators';
import { Textarea } from "../../../../Global/FormsControl/FormsControl";


let maxLength =  maxLengthTC(100);


export const AddMessageForm = (props)=>{
  return ( 
<form onSubmit={props.handleSubmit} className="addText__wrap">
<Field name='message' component={Textarea} placeholder="Enter your message" validate={[Required, maxLength]}/>
<div className="addText__add"><button>Add</button></div>

</form>
  );
}
let AddMessageReduxForm = reduxForm({
  form: "DialogAddMessage"
})(AddMessageForm)


export default AddMessageReduxForm;
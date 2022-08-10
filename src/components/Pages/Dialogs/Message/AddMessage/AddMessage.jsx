import "../../../../Global/AddText.css";
import React from "react";
import { Field, reduxForm } from "redux-form";





export const AddMessageForm = (props)=>{
  return ( 
<form onSubmit={props.handleSubmit} className="addText__wrap">
<Field name='message' component={'textarea'} placeholder="Enter your message"/>
<div className="addText__add"><button>Add</button></div>

</form>
  );
}
let AddMessageReduxForm = reduxForm({
  form: "DialogAddMessage"
})(AddMessageForm)


export default AddMessageReduxForm;
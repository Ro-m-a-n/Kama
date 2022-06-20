import "../../../../Global/AddText.css";
import React from "react";
import { UpdateMessageAreaActionCreator } from "../../../../../Redux/messageReducer";
import { AddMessageActionCreator } from "../../../../../Redux/messageReducer";

const AddMessage = (props) => {
  let addMessage = () => {
    props.dispatch(AddMessageActionCreator());
  };
  let onChangeMessageArea = (e) => {
    let text = e.target.value;
    props.dispatch(UpdateMessageAreaActionCreator(text));
  };

  return (
    <div className="addText__wrap">
      <textarea
        onChange={onChangeMessageArea}
        value={props.messagesPage.newMessageTemp}
      ></textarea>
      <div className="addText__add">
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
};
export default AddMessage;

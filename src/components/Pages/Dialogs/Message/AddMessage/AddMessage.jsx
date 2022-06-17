import "../../../../Global/AddText.css";
import React from "react";
import { UpdateMessageAreaActionCreator } from "../../../../../redux/State";
import { AddMessageActionCreator } from "../../../../../redux/State";

const AddMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(AddMessageActionCreator());
  };
  let onChangeMessageArea = () => {
  
    let text = newMessageElement.current.value;
    props.dispatch(UpdateMessageAreaActionCreator(text));
  };

  return (
    <div className="addText__wrap">
      <textarea
        onChange={onChangeMessageArea}
        ref={newMessageElement}
        value={props.messagesPage.newMessageTemp}
      ></textarea>
      <div className="addText__add">
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
};
export default AddMessage;

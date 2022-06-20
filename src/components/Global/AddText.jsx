import "./AddText.css";
import React from "react";
import { UpdateTextAreaActionCreator } from "../../Redux/profileReducer";
import { AddTextActionCreator } from "../../Redux/profileReducer";

const AddText = (props) => {
  let newTextElement = React.createRef();

  let addText = () => {
    props.addText();

    //  props.dispatch(AddTextActionCreator());
  };
  let onChangeTextArea = () => {
    let text = newTextElement.current.value;
    props.onChangeTextArea(text);

    
    // props.dispatch(UpdateTextAreaActionCreator(text));
  };

  return (
    <div className="addText__wrap">
      <textarea
        onChange={onChangeTextArea}
        ref={newTextElement}
        value={props.newTextPost}
      ></textarea>
      <div className="addText__add">
        <button onClick={addText}>Add</button>
      </div>
    </div>
  );
};
export default AddText;

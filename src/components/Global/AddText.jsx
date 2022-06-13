import "./AddText.css";
import React from "react";

const AddText = (props) => {
  let newTextElement = React.createRef();

  let addText = () => {
       props.dispatch({type: "ADD-POST"});
  };
  let onChangeTextArea = () => {
    let text = newTextElement.current.value;
    props.dispatch({ type: "UPDATE-TEXT-AREA", newText: text });
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

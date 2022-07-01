import "../../../../Global/AddText.css";
import React from "react";


const AddMessage = (props) => {
 
  let onChangeMessageArea = (e) => {
    let text = e.target.value;
    props.updateMessage(text);
    
  };

  return (
    <div className="addText__wrap">
      <textarea
        onChange={onChangeMessageArea}
        value={props.newMessageTemp}
      ></textarea>
      <div className="addText__add">
        <button onClick={()=>{props.addMessage()}}>Add</button>
      </div>
    </div>
  );
};
export default AddMessage;

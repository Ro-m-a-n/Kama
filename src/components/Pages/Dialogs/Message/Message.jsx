
import { TiDeleteOutline } from "react-icons/ti";
const Message = (props) => {
  
  return (
    <div className="post horisontal">
      <img
        className="Avatar"
        alt=""
        src={props.photo}
      ></img>
      <div className="message">{props.text}</div>
      <TiDeleteOutline
        className="post_icon__delete"
        onClick={() => {
          props.deleteMessageAC(props.dialogId, props.messageId);
        }}
      />
    </div>
  );
};

export default Message;

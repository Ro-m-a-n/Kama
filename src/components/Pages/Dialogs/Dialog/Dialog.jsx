import "./../Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className="Dialogs_item active">
      <NavLink className="Dialog_item__avatar" to={`/messages/${props.id}` }>
        <img className="Avatar" alt="" src={props.dialogAvatar}></img>
      </NavLink>

      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;

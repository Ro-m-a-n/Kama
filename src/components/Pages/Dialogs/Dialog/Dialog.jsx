import "./../Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className="Dialogs__item active">
      <img className="Avatar"
          alt=""
          src={props.dialogAvatar}
        ></img>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;

import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className="Dialogs__item active">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className="Message active">{props.text}</div>;
};

const Dialogs = (props) => {
  return (
    <div className="Dialogs">
      <div className="Dialogs__items">
        <Dialog name="Roman" id="1" />
        <Dialog name="Artem" id="2" />
      </div>
      <div className="Messages">
        <Message text="Hello world" /> 
        <Message text="Hi there" />
      </div>
    </div>
  );
};
export default Dialogs;

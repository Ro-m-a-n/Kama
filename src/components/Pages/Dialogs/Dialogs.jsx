import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className="Dialogs__item active">
      <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className="Message active">{props.text}</div>;
};

let dialogsData = [
  { id: 1, name: "Roman" },
  { id: 2, name: "Artem" },
];
let messagesData = [
  { id: 1, text: "Hello world" },
  { id: 2, text: "Hi there" },
];
let dialogsElements = dialogsData.map((el) => (
  <Dialog name={el.name} id={el.id} />
));
let mesaggesElements = messagesData.map((el) => (
  <Message text={el.text} id={el.id} />
));
const Dialogs = (props) => {
  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="Messages">{mesaggesElements}</div>
    </div>
  );
};
export default Dialogs;

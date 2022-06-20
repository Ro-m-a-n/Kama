import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageContainer from "./Message/AddMessage/AddMessageContainer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ));
  let mesaggesElements = props.messagesData.map((el) => (
    <Message text={el.text} id={el.id} />
  ));
  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="Messages">
        {mesaggesElements}
        <AddMessageContainer store={props.store} />
      </div>
    </div>
  );
};
export default Dialogs;

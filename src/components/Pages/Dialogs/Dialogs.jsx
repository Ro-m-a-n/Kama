import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddText from "./../../Global/AddText";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ));
  let mesaggesElements = props.state.messagesData.map((el) => (
    <Message text={el.text} id={el.id} />
  ));
  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="Messages">
        {mesaggesElements}
        <AddText />
      </div>
    </div>
  );
};
export default Dialogs;

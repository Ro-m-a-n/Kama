import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessage from './Message/AddMessage/AddMessage';

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ));
  let mesaggesElements = props.messagesPage.messagesData.map((el) => (
    <Message text={el.text} id={el.id} />
  ));
  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="Messages">
        {mesaggesElements}
        <AddMessage
          messagesPage={props.messagesPage}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};
export default Dialogs;

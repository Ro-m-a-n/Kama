import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useState } from "react";
import AddMessageReduxForm from "./Message/AddMessage/AddMessage";

const Dialogs = (props) => {
  let currentRoute = props.routeParams.params.dialogId || 1;
const [currentMessageId, setCurrentMessageId] = useState(3)
  const onSubmit = (formData) => {
    props.addMessage(formData.message, currentRoute, currentMessageId);
  };

  let dialogsElements = props.dialogs.map((el) => (
    <Dialog name={el.name} id={el.dialogId} key={el.dialogId} />
  ));

  let currentDialogData = props.dialogs.filter(
    (el) => el.dialogId == currentRoute
  );

  let messageElements = currentDialogData[0].message.map((message) => {
    if(message.messageId>currentMessageId){setCurrentMessageId(currentMessageId+1)}
    return <Message text={message.text} key={message.messageId} />;
  });

  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="Messages">
        {messageElements}
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Dialogs;

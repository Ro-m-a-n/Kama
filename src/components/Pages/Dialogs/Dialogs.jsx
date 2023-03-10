import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useState } from "react";
import { reduxForm, reset } from "redux-form";
import { AddMessageForm } from "./Message/AddMessage/AddMessage";
import React from "react";
import { connect } from "react-redux";

const Dialogs = (props) => {
  let currentRoute = props.routeParams.params.dialogId || 1;
  const [currentMessageId, setCurrentMessageId] = useState(2);
  const onSubmit = (formData) => {
    props.addMessage(formData.message, currentRoute, currentMessageId);
    props.dispatch(reset("DialogAddMessage"));
  };

  let dialogsElements = props.dialogs.map((el) => (
    <Dialog name={el.name} id={el.dialogId} key={el.dialogId} />
  ));

  let currentDialogData = props.dialogs.filter(
    (el) => el.dialogId == currentRoute
  );
 

  let messageElements = currentDialogData[0].message.map((message) => {
    if (message.messageId === currentMessageId) {
      setCurrentMessageId(currentMessageId + 1);
    }
    return (
      <Message
        text={message.text}
        key={message.messageId}
        dialogId={currentRoute}
        messageId={message.messageId}
        deleteMessageAC={props.deleteMessageAC}
      />
    );
  });

  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="messages_wrap">
        <div className="messages">
          {messageElements}

          <AddMessageReduxForm onSubmit={onSubmit} full_widht="full_widht"/>
        </div>
        <div className="addPost_BG"></div>
      </div>
    </div>
  );
};

let AddMessageReduxForm = reduxForm({
  form: "DialogAddMessage",
})(AddMessageForm);

export default connect()(Dialogs);

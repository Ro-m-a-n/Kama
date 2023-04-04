import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useState } from "react";
import { reduxForm, reset } from "redux-form";
import { AddMessageForm } from "./Message/AddMessage/AddMessage";
import { connect } from "react-redux";
import { dialogsType } from "../../../Redux/messageReducer";
/**@jsxImportSource theme-ui */

type propsType = {
  dialogs: Array<dialogsType>;
  photo: string;
  addMessage: (
    message: string,
    dialogId: number,
    messageId: number,
    isMe: boolean
  ) => void;
  deleteMessageAC: (dialogId: number, messageId: number) => void;
  dispatch: any;
  routeParams: any;
};
const Dialogs: React.FC<propsType> = (props) => {
  let currentRoute = props.routeParams.params.dialogId || 1;
  const [currentMessageId, setCurrentMessageId] = useState(2);
  const onSubmit = (formData: any) => {
    props.addMessage(formData.message, currentRoute, currentMessageId, true);
    props.dispatch(reset("DialogAddMessage"));
  };

  let dialogsElements = props.dialogs.map((el) => (
    <Dialog
      name={el.name}
      id={el.dialogId}
      key={el.dialogId}
      dialogAvatar={el.dialogAvatar}
    />
  ));

  let currentDialogData = props.dialogs.filter(
    (el) => el.dialogId == currentRoute
  );

  let messageElements = currentDialogData[0].message.map((message) => {
    if (message.messageId === currentMessageId) {
      setCurrentMessageId(currentMessageId + 1);
    }

    let currentDialogAvatar = () => {
      if (message.isMe) {
        return props.photo;
      }
      return currentDialogData[0].dialogAvatar;
    };

    let currentDialogSide = () => {
      if (message.isMe) {
        return;
      }
      return "rightSide";
    };
    return (
      <Message
        text={message.text}
        key={message.messageId}
        dialogId={currentRoute}
        messageId={message.messageId}
        deleteMessageAC={props.deleteMessageAC}
        photo={currentDialogAvatar()}
        messagesSide={currentDialogSide()}
      />
    );
  });

  return (
    <div className="Dialogs">
      <div className="Dialogs__items">{dialogsElements}</div>
      <div className="messages" sx={{ bg: "primary" }}>
        {messageElements}
      </div>
      <div className="addMessage" sx={{ bg: "primary" }}>
        <AddMessageReduxForm onSubmit={onSubmit} full_widht="widht" />
      </div>
    </div>
  );
};

let AddMessageReduxForm = reduxForm({
  form: "DialogAddMessage",
})(AddMessageForm);

export default connect()(Dialogs);

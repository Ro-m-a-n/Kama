import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageReduxForm from './Message/AddMessage/AddMessage';


const Dialogs = (props) => {

  const onSubmit = (formData)=>{
    props.addMessage(formData.message)
  }

  if (!props.isAuth) {return <Navigate to={'/login'}/>}
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
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};
export default Dialogs;


import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  debugger;
  let dialogsData = props.store.getState().messagesPage.dialogsData
  let messagesData = props.store.getState().messagesPage.messagesData
  
  return <Dialogs dialogsData={dialogsData} messagesData={messagesData} store={props.store}/>
};
export default DialogsContainer;

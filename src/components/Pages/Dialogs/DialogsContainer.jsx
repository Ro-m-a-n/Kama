import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from './../../../hok/withAuthRedirect';
import { addMessage } from './../../../Redux/messageReducer';

const DialogsContainer =(props)=>{
  return <Dialogs {...props}/>
}

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  };
};


export default compose (
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(DialogsContainer)

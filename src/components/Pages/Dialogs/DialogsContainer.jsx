import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from './../../../hok/withAuthRedirect';

const DialogsContainer =(props)=>{}

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

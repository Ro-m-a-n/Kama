import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { dialogsData: state.messagesPage.dialogsData,
     messagesData: state.messagesPage.messagesData };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
export default DialogsContainer;

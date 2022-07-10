import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "./../UsersPage/Users/UsersContainer";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)
);

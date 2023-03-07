import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../../../hok/withAuthRedirect";
import { addMessage } from "./../../../Redux/messageReducer";
import withRouter from './../../../hok/withRouter';

const DialogsContainer = (props) => {
  return <Dialogs {...props} />;
};

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect,
  withRouter
)(DialogsContainer);

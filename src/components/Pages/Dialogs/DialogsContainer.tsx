import Dialogs from "./Dialogs.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hok/withAuthRedirect";
import {
  addMessage,
  deleteMessageAC,
  dialogsType,
} from "../../../Redux/messageReducer";
import withRouter from "../../../hok/withRouter";
import { appStateType } from "../../../Redux/reduxStore.js";

const DialogsContainer = (props: any) => {
  return <Dialogs {...props} />;
};

let mapStateToProps = (state: appStateType): MSPT => {
  return {
    dialogs: state.messagesPage.dialogs,
    photo: state.profilePage.photo,
  };
};

type MSPT = {
  dialogs: Array<dialogsType> | null;
  photo: string;
};
type MDPT = {
  addMessage: () => void;
  deleteMessageAC: () => void;
};
type OwnPT = {};

export default compose(
  connect<MSPT, MDPT, OwnPT, appStateType>(mapStateToProps, {
    addMessage,
    deleteMessageAC,
  }),
  withAuthRedirect,
  withRouter
)(DialogsContainer);
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>

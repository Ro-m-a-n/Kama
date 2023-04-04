import Dialogs from "./Dialogs";
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

type propsType = MSPT & MDPT & OwnPT;
const DialogsContainer: React.FC<propsType> = (props) => {
  return <Dialogs {...props} />;
};

let mapStateToProps = (state: appStateType): MSPT => {
  return {
    dialogs: state.messagesPage.dialogs,
    photo: state.profilePage.photo,
  };
};

type MSPT = {
  dialogs: Array<dialogsType>;
  photo: string;
};
type MDPT = {
  addMessage: (
    message: string,
    dialogId: number,
    messageId: number,
    isMe: boolean
  ) => void;

  deleteMessageAC: (dialogId: number, messageId: number) => void;
};
type OwnPT = { routeParams: object };

export default compose(
  connect<MSPT, MDPT, OwnPT, appStateType>(mapStateToProps, {
    addMessage,
    deleteMessageAC,
  }),
  withAuthRedirect,
  withRouter
)(DialogsContainer);
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>

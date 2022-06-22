import { UpdateMessageAreaActionCreator } from "../../../../../Redux/messageReducer";
import { AddMessageActionCreator } from "../../../../../Redux/messageReducer";
import AddMessage from "./AddMessage";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { newMessageTemp: state.messagesPage.newMessageTemp };
};
let mapDispatchToProps = (dispatch) => {
  return {
    AddMessageAction: () => {
      dispatch(AddMessageActionCreator());
    },
    UpdateMessageArea: (text) => {
      dispatch(UpdateMessageAreaActionCreator(text));
    },
  };
};

const AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage);
export default AddMessageContainer;

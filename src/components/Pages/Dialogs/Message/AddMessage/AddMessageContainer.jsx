import { updateMessage, addMessage} from "../../../../../Redux/messageReducer";
import AddMessage from "./AddMessage";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { newMessageTemp: state.messagesPage.newMessageTemp };
};


const AddMessageContainer = connect(
  mapStateToProps,{addMessage, updateMessage}
)(AddMessage);
export default AddMessageContainer;

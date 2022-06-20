import { UpdateMessageAreaActionCreator } from "../../../../../Redux/messageReducer";
import { AddMessageActionCreator } from "../../../../../Redux/messageReducer";
import AddMessage from './AddMessage';

const AddMessageContainer = (props) => {
  let state = props.store.getState().messagesPage;
  let AddMessageAction = () => {
    props.store.dispatch(AddMessageActionCreator());
  };
  let UpdateMessageArea = (text) => {
    props.store.dispatch(UpdateMessageAreaActionCreator(text));
  };

  return (
    <AddMessage
      AddMessageAction={AddMessageAction}
      UpdateMessageArea={UpdateMessageArea}
      newMessageTemp={state.newMessageTemp}
    />
  );
};
export default AddMessageContainer;

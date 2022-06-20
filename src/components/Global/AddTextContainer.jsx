import { UpdateTextAreaActionCreator } from "../../Redux/profileReducer";
import { AddTextActionCreator } from "../../Redux/profileReducer";
import AddText from './AddText';

const AddTextContainer = (props) => {
  let state = props.store.getState()
  let addText = () => {
    props.store.dispatch(AddTextActionCreator());
  };
  let onChangeTextArea = (text) => {
    props.store.dispatch(UpdateTextAreaActionCreator(text));
  };

  return <AddText addText={addText} onChangeTextArea={onChangeTextArea} newTextPost={state.profilePage.newTextPost}/>;
};
export default AddTextContainer;

import { UpdateTextAreaActionCreator } from "../../Redux/profileReducer";
import { AddTextActionCreator } from "../../Redux/profileReducer";
import AddText from "./AddText";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { newTextPost: state.profilePage.newTextPost };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addText: () => {
      dispatch(AddTextActionCreator());
    },
    onChangeTextArea: (text) => {
      dispatch(UpdateTextAreaActionCreator(text));
    },
  };
};

const AddTextContainer = connect(mapStateToProps, mapDispatchToProps)(AddText);
export default AddTextContainer;

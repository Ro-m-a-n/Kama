import { updateTextArea, addText } from "../../Redux/profileReducer";
import AddText from "./AddText";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { newTextPost: state.profilePage.newTextPost };
};


const AddTextContainer = connect(mapStateToProps, {addText, updateTextArea})(AddText);
export default AddTextContainer;

import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addText } from './../../../../Redux/profileReducer';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};


const MyPostsContainer = connect(mapStateToProps, {addText})(MyPosts);
export default MyPostsContainer;

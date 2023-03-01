import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addText } from './../../../../Redux/profileReducer';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    photo: state.profilePage.photo,
    profile: state.profilePage.myProfileInfo,
  };
};


const MyPostsContainer = connect(mapStateToProps, {addText})(MyPosts);
export default MyPostsContainer;

import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addText,
  deletePostAC,
  likeThisPostAC,
  unlikeThisPostAC,
} from "./../../../../Redux/profileReducer";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    photo: state.profilePage.photo,
    profile: state.profilePage.myProfileInfo,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addText,
  deletePostAC,
  likeThisPostAC,
  unlikeThisPostAC,
})(MyPosts);
export default MyPostsContainer;

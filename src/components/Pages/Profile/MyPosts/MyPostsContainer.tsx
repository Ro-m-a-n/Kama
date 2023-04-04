import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addText,
  deletePostAC,
  likeThisPostAC,
  unlikeThisPostAC,
} from "../../../../Redux/profileReducer";
import { appStateType } from "../../../../Redux/reduxStore";

let mapStateToProps = (state:appStateType) => {
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

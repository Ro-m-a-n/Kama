import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  PostType,
  ProfileInfoType,
  addText,
  deletePostAC,
  likeThisPostAC,
  unlikeThisPostAC,
} from "../../../../Redux/profileReducer";
import { appStateType } from "../../../../Redux/reduxStore";

type propsType = MSPT & MDPT & OwnPT;
type MSPT = {
  postsData: Array<PostType>;
  photo: string;
  profile: ProfileInfoType;
};

type MDPT = {
  deletePostAC: (id: number) => void;
  likeThisPostAC: (id: number) => void;
  unlikeThisPostAC: (id: number) => void;
  addText: (message: string, postId: number) => void;
};
type OwnPT = {};
let mapStateToProps = (state: appStateType): MSPT => {
  return {
    postsData: state.profilePage.postsData,
    photo: state.profilePage.photo,
    profile: state.profilePage.myProfileInfo,
  };
};

const MyPostsContainer: React.FC<propsType> = (props) => <MyPosts {...props} />;

export default connect<MSPT, MDPT, OwnPT, appStateType>(mapStateToProps, {
  addText,
  deletePostAC,
  likeThisPostAC,
  unlikeThisPostAC,
})(MyPostsContainer);


import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>

      <MyPostsContainer store={props.store} profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  );
};
export default Profile;


import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo {...props}/>

      <MyPostsContainer/>
    </div>
  );
};
export default Profile;

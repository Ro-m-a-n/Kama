import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  return (
    <div className="profileWrapper">
      <MyPostsContainer />
      <ProfileInfo {...props} />
    </div>
  );
};
export default Profile;

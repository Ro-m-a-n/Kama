import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>

      <MyPosts postsData={props.state.postsData}/>
    </div>
  );
};
export default Profile;

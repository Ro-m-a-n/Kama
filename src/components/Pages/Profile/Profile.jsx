import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>

      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  );
};
export default Profile;

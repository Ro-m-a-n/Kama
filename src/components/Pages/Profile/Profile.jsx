import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>

      <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newTextPost={props.profilePage.newTextPost} updateTextArea={props.updateTextArea}/>
    </div>
  );
};
export default Profile;

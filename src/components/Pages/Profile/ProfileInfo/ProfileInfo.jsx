import Preloader from "../../../Global/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <>
      <div>Profile</div>
      <ProfileStatus status='status' />
    </>
  );
};
export default ProfileInfo;

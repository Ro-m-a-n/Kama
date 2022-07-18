import Preloader from "../../../Global/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <>
      <div>Profile</div>
      <ProfileStatus status={props.status} editStatusAC={props.editStatusAC} updateStatusTC={props.updateStatusTC} />
    </>
  );
};
export default ProfileInfo;

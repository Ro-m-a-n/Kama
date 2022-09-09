import Preloader from "../../../Global/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../../assets/images/userAvatarDefault.png";

const ProfileInfo = (props) => {
  return (
    <>
      <div>
        <img src={userPhoto} className="Users__avatar" />
      </div>
      <ProfileStatus
        status={props.status}
        editStatusAC={props.editStatusAC}
        updateStatusTC={props.updateStatusTC}
      />
    </>
  );
};
export default ProfileInfo;

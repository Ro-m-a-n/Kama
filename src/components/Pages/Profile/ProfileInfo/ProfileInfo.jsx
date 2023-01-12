import Preloader from "../../../Global/Preloader/Preloader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
    if (e.target) {
      props.savePhotoTC(e.target.files[0]);
    }
  };
   return (
    <>
      <div>
        <img src={props.photo} className="Users__avatar" />
      </div>
      <div>
        <input type={"file"} onChange={onMainPhotoSelected} />
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

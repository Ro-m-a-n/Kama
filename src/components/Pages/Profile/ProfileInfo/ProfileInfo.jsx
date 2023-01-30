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
      <div>
        <div>
          <b>Full name :</b> {props.fullName}
        </div>
        <div>
          <b>Looking for a job :</b> {props.lookingForAJob ? "yes" : "no"}
        </div>
        {props.lookingForAJob && (
          <div>
            <b>My professional skills:</b> {props.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me :</b> {props.aboutMe}
        </div>
        <div>
          <b>Contacts :</b>

          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>

      <ProfileStatus
        status={props.status}
        editStatusAC={props.editStatusAC}
        updateStatusTC={props.updateStatusTC}
      />
    </>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {" "}
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};
export default ProfileInfo;

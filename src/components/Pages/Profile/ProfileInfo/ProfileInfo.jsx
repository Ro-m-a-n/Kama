import Preloader from "../../../Global/Preloader/Preloader";
import React, { useState } from "react";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDescriptionReduxForm from "./ProfileDescription/ProfileDescriptionEditMode";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  const switchToEditMode = () => {
    return setEditMode(true);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target) {
      props.savePhotoTC(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    props.saveProfileDescriptionTC(formData);
    // setEditMode(false)
  };
  return (
    <>
      <div>
        <img src={props.photo} className="Users__avatar" />
      </div>
      <div>
        <input type={"file"} onChange={onMainPhotoSelected} />
      </div>

      {editMode ? (
        <ProfileDescriptionReduxForm onSubmit={onSubmit} initialValues={props.profile} />
      ) : (
        <ProfileDescription {...props} switchToEditMode={switchToEditMode} />
      )}

      <ProfileStatus
        status={props.status}
        editStatusAC={props.editStatusAC}
        updateStatusTC={props.updateStatusTC}
      />
    </>
  );
};

const ProfileDescription = (props) => {
    return (
    <>
      <div>
        <div>
          {<button onClick={props.switchToEditMode}> Edit profile</button>}
        </div>
        <div>
          <b>Full name :</b> {props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job :</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
          </div>
        )}
       
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


import React, { useState } from "react";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDescriptionReduxForm from "./ProfileDescription/ProfileDescriptionEditMode";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

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
    props.saveProfileDescriptionTC(formData).then(() => {
      setEditMode(false);
    });
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
        <ProfileDescriptionReduxForm
          onSubmit={onSubmit}
          initialValues={props.profile}
        />
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


export default ProfileInfo;

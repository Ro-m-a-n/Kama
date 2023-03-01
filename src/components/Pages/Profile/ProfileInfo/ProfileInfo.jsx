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
    <div className="profileInfoWrapper">
      <div className="Users__avatar">
        <img src={props.photo} />

        <div className="uploadFile_wrap">
          <label for="file-input" className="upload_avatar__label">
            Upload File
          </label>
          <input
            type={"file"}
            id="file-input"
            className="upload_avatar"
            onChange={onMainPhotoSelected}
          />
        </div>
      </div>
      <ProfileStatus
        status={props.status}
        editStatusAC={props.editStatusAC}
        updateStatusTC={props.updateStatusTC}
      />

      {editMode ? (
        <ProfileDescriptionReduxForm
          onSubmit={onSubmit}
          initialValues={props.profile}
        />
      ) : (
        <ProfileDescription {...props} switchToEditMode={switchToEditMode} />
      )}

      
    </div>
  );
};

export default ProfileInfo;

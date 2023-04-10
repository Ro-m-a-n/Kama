import React, { useState } from "react";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDescriptionReduxForm from "./ProfileDescription/ProfileDescriptionEditMode";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import { ProfileInfoType } from "../../../../Redux/profileReducer";
/**@jsxImportSource theme-ui */

type PropsType = {
  savePhotoTC: (photo: any) => void;
  saveProfileDescriptionTC: (formData: any) => any;
  photo: string;
  status: string;
  editStatusAC: (status: string) => void;
  updateStatusTC: (status: string) => void;
  profile: ProfileInfoType;
};

const ProfileInfo: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  const switchToEditMode = () => setEditMode(true);

  const onMainPhotoSelected = (e: any) => {
    console.log(e);
    if (e.target) {
      props.savePhotoTC(e.target.files[0]);
    }
  };
  const onSubmit = (formData: any) => {
    props.saveProfileDescriptionTC(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div className="profileInfoWrapper" sx={{ bg: "primary" }}>
      <div className="Users__avatar">
        <img src={props.photo} />
        <div className="uploadFile_wrap">
          <label htmlFor="file-input" className="upload_avatar__label">
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
          initialValues={props.profile.contacts}
        />
      ) : (
        <ProfileDescription {...props} switchToEditMode={switchToEditMode} />
      )}
    </div>
  );
};

export default ProfileInfo;

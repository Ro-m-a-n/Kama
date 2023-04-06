import React, { useState, useEffect } from "react";

type propsType = {
  status: string;
  editStatusAC: (text: string) => void;
  updateStatusTC: (status: string) => void;
};

const ProfileStatus: React.FC<propsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  let activateEditMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusTC(status);
  };
  const onStatusChange = (e: any) => {
    setStatus(e.target.value);
  };
  return (
    <div className="profile_status">
      {!editMode && (
        <div>
          <b>Status : </b>
          <span className="profile_status__text" onClick={activateEditMode}>
            {props.status || ":)"}
          </span>
        </div>
      )}
      {editMode && (
        <div className="profile_status__input">
          <input
            value={status}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;

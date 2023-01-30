import React, { useState, useEffect } from "react";
const ProfileStatus = (props) => {
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
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <b>Status : </b>
          <span onDoubleClick={activateEditMode}>{props.status || ":)"}</span>
        </div>
      )}
      {editMode && (
        <div>
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

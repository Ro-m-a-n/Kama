import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../../../hok/withAuthRedirect";
import {
  editStatusAC,
  getStatusTC,
  updateStatusTC,
  savePhotoTC,
  getMyProfileTC,
  saveProfileDescriptionTC,
} from "./../../../Redux/profileReducer";
import { currentUserApi } from "./../../../api/api";
const ProfileContainer = (props) => {
  useEffect(() => {
    currentUserApi.getStatus(props.authorizedUserId).then((response) => {
      if (response) {
        props.editStatusAC(response);
      }
    });
    props.getMyProfileTC(props.userId);
  }, []);

  return <Profile {...props} />;
};

let mapStateToProps = (state) => ({
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  photo: state.profilePage.photo,
  profile: state.profilePage.myProfileInfo,
  userId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, {
    editStatusAC,
    getStatusTC,
    updateStatusTC,
    savePhotoTC,
    getMyProfileTC,
    saveProfileDescriptionTC,
  }),
  withAuthRedirect
)(ProfileContainer);

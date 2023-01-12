import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../../../hok/withAuthRedirect";
import {
  editStatusAC,
  getStatusTC,
  updateStatusTC,
  savePhotoTC,
} from "./../../../Redux/profileReducer";
import { currentUserApi } from "./../../../api/api";
class ProfileContainer extends React.Component {
  componentDidMount() {
    currentUserApi.getStatus(this.props.authorizedUserId).then((response) => {
      if (response) {
        this.props.editStatusAC(response);
      }
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  photo: state.profilePage.photo,
});

export default compose(
  connect(mapStateToProps, {
    editStatusAC,
    getStatusTC,
    updateStatusTC,
    savePhotoTC,
  }),
  withAuthRedirect
)(ProfileContainer);

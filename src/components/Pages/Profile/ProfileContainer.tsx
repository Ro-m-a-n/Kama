import { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hok/withAuthRedirect";
import {
  editStatusAC,
  getStatusTC,
  updateStatusTC,
  savePhotoTC,
  getMyProfileTC,
  saveProfileDescriptionTC,
  ProfileInfoType,
} from "../../../Redux/profileReducer";
import { currentUserApi } from "../../../api/api";
import { appStateType } from "../../../Redux/reduxStore";
type propsType = MSPT & MDPT & OwnPT;
const ProfileContainer: React.FC<propsType> = (props) => {
  useEffect(() => {
    currentUserApi.getStatus(props.authorizedUserId).then((response: any) => {
      if (response) {
        props.editStatusAC(response);
      }
    });
    props.getMyProfileTC(props.userId);
  }, []);

  return <Profile {...props} />;
};

let mapStateToProps = (state: appStateType): MSPT => ({
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  photo: state.profilePage.photo,
  profile: state.profilePage.myProfileInfo,
  userId: state.auth.id,
});

type MSPT = {
  status: string | null;
  authorizedUserId: number;
  isAuth: boolean;
  photo: string;
  profile: ProfileInfoType;
  userId: number;
};
type MDPT = {
  editStatusAC: (text: string) => void;
  getStatusTC: (userId: number) => void;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (file: any) => void;
  getMyProfileTC: (myId: number) => void;
  saveProfileDescriptionTC: (profile: any) => void;
};
type OwnPT = {};
export default compose<propsType>(
  connect<MSPT, MDPT, OwnPT, appStateType>(mapStateToProps, {
    editStatusAC,
    getStatusTC,
    updateStatusTC,
    savePhotoTC,
    getMyProfileTC,
    saveProfileDescriptionTC,
  }),
  withAuthRedirect
)(ProfileContainer);

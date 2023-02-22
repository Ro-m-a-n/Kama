import React, { useEffect } from "react";
import CurrentUser from "./CurrentUser";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  setCurrentUserInfo,
  getCurrentUserTC,
} from "../../../../Redux/usersReducer";
import { withAuthRedirect } from "./../../../../hok/withAuthRedirect";
import { compose } from "redux";

const CurrentUserContainer = (props) => {
  useEffect(() => {
    props.getCurrentUserTC(props.router);
  }, []);

  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <CurrentUser {...props} currentUserInfo={props.currentUserInfo} />;
};
function withRouter(CurrentUserContainer) {
  function CurrentUserWithRouter(props) {
    let params = useParams();
    return <CurrentUserContainer {...props} router={{ params }} />;
  }
  return CurrentUserWithRouter;
}

let mapStateToProps = (state) => ({
  currentUserInfo: state.usersPage.currentUserInfo,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { setCurrentUserInfo, getCurrentUserTC }),
  withRouter
)(CurrentUserContainer);

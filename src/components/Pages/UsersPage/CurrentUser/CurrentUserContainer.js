import React from "react";
import CurrentUser from "./CurrentUser";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  setCurrentUserInfo,
  getCurrentUserTC,
} from "../../../../Redux/usersReducer";
import { withAuthRedirect } from './../../../../hok/withAuthRedirect';

class CurrentUserContainer extends React.Component {
  componentDidMount() {
    this.props.getCurrentUserTC(this.props.router);
  }
  render() {
    if (!this.props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return (
      <CurrentUser
        {...this.props}
        currentUserInfo={this.props.currentUserInfo}
      />
    );
  }
}

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

export default withAuthRedirect(
  connect(mapStateToProps, { setCurrentUserInfo, getCurrentUserTC })(
    withRouter(CurrentUserContainer)
  )
);

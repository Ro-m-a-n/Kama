import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import withAuthRedirect from './../UsersPage/Users/UsersContainer';

class ProfileContainer extends React.Component {
   render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({});

export default withAuthRedirect(connect(mapStateToProps, {})(ProfileContainer));

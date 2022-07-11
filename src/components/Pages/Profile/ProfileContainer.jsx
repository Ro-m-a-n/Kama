import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "./../../../hok/withAuthRedirect";

class ProfileContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({});

export default compose(
  connect(mapStateToProps, {}),
  withAuthRedirect
)(ProfileContainer);

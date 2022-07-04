import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {
   render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ProfileContainer);

import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "./../../../Redux/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    
    let userId = this.props.router.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

function withRouter(ProfileContainer) {
  function ProfileWithRouter(props) {
    let params = useParams();
    return <ProfileContainer {...props} router={{ params }} />;
  }

  return ProfileWithRouter;
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);

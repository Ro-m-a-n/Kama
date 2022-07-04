import React from "react";
import CurrentUser from "./CurrentUser";
import * as axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentUserInfo } from "../../../../Redux/usersReducer";

class CurrentUserContainer extends React.Component {
      componentDidMount() {
          let userId = this.props.router.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setCurrentUserInfo(response.data);
      });
  }
  render() {
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

export default connect(mapStateToProps, { setCurrentUserInfo })(
  withRouter(CurrentUserContainer)
);

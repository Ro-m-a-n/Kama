import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setSendedRequest,
  getUsersTC,
  followTC,
  unfollowTC,
} from "./../../../../Redux/usersReducer";
import Preloader from "../../../Global/Preloader/Preloader";
import { withAuthRedirect } from "./../../../../hok/withAuthRedirect";
import compose from "lodash/fp/compose";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsersTC(p, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          usersQuantity={this.props.usersQuantity}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged.bind(this)}
          users={this.props.users}
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
          sendedRequest={this.props.sendedRequest}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  usersQuantity: state.usersPage.usersQuantity,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  sendedRequest: state.usersPage.sendedRequest,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    setSendedRequest,
    getUsersTC,
    followTC,
    unfollowTC,
  }),
  withAuthRedirect
)(UsersAPI);

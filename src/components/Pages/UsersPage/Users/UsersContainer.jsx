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
import { getCurrentPage, getIsFetching, getPageSize, getSendedRequest, getUsers } from "../../../../Redux/selectors";
import { getUsersQuantity } from './../../../../Redux/selectors';

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

// users: state.usersPage.users,
// pageSize: state.usersPage.pageSize,
// usersQuantity: state.usersPage.usersQuantity,
// currentPage: state.usersPage.currentPage,
// isFetching: state.usersPage.isFetching,
// sendedRequest: state.usersPage.sendedRequest,

let mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersQuantity: getUsersQuantity(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  sendedRequest: getSendedRequest(state),
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

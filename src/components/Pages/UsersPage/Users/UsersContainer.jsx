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

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  //   this.props.changeFetching(true);
  //   usersAPI
  //     .getUsers(this.props.currentPage, this.props.pageSize)
  //     .then((data) => {
  //       this.props.changeFetching(false);
  //       this.props.setUsers(data.items);
  //       this.props.setUsersQuantity(data.totalCount);
  //     });

  onPageChanged = (p) => {
    this.props.getUsersTC(p, this.props.pageSize);
  };

  // this.props.changeFetching(true);
  // this.props.setCurrentPage(p);
  // usersAPI.getUsers(p, this.props.pageSize).then((response) => {
  //   this.props.changeFetching(false);
  //   this.props.setUsers(response.data.items);
  // });

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
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersQuantity: state.usersPage.usersQuantity,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    sendedRequest: state.usersPage.sendedRequest,
  };
};

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  setSendedRequest,
  getUsersTC,
  followTC,
  unfollowTC,
})(UsersAPI);
export default UsersContainer;

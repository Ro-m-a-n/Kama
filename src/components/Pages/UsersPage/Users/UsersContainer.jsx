import React from "react";
import * as axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersQuantity,
  changeFetching,
} from "./../../../../Redux/usersReducer";
import Preloader from "../../../Global/Preloader/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.changeFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true,
          headers: {'API-KEY':'2c9a99e4-c8c3-402a-850e-d11227470f7d'}  }
      )
      .then((response) => {
        this.props.changeFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersQuantity(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.changeFetching(true);
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
        { withCredentials: true,
          headers: {'API-KEY':'2c9a99e4-c8c3-402a-850e-d11227470f7d'}  }
      )
      .then((response) => {
        this.props.changeFetching(false);
        this.props.setUsers(response.data.items);
      });
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
          unFollow={this.props.unFollow}
          follow={this.props.follow}
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersQuantity,
  changeFetching,
})(UsersAPI);
export default UsersContainer;

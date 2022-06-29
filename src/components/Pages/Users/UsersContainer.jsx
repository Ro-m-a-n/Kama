import React from "react";
import * as axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  unFollowAC,
  setUsers,
  setCurrentPageAC,
  usersQuantityAC,
  isFetchingAC,
} from "./../../../Redux/usersReducer";
import Preloader from "../../Global/Preloader/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.isFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.isFetchingAC(false);
        this.props.setUsers(response.data.items);
        this.props.usersQuantityAC(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.isFetchingAC(true);
    this.props.setCurrentPageAC(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.isFetchingAC(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}

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
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unFollow: (id) => {
      dispatch(unFollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
    setCurrentPageAC: (p) => {
      dispatch(setCurrentPageAC(p));
    },
    usersQuantityAC: (totalCount) => {
      dispatch(usersQuantityAC(totalCount));
    },
    isFetchingAC: (isFetching) => {
      dispatch(isFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersContainer;

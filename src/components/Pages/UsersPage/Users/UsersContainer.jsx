import React, { useEffect } from "react";
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
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getSendedRequest,
  getUsers,
} from "../../../../Redux/selectors";
import { getUsersQuantity } from "./../../../../Redux/selectors";

const UsersAPI = (props) => {
  useEffect(() => {
    props.getUsersTC(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (p) => {
    props.getUsersTC(p, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}

      <Users
        usersQuantity={props.usersQuantity}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        followTC={props.followTC}
        unfollowTC={props.unfollowTC}
        sendedRequest={props.sendedRequest}
      />
    </>
  );
};

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

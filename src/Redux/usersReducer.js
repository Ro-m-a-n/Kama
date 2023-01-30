import { usersAPI, currentUserApi } from "../api/api";

const FOLLOW = "follow";
const UNFOLLOW = "unFollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_QUANTITY = "SET_USERS_QUANTITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_USER_INFO = "SET_CURRENT_USER_INFO";
const TOGGLE_SENDED_REQUEST = "TOGGLE_SENDED_REQUEST";
let initialState = {
  users: [],
  pageSize: 4,
  usersQuantity: 100,
  currentPage: 1,
  isFetching: false,
  currentUserInfo: null,
  sendedRequest: [],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_QUANTITY:
      return { ...state, usersQuantity: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.changeFetching };
    case SET_CURRENT_USER_INFO:
      return { ...state, currentUserInfo: action.userInfo };
    case TOGGLE_SENDED_REQUEST:
      return {
        ...state,

        sendedRequest: action.request
          ? [...state.sendedRequest, action.id]
          : state.sendedRequest.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};
export const follow = (id) => ({ type: FOLLOW, id });
export const unFollow = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersQuantity = (totalCount) => ({
  type: SET_USERS_QUANTITY,
  totalCount,
});
export const changeFetching = (changeFetching) => ({
  type: TOGGLE_IS_FETCHING,
  changeFetching,
});
export const setCurrentUserInfo = (userInfo) => ({
  type: SET_CURRENT_USER_INFO,
  userInfo,
});
export const setSendedRequest = (request, id) => ({
  type: TOGGLE_SENDED_REQUEST,
  request,
  id,
});

export const getUsersTC = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(changeFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(changeFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersQuantity(data.totalCount));
    });
  };
};

export const unfollowTC = (id) => {
  return (dispatch) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.unfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const followTC = (id) => {
  return (dispatch) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.follow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const getCurrentUserTC = (router) => {
  return (dispatch) => {
    currentUserApi.getUser(router).then((data) => {
      dispatch(setCurrentUserInfo(data));
    });
  };
};

export default usersReducer;


import { Dispatch } from "react";
import { usersAPI, currentUserApi } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { appStateType } from "./reduxStore";

const FOLLOW = "follow";
const UNFOLLOW = "unFollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_QUANTITY = "SET_USERS_QUANTITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_USER_INFO = "SET_CURRENT_USER_INFO";
const TOGGLE_SENDED_REQUEST = "TOGGLE_SENDED_REQUEST";
type initialStateType = typeof initialState;
type usersType = {
  followed: boolean;
  id: number;
  name: string;
  photos: photosType;
  status: null;
  uniqueUrlName: null | string;
};
type photosType = {
  small: string | null;
  large: string | null;
};

let initialState = {
  users: [] as Array<usersType>,
  pageSize: 4 as number,
  usersQuantity: 100 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  currentUserInfo: null as usersType | null,
  sendedRequest: [] as Array<number>,
};

let usersReducer = (
  state: initialStateType = initialState,
  action: actionsTypes
): initialStateType => {
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
type actionsTypes =
  | followType
  | unfollowType
  | setUsersType
  | setCurrentPageType
  | setUsersQuantityType
  | changeFetchingType
  | setCurrentUserInfo
  | setSendedRequestType;
export type followType = {
  type: typeof FOLLOW;
  id: number;
};
export const follow = (id: number): followType => ({ type: FOLLOW, id });
export type unfollowType = {
  type: typeof UNFOLLOW;
  id: number;
};
export const unFollow = (id: number): unfollowType => ({ type: UNFOLLOW, id });

export type setUsersType = {
  type: typeof SET_USERS;
  users: Array<usersType>;
};
export const setUsers = (users: Array<usersType>): setUsersType => ({
  type: SET_USERS,
  users,
});
export type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export type setUsersQuantityType = {
  type: typeof SET_USERS_QUANTITY;
  totalCount: number;
};
export const setUsersQuantity = (totalCount: number): setUsersQuantityType => ({
  type: SET_USERS_QUANTITY,
  totalCount,
});
export type changeFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  changeFetching: boolean;
};
export const changeFetching = (
  changeFetching: boolean
): changeFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  changeFetching,
});

export type setCurrentUserInfo = {
  type: typeof SET_CURRENT_USER_INFO;
  userInfo: usersType;
};
export const setCurrentUserInfo = (
  userInfo: usersType
): setCurrentUserInfo => ({
  type: SET_CURRENT_USER_INFO,
  userInfo,
});

export type setSendedRequestType = {
  type: typeof TOGGLE_SENDED_REQUEST;
  request: boolean;
  id: number;
};
export const setSendedRequest = (
  request: boolean,
  id: number
): setSendedRequestType => ({
  type: TOGGLE_SENDED_REQUEST,
  request,
  id,
});
type thunkType = ThunkAction<void, appStateType, unknown, actionsTypes>;
export const getUsersTC = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<actionsTypes>) => {
    dispatch(changeFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      dispatch(changeFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersQuantity(data.totalCount));
    });
  };
};

export const unfollowTC = (id: number): thunkType => {
  return (dispatch) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.unfollow(id).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const followTC = (id: number): thunkType => {
  return (dispatch) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.follow(id).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const getCurrentUserTC = (router: any): thunkType => {
  return (dispatch) => {
    currentUserApi.getUser(router).then((data: any) => {
      dispatch(setCurrentUserInfo(data));
    });
  };
};

export default usersReducer;

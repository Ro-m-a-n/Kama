import { usersAPI, currentUserApi } from "../api/api";

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
type sendedRequestType = {
  id: number;
};
let initialState = {
  users: [] as Array<usersType>,
  pageSize: 4 as number,
  usersQuantity: 100 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  currentUserInfo: null as usersType | null,
  sendedRequest: [] as Array<sendedRequestType>,
};

let usersReducer = (
  state: initialStateType = initialState,
  action: any
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

export const follow = (id: number) => ({ type: FOLLOW, id });
export const unFollow = (id: number) => ({ type: UNFOLLOW, id });
export const setUsers = (users: Array<usersType>) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersQuantity = (totalCount: number) => ({
  type: SET_USERS_QUANTITY,
  totalCount,
});
export const changeFetching = (changeFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  changeFetching,
});
export const setCurrentUserInfo = (userInfo: usersType) => ({
  type: SET_CURRENT_USER_INFO,
  userInfo,
});
export const setSendedRequest = (request: boolean, id: number) => ({
  type: TOGGLE_SENDED_REQUEST,
  request,
  id,
});

export const getUsersTC = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(changeFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      dispatch(changeFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersQuantity(data.totalCount));
    });
  };
};

export const unfollowTC = (id: number) => {
  return (dispatch: any) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.unfollow(id).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const followTC = (id: number) => {
  return (dispatch: any) => {
    dispatch(setSendedRequest(true, id));
    usersAPI.follow(id).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
        dispatch(setSendedRequest(false, id));
      }
    });
  };
};
export const getCurrentUserTC = (router: any) => {
  return (dispatch: any) => {
    currentUserApi.getUser(router).then((data: any) => {
      dispatch(setCurrentUserInfo(data));
    });
  };
};

export default usersReducer;

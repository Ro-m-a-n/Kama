const FOLLOW = "follow";
const UNFOLLOW = "unFollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_QUANTITY = "SET_USERS_QUANTITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_USER_INFO = "SET_CURRENT_USER_INFO";
let initialState = {
  users: [],
  pageSize: 4,
  usersQuantity: 100,
  currentPage: 1,
  isFetching: false,
  currentUserInfo: null,
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
export default usersReducer;

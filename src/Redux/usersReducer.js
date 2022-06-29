const FOLLOW = "follow";
const UNFOLLOW = "unFollow";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_QUANTITY='SET_USERS_QUANTITY';
let initialState = {
  users: [],
  pageSize: 4,
  usersQuantity: 9,
  currentPage: 1,
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
      return { ...state, users: [ ...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
      case SET_USERS_QUANTITY:
      return { ...state, usersQuantity: action.totalCount };
    default:
      return state;
  }
};
export const followAC = (id) => ({ type: FOLLOW, id: id });
export const unFollowAC = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
export const usersQuantityAC= (totalCount)=>({type:SET_USERS_QUANTITY, totalCount})
export default usersReducer;

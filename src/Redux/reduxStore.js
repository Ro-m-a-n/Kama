import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers);

export default store;
window.store = store;

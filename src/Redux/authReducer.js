import { authAPI, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null then captcha is not required
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case "setCaptchaUrl":
      return {
        ...state,
        captchaUrl: action.url,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});
export const setCaptchaUrl = (url) => ({
  type: "setCaptchaUrl",
  url,
});

export const isLoginedTC = () => (dispatch) => {
  return authAPI.isLogined().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const loginTC = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(isLoginedTC());
      } else {
        if (data.resultCode === 10) {
          dispatch(getCaptchaTC());
        }
        let message =
          data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logoutTC = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
export const getCaptchaTC = () => {
  return (dispatch) => {
    securityApi.getCaptchaUrl().then((response) => {
      dispatch(setCaptchaUrl(response.url));
    });
  };
};

export default authReducer;

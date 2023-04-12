import { authAPI, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
type InitialStateType = typeof initialState;

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null, // if null then captcha is not required
};

let authReducer = (state: InitialStateType = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };

    default:
      return state;
  }
};

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  data: object;
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

type SetCaptchaUrlType = {
  type: typeof SET_CAPTCHA_URL;
  url: string;
};

export const setCaptchaUrl = (url: string): SetCaptchaUrlType => ({
  type: SET_CAPTCHA_URL,
  url,
});

export const isLoginedTC = () => (dispatch: any) => {
  return authAPI.isLogined().then((data: any) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const loginTC = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any
) => {
  return (dispatch: any) => {
    authAPI.login(email, password, rememberMe, captcha).then((data: any) => {
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
  return (dispatch: any) => {
    authAPI.logout().then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
export const getCaptchaTC = () => {
  return (dispatch: any) => {
    securityApi.getCaptchaUrl().then((response: any) => {
      dispatch(setCaptchaUrl(response.url));
    });
  };
};

export default authReducer;

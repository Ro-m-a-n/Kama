
import { isLoginedTC } from "./authReducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
export const initializedSucces = () => ({
  type: INITIALIZED_SUCCES,
});

export const initializeAppTC = () => (dispatch) => {
  let promise = dispatch(isLoginedTC());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;

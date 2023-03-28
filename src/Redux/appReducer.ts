import { isLoginedTC } from "./authReducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

type InitialStateType = typeof initialState;
let initialState = {
  initialized: false as boolean,
};

let appReducer = (state: InitialStateType = initialState, action: any) => {
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
type InitializedSuccesType = {
  type: typeof INITIALIZED_SUCCES;
};

export const initializedSucces = (): InitializedSuccesType => ({
  type: INITIALIZED_SUCCES,
});

export const initializeAppTC = () => (dispatch: any) => {
  let promise = dispatch(isLoginedTC());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;

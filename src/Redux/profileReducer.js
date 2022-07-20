import { currentUserApi } from "../api/api";

const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const ADD_POST = "ADD-POST";
const EDIT_STATUS = "EDIT_STATUS";

let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 5 },
    { id: 2, text: "I finaly understood props", likes: 100 },
  ],
  newTextPost: "hello",
  status: 'Status',
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 3, text: state.newTextPost, likes: 0 },
        ],
        newTextPost: "",
      };
    }
    case UPDATE_TEXT_AREA: {
      return { ...state, newTextPost: action.newText };
    }
    case EDIT_STATUS: {
      return {
        ...state,
        status: action.text,
      };
    }
    default:
      return state;
  }
};

export const addText = () => {
  return {
    type: ADD_POST,
  };
};
export const updateTextArea = (text) => {
  return {
    type: UPDATE_TEXT_AREA,
    newText: text,
  };
};
export const editStatusAC = (text) => {
  return { type: EDIT_STATUS, text };
};

export const getStatusTC = (userId) => {
  return dispatch => {
    currentUserApi.getStatus(userId).then((response) => {
      dispatch(editStatusAC(response.data));
    });
  };
};

export const updateStatusTC = (status) => { 
  return  dispatch => {
    currentUserApi.updateStatus(status).then((response) => {
            if (response.resultCode === 0) {
        dispatch(editStatusAC(status));
      }
    });
  };
};

export default profileReducer;

import { currentUserApi } from "../api/api";
import defaultPhoto from "../assets/images/socialNet/instagram.png";
const ADD_POST = "ADD-POST";
const EDIT_STATUS = "EDIT_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";

let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 5 },
    { id: 2, text: "I finaly understood props", likes: 100 },
  ],
  status: "Status",
  photo: defaultPhoto,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [...state.postsData, { id: 3, text: action.text, likes: 0 }],
      };
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        photo: action.photo,
      };
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

export const addText = (text) => {
  return {
    type: ADD_POST,
    text,
  };
};
export const editStatusAC = (text) => {
  return { type: EDIT_STATUS, text };
};

export const getStatusTC = (userId) => {
  return async (dispatch) => {
    let response = await currentUserApi.getStatus(userId);
    dispatch(editStatusAC(response.data));
  };
};

export const updateStatusTC = (status) => {
  return (dispatch) => {
    currentUserApi.updateStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(editStatusAC(status));
      }
    });
  };
};

export const savePhotoSuccessAC = (photo) => {
  return { type: SAVE_PHOTO, photo };
};

export const savePhotoTC = (file) => {
  return async (dispatch) => {
    let response = await currentUserApi.savePhoto(file);

    if (response.resultCode === 0) {
      dispatch(savePhotoSuccessAC(response.data.photos.large));

    }
  };
};

export default profileReducer;

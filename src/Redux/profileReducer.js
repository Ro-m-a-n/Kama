import { currentUserApi } from "../api/api";
import defaultPhoto from "../assets/images/socialNet/instagram.png";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const EDIT_STATUS = "EDIT_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";
const SET_MY_PROFILE_INFO = "SET_MY_PROFILE_INFO";
const SET_PROFILE_DESCRIPTION = "SET_PROFILE_DESCRIPTION";
const DELETE_POST = "DELETE_POST";
const LIKE_THIS_POST = "LIKE_THIS_POST";
const UNLIKE_THIS_POST = "UNLIKE_THIS_POST";

let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 65 },
    { id: 2, text: "to be or not to be this is the question", likes: 25 },
    { id: 3, text: "if the weather is good, i go to sleep", likes: 12 },
    { id: 4, text: "lorem ipsum smth ", likes: 14 },
    { id: 5, text: "True way of Samurai", likes: 5 },
    { id: 6, text: "to be or not to be this is the question", likes: 5 },
  ],
  status: "Status",
  photo: defaultPhoto,
  myProfileInfo: {
    fullName: "",
    lookingForAJob: true,
    lookingForAJobDescription: "",
    aboutMe: "hey you",
    contacts: "1",
  },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: action.postId, text: action.text, likes: 0 },
        ],
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
    case SET_MY_PROFILE_INFO: {
      return { ...state, myProfileInfo: action.data };
    }

    case DELETE_POST: {
      let newPostsData = state.postsData.filter((key) => key.id !== action.id);
      return { ...state, postsData: newPostsData };
    }
    case LIKE_THIS_POST: {
      let newPostsData = state.postsData.filter((key) => {
        if (key.id == action.id) {
          key.likes++;
        }
        return key;
      });

      return { ...state, postsData: newPostsData };
    }

    case UNLIKE_THIS_POST: {
      let newPostsData = state.postsData.filter((key) => {
        if (key.id == action.id) {
          key.likes--;
        }
        return key;
      });

      return { ...state, postsData: newPostsData };
    }

    default:
      return state;
  }
};

export const addText = (text, postId) => {
  return {
    type: ADD_POST,
    text,
    postId,
  };
};
export const editStatusAC = (text) => {
  return { type: EDIT_STATUS, text };
};
export const setMyProfileInfoAC = (data) => {
  return { type: SET_MY_PROFILE_INFO, data };
};
export const setProfileDescriptionAC = (data) => {
  return { type: SET_PROFILE_DESCRIPTION, data };
};
export const deletePostAC = (id) => {
  return { type: DELETE_POST, id };
};
export const likeThisPostAC = (id) => {
  return { type: LIKE_THIS_POST, id };
};

export const unlikeThisPostAC = (id) => {
  return { type: UNLIKE_THIS_POST, id };
};

export const getStatusTC = (userId) => {
  return async (dispatch) => {
    let response = await currentUserApi.getStatus(userId);
    dispatch(editStatusAC(response.data));
  };
};

export const updateStatusTC = (status) => {
  return (dispatch) => {
    try {
      currentUserApi.updateStatus(status).then((response) => {
        if (response.resultCode === 0) {
          dispatch(editStatusAC(status));
        }
      });
    } catch (error) {} // dispatch some
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

export const getMyProfileTC = (myId) => {
  return (dispatch) => {
    currentUserApi.getMyProfile(myId).then((data) => {
      dispatch(setMyProfileInfoAC(data));
    });
  };
};

export const saveProfileDescriptionTC = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await currentUserApi.saveProfile(profile);
    if (response.resultCode === 0) {
      dispatch(getMyProfileTC(userId));
    } else {
      dispatch(
        stopSubmit("Profile_description", { _error: response.messages[0] })
      );
      return Promise.reject(response.messages[0]);
    }
  };
};

export default profileReducer;

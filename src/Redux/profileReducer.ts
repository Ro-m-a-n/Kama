import { currentUserApi } from "../api/api";
import defaultPhoto from "../assets/images/socialNet/instagram.png";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const EDIT_STATUS = "EDIT_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";
const SET_MY_PROFILE_INFO = "SET_MY_PROFILE_INFO";

const DELETE_POST = "DELETE_POST";
const LIKE_THIS_POST = "LIKE_THIS_POST";
const UNLIKE_THIS_POST = "UNLIKE_THIS_POST";

export type ProfileinitialState = typeof initialState;
let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 65 },
    { id: 2, text: "to be or not to be this is the question", likes: 25 },
    { id: 3, text: "if the weather is good, i go to sleep", likes: 12 },
    { id: 4, text: "lorem ipsum smth ", likes: 14 },
    { id: 5, text: "True way of Samurai", likes: 5 },
    { id: 6, text: "to be or not to be this is the question", likes: 5 },
  ] as Array<PostType>,
  status: "Status" as string | null,
  photo: defaultPhoto as string,
  myProfileInfo: {
    fullName: "My Name",
    lookingForAJob: true,
    lookingForAJobDescription: null,
    aboutMe: "hey you",
    contacts: {
      facebook: "facebook.com",
      github: "facebook.com",
      instagram: "facebook.com",
      mainLink: "facebook.com",
      twitter: "facebook.com",
      vk: "vkgovno.com",
      website: "facebook.com",
      youtube: "facebook.com",
    },
    userId: null,
    photos: null,
  } as ProfileInfoType,
};
export type InitialStateType = typeof initialState;

export type ProfileInfoType = {
  fullName: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  aboutMe: string | null;
  contacts: ContactsType;
  photos: PhotosType | null;
  userId: number | null;
};
export interface ContactsType {
  [key: string]: string;
}
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type PostType = {
  id: number;
  text: string;
  likes: number;
};
const profileReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
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
        if (key.id === action.id) {
          key.likes++;
        }
        return key;
      });

      return { ...state, postsData: newPostsData };
    }

    case UNLIKE_THIS_POST: {
      let newPostsData = state.postsData.filter((key) => {
        if (key.id === action.id) {
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
export type AddTextType = {
  type: typeof ADD_POST;
  text: string;
  postId: number;
};
export const addText = (text: string, postId: number): AddTextType => {
  return {
    type: ADD_POST,
    text,
    postId,
  };
};
export type EditStatusACType = {
  type: typeof EDIT_STATUS;
  text: string;
};
export const editStatusAC = (text: string): EditStatusACType => {
  return { type: EDIT_STATUS, text };
};
export type SetMyProfileInfoACType = {
  type: typeof SET_MY_PROFILE_INFO;
  data: ProfileInfoType;
};
export const setMyProfileInfoAC = (
  data: ProfileInfoType
): SetMyProfileInfoACType => {
  return { type: SET_MY_PROFILE_INFO, data };
};
export type deletePostACType = {
  type: typeof DELETE_POST;
  id: number;
};
export const deletePostAC = (id: number): deletePostACType => {
  return { type: DELETE_POST, id };
};
export type LikeThisPostACType = {
  type: typeof LIKE_THIS_POST;
  id: number;
};
export const likeThisPostAC = (id: number): LikeThisPostACType => {
  return { type: LIKE_THIS_POST, id };
};
export type UnlikeThisPostACType = {
  type: typeof UNLIKE_THIS_POST;
  id: number;
};
export const unlikeThisPostAC = (id: number): UnlikeThisPostACType => {
  return { type: UNLIKE_THIS_POST, id };
};

export const getStatusTC = (userId: number) => {
  return async (dispatch: any) => {
    let response = await currentUserApi.getStatus(userId);
    dispatch(editStatusAC(response.data));
  };
};

export const updateStatusTC = (status: string) => {
  return (dispatch: any) => {
    try {
      currentUserApi.updateStatus(status).then((response: any) => {
        if (response.resultCode === 0) {
          dispatch(editStatusAC(status));
        }
      });
    } catch (error) {} // dispatch some
  };
};

export const savePhotoSuccessAC = (photo: any) => {
  return { type: SAVE_PHOTO, photo };
};

export const savePhotoTC = (file: any) => {
  return async (dispatch: any) => {
    let response = await currentUserApi.savePhoto(file);

    if (response.resultCode === 0) {
      dispatch(savePhotoSuccessAC(response.data.photos.large));
    }
  };
};

export const getMyProfileTC = (myId: number) => {
  return (dispatch: any) => {
    currentUserApi.getMyProfile(myId).then((data: any) => {
      dispatch(setMyProfileInfoAC(data));
    });
  };
};

export const saveProfileDescriptionTC = (profile: any) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    let response = await currentUserApi.saveProfile(profile);
    if (response.resultCode === 0) {
      dispatch(getMyProfileTC(userId));
    } else {
      dispatch();
      stopSubmit("Profile_description", { _error: response.messages[0] });
      return Promise.reject(response.messages[0]);
    }
  };
};

export default profileReducer;

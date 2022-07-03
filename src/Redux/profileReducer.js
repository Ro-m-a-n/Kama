const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE='SET_USER_PROFILE'
let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 5 },
    { id: 2, text: "I finaly understood props", likes: 100 },
  ],
  newTextPost: "hello",
  profile:null
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
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
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export default profileReducer;

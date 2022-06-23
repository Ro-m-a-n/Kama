const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const ADD_POST = "ADD-POST";
let initialState = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 5 },
    { id: 2, text: "I finaly understood props", likes: 100 },
  ],
  newTextPost: "hello",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };
      let newPost = {
        id: 3,
        text: stateCopy.newTextPost,
        likes: 0,
      };

      stateCopy.postsData = [ ...state.postsData ];
      stateCopy.postsData.push(newPost);
      stateCopy.newTextPost = "";
      return stateCopy;
    }
    case UPDATE_TEXT_AREA: {
      let stateCopy = { ...state };
      stateCopy.newTextPost = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const AddTextActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const UpdateTextAreaActionCreator = (text) => {
  return {
    type: UPDATE_TEXT_AREA,
    newText: text,
  };
};
export default profileReducer;

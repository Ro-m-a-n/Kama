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
    case ADD_POST:
      let newPost = {
        id: 3,
        text: state.newTextPost,
        likes: 0,
      };
      state.postsData.push(newPost);
      state.newTextPost = "";
      return state;
    case UPDATE_TEXT_AREA:
      state.newTextPost = action.newText;
      return state;
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

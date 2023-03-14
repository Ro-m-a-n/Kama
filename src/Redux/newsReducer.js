import drSchultz from "../assets/images/dialogs/django.jpg";

let initialState = {
  news:[ {
    id: 1,
    resource: "dr Schultz",
    resourceAvatar: drSchultz,
    image: drSchultz,
    text: "hello, it`s me",
    likes: 7,
  },
  {
    id: 2,
    resource: "eeeee",
    resourceAvatar: drSchultz,
    image: drSchultz,
    text: "he",
    likes: 5,
  },
]
};
let newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_THIS_POST: {
        let newPostsData = state.postsData.filter(key => {
          if (key.id == action.id) {
            key.likes++;
          }
          return key;
        });
  
        return { ...state, postsData: newPostsData };
      }
  
      case UNLIKE_THIS_POST: {
        let newPostsData = state.postsData.filter(key => {
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

export default newsReducer;

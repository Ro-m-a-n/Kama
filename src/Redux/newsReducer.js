import drSchultz from "../assets/images/dialogs/django.jpg";
const LIKE_THIS_NEWS ="LIKE_THIS_NEWS"
const UNLIKE_THIS_NEWS ="UNLIKE_THIS_NEWS"
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
    case LIKE_THIS_NEWS: {
        let updatedNews = state.news.filter(key => {
          if (key.id == action.id) {
            key.likes++;
          }
          return key;
        });
  
        return { ...state, ness: updatedNews };
      }
  
      case UNLIKE_THIS_NEWS: {
        let updatedNews = state.news.filter(key => {
          if (key.id == action.id) {
            key.likes--;
          }
          return key;
        });
  
        return { ...state, new: updatedNews };
      }
    default:
      return state;
  }
};
export const likeThisNewsAC = (id) => {
  return { type: LIKE_THIS_NEWS, id };
};

export const unlikeThisNewsAC = (id) => {
  return { type: UNLIKE_THIS_NEWS, id };
};
export default newsReducer;

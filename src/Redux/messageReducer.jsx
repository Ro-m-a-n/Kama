const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_AREA_MESSAGE = "UPDATE-TEXT-AREA-MESSAGE";
let initialState = {
  newMessageTemp: "",
  dialogsData: [
    { id: 1, name: "Volodya" },
    { id: 2, name: "Artem" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Lena" },
    { id: 6, name: "Grigory" },
  ],
  messagesData: [
    { id: 1, text: "Hello world" },
    { id: 2, text: "Hi there" },
    { id: 3, text: "To turn out" },
    { id: 4, text: "To consider" },
    {
      id: 5,
      text: " Loreskdlkjfsld lksjdl kjslkjdlfjdlfjsljdf slkd hh  hkh k hk hk hk h kh kh kh j;lk; l lhl gy tf f kg k gk gkjflsdkjflsdfjsldkfjsldkfjlsdkf lskdjflsdkjflsdkjflsdjkf lskdjflsdkjflsdkjflsdk sldkfjsldkfjlsdkjf sldkfjsldkfjsldkf",
    },
    {
      id: 6,
      text: "immutable",
    },
    { id: 7, text: "sdfjndskf kskd fkdsjfk sf" },
    { id: 8, text: "Hi there" },
  ],
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessageTemp: "",
        messagesData: [
          ...state.messagesData,
          { id: 9, text: state.newMessageTemp },
        ],
      };
    case UPDATE_TEXT_AREA_MESSAGE:
      return { ...state, newMessageTemp: action.newTextMessage };
    default:
      return state;
  }
};

export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const UpdateMessageAreaActionCreator = (text) => ({
  type: UPDATE_TEXT_AREA_MESSAGE,
  newTextMessage: text,
});
export default messageReducer;

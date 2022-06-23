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
      text: "sdfksdjfhksdjhfkjsdhfksdhfkhsdkfjhsdkjfhksdjh fksdjh fksjdhf ksdjhfkjh sdkfhdks hfksj hdfkjh sdkjfhskjdhfk sjhdfkjh sdkfjh skfdhk sjdhfk jhsdkfjhsdkjfhksj fhskdjh",
    },
    { id: 7, text: "sdfjndskf kskd fkdsjfk sf" },
    { id: 8, text: "Hi there" },
  ],
}
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let stateCopy = {...state}
      let newMessage = {
        id: 9,
        text: stateCopy.newMessageTemp,
      };
      stateCopy.messagesData=[...state.messagesData]
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageTemp = "";
      return stateCopy;
    case UPDATE_TEXT_AREA_MESSAGE:{
      let stateCopy = {...state}
      stateCopy.newMessageTemp = action.newTextMessage;
      return stateCopy;}
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

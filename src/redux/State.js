const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_AREA_MESSAGE = "UPDATE-TEXT-AREA-MESSAGE";
let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: "True way of Samurai", likes: 5 },
        { id: 2, text: "I finaly understood props", likes: 100 },
      ],
      newTextPost: "hello",
    },
    messagesPage: {
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
    },
    _callSubscriber() {
      console.log("state is changed");
    },
    sideBar: {
      friendsNavData: [
        { id: 1, name: "Roman" },
        { id: 2, name: "Artem" },
        { id: 3, name: "Vasia" },
      ],
    },
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        text: this._state.profilePage.newTextPost,
        likes: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newTextPost = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_TEXT_AREA) {
      this._state.profilePage.newTextPost = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 9,
        text: this._state.messagesPage.newMessageTemp,
      };
      this._state.messagesPage.messagesData.push(newMessage);
      this._state.messagesPage.newMessageTemp = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_TEXT_AREA_MESSAGE) {
      this._state.messagesPage.newMessageTemp = action.newTextMessage;
      this._callSubscriber(this._state);
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
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
export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const UpdateMessageAreaActionCreator = (text) => ({
  type: UPDATE_TEXT_AREA_MESSAGE,
  newTextMessage: text,
});

export default store;
window.store = store;

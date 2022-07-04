// import messageReducer from './messageReducer';
// import profileReducer from './profileReducer';
// import sideBarReducer from './sideBarReducer';

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, text: "True way of Samurai", likes: 5 },
//         { id: 2, text: "I finaly understood props", likes: 100 },
//       ],
//       newTextPost: "hello",
//     },
//     messagesPage: {
//       newMessageTemp: "",
//       dialogsData: [
//         { id: 1, name: "Volodya" },
//         { id: 2, name: "Artem" },
//         { id: 3, name: "Sasha" },
//         { id: 4, name: "Sveta" },
//         { id: 5, name: "Lena" },
//         { id: 6, name: "Grigory" },
//       ],
//       messagesData: [
//         { id: 1, text: "Hello world" },
//         { id: 2, text: "Hi there" },
//         { id: 3, text: "To turn out" },
//         { id: 4, text: "To consider" },
//         {
//           id: 5,
//           text: " Loreskdlkjfsld lksjdl kjslkjdlfjdlfjsljdf slkd hh  hkh k hk hk hk h kh kh kh j;lk; l lhl gy tf f kg k gk gkjflsdkjflsdfjsldkfjsldkfjlsdkf lskdjflsdkjflsdkjflsdjkf lskdjflsdkjflsdkjflsdk sldkfjsldkfjlsdkjf sldkfjsldkfjsldkf",
//         },
//         {
//           id: 6,
//           text: "sdfksdjfhksdjhfkjsdhfksdhfkhsdkfjhsdkjfhksdjh fksdjh fksjdhf ksdjhfkjh sdkfhdks hfksj hdfkjh sdkjfhskjdhfk sjhdfkjh sdkfjh skfdhk sjdhfk jhsdkfjhsdkjfhksj fhskdjh",
//         },
//         { id: 7, text: "sdfjndskf kskd fkdsjfk sf" },
//         { id: 8, text: "Hi there" },
//       ],
//     },
//     _callSubscriber() {
//       console.log("state is changed");
//     },
//     sideBar: {
//       friendsNavData: [
//         { id: 1, name: "Roman" },
//         { id: 2, name: "Artem" },
//         { id: 3, name: "Vasia" },
//       ],
//     },
//   },
  

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//     this._state.sideBar = sideBarReducer(this._state.sideBar, action);
//     this._callSubscriber(this._state);
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
// };


// export default store;


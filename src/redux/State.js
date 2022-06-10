let rerenderEntireTree =()=>{
  console.log('state is changed')
}
let state = {
  profilePage: {
    postsData: [
      { id: 1, text: "True way of Samurai", likes: 5 },
      { id: 2, text: "I finaly understood props", likes: 100 },
    ],
    newTextPost: "hello",
  },
  messagesPage: {
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
  sideBar: {
    friendsNavData: [
      { id: 1, name: "Roman" },
      { id: 2, name: "Artem" },
      { id: 3, name: "Vasia" },
    ],
  },
};
export const addPost = (addText) => {
  let newPost = {
    id: 3,
    text: addText,
    likes: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export const updateTextArea = (newText) => {
  state.profilePage.newTextPost = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) =>(rerenderEntireTree=observer);
export default state;

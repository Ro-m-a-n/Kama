let state = {
  profilePage: {
    postsData: [
      { id: 1, text: "True way of Samurai", likes: 5 },
      { id: 2, text: "I finaly understood props", likes: 100 },
    ],
  },
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Roman" },
      { id: 2, name: "Artem" },
    ],
    messagesData: [
      { id: 1, text: "Hello world" },
      { id: 2, text: "Hi there" },
    ],
  },
  sideBar:{
    friendsNavData:[
      { id: 1, name: "Roman" },
      { id: 2, name: "Artem" },
      { id: 3, name: "Vasia" },
    ]
  }
};
export default state;

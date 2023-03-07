const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    {
      dialogId: 1,
      name: "name 1",
      message: [
        { messageId: 1, text: "message 1" },
        { messageId: 2, text: "message 2" },
      ],
    },
    {
      dialogId: 2,
      name: "name 2",
      message: [
        { messageId: 1, text: "message 3" },
        { messageId: 2, text: "message 4" },
      ],
    },
  ],
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
      text: "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
    },
    {
      id: 6,
      text: "immutable",
    },
    {
      id: 7,
      text: "Array.prototype.filter() expects a value to be returned at the end of arrow function",
    },
    { id: 8, text: "Hi there" },
  ],
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newDialogs = state.dialogs.map((el) => {
        if (el.dialogId == action.dialogId) {
          el.message.push({
            messageId: action.messageId,
            text: action.message,
          })
          return el
        }
        return el
       debugger
      });
      return {
        ...state,
        dialogs: newDialogs,
      };

    default:
      return state;
  }
};

export const addMessage = (message, dialogId, messageId) => ({
  type: ADD_MESSAGE,
  message,
  dialogId,
  messageId,
});

export default messageReducer;

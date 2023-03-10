const ADD_MESSAGE = "ADD-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

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
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newDialogs = state.dialogs.map((el) => {
        if (el.dialogId == action.dialogId) {
          el.message.push({
            messageId: action.messageId,
            text: action.message,
          });
          return el;
        }
        return el;
      });
      return {
        ...state,
        dialogs: newDialogs,
      };
    }

    case DELETE_MESSAGE: {
      let newDialogs = state.dialogs.map((el) => {
        if (el.dialogId == action.dialogId) {
          let filteredMessage = el.message.filter(
            (key) => key.messageId !== action.messageId
          );
          return { ...el, message: filteredMessage };
        }
        return el;
      });
      return { ...state, dialogs: newDialogs };
    }

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

export const deleteMessageAC = (dialogId, messageId) => ({
  type: DELETE_MESSAGE,
  dialogId,
  messageId,
});

export default messageReducer;

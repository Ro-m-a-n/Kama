const ADD_MESSAGE = "ADD-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

let initialState = {
  dialogs: [
    {
      dialogId: 1,
      name: "Django",
      message: [
        { messageId: 1, text: "Finaly, i am free" },
        { messageId: 2, text: "I'm sorry. I couldn't resist" },
        { messageId: 3, text: "I'm curious what makes you so curious." },
       
      ],
    },
    {
      dialogId: 2,
      name: "Thanos",
      message: [
        { messageId: 1, text: "I am inevitable." },
        { messageId: 2, text: "The universe is finite, its resources finite. If life is left unchecked, life will cease to exist." },
        { messageId: 3, text: "Dread it. Run from it. Destiny still arrives." },
        { messageId: 4, text: "The hardest choices require the strongest wills." },
        { messageId: 5, text: "I finally rest, and watch the sun rise on a grateful universe." },
        { messageId: 6, text: "I know what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless." },
      ],
    },
    {
      dialogId: 3,
      name: "Harry Potter",
      message: [
        { messageId: 1, text: "I solemnly swear that I am up to no good." },
        { messageId: 2, text: "I am the Chosen One." },
        { messageId: 3, text: "I can speak to snakes. I found out when we've been to the zoo. They find me, they whisper." },
        { messageId: 4, text: "Expecto Patronum!" },
        { messageId: 5, text: "Mischief managed." },
        { messageId: 6, text: "I must not tell lies." },
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

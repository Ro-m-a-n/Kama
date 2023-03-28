import drSchultz from "../assets/images/dialogs/django.jpg";
import thanos from "../assets/images/dialogs/thanos.jpg";
import harry from "../assets/images/dialogs/harry.jpg";
const ADD_MESSAGE = "ADD-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

type initialStateType = typeof initialState;

type dialogsType = {
  dialogId: number;
  name: string;
  dialogAvatar: Object;
  message: Array<messageType> 
};
type messageType = {
  messageId: number;
  isMe: boolean;
  text: string;
};
let initialState = {
  dialogs: [
    {
      dialogId: 1,
      name: "dr Schultz",
      dialogAvatar: drSchultz,
      message: [
        { messageId: 1, isMe: true, text: "I'm sorry. I couldn't resist" },
        {
          messageId: 2,
          isMe: false,
          text: "I'm curious what makes you so curious.",
        },
      ] as Array<messageType>,
    },
    {
      dialogId: 2,
      name: "Thanos",
      dialogAvatar: thanos,
      message: [
        { messageId: 1, isMe: false, text: "I am inevitable." },
        {
          messageId: 2,
          isMe: true,
          text: "The universe is finite, its resources finite. If life is left unchecked, life will cease to exist.",
        },
        {
          messageId: 3,
          isMe: false,
          text: "Dread it. Run from it. Destiny still arrives.",
        },
        {
          messageId: 4,
          isMe: false,
          text: "The hardest choices require the strongest wills.",
        },
        {
          messageId: 5,
          isMe: true,
          text: "I finally rest, and watch the sun rise on a grateful universe.",
        },
        {
          messageId: 6,
          isMe: false,
          text: "I know what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless.",
        },
      ] as Array<messageType>,
    },
    {
      dialogId: 3,
      name: "Harry Potter",
      dialogAvatar: harry,
      message: [
        {
          messageId: 1,
          isMe: false,
          text: "I solemnly swear that I am up to no good.",
        },
        { messageId: 2, isMe: true, text: "I am the Chosen One." },
        {
          messageId: 3,
          isMe: false,
          text: "I can speak to snakes. I found out when we've been to the zoo. They find me, they whisper.",
        },
        { messageId: 4, isMe: false, text: "Expecto Patronum!" },
        { messageId: 5, isMe: false, text: "Mischief managed." },
        { messageId: 6, isMe: false, text: "I must not tell lies." },
      ] as Array<messageType>,
    },
  ] as Array<dialogsType>,
};
let messageReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newDialogs = state.dialogs.map((el) => {
        if (el.dialogId == action.dialogId) {
          el.message.push({
            messageId: action.messageId,
            isMe: action.isMe,
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
type addMessageType = {
  type: typeof ADD_MESSAGE;
  message: string;
  dialogId: number;
  messageId: number;
  isMe: boolean;
};
export const addMessage = (
  message: string,
  dialogId: number,
  messageId: number,
  isMe: boolean
): addMessageType => ({
  type: ADD_MESSAGE,
  message,
  dialogId,
  messageId,
  isMe,
});
type deleteMessageACType = {
  type: typeof DELETE_MESSAGE;
  dialogId: number;
  messageId: number;
};
export const deleteMessageAC = (
  dialogId: number,
  messageId: number
): deleteMessageACType => ({
  type: DELETE_MESSAGE,
  dialogId,
  messageId,
});

export default messageReducer;

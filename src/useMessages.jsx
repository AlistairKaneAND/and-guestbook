import { useEffect, useReducer, useContext } from "react";
import { getGuestbookEntries, postNewGuestbookEntry } from "./requests";
import { createContext } from "react";

export const MessageActionTypes = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REQUEST_MESSAGES: "REQUEST_MESSAGES",
};

const MessageContext = createContext({});

const messageReducer = (prev, action) => {
  switch (action.type) {
    case MessageActionTypes.ADD_MESSAGE:
      postNewGuestbookEntry(...action.payload)
      return [...prev, ...action.payload];
    case MessageActionTypes.REQUEST_MESSAGES:
      return action.payload;
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, []);

  useEffect(() => {
    getGuestbookEntries().then((res) =>
      dispatch({
        type: MessageActionTypes.REQUEST_MESSAGES,
        payload: res.data.allMessages,
      })
    );
  }, []);

  return (
    <MessageContext.Provider value={[state, dispatch]}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const [messages, dispatch] = useContext(MessageContext);

  const requestGuestbookEntries = async () => {
    return getGuestbookEntries().then((res) =>
      dispatch({
        type: MessageActionTypes.REQUEST_MESSAGES,
        payload: res.data.allMessages,
      })
    );
  };

  return { messages, dispatch, requestGuestbookEntries };
};

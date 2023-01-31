import { useEffect, useReducer, useContext } from "react";
import { fetchGuestbookEntries, postNewGuestbookEntry } from "./requests";
import { createContext } from "react";

export const useMessages = () => {
  const [messages, dispatch] = useContext(MessageContext);

  const addMessage = (payload) => {
    return dispatch(addMessageAction(payload));
  };

  const updateGuestbookEntries = () => fetchEntries(dispatch);

  return { messages, dispatch, updateGuestbookEntries, addMessage };
};

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, []);
  useEffect(() => {
    fetchEntries(dispatch);
  }, []);

  return (
    <MessageContext.Provider value={[state, dispatch]}>
      {children}
    </MessageContext.Provider>
  );
};

const MessageActionTypes = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REQUEST_MESSAGES: "REQUEST_MESSAGES",
};

const MessageContext = createContext({});

const updateAction = (payload) => ({
  type: MessageActionTypes.REQUEST_MESSAGES,
  payload,
});

const addMessageAction = (payload) => ({
  type: MessageActionTypes.ADD_MESSAGE,
  payload: [payload],
});

const fetchEntries = async (dispatch) => {
  return fetchGuestbookEntries().then((res) => {
    dispatch(updateAction(res?.data?.allMessages ?? []));
  });
};

const messageReducer = (prev, action) => {
  switch (action.type) {
    case MessageActionTypes.ADD_MESSAGE:
      postNewGuestbookEntry(...action.payload);
      return [...prev, ...action.payload];
    case MessageActionTypes.REQUEST_MESSAGES:
      return action.payload;
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

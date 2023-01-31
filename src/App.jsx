import { useReducer } from "react";
import "./App.css";
import GuestBook from "./components/GuestBook/GuestBook";
import GuestBookFetchButton from "./components/GuestBookFetchButton/GuestBookFetchButton";
import GuestBookForm from "./components/GuestBookForm/GuestBookForm";
import { MessageActionTypes, useMessages } from "./useMessages";

function App() {
  const { dispatch, requestGuestbookEntries } = useMessages();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const link = event.currentTarget.elements.link.value;
    const message = event.currentTarget.elements.message.value;
    const timestamp = new Date().toUTCString();

    const payload = {
      name,
      link,
      message,
      timestamp,
    };

    dispatch({ type: MessageActionTypes.ADD_MESSAGE, payload: [payload] });
  };

  const onFetchButtonClick = () => {
    requestGuestbookEntries();
  };

  return (
    <div className="App">
      <div className="left-stack">
        <div className="left-pane">
          <GuestBookForm submitHandler={onFormSubmit}></GuestBookForm>
          <div className="bottom-left-pane">
            <GuestBookFetchButton
              clickHandler={onFetchButtonClick}
            ></GuestBookFetchButton>
          </div>
        </div>
      </div>
      <GuestBook></GuestBook>
    </div>
  );
}

export default App;

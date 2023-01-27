import { useEffect } from "react";
import GuestBook from "./components/GuestBook";
import GuestBookForm from "./components/GuestBookForm";
import GuestBookFetchButton from "./components/GuestBookFetchButton";
import "./App.css";

// GuestBook displays the messages
// GuestBookForm allows the user to add a message
// BigRedFetchButton fetches the messages from the server

// data:
// * name
// * link (optional)
// * message
// * timestamp

// User flow
// User visits guestbook application
// User can see messages left by other visitors
// User fills out form and presses submit
// User can see updated list of messages that includes their message

// TODO
// * add a button to fetch messages from the server
// * add graphQL server
// * request messages from the server
// * store them in context and access them from the GuestBook component

function App() {
  useEffect(() => {
    // get messages here, add to context
    return () => {
      // any cleanup here
    };
    // as a new message is added, update the collection
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // get the form data
    console.log(event.currentTarget.elements.name.value);
    const name = event.currentTarget.elements.name.value;
    const link = event.currentTarget.elements.link.value;
    const message = event.currentTarget.elements.message.value;
    const timestamp = new Date().toUTCString();

    // add the message to the collection
    const payload = {
      name,
      link,
      message,
      timestamp,
    };

    console.log("payload", payload);

    // send the message to the server
  };

  const onFetchButtonClick = () => {
    console.log("fetching messages");
  };

  // wrap the following in a context provider
  return (
    <div className="App">
      <div className="left-stack">
        <div className="left-pane">
          <GuestBookForm submitHandler={onFormSubmit}></GuestBookForm>
        </div>
        <div className="bottom-left-pane">
          <GuestBookFetchButton
            clickHandler={onFetchButtonClick}
          ></GuestBookFetchButton>
        </div>
      </div>
      <GuestBook></GuestBook>
    </div>
  );
}

export default App;

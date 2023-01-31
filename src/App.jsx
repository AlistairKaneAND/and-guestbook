import "./App.css";
import GuestBook from "./components/GuestBook/GuestBook";
import GuestBookFetchButton from "./components/GuestBookFetchButton/GuestBookFetchButton";
import GuestBookForm from "./components/GuestBookForm/GuestBookForm";

function App() {
  return (
    <div className="App">
      <div className="left-stack">
        <div className="left-pane">
          <GuestBookForm></GuestBookForm>
          <div className="bottom-left-pane">
            <GuestBookFetchButton></GuestBookFetchButton>
          </div>
        </div>
      </div>
      <GuestBook></GuestBook>
    </div>
  );
}

export default App;

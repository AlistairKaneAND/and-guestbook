import { useMessages } from "../../message-utils.jsx";

export default function GuestBookFetchButton({}) {
  const { updateGuestbookEntries } = useMessages();
  return (
    <button onClick={updateGuestbookEntries}>Update</button>
  );
}

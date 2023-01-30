import { useMessages } from "../useMessages";

export default function GuestBook() {
  const { messages } = useMessages();

  return (
    <div className="guest-book">
      <h3>Guest Book</h3>
      <div className="messages">
        {messages &&
          messages.map((entry) => {
            const { timestamp, name, message, link } = entry;

            return (
              <div className="message" key={timestamp}>
                <div className="message-heading">
                  <span className="message-name">{name}</span>
                  <span>{timestamp}</span>
                </div>
                <div className="message-content">
                  <p>{message}</p>
                  <a href={link}>{link}</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

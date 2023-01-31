import { useMessages } from "../../message-utils";
import styles from "./GuestBook.module.css";

export default function GuestBook() {
  const { messages } = useMessages();

  return (
    <div className={styles['guest-book']}>
      <h3>Guest Book</h3>
      <div className={styles.messages}>
        {messages &&
          messages.map((entry) => {
            const { timestamp, name, message, link } = entry;

            return (
              <div className={styles.message} key={timestamp}>
                <div className={styles['message-heading']}>
                  <span className={styles['message-name']}>{name}</span>
                  <span>{timestamp}</span>
                </div>
                <div className={styles['message-content']}>
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

import { useState } from "react";
import { useMessages } from "../../message-utils";
import styles from "./GuestBookForm.module.css";

export default function GuestBookForm() {
  const { addMessage } = useMessages();

  const initialState = {
    name: "",
    link: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialState);

  const onFormSubmit = () => {
    const timestamp = new Date().toUTCString();
    const payload = {
      name,
      link,
      message,
      timestamp,
    };
    addMessage(payload);
  };

  const handleFormInputChange = (evt) => {
    setFormState((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
    setFormState(initialState);
  };

  const { name, link, message } = formState;

  return (
    <section className={styles["form-section"]}>
      <h2>Leave a message</h2>
      <form onSubmit={onSubmit} className={styles["submit-form"]}>
        <label htmlFor="name" className={styles["form-element"]}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles["form-input"]}
          value={name}
          onChange={handleFormInputChange}
          required
        />
        <label htmlFor="link" className={styles["form-element"]}>
          Link
        </label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={handleFormInputChange}
          className={styles["form-input"]}
        />
        <label htmlFor="message" className={styles["form-element"]}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleFormInputChange}
          className={`${styles["form-input"]} ${styles["form-text-area"]}`}
          required
        />
        <div className={styles["form-element"]}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

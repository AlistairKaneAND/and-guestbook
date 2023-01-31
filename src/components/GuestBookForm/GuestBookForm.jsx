import styles from "./GuestBookForm.module.css";

export default function GuestBookForm({ submitHandler }) {
  return (
    <section className={styles["form-section"]}>
      <h2>Leave a message</h2>
      <form onSubmit={submitHandler} className={styles["submit-form"]}>
        <label htmlFor="name" className={styles["form-element"]}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles["form-input"]}
          required
        />
        <label htmlFor="link" className={styles["form-element"]}>
          Link
        </label>
        <input
          type="text"
          id="link"
          name="link"
          className={styles["form-input"]}
        />
        <label htmlFor="message" className={styles["form-element"]}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
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

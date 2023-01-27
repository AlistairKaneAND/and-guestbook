export default function GuestBookForm({ submitHandler }) {
  return (
    <section>
      <h2>Leave a message</h2>
      <form onSubmit={submitHandler} className="submit-form">
        <label htmlFor="name" className="form-element">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
        />
        <label htmlFor="link" className="form-element">
          Link
        </label>
        <input type="text" id="link" name="link" className="form-input" />
        <label htmlFor="message" className="form-element">
          Message
        </label>
        <textarea id="message" name="message" className="form-input form-text-area" required/>
        <div className="form-element">
          <button type="submit" >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

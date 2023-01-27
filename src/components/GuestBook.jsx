export default function GuestBook() {
  return (
    <section className="guest-book">
      <h3>Guest Book</h3>
      <section className="messages">
        <div className="message">
          <div className="message-heading">
            <span className="message-name">Bob</span>
            <a href="www.bob.com">www.bob.com</a>
            <span>27th Jan</span>
          </div>
          <div className="message-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

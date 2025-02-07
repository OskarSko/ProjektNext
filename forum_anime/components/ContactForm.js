export default function ContactForm() {
    return (
      <form action="/api/contact" method="POST" className="contact-form">
        <div className="form-group">
          <label>Imię</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Wiadomość</label>
          <textarea name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Wyślij</button>
      </form>
    );
  }
  
export default function Contact() {
  return (
    <section className="page">
      <div className="contact-container">
        <p className="section-tag">CONTACT</p>

        <h1>Let's Work Together</h1>

        <p className="contact-text">
          Interested in working together, freelance projects, or building modern
          web and mobile applications?
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span>Email</span>

            <a href="mailto:karimmazen71@gmail.com">karimmazen71@gmail.com</a>
          </div>

          <div className="contact-item">
            <span>Phone</span>

            <a href="tel:+201126682451">+20 112 668 2451</a>
          </div>

          <div className="contact-item">
            <span>Location</span>

            <p>Cairo, Egypt</p>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>

            <a
              href="https://linkedin.com/in/karim-mazen-58a20b2a6"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/karim-mazen-58a20b2a6
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

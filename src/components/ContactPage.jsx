function ContactPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Contact</h2>
        <h3>Let’s create something worth watching.</h3>
      </section>

      <section className="contact-grid">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <p>
            Whether you’re working on a commercial, documentary, or something
            completely experimental — I’m always open to collaborating on
            projects that tell a story.
          </p>

          <p>
            If you have a brief, timeline, or even just an idea, feel free to
            reach out.
          </p>

          <div className="contact-direct">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select>
              <option>Commercial</option>
              <option>Film</option>
              <option>Podcast</option>
              <option>Short-form</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project..." />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </section>
    </SiteShell>
  )
}

export default ContactPage;
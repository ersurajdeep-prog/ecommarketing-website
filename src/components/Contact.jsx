import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission
    alert("Thanks for reaching out! We will get back to you shortly.");
  };

  return (
    <>
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info reveal">
              <h2 className="heading-lg">Ready to Scale?</h2>
              <p className="text-lg">
                Let's discuss how our Claude-powered AI agents can transform your e-commerce growth.
              </p>
              
              <div className="contact-details mt-4">
                <p><strong>Email:</strong> contact@ecommarketing.com</p>
                <p><strong>Location:</strong> Wyoming, US</p>
              </div>
            </div>
            
            <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" required placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <p className="text-muted">&copy; Ecommarketing LLC 2026</p>
        </div>
      </footer>
    </>
  );
}

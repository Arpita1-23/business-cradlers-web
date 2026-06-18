import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        <div className="contact-header">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line"></span>
            <span className="contact-eyebrow-txt">Get In Touch</span>
          </div>
          <h2 className="contact-title">Start a <em>Project</em><br/>With Us</h2>
          <p className="contact-subtitle">
            Tell us about your idea and we will get back to you within 24 hours with a free proposal.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Rahul Sharma"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="rahul@company.com"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Budget Range</label>
                  <select className="form-input form-select">
                    <option value="">Select budget</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹75,000</option>
                    <option>₹75,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>Above ₹5,00,000</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Type</label>
                <div className="form-chips">
                  <span className="form-chip">Web App</span>
                  <span className="form-chip">Mobile App</span>
                  <span className="form-chip">AI Integration</span>
                  <span className="form-chip">UI/UX Design</span>
                  <span className="form-chip">Backend &amp; API</span>
                  <span className="form-chip">Other</span>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Tell Us About Your Project</label>
                <textarea className="form-input form-textarea" placeholder="Describe your idea, what you want to build, any specific requirements..."></textarea>
              </div>
              <button type="submit" className="form-submit">
                Send Query
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h8M7 3l4 4-4 4"/>
                </svg>
              </button>
            </form>
          </div>

          <div className="contact-side">
            <div className="contact-info-card">
              <div className="cic-title">Contact Details</div>
              <div className="cic-items">
                <div className="cic-item">
                  <div className="cic-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cic-label">Phone</div>
                    <div className="cic-value">+91 8962-900-701</div>
                  </div>
                </div>
                <div className="cic-item">
                  <div className="cic-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cic-label">Email</div>
                    <div className="cic-value">bctpvtltd2025@gmail.com</div>
                  </div>
                </div>
                <div className="cic-item">
                  <div className="cic-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cic-label">Location</div>
                    <div className="cic-value">Jabalpur, Madhya Pradesh</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/917987116718" target="_blank" rel="noreferrer" className="contact-whatsapp">
              <svg viewBox="0 0 24 24" fill="#3dcc72">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <div className="cwa-title">Chat on WhatsApp</div>
                <div className="cwa-sub">Quick response guaranteed</div>
              </div>
              <svg className="cwa-arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4"/>
              </svg>
            </a>

            <div className="contact-promise">
              <div className="cp-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="#b87333" strokeWidth="1.8">
                  <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Free consultation call</span>
              </div>
              <div className="cp-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="#b87333" strokeWidth="1.8">
                  <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Proposal within 48 hours</span>
              </div>
              <div className="cp-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="#b87333" strokeWidth="1.8">
                  <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No commitment required</span>
              </div>
              <div className="cp-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="#b87333" strokeWidth="1.8">
                  <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>NDA available on request</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

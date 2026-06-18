import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What kind of projects does Business Cradlers take on?',
    a: 'We work on web applications, mobile apps, AI-powered platforms and enterprise systems. Whether you have a startup idea or need to digitize an existing business — we can help.'
  },
  {
    q: 'How long does it take to build a project?',
    a: 'It depends on the scope. A simple web app takes 4-6 weeks. A full mobile app with backend takes 8-14 weeks. AI integrations vary. We give you a clear timeline before we start — no surprises.'
  },
  {
    q: 'What is your development process?',
    a: 'We follow an agile approach — weekly sprints, regular demos and constant communication. You are always in the loop. We start with a discovery call, then wireframes, then development, then testing and finally deployment.'
  },
  {
    q: 'Do you provide support after the project is launched?',
    a: 'Yes! We provide 30 days of free post-launch support for bug fixes. After that we offer affordable maintenance packages. We do not disappear after delivery.'
  },
  {
    q: 'How much does it cost to build an app or website?',
    a: 'Every project is different so we do not have fixed pricing. A basic website starts from ₹25,000. A mobile app starts from ₹80,000. AI integrations are quoted separately. Contact us for a free estimate.'
  },
  {
    q: 'Can you work with clients outside Jabalpur or India?',
    a: 'Absolutely. We work with clients across India and internationally. All communication happens over video calls, WhatsApp and email — location is never a barrier.'
  },
  {
    q: 'What technologies do you use?',
    a: 'Our primary stack is React and Next.js for web, Flutter for mobile, Django REST for backend, PostgreSQL for databases and Claude API for AI features. We pick the right tool for the right job.'
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out via the contact form below or WhatsApp us directly. We will schedule a free 30-minute discovery call to understand your requirements and give you a proposal within 48 hours.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', question: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Question from ${form.name} via Business Cradlers FAQ`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nQuestion:\n${form.question}`)
    window.open(`mailto:bctpvtltd2025@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setModal(false)
      setForm({ name: '', email: '', question: '' })
    }, 3000)
  }

  return (
    <>
      <section className="faq" id="faq">
        <div className="faq-inner">

          <div className="faq-header">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-line"></span>
              <span className="faq-eyebrow-txt">FAQ</span>
            </div>
            <h2 className="faq-title">Questions We <em>Always</em> Get</h2>
            <p className="faq-subtitle">
              Everything you need to know before working with us. Still have questions? Just ask.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-list">
              {faqs.map((f, i) => (
                <div
                  className={`faq-item ${open === i ? 'open' : ''}`}
                  key={i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="faq-question">
                    <span>{f.q}</span>
                    <div className="faq-icon">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 5l4 4 4-4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-side">
              <div className="faq-side-card">
                <div className="faq-side-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="faq-side-title">Still have questions?</h3>
                <p className="faq-side-desc">We are happy to answer anything. Send us your question and we will reply within 24 hours.</p>
                <button className="faq-side-btn" onClick={() => setModal(true)}>Ask Us Anything</button>
              </div>
              <div className="faq-side-card faq-side-whatsapp">
                <div className="faq-side-icon green">
                  <svg viewBox="0 0 24 24" fill="#3dcc72">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="faq-side-title">Chat on WhatsApp</h3>
                <p className="faq-side-desc">Prefer a quick chat? Message us directly on WhatsApp for a faster response.</p>
                <a href="https://wa.me/918962900701" target="_blank" rel="noreferrer" className="faq-side-btn green">WhatsApp Us</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(false)}>
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 2l10 10M12 2L2 12"/>
              </svg>
            </button>

            {sent ? (
              <div className="modal-success">
                <div className="modal-success-icon">✓</div>
                <h3>Question Sent!</h3>
                <p>Your email client has opened. Send the email and we will reply within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <div className="modal-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <h3 className="modal-title">Ask Us Anything</h3>
                  <p className="modal-subtitle">Fill in your details and we will reply within 24 hours.</p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="modal-field">
                    <label className="modal-label">Your Name</label>
                    <input
                      type="text"
                      className="modal-input"
                      placeholder="Rahul Sharma"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="modal-field">
                    <label className="modal-label">Email Address</label>
                    <input
                      type="email"
                      className="modal-input"
                      placeholder="rahul@company.com"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  <div className="modal-field">
                    <label className="modal-label">Your Question</label>
                    <textarea
                      className="modal-input modal-textarea"
                      placeholder="Type your question here..."
                      required
                      value={form.question}
                      onChange={e => setForm({...form, question: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="modal-actions">
                    <button type="submit" className="modal-submit">
                      Send via Email
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 7h8M7 3l4 4-4 4"/>
                      </svg>
                    </button>
                    <a
                      href={`https://wa.me/918962900701?text=Hi! I have a question: ${encodeURIComponent(form.question || 'I have a question about your services.')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-wa"
                    >
                      <svg viewBox="0 0 24 24" fill="#3dcc72" width="16" height="16">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Ask on WhatsApp
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

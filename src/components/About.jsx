import './About.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Quality First',
    desc: 'We write production-grade code from day one. No shortcuts, no tech debt passed to clients.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Agile sprints, weekly demos, on-time shipping. We respect your deadlines like our own.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'We work as your tech partner, not just a vendor. Your success is our success.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Always Improving',
    desc: 'Every project teaches us something new. We bring that knowledge back to every client.'
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-top">
          <div className="about-left">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line"></span>
              <span className="about-eyebrow-txt">Who We Are</span>
            </div>
            <h2 className="about-title">
              Built in <em>Jabalpur,</em><br/>
              Trusted Across India
            </h2>
            <p className="about-desc">
              Business Cradle is a boutique software studio founded in 2020. We started with a simple belief — that great software should be accessible to every business, not just the big ones.
            </p>
            <p className="about-desc">
              Today we are a team of passionate developers, designers and AI engineers who have delivered 50+ products across mobile, web and AI platforms — for startups, enterprises and government-adjacent projects.
            </p>
            <div className="about-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Jabalpur, Madhya Pradesh, India</span>
            </div>
          </div>

          <div className="about-right">
            <div className="about-vision-card">
              <div className="avc-tag">Our Vision</div>
              <p className="avc-text">To become the most trusted software studio for businesses across Central India — delivering products that last.</p>
            </div>
            <div className="about-approach-card">
              <div className="avc-tag">Our Approach</div>
              <ul className="avc-list">
                <li>We treat every project like it is our own startup</li>
                <li>Clean code, clear communication, no surprises</li>
                <li>We stay involved even after launch</li>
                <li>Small team — big accountability</li>
              </ul>
            </div>
            <div className="about-status-card">
              <div className="status-dot-wrap">
                <span className="status-dot-live"></span>
                <span className="status-txt">Actively Taking Projects</span>
              </div>
              <div className="about-founded">
                <span className="about-founded-year">2020</span>
                <span className="about-founded-txt">Est. in Jabalpur</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="about-values-label">Our Values</div>
          <div className="about-values-grid">
            {values.map(v => (
              <div className="about-value-card fade-up" key={v.title}>
                <div className="avc-icon">{v.icon}</div>
                <h4 className="avc-title">{v.title}</h4>
                <p className="avc-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

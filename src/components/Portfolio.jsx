import './Portfolio.css'

const projects = [
  {
    number: '01',
    tag: 'Mobile App',
    title: 'Shastri Ji',
    subtitle: 'Pandit Booking Platform',
    desc: 'A full-stack pandit booking platform — Uber for Pandits. Flutter mobile app with Django REST backend, real-time booking flow, ritual selection and a complete store for puja items.',
    stack: ['Flutter', 'Django REST', 'Firebase', 'Razorpay', 'Google Play'],
    link: 'https://shashtri.onrender.com',
    status: 'Building',
    year: '2025',
    highlights: ['Flutter cross-platform app', 'Real-time booking flow', 'Google Play Store'],
  },
  {
    number: '02',
    tag: 'AI Platform',
    title: 'YojanaAI',
    subtitle: 'Government Scheme Discovery Platform',
    desc: 'An AI-powered platform that helps Indian citizens discover government schemes they are eligible for. Built with Django, Next.js and Claude API — serving users across all states with smart recommendations.',
    stack: ['Next.js', 'Django', 'Claude API', 'PostgreSQL', 'Redis'],
    link: 'https://yojana-tau.vercel.app',
    status: 'Live',
    year: '2024',
    highlights: ['100+ govt schemes indexed', 'AI-powered matching', 'WhatsApp share feature'],
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="port-inner">
        <div className="port-header">
          <div className="port-eyebrow">
            <span className="port-eyebrow-line"></span>
            <span className="port-eyebrow-txt">Our Work</span>
          </div>
          <h2 className="port-title">Products We Have <em>Built</em></h2>
          <p className="port-subtitle">Real products, real users, real impact — click any project to see it live.</p>
        </div>
        <div className="port-grid">
          {projects.map((p) => (
            <div className="port-card fade-up" key={p.number}>
              <div className="port-card-left">
                <div className="port-card-top">
                  <span className="port-tag">{p.tag}</span>
                  <span className={`port-status ${p.status === 'Live' ? 'live' : 'building'}`}>
                    <span className="port-status-dot"></span>
                    {p.status}
                  </span>
                </div>
                <div className="port-num">{p.number}</div>
                <h3 className="port-card-title">{p.title}</h3>
                <p className="port-card-sub">{p.subtitle}</p>
                <p className="port-card-desc">{p.desc}</p>
                <div className="port-highlights">
                  {p.highlights.map(h => (
                    <div className="port-highlight" key={h}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="#b87333" strokeWidth="2">
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="port-stack">
                  {p.stack.map(s => (
                    <span className="port-stack-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="port-card-right">
                <div className="port-year">{p.year}</div>
                <div className="port-mockup">
                  <div className="port-mockup-bar">
                    <div className="mock-dot r"></div>
                    <div className="mock-dot y"></div>
                    <div className="mock-dot g"></div>
                    <span className="mock-url">{p.link.replace('https://', '')}</span>
                  </div>
                  <div className="port-mockup-body">
                    <div className="mock-line w80"></div>
                    <div className="mock-line w60"></div>
                    <div className="mock-line w90"></div>
                    <div className="mock-line w40"></div>
                    <div className="mock-spacer"></div>
                    <div className="mock-line w70"></div>
                    <div className="mock-line w50"></div>
                    <div className="mock-spacer"></div>
                    <div className="mock-btn"></div>
                  </div>
                  <div className="port-mockup-overlay">
                    <a href={p.link} target="_blank" rel="noreferrer" className="port-visit-btn">
                      View Live Project
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 7h8M7 3l4 4-4 4"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="port-bottom">
          <p className="port-bottom-txt">More projects coming soon</p>
          <div className="port-bottom-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

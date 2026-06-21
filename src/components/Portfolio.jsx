import './Portfolio.css'
import shastrijImg from '../assets/projects/shastriji.jpeg'
import yojanaImg from '../assets/projects/yojnaai.jpeg'

const projects = [
  {
    number: '01',
    tag: 'Mobile App',
    title: 'Shastri Ji',
    subtitle: 'Pandit Booking Platform',
    desc: 'A full-stack pandit booking platform — Uber for Pandits. Flutter mobile app with Django REST backend, real-time booking flow, ritual selection and a complete store for puja items.',
    stack: ['Flutter', 'Django REST', 'Firebase', 'Razorpay'],
    link: 'https://shashtri.onrender.com',
    playstore: 'https://play.google.com/store/apps/details?id=com.shastri_ji.app',
    status: 'Live',
    year: '2025',
    image: shastrijImg,
  },
  {
    number: '02',
    tag: 'AI Platform',
    title: 'YojanaAI',
    subtitle: 'Government Scheme Discovery Platform',
    desc: 'An AI-powered platform that helps Indian citizens discover government schemes they are eligible for. Built with Django, Next.js and Claude API — serving users across all states with smart recommendations.',
    stack: ['Next.js', 'Django', 'Claude API', 'PostgreSQL'],
    link: 'https://yojana-tau.vercel.app',
    playstore: null,
    status: 'Live',
    year: '2024',
    image: yojanaImg,
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
          <p className="port-subtitle">
            Real products, real users, real impact — click any project to see it live.
          </p>
        </div>

        <div className="port-grid">
          {projects.map((p) => (
            <div className="port-card" key={p.number}>

              <div className="port-card-left">
                <div className="port-num">{p.number}</div>

                <div className="port-card-top">
                  <span className="port-tag">{p.tag}</span>
                  <span className={`port-status ${p.status === 'Live' ? 'live' : 'building'}`}>
                    <span className="port-status-dot"></span>
                    {p.status}
                  </span>
                  <span className="port-year">{p.year}</span>
                </div>

                <h3 className="port-card-title">{p.title}</h3>
                <p className="port-card-sub">{p.subtitle}</p>
                <p className="port-card-desc">{p.desc}</p>

                <div className="port-stack">
                  {p.stack.map(s => (
                    <span className="port-stack-tag" key={s}>{s}</span>
                  ))}
                </div>

                <div className="port-links">
                  <a href={p.link} target="_blank" rel="noreferrer" className="port-live-btn">
                    View Live
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  {p.playstore && (
                    <a href={p.playstore} target="_blank" rel="noreferrer" className="port-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M3.18 23.76c.3.17.64.24.99.2l13.7-7.92-3.01-3.01-11.68 10.73zM.5 1.03C.19 1.4 0 1.96 0 2.69v18.62c0 .73.19 1.29.5 1.66l.09.08 10.43-10.43v-.25L.59.95.5 1.03zM20.7 10.75l-2.96-1.71-3.3 3.3 3.3 3.3 2.98-1.72c.85-.49.85-1.29-.02-1.17zM4.17.24L17.87 8.16l-3.01 3.01L3.18.44c.3-.04.64.03.99.2v-.4z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                </div>
              </div>

              <div className="port-card-right">
                <div className="port-img-frame">
                  <img src={p.image} alt={p.title} className="port-project-img" />
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

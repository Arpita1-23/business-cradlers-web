import './Portfolio.css'
const curapathImg = new URL('../assets/projects/curapathlogo.jpg', import.meta.url).href
import shastrijImg from '../assets/projects/shastriji.jpeg'
import yojanaImg from '../assets/projects/yojnaai.jpeg'

const projects = [
  {
    number: '01',
    tag: 'Mobile App',
    title: 'Shastri Ji',
    subtitle: 'Pandit Booking Platform',
    desc: 'A full-stack pandit booking platform — Uber for Pandits. Flutter mobile app with Django REST backend, real-time booking flow, ritual selection and a complete store for puja items.',
    stack: ['Flutter', 'Django REST', 'Firebase', 'Razorpay', 'Google Play'],
    link: 'https://shastri-ji.com',
    playstore: 'https://play.google.com/store/apps/details?id=com.shastri_ji.app',
    appstore: 'https://apps.apple.com/in/app/shashtri-jii/id6778672568',
    status: 'Live',
    year: '2025',
    highlights: ['Flutter cross-platform app', 'Real-time booking flow', 'Google Play Store'],
    image: shastrijImg,
    color: '#f5a623'
  },
  {
    number: '02',
    tag: 'AI Platform',
    title: 'Yojna AI',
    subtitle: 'Government Scheme Discovery Platform',
    desc: 'An AI-powered platform that helps Indian citizens discover government schemes they are eligible for. Built with Django, Next.js and Claude API — serving users across all states with smart recommendations.',
    stack: ['Next.js', 'Django', 'Claude API', 'PostgreSQL', 'Redis'],
    link: 'https://www.yojnaai.com',
    playstore: null,
    status: 'Live',
    year: '2024',
    highlights: ['100+ govt schemes indexed', 'AI-powered matching', 'WhatsApp share feature'],
    image: yojanaImg,
    color: '#4d9fff'
  },
  {
    number: '03',
    tag: 'Healthcare / AI',
    title: 'CuraPath',
    subtitle: 'AI-Powered Family Health Platform',
    desc: 'CuraPath brings a family\'s health together. Upload prescriptions and reports, AI organises them into a health timeline. Understand insurance in plain language, get medicine reminders, carry a QR emergency card, and share records only with verified doctors you approve.',
    stack: ['React Native', 'Django REST', 'Claude API', 'PostgreSQL', 'Cloudinary'],
    link: 'https://www.curapath.in',
    playstore: null,
    appstore: null,
    status: 'Live',
    year: '2026',
    highlights: ['AI Medical Locker with OCR', 'Insurance summary & claim estimator', 'NMC-verified doctors'],
    image: curapathImg,
    color: '#7c3aed'
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

                <div className="port-links">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="port-live-btn">
                      View Live
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 7h8M7 3l4 4-4 4"/>
                      </svg>
                    </a>
                  )}
                  {p.playstore && (
                    <a href={p.playstore} target="_blank" rel="noreferrer" className="port-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M3.18 23.76c.3.17.64.24.99.2l13.7-7.92-3.01-3.01-11.68 10.73zM.5 1.03C.19 1.4 0 1.96 0 2.69v18.62c0 .73.19 1.29.5 1.66l.09.08 10.43-10.43v-.25L.59.95.5 1.03zM20.7 10.75l-2.96-1.71-3.3 3.3 3.3 3.3 2.98-1.72c.85-.49.85-1.29-.02-1.17zM4.17.24L17.87 8.16l-3.01 3.01L3.18.44c.3-.04.64.03.99.2v-.4z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                  {p.appstore && (
                    <a href={p.appstore} target="_blank" rel="noreferrer" className="port-play-btn" style={{background:'#1a1a2e', borderColor:'#3a3a6a', color:'#a0a0ff'}}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  )}
                </div>
              </div>

              <div className="port-card-right">
                <div className="port-year">{p.year}</div>
                <div className="port-image-wrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="port-project-img"
                  />
                  <div className="port-image-overlay">
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

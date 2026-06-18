import './Services.css'

const services = [
  {
    number: '01',
    title: 'Web Development',
    desc: 'Full-stack web apps built with React, Next.js and Django — fast, scalable and production-ready.',
    tags: ['React', 'Next.js', 'Django'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Mobile Applications',
    desc: 'Cross-platform iOS & Android apps with Flutter — native performance, single codebase.',
    tags: ['Flutter', 'iOS', 'Android'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="17" r="1" fill="#b87333" stroke="none"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'AI Integration',
    desc: 'Claude API, GPT & custom ML pipelines wired directly into your product for intelligent automation.',
    tags: ['Claude API', 'GPT-4', 'Python'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Backend & APIs',
    desc: 'Robust REST APIs with Django & Node.js — architected for high throughput and long-term reliability.',
    tags: ['Django REST', 'Node.js', 'PostgreSQL'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <ellipse cx="12" cy="7" rx="8" ry="3"/>
        <path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7"/>
        <path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/>
      </svg>
    )
  },
  {
    number: '05',
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipelines, Render & Vercel deployments — zero downtime, always-on production systems.',
    tags: ['Render', 'Vercel', 'GitHub CI'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/>
        <path d="M12 3v18M3 7l9 5 9-5"/>
      </svg>
    )
  },
  {
    number: '06',
    title: 'UI/UX Design',
    desc: 'Figma-first design systems and pixel-perfect implementations that users genuinely enjoy.',
    tags: ['Figma', 'Tailwind', 'CSS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round"/>
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">

        <div className="srv-header">
          <div className="srv-eyebrow">
            <span className="srv-eyebrow-line"></span>
            <span className="srv-eyebrow-txt">What We Do</span>
          </div>
          <h2 className="srv-title">
            Services Built for<br/>
            <em>Modern Businesses</em>
          </h2>
          <p className="srv-subtitle">
            From idea to deployment — we own the full product lifecycle so you can focus on growth.
          </p>
        </div>

        <div className="srv-grid">
          {services.map((s) => (
            <div className="srv-card fade-up" key={s.number}>
              <div className="srv-card-top">
                <div className="srv-icon-wrap">{s.icon}</div>
                <span className="srv-num">{s.number}</span>
              </div>
              <h3 className="srv-card-title">{s.title}</h3>
              <p className="srv-card-desc">{s.desc}</p>
              <div className="srv-tags">
                {s.tags.map(t => (
                  <span className="srv-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="srv-card-arrow">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 7h8M7 3l4 4-4 4"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="srv-bottom">
          <p className="srv-bottom-txt">Have a project in mind?</p>
          <a href="#contact" className="srv-cta">Let's Talk
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

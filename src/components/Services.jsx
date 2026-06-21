import { useState, useEffect } from 'react'
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
    ),
    fullDesc: 'We build full-stack web applications from scratch — interactive frontends with React or Next.js paired with robust Django backends. Every project is built for performance, SEO, and long-term maintainability.',
    features: [
      'React & Next.js single-page and server-rendered apps',
      'Admin dashboards and internal tools',
      'SEO-optimised with server-side rendering',
      'Authentication, roles & permissions systems',
      'Third-party API and payment gateway integration',
      'Responsive design across all devices',
    ],
    techStack: ['React', 'Next.js', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
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
    ),
    fullDesc: 'We develop cross-platform mobile apps with Flutter that feel native on both iOS and Android. From Play Store submission to real-time features — we handle the full mobile product lifecycle.',
    features: [
      'Single Flutter codebase for iOS & Android',
      'Google Play Store & Apple App Store deployment',
      'Push notifications and real-time updates',
      'Offline-first architecture with local storage',
      'Native device features: camera, GPS, biometrics',
      'In-app payments via Razorpay / Stripe',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Django REST', 'Razorpay', 'Google Maps'],
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
    ),
    fullDesc: 'We integrate large language models and custom ML pipelines directly into your products. From AI chatbots to automated document processing — we build intelligent features that actually ship.',
    features: [
      'Claude API & GPT-4 integration',
      'AI chatbots and virtual assistants',
      'Retrieval-Augmented Generation (RAG) systems',
      'Automated document analysis & extraction',
      'Smart recommendation engines',
      'Custom ML model training and deployment',
    ],
    techStack: ['Claude API', 'OpenAI GPT-4', 'Python', 'LangChain', 'FastAPI', 'PostgreSQL'],
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
    ),
    fullDesc: 'We design and build production-grade REST APIs and backend systems that power your product. Built on Django REST Framework and Node.js, our backends are fast, secure, and built to scale.',
    features: [
      'RESTful API design with versioning',
      'JWT & OAuth2 authentication',
      'PostgreSQL database design and optimisation',
      'Redis caching for high-throughput endpoints',
      'Webhooks and event-driven architecture',
      'Comprehensive API documentation with Swagger',
    ],
    techStack: ['Django REST', 'Node.js', 'PostgreSQL', 'Redis', 'Celery', 'Nginx'],
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
    ),
    fullDesc: 'We set up and manage the cloud infrastructure and deployment pipelines that keep your product running reliably. From GitHub Actions to Render and Vercel — we automate everything so you ship faster.',
    features: [
      'CI/CD pipelines with GitHub Actions',
      'Zero-downtime deployments on Render & Vercel',
      'Environment management (dev, staging, production)',
      'Docker containerisation',
      'Uptime monitoring and alerting',
      'Automated database backups and recovery',
    ],
    techStack: ['GitHub Actions', 'Render', 'Vercel', 'Docker', 'Nginx', 'PostgreSQL'],
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
    ),
    fullDesc: 'We design interfaces that are beautiful, intuitive, and conversion-focused. Starting in Figma with a solid design system, we then implement every pixel in code — no gaps between design and reality.',
    features: [
      'Figma design systems and component libraries',
      'User flow mapping and wireframing',
      'Responsive layouts for all screen sizes',
      'Accessibility-first implementation (WCAG)',
      'Dark & light theme support',
      'Micro-interactions and animation polish',
    ],
    techStack: ['Figma', 'Tailwind CSS', 'CSS', 'React', 'Framer Motion', 'Storybook'],
  },
]

export default function Services() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [active])

  const handleQuote = () => {
    setActive(null)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  const service = active !== null ? services[active] : null

  return (
    <>
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
            {services.map((s, i) => (
              <div className="srv-card" key={s.number}>
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
                <button className="srv-card-arrow" onClick={() => setActive(i)} aria-label={`Learn more about ${s.title}`}>
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 7h8M7 3l4 4-4 4"/>
                  </svg>
                </button>
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

      {/* Service Detail Modal */}
      {active !== null && (
        <div className="sdm-backdrop" onClick={() => setActive(null)}>
          <div className="sdm-panel" onClick={e => e.stopPropagation()}>

            <button className="sdm-close" onClick={() => setActive(null)} aria-label="Close">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l12 12M13 1L1 13"/>
              </svg>
            </button>

            <div className="sdm-top">
              <div className="sdm-icon-wrap">{service.icon}</div>
              <span className="sdm-num">{service.number}</span>
            </div>

            <h2 className="sdm-title">{service.title}</h2>
            <p className="sdm-desc">{service.fullDesc}</p>

            <div className="sdm-section">
              <h3 className="sdm-section-label">What's Included</h3>
              <ul className="sdm-features">
                {service.features.map(f => (
                  <li className="sdm-feature" key={f}>
                    <svg viewBox="0 0 12 12" fill="none" stroke="#b87333" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sdm-section">
              <h3 className="sdm-section-label">Tech Stack</h3>
              <div className="sdm-stack">
                {service.techStack.map(t => (
                  <span className="sdm-stack-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <button className="sdm-quote-btn" onClick={handleQuote}>
              Get a Quote
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </div>
        </div>
      )}
    </>
  )
}

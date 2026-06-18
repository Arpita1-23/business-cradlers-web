import { useEffect } from 'react'
import './Careers.css'

const openRoles = [
  {
    title: 'Flutter Developer',
    type: 'Full Time',
    location: 'Jabalpur / Remote',
    exp: '1-3 Years',
    desc: 'We are looking for a Flutter developer who can build beautiful cross-platform mobile apps. You will work on real products like Shastri Ji and upcoming mobile projects.',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Android', 'iOS'],
  },
  {
    title: 'React / Next.js Developer',
    type: 'Full Time',
    location: 'Jabalpur / Remote',
    exp: '1-3 Years',
    desc: 'Join our frontend team to build fast, beautiful web applications. You will work on client projects and internal products using React and Next.js.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Django Backend Developer',
    type: 'Full Time',
    location: 'Jabalpur / Remote',
    exp: '1-2 Years',
    desc: 'Build scalable REST APIs and backend systems with Django. You will work closely with frontend and mobile teams to deliver complete products.',
    skills: ['Django', 'Python', 'PostgreSQL', 'REST APIs', 'Redis'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    location: 'Jabalpur / Remote',
    exp: '1-2 Years',
    desc: 'Create stunning user interfaces and design systems in Figma. You will own the visual design of our products from wireframe to final pixel-perfect handoff.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'Design Systems', 'Branding'],
  },
  {
    title: 'AI / ML Engineer',
    type: 'Part Time / Intern',
    location: 'Remote',
    exp: 'Fresher / 1 Year',
    desc: 'Work on cutting-edge AI integrations using Claude API, GPT and custom ML pipelines. Help us build smarter products for our clients.',
    skills: ['Python', 'Claude API', 'GPT', 'Machine Learning', 'FastAPI'],
  },
]

const perks = [
  { icon: '🚀', title: 'Real Products', desc: 'Work on live products used by real users across India — not just dummy projects.' },
  { icon: '🧠', title: 'Learn Fast', desc: 'Work with modern stacks — React, Flutter, Django, AI APIs — and grow your skills rapidly.' },
  { icon: '🏠', title: 'Remote Friendly', desc: 'Work from anywhere. We care about output, not where you sit.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Fair compensation based on skills and experience. We reward good work.' },
  { icon: '🤝', title: 'Small Team', desc: 'Be a core member, not just a cog. Your work directly impacts the product.' },
  { icon: '📈', title: 'Grow With Us', desc: 'As we grow, you grow. Early team members get the best opportunities.' },
]

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="careers-page">

      <nav className="careers-nav">
        <a href="/" className="careers-logo">
          <div className="careers-logo-mark">
            <svg viewBox="0 0 18 18">
              <path d="M2 9h5M9 2v5M9 12v4M12 9h4" strokeLinecap="round" stroke="#b87333" fill="none" strokeWidth="2"/>
              <circle cx="9" cy="9" r="1.8" fill="#b87333"/>
            </svg>
          </div>
          <div>
            <div className="careers-logo-name">Business <span>Cradlers</span></div>
            <div className="careers-logo-sub">Pvt. Ltd.</div>
          </div>
        </a>
        <a href="/" className="careers-back">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 7H3M7 3l-4 4 4 4"/>
          </svg>
          Back to Website
        </a>
      </nav>

      <section className="careers-hero">
        <div className="careers-hero-inner">
          <div className="careers-eyebrow">
            <span className="careers-eyebrow-line"></span>
            <span className="careers-eyebrow-txt">We Are Hiring</span>
          </div>
          <h1 className="careers-title">
            Build the Future<br/>
            <em>With Us</em>
          </h1>
          <p className="careers-subtitle">
            We are a small but mighty team building real products from Jabalpur. If you love clean code, great design and working on things that matter — you will fit right in.
          </p>
          <div className="careers-hero-tags">
            <span>🏢 Jabalpur, MP</span>
            <span>💻 Remote Friendly</span>
            <span>🚀 Est. 2020</span>
            <span>👥 Small Team</span>
          </div>
        </div>
      </section>

      <section className="careers-perks">
        <div className="careers-inner">
          <h2 className="careers-section-title">Why Join <em>Cradlers?</em></h2>
          <div className="perks-grid">
            {perks.map(p => (
              <div className="perk-card" key={p.title}>
                <div className="perk-icon">{p.icon}</div>
                <h3 className="perk-title">{p.title}</h3>
                <p className="perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-roles">
        <div className="careers-inner">
          <h2 className="careers-section-title">Open <em>Positions</em></h2>
          <p className="careers-roles-sub">All roles are open to freshers and experienced candidates. We value passion and learning over years of experience.</p>
          <div className="roles-list">
            {openRoles.map(r => (
              <div className="role-card" key={r.title}>
                <div className="role-card-left">
                  <div className="role-tags">
                    <span className="role-type">{r.type}</span>
                    <span className="role-loc">📍 {r.location}</span>
                    <span className="role-exp">⏱ {r.exp}</span>
                  </div>
                  <h3 className="role-title">{r.title}</h3>
                  <p className="role-desc">{r.desc}</p>
                  <div className="role-skills">
                    {r.skills.map(s => (
                      <span className="role-skill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="role-card-right">
                  <a
                    href={`https://wa.me/918962900701?text=Hi! I am interested in the ${r.title} position at Business Cradlers.`}
                    target="_blank"
                    rel="noreferrer"
                    className="role-apply-btn"
                  >
                    Apply via WhatsApp
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7h8M7 3l4 4-4 4"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-contact">
        <div className="careers-inner">
          <div className="careers-contact-card">
            <div className="careers-contact-left">
              <h2 className="careers-contact-title">Don't see your role?</h2>
              <p className="careers-contact-desc">We are always open to talented people. Send us your resume and tell us what you can bring to the team.</p>
            </div>
            <div className="careers-contact-right">
              <a href="mailto:bctpvtltd2025@gmail.com" className="careers-email-btn">
                Send Your Resume
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h8M7 3l4 4-4 4"/>
                </svg>
              </a>
              <a href="https://wa.me/918962900701?text=Hi! I would like to join the Business Cradlers team." target="_blank" rel="noreferrer" className="careers-wa-btn">
                <svg viewBox="0 0 24 24" fill="#3dcc72" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="careers-footer">
        <div className="careers-inner">
          <span>© 2025 Business Cradlers Technology Pvt. Ltd.</span>
          <a href="/">← Back to main website</a>
        </div>
      </footer>

    </div>
  )
}

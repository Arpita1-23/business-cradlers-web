import './Team.css'

const team = [
  {
    name: 'Danish Khan',
    role: 'Full Stack Developer',
    desc: 'Leads backend architecture and API development. Expert in Django REST, PostgreSQL and cloud deployments.',
    skills: ['Django', 'PostgreSQL', 'React', 'DevOps'],
    initial: 'DK',
    color: '#b87333'
  },
  {
    name: 'Ayush Kachhi',
    role: 'Mobile App Developer',
    desc: 'Builds cross-platform mobile experiences with Flutter. Handles app store deployments and native integrations.',
    skills: ['Flutter', 'Firebase', 'Android', 'iOS'],
    initial: 'AK',
    color: '#6a9fd8'
  },
  {
    name: 'Lakshita Shrivastava',
    role: 'Frontend Developer',
    desc: 'Crafts pixel-perfect UIs with React and Next.js. Focuses on performance, accessibility and great user experience.',
    skills: ['React', 'Next.js', 'Tailwind', 'Figma'],
    initial: 'LS',
    color: '#9f7fd8'
  },
  {
    name: 'Arpita Jain',
    role: 'UI/UX Designer',
    desc: 'Designs intuitive interfaces and complete design systems. Bridges the gap between beautiful design and clean code.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'Branding'],
    initial: 'AJ',
    color: '#d87f9f'
  }
]

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team-inner">

        <div className="team-header">
          <div className="team-eyebrow">
            <span className="team-eyebrow-line"></span>
            <span className="team-eyebrow-txt">The People</span>
          </div>
          <h2 className="team-title">Meet the <em>Builders</em></h2>
          <p className="team-subtitle">
            A small but mighty team — every member owns their craft and brings their best to every project.
          </p>
        </div>

        <div className="team-grid">
          {team.map((m) => (
            <div className="team-card fade-up" key={m.name}>
              <div className="team-card-top">
                <div className="team-avatar" style={{borderColor: m.color}}>
                  <span className="team-initial" style={{color: m.color}}>{m.initial}</span>
                </div>
                <div className="team-card-header">
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role" style={{color: m.color}}>{m.role}</p>
                </div>
              </div>
              <p className="team-desc">{m.desc}</p>
              <div className="team-skills">
                {m.skills.map(s => (
                  <span className="team-skill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="team-bottom">
          <div className="team-bottom-left">
            <p className="team-bottom-title">Want to join our team?</p>
            <p className="team-bottom-sub">We are always looking for passionate developers and designers.</p>
          </div>
          <a href="/careers" className="team-bottom-btn">
            Get in Touch
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

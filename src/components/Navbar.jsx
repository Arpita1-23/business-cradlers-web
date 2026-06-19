import { useState } from 'react'
import './Navbar.css'

const menuItems = [
  {
    label: 'Services',
    href: '#services',
    mega: {
      heading: 'What We Build',
      cols: [
        {
          title: 'Development',
          links: [
            { name: 'Web Applications', desc: 'React, Next.js, Django' },
            { name: 'Mobile Apps', desc: 'Flutter, iOS & Android' },
            { name: 'Backend & APIs', desc: 'Django REST, Node.js' },
            { name: 'Cloud & DevOps', desc: 'Render, Vercel, CI/CD' },
          ]
        },
        {
          title: 'Design & AI',
          links: [
            { name: 'UI/UX Design', desc: 'Figma, design systems' },
            { name: 'AI Integration', desc: 'Claude API, GPT-4' },
            { name: 'Branding', desc: 'Logo, identity, visuals' },
            { name: 'Consulting', desc: 'Tech strategy & planning' },
          ]
        }
      ]
    }
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
    mega: {
      heading: 'Our Projects',
      cols: [
        {
          title: 'Live Products',
          links: [
            { name: 'YojanaAI', desc: 'AI govt scheme platform' },
          ]
        },
        {
          title: 'In Development',
          links: [
            { name: 'Shastri Ji', desc: 'Pandit booking app' },
          ]
        }
      ]
    }
  },
  {
    label: 'About',
    href: '#about',
    mega: {
      heading: 'Who We Are',
      cols: [
        {
          title: 'Company',
          links: [
            { name: 'Our Story', desc: 'Founded 2020, Jabalpur' },
            { name: 'Our Values', desc: 'Quality, speed, trust' },
            { name: 'Our Vision', desc: 'Building for India' },
          ]
        },
        {
          title: 'Team',
          links: [
            { name: 'Danish Khan', desc: 'Full Stack Developer' },
            { name: 'Ayush Kachhi', desc: 'Mobile Developer' },
            { name: 'Lakshita Shrivastava', desc: 'Frontend Developer' },
            { name: 'Arpita Jain', desc: 'UI/UX Designer' },
          ]
        }
      ]
    }
  },
  { label: 'Team', href: '#team', mega: null },
  {
    label: 'Careers',
    href: '#contact',
    mega: {
      heading: 'Join Our Team',
      cols: [
        {
          title: 'Open Roles',
          links: [
            { name: 'Flutter Developer', desc: 'Mobile app development' },
            { name: 'React Developer', desc: 'Frontend web development' },
            { name: 'Django Developer', desc: 'Backend & API development' },
            { name: 'UI/UX Designer', desc: 'Figma & design systems' },
          ]
        },
        {
          title: 'Life at Cradle',
          links: [
            { name: 'Our Culture', desc: 'How we work together' },
            { name: 'Learning & Growth', desc: 'We invest in our people' },
            { name: 'Work Environment', desc: 'Flexible & collaborative' },
            { name: 'How We Hire', desc: 'Simple 3-step process' },
          ]
        }
      ]
    }
  },
  { label: 'Contact', href: '#contact', mega: null },
]

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [theme, setTheme] = useState('dark')
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleClick = (href) => {
    setActive(null)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav" onMouseLeave={() => setActive(null)}>
        <a href="#" className="logo" onClick={() => { setActive(null); setMobileOpen(false) }}>
          <div className="logo-mark">
            <svg viewBox="0 0 18 18">
              <path d="M2 9h5M9 2v5M9 12v4M12 9h4" strokeLinecap="round" stroke="#b87333" fill="none" strokeWidth="2"/>
              <circle cx="9" cy="9" r="1.8" fill="#b87333"/>
            </svg>
          </div>
          <div>
            <div className="logo-name">Business <span>Cradle</span></div>
            <div className="logo-sub">Technology Pvt. Ltd.</div>
          </div>
        </a>

        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${active === item.label ? 'active' : ''}`}
              onMouseEnter={() => item.mega ? setActive(item.label) : setActive(null)}
            >
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
                className="nav-link"
              >
                {item.label}
                {item.mega && (
                  <svg className="nav-chevron" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4l3 3 3-3"/>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button className="btn-nav" onClick={() => handleClick('#contact')}>Let's Talk</button>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={(e) => { e.preventDefault(); handleClick('#services') }}>Services</a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); handleClick('#portfolio') }}>Portfolio</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleClick('#about') }}>About</a>
          <a href="#team" onClick={(e) => { e.preventDefault(); handleClick('#team') }}>Team</a>
          <a href="/careers">Careers</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleClick('#contact') }}>Contact</a>
        </div>
      )}

      {menuItems.map((item) => item.mega && (
        <div
          key={item.label}
          className={`mega-menu ${active === item.label ? 'mega-open' : ''}`}
          onMouseEnter={() => setActive(item.label)}
          onMouseLeave={() => setActive(null)}
        >
          <div className="mega-inner">
            <div className="mega-heading">{item.mega.heading}</div>
            <div className="mega-cols">
              {item.mega.cols.map((col) => (
                <div className="mega-col" key={col.title}>
                  <div className="mega-col-title">{col.title}</div>
                  <div className="mega-col-links">
                    {col.links.map((link) => (
                      <a
                        key={link.name}
                        href="#"
                        className="mega-link"
                        onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
                      >
                        <div className="mega-link-name">{link.name}</div>
                        <div className="mega-link-desc">{link.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mega-cta-col">
                <div className="mega-cta-card">
                  <div className="mega-cta-tag">Ready to start?</div>
                  <p className="mega-cta-txt">Tell us about your project and get a free proposal in 48 hours.</p>
                  <button className="mega-cta-btn" onClick={() => handleClick('#contact')}>Get in Touch →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {active && <div className="mega-overlay" onClick={() => setActive(null)}></div>}
    </>
  )
}

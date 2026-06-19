import './Hero.css'

export default function Hero() {
  return (
    <>
      <section className="hero">

        <div className="hero-bg">
          <div className="bg-glow"></div>
        </div>

        <div className="hero-content">

          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot"></span>
              Trusted by Growing Businesses · Est. 2020
            </div>

            <h1 className="headline">
              <span className="hl-plain">Build</span>
              <span className="hl-italic"> Digital</span>
              <br/>
              <span className="hl-plain">Products</span>
              <br/>
              <span className="hl-outline">With Cradle</span>
            </h1>

            <p className="hero-para">
              Software Development, AI Integration &amp; Mobile Apps for
              businesses that move fast — delivered with precision and speed.
            </p>

            <div className="cta-row">
              <a href="#contact" className="btn-primary">
                Book Free Consultation
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
              </a>
              <a href="#portfolio" className="btn-ghost">View Portfolio ↗</a>
              <a href="#contact" className="btn-whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>

            <div className="stats-row" id="hero-stats">
              <div className="stat">
                <div className="stat-num">50<em>+</em></div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat-div"></div>
              <div className="stat">
                <div className="stat-num">30<em>+</em></div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-div"></div>
              <div className="stat">
                <div className="stat-num">94<em>%</em></div>
                <div className="stat-label">Retention Rate</div>
              </div>
              <div className="stat-div"></div>
              <div className="stat">
                <div className="stat-num">5<em>+</em></div>
                <div className="stat-label">Years</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="domain-label">OUR EXPERTISE</div>
            <div className="service-grid">
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="srv-name-hero">Web Apps</div>
              </div>
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="#b87333" stroke="none"/></svg>
                </div>
                <div className="srv-name-hero">Mobile Apps</div>
              </div>
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="srv-name-hero">AI Integration</div>
              </div>
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path d="M12 3v18M3 7l9 5 9-5"/></svg>
                </div>
                <div className="srv-name-hero">Cloud &amp; DevOps</div>
              </div>
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4" strokeLinecap="round"/></svg>
                </div>
                <div className="srv-name-hero">UI/UX Design</div>
              </div>
              <div className="srv-card-hero">
                <div className="srv-icon-hero">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="srv-name-hero">Django &amp; APIs</div>
              </div>
            </div>

            <div className="outcomes-label">RECENT OUTCOMES</div>
            <div className="outcomes-list">
              <div className="outcome-item">
                <span className="outcome-dot"></span>
                YojanaAI — AI govt scheme platform live in production
              </div>
              <div className="outcome-item">
                <span className="outcome-dot"></span>
                Shastri Ji — Pandit booking app on Google Play
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="marquee-strip" style={{overflow:'hidden',width:'100%'}}>
        <div className="marquee-track">
          <span>React &amp; Next.js</span><span className="sep">◆</span>
          <span>Flutter</span><span className="sep">◆</span>
          <span>Django REST</span><span className="sep">◆</span>
          <span>Claude AI</span><span className="sep">◆</span>
          <span>PostgreSQL</span><span className="sep">◆</span>
          <span>Firebase</span><span className="sep">◆</span>
          <span>Cloud Deploy</span><span className="sep">◆</span>
          <span>UI/UX Design</span><span className="sep">◆</span>
          <span>React &amp; Next.js</span><span className="sep">◆</span>
          <span>Flutter</span><span className="sep">◆</span>
          <span>Django REST</span><span className="sep">◆</span>
          <span>Claude AI</span><span className="sep">◆</span>
          <span>PostgreSQL</span><span className="sep">◆</span>
          <span>Firebase</span><span className="sep">◆</span>
          <span>Cloud Deploy</span><span className="sep">◆</span>
          <span>UI/UX Design</span><span className="sep">◆</span>
        </div>
      </div>
    </>
  )
}

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 18 18">
                  <path d="M2 9h5M9 2v5M9 12v4M12 9h4" stroke="#b87333" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="9" cy="9" r="1.8" fill="#b87333"/>
                </svg>
              </div>
              <div>
                <div className="footer-logo-name">Business <span>Cradle</span></div>
                <div className="footer-logo-sub">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="footer-tagline">
              Building digital products that scale — from Jabalpur to the world.
            </p>
            <a href="https://wa.me/918962900701" target="_blank" rel="noreferrer" className="footer-whatsapp">
              <svg viewBox="0 0 24 24" fill="#3dcc72" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +91 8962-900-701
            </a>
            <a href="https://www.instagram.com/business_cradle_technology" target="_blank" rel="noreferrer" className="footer-instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="1.5" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#e1306c" stroke="none"/>
              </svg>
              @business_cradle_technology
            </a>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <div className="footer-col-title">Services</div>
              <ul className="footer-col-links">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">AI Integration</a></li>
                <li><a href="#services">Backend &amp; APIs</a></li>
                <li><a href="#services">UI/UX Design</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <ul className="footer-col-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Projects</div>
              <ul className="footer-col-links">
                <li><a href="https://shashtri.onrender.com" target="_blank" rel="noreferrer">Shastri Ji</a></li>
                <li><a href="https://yojana-tau.vercel.app" target="_blank" rel="noreferrer">Yojna AI</a></li>
              </ul>
              <div className="footer-col-title" style={{marginTop:'28px'}}>Location</div>
              <div className="footer-location">
                <svg viewBox="0 0 16 16" fill="none" stroke="#b87333" strokeWidth="1.5">
                  <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5z"/>
                  <circle cx="8" cy="6" r="1.5"/>
                </svg>
                <span>Jabalpur, Madhya Pradesh<br/>India — 482001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 Business Cradle Technology Pvt. Ltd. · All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="https://www.instagram.com/business_cradle_technology" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-made">
            Made with ❤️ in Jabalpur
          </div>
        </div>

      </div>
    </footer>
  )
}

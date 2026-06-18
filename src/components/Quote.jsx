import './Quote.css'

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-inner">

        <div className="quote-bg-text">BC</div>

        <div className="quote-content">
          <div className="quote-mark">"</div>
          <blockquote className="quote-text">
            We started Business Cradlers with one goal — to prove that world-class software can be built right here in Jabalpur. Every project we take on is a statement that geography does not limit greatness.
          </blockquote>
          <div className="quote-author">
            <div className="quote-author-avatar">
              <span>AS</span>
            </div>
            <div className="quote-author-info">
              <div className="quote-author-name">Ankit Shrivastava</div>
              <div className="quote-author-role">Founder &amp; CEO, Business Cradlers</div>
            </div>
            <div className="quote-divider"></div>
            <div className="quote-company">
              <div className="quote-company-name">Business Cradlers</div>
              <div className="quote-company-loc">Jabalpur, MP · Est. 2020</div>
            </div>
          </div>
        </div>

        <div className="quote-side">
          <div className="quote-side-stat">
            <div className="qss-num">2020</div>
            <div className="qss-label">Year Founded</div>
          </div>
          <div className="quote-side-stat">
            <div className="qss-num">Jabalpur</div>
            <div className="qss-label">Where We Build</div>
          </div>
          <div className="quote-side-stat">
            <div className="qss-num">India</div>
            <div className="qss-label">Where We Serve</div>
          </div>
        </div>

      </div>
    </section>
  )
}

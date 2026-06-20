import './Industries.css'

const industries = [
  {
    emoji: '🏥',
    name: 'Healthcare',
    desc: 'Patient management, telemedicine & health tracking apps'
  },
  {
    emoji: '🏫',
    name: 'Education',
    desc: 'E-learning platforms, LMS & student management systems'
  },
  {
    emoji: '🛒',
    name: 'E-Commerce',
    desc: 'Online stores, inventory management & payment systems'
  },
  {
    emoji: '🏛️',
    name: 'Government',
    desc: 'Civic tech, scheme portals & citizen service platforms'
  },
  {
    emoji: '🏨',
    name: 'Hospitality',
    desc: 'Booking systems, POS & customer experience apps'
  },
  {
    emoji: '💰',
    name: 'Fintech',
    desc: 'Payment gateways, wallets & financial management tools'
  },
  {
    emoji: '🚚',
    name: 'Logistics',
    desc: 'Fleet tracking, delivery management & supply chain apps'
  },
  {
    emoji: '🏗️',
    name: 'Real Estate',
    desc: 'Property listings, booking & management platforms'
  },
  {
    emoji: '🌾',
    name: 'Agriculture',
    desc: 'Farm management, market access & agri-tech solutions'
  },
  {
    emoji: '⚖️',
    name: 'Legal',
    desc: 'Case management, document automation & legal tech'
  },
  {
    emoji: '🎯',
    name: 'Startups',
    desc: 'MVPs, product development & tech co-founding'
  },
  {
    emoji: '🏭',
    name: 'Manufacturing',
    desc: 'ERP systems, production tracking & quality management'
  },
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="ind-inner">

        <div className="ind-header">
          <div className="ind-eyebrow">
            <span className="ind-eyebrow-line"></span>
            <span className="ind-eyebrow-txt">Industries We Serve</span>
          </div>
          <h2 className="ind-title">Built for <em>Real-World</em> Sectors</h2>
          <p className="ind-subtitle">
            We have built products across diverse industries — each with unique challenges we love solving.
          </p>
        </div>

        <div className="ind-grid">
          {industries.map((ind) => (
            <div className="ind-card" key={ind.name}>
              <div className="ind-emoji">{ind.emoji}</div>
              <div className="ind-name">{ind.name}</div>
              <div className="ind-desc">{ind.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

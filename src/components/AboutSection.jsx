import { Code2, Compass, Cpu, Zap } from 'lucide-react'

export function AboutSection({ about }) {
  const icons = [Cpu, Code2, Zap, Compass]

  return (
    <section id="about" className="content-section" aria-label="About me">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">01.</span>
          About
        </h2>
      </div>

      <div className="about-text-wrapper">
        {about.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      {/* Highlights / Quick Stats */}
      {about.highlights && (
        <div className="about-highlight-grid">
          {about.highlights.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={item.label} className="highlight-stat-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span className="stat-value">{item.value}</span>
                  <Icon size={18} style={{ color: 'var(--accent-teal)', opacity: 0.8 }} />
                </div>
                <div className="stat-label">{item.label}</div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

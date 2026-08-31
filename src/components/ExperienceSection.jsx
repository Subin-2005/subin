import { ArrowUpRight, FileText } from 'lucide-react'

export function ExperienceSection({ experience, onOpenResume }) {
  return (
    <section id="experience" className="content-section" aria-label="Work experience">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">02.</span>
          Experience
        </h2>
      </div>

      <div className="group-list">
        {experience.map((item, idx) => (
          <div key={idx} className="card-interactive experience-item">
            {/* Timeline Period */}
            <div className="experience-period">{item.period}</div>

            {/* Experience Details */}
            <div className="experience-content">
              <h3 className="experience-role-title">
                <span>{item.title}</span>
                <span style={{ color: 'var(--text-dim)' }}>•</span>
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="company-name"
                  aria-label={`${item.company} website (opens in new tab)`}
                >
                  {item.company}
                  <ArrowUpRight size={15} className="arrow-link-icon" />
                </a>
              </h3>

              <p className="experience-desc">{item.description}</p>

              <ul className="tech-tags-list" aria-label="Technologies used">
                {item.technologies.map((tech) => (
                  <li key={tech} className="tech-pill">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Resume CTA */}
      <div style={{ marginTop: '2.5rem', paddingLeft: '1rem' }}>
        <button
          type="button"
          onClick={onOpenResume}
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <FileText size={16} />
          <span>View Full Résumé</span>
          <ArrowUpRight size={15} className="arrow-link-icon" />
        </button>
      </div>
    </section>
  )
}

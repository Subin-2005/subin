import { useState } from 'react'
import { Award, ArrowUpRight, ExternalLink, X } from 'lucide-react'

export function CertificationsSection({ certifications }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="content-section" aria-label="Certifications and licenses">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">02.</span>
          Certifications
        </h2>
      </div>

      <div className="group-list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="card-interactive cert-item">
            {/* Year / Period / Badge */}
            <div className="cert-period-column">
              <span className="cert-period">{cert.period}</span>
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setLightboxSrc(cert.image)}
                  className="cert-thumbnail-column"
                  aria-label={`Open full view of ${cert.title} certificate`}
                  style={{ border: 'none', background: 'transparent', padding: 0 }}
                >
                  <img src={cert.image} alt={`${cert.title} certificate`} className="cert-thumb" />
                </button>
              ) : null}
            </div>

            {/* Content Details */}
            <div className="cert-content">
              <h3 className="cert-title">
                <span>{cert.title}</span>
                <span style={{ color: 'var(--text-dim)' }}>•</span>
                {cert.issuerUrl ? (
                  <a
                    href={cert.issuerUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="company-name"
                    aria-label={`${cert.issuer} website (opens in new tab)`}
                  >
                    {cert.issuer}
                    <ArrowUpRight size={14} className="arrow-link-icon" />
                  </a>
                ) : (
                  <span className="company-name">{cert.issuer}</span>
                )}
              </h3>

              {cert.credentialId && (
                <div className="cert-id-tag">
                  <Award size={13} style={{ color: 'var(--accent-teal)' }} />
                  <span>Credential ID: <code>{cert.credentialId}</code></span>
                </div>
              )}

              <p className="experience-desc">{cert.description}</p>


              {/* Technologies / Competencies Tags */}
              {cert.technologies && cert.technologies.length > 0 && (
                <ul className="tech-tags-list" aria-label="Skills covered">
                  {cert.technologies.map((tech) => (
                    <li key={tech} className="tech-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {/* Verify Link */}
              {cert.credentialUrl && (
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-icon-link"
                    style={{ color: 'var(--accent-teal)', fontSize: '0.8125rem' }}
                    aria-label={`Verify ${cert.title} credential (opens in new tab)`}
                  >
                    <ExternalLink size={13} />
                    <span>Show Credential</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal for full-size certificate preview */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(2, 6, 23, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '95%', maxHeight: '95%', position: 'relative' }}
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close certificate preview"
              style={{
                position: 'absolute',
                right: '-10px',
                top: '-10px',
                zIndex: 70,
                background: 'rgba(15,23,42,0.8)',
                border: '1px solid rgba(148,163,184,0.08)',
                color: 'var(--text-muted)',
                padding: '0.45rem',
                borderRadius: '9999px',
              }}
            >
              <X size={18} />
            </button>

            <img
              src={lightboxSrc}
              alt="Full certificate"
              style={{ display: 'block', maxWidth: '100%', maxHeight: '80vh', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

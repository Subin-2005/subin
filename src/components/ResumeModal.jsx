import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react'

export function ResumeModal({ isOpen, onClose, personal, certifications = [], skills }) {
  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#0f172a',
          border: '1px solid rgba(94, 234, 212, 0.25)',
          borderRadius: '1rem',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(148, 163, 184, 0.1)', paddingBottom: '1rem' }}>
          <div>
            <h2 id="resume-title" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {personal.name} — Résumé
            </h2>
            <p style={{ color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
              {personal.title} • {personal.location}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              color: 'var(--text-muted)',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              backgroundColor: 'rgba(148, 163, 184, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Summary */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={16} style={{ color: 'var(--accent-teal)' }} />
              Professional Profile
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              {personal.tagline} Focused on Python, Django, React, MySQL, and building responsive, reliable full-stack applications with clean architecture.
            </p>
          </div>

          {/* Certifications Highlights */}
          {certifications && certifications.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} style={{ color: 'var(--accent-teal)' }} />
                Certifications & Credentials
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certifications.map((cert, idx) => (
                  <div key={idx} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '0.875rem', borderRadius: '0.5rem', border: '1px solid rgba(148, 163, 184, 0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem' }}>
                      <strong style={{ color: 'var(--text-heading)', fontSize: '0.9375rem' }}>{cert.title}</strong>
                      <span style={{ color: 'var(--accent-teal)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{cert.period}</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '0.35rem' }}>{cert.issuer} {cert.credentialId ? `• ID: ${cert.credentialId}` : ''}</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={16} style={{ color: 'var(--accent-teal)' }} />
              Education
            </h3>
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '0.875rem', borderRadius: '0.5rem', border: '1px solid rgba(148, 163, 184, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong style={{ color: 'var(--text-heading)', fontSize: '0.9375rem' }}>Bachelor of Engineering in Computer Science & Engineering</strong>
                <span style={{ color: 'var(--accent-teal)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>2022 — Present</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-body)', marginTop: '0.25rem' }}>Focus on Software Engineering, Full Stack Development, Data Structures & Algorithms, and AI Systems.</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid rgba(148, 163, 184, 0.1)', paddingTop: '1rem' }}>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-primary"
            style={{ fontSize: '0.8125rem', padding: '0.6rem 1.2rem' }}
          >
            <Download size={15} />
            <span>Print / Save PDF</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-solid"
            style={{ fontSize: '0.8125rem', padding: '0.6rem 1.2rem' }}
          >
            <span>Close Preview</span>
          </button>
        </div>
      </div>
    </div>
  )
}

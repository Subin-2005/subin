import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'

export function MobileNav({ navLinks, activeSection, onOpenResume, personal }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="mobile-nav-bar"
      style={{
        display: 'none',
      }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .mobile-nav-bar {
            display: block !important;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 40;
            background: rgba(10, 17, 32, 0.9);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--accent-teal)' }}>S</span>UBIN
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={onOpenResume}
            className="btn-primary"
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
          >
            <FileText size={13} />
            <span>CV</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{
              color: 'var(--text-heading)',
              padding: '0.4rem',
              borderRadius: '0.375rem',
              background: 'rgba(148, 163, 184, 0.1)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            paddingTop: '1rem',
            paddingBottom: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            borderTop: '1px solid rgba(148, 163, 184, 0.08)',
            marginTop: '0.75rem',
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-teal)' : 'var(--text-body)',
                  padding: '0.4rem 0',
                }}
              >
                <span style={{ color: 'var(--accent-teal)', marginRight: '0.5rem' }}>▸</span>
                {link.name}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}

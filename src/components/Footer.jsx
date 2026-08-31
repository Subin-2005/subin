export function Footer() {
  return (
    <footer className="site-footer" style={{ marginTop: '4rem', paddingLeft: '0.5rem' }}>
      <p>
        Engineered with precision by{' '}
        <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>SUBIN S R</span>.
        Inspired by the iconic design of{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
        . Built using{' '}
        <span style={{ color: 'var(--accent-teal)' }}>React 19</span>,{' '}
        <span style={{ color: 'var(--accent-teal)' }}>Vite</span>, and pure modern CSS.
      </p>
      <p style={{ marginTop: '0.5rem', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} SUBIN S R. All rights reserved.
      </p>
    </footer>
  )
}

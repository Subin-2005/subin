import { Mail, FileText, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
}

export function HeaderHero({ personal, navLinks, socials, activeSection, onOpenResume }) {
  return (
    <header className="hero-column">
      <div>
        {/* Availability Badge */}
        <div className="hero-badge-pill">
          <span className="pulse-dot" />
          <span>{personal.availability}</span>
        </div>

        {/* Hero Identity */}
        <h1 className="hero-name">
          <a href="#" className="text-gradient">
            {personal.name}
          </a>
        </h1>

        <h2 className="hero-title">{personal.title}</h2>

        <p className="hero-tagline">{personal.tagline}</p>

        {/* Resume Quick Action */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            type="button"
            // onClick={onOpenResume}
            onClick={()=> window.open('/resume1-Subin.pdf', '_blank')}
            className="btn-primary"
            style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
          >
            <FileText size={15} />
            <span>View Résumé</span>
            <ArrowUpRight size={14} className="arrow-link-icon" />
          </button>
        </div>

        {/* Desktop Dynamic Navigation */}
        <nav className="desktop-nav" aria-label="In-page jump links">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-line" />
                <span className="nav-text">{link.name}</span>
              </a>
            )
          })}
        </nav>
      </div>

      {/* Social Links Icons */}
      <div>
        <ul className="social-links-list" aria-label="Social media">
          {socials.map((item) => {
            const IconComponent = socialIconMap[item.icon] || Mail
            return (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-icon-btn"
                  aria-label={`${item.name} profile (opens in new tab)`}
                  title={item.name}
                >
                  <IconComponent size={19} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

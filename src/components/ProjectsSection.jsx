import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="content-section" aria-label="Selected projects">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">03.</span>
          Projects
        </h2>
      </div>

      <div className="group-list">
        {projects.map((project, idx) => (
          <div key={idx} className="card-interactive project-card">
            {/* Thumbnail */}
            <div className="project-thumbnail-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-thumbnail"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.stats && (
                <div className="project-stats-badge">{project.stats}</div>
              )}

              <h3 className="project-title">
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: 'inherit' }}
                >
                  {project.title}
                  <ArrowUpRight size={16} className="arrow-link-icon" />
                </a>
              </h3>

              <p className="experience-desc">{project.description}</p>

              {/* Tech stack badges */}
              <ul className="tech-tags-list" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tech-pill">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Action Links */}
              <div className="project-links-row">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-icon-link"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-icon-link"
                    aria-label="View live deployment"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

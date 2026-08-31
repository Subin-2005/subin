import { Code, Database, Server, Layers, Terminal, Sparkles } from 'lucide-react'

const categoryIconMap = {
  'Frontend Engineering': Code,
  'Backend & Databases': Database,
  'DevOps & Architecture': Server,
}

export function SkillsSection({ skills }) {
  return (
    <section id="skills" className="content-section" aria-label="Technical skills">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">04.</span>
          Skills & Technologies
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((cat) => {
          const CategoryIcon = categoryIconMap[cat.category] || Layers
          return (
            <div key={cat.category} className="skill-category-card">
              <div className="category-header">
                <CategoryIcon size={18} style={{ color: 'var(--accent-teal)' }} />
                <span>{cat.category}</span>
              </div>

              <div className="skills-badge-wrap">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span style={{ color: 'var(--accent-teal)' }}>▸</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

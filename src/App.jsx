import { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolioData'
import { CursorSpotlight } from './components/CursorSpotlight'
import { HeaderHero } from './components/HeaderHero'
import { AboutSection } from './components/AboutSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ResumeModal } from './components/ResumeModal'
import { MobileNav } from './components/MobileNav'
import './App.css'

export function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Scrollspy observer for active section in sidebar
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      {/* Mouse-following radial glow & subtle ambient orbs */}
      <CursorSpotlight />

      {/* Mobile Top Navigation */}
      <MobileNav
        navLinks={portfolioData.navLinks}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        personal={portfolioData.personal}
      />

      <div className="layout-wrapper">
        {/* Left Column: Fixed Hero & Nav on Desktop */}
        <HeaderHero
          personal={portfolioData.personal}
          navLinks={portfolioData.navLinks}
          socials={portfolioData.socials}
          activeSection={activeSection}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Right Column: Scrollable Content Sections */}
        <main className="content-column" id="content">
          <AboutSection about={portfolioData.about} />

          <CertificationsSection certifications={portfolioData.certifications} />

          <ProjectsSection projects={portfolioData.projects} />

          <SkillsSection skills={portfolioData.skills} />

          <ContactSection personal={portfolioData.personal} />

          <Footer />
        </main>
      </div>

      {/* Interactive Résumé Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personal={portfolioData.personal}
        certifications={portfolioData.certifications}
        skills={portfolioData.skills}
      />
    </div>
  )
}

export default App

import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import EducationSection from '../components/EducationSection'
import ActivitiesSection from '../components/ActivitiesSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import BackgroundEffects from '../components/BackgroundEffects'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'
import CursorGlow from '../components/CursorGlow'
import ProjectModal from '../components/ProjectModal'
import SiteLoader from '../components/SiteLoader'
import { projects } from '../assets/portfolioData'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'activities', 'contact']
    const observers = []

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const filteredProjectItems = useMemo(() => projects, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white">
      <SiteLoader visible={isLoading} />
      <ScrollProgress />
      <BackgroundEffects />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection
            projects={filteredProjectItems}
            onSelectProject={setSelectedProject}
          />
          <EducationSection />
          <ActivitiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <BackToTop />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default HomePage

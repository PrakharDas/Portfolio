import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineExternalLink, HiOutlineCollection } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { projectFilters } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import GlowButton from './GlowButton'

function ProjectsSection({ projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter, projects])

  return (
    <MotionSection id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="Selected projects demonstrating full-stack, mobile, embedded, and AI engineering capabilities."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/30 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: 2, rotateY: -2, y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
            style={{ transformStyle: 'preserve-3d' }}
            onClick={() => onSelectProject(project)}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${project.title}`}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelectProject(project)
              }
            }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_28%)]" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-300">
                  <HiOutlineCollection className="text-cyan-200" />
                  Project preview
                </div>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-[calc(100%-1.5rem)] w-full rounded-lg object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold leading-snug text-white md:text-xl">{project.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300 md:text-[11px]">
                {project.categories.join(' / ')}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-200">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={`Open ${project.title} GitHub repository`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                <FaGithub />
                GitHub
              </a>
              {project.demo ? (
                <GlowButton
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span className="inline-flex items-center gap-1">
                    Live Demo <HiOutlineExternalLink size={16} />
                  </span>
                </GlowButton>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-500">
                  Live Demo Coming Soon
                </span>
              )}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onSelectProject(project)
                }}
                aria-label={`View detailed modal for ${project.title}`}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/5"
              >
                View Details
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
          No projects match this filter.
        </div>
      ) : null}
    </MotionSection>
  )
}

export default ProjectsSection

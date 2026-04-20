import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink, HiOutlineX } from 'react-icons/hi'
import GlowButton from './GlowButton'

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Project details dialog"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1220]/95 p-6 shadow-[0_0_80px_rgba(34,211,238,0.16)]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              aria-label="Close project details"
            >
              <HiOutlineX size={18} />
            </button>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-purple-500/15 p-3">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-xl border border-white/10 object-cover object-center"
                  />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
                  Interactive project spotlight for recruiter review.
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Featured project</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Key features</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.demo ? (
                    <GlowButton href={project.demo} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center gap-2">
                        Live Demo <HiOutlineExternalLink size={16} />
                      </span>
                    </GlowButton>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ProjectModal

import { motion } from 'framer-motion'
import { experience } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'

function ExperienceSection() {
  return (
    <MotionSection id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        description="Internship work focused on product delivery, analytics dashboards, and high-impact operational modules."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-[15px] top-2 h-[94%] w-px bg-gradient-to-b from-cyan-300/60 via-indigo-300/60 to-purple-400/60" />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -4 }}
          className="relative ml-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
        >
          <span className="absolute -left-[34px] top-7 h-4 w-4 rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />

          <p className="text-sm uppercase tracking-[0.16em] text-cyan-300">{experience.duration}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{experience.role}</h3>
          <p className="mt-1 text-slate-300">{experience.company}</p>

          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200 md:text-base">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </MotionSection>
  )
}

export default ExperienceSection

import { motion } from 'framer-motion'
import { skillCategories } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'

function SkillsSection() {
  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Expertise"
        title="Skills"
        description="A practical stack for building robust products across frontend, backend, mobile, AI, and deployment workflows."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                {category.skills.length} skills
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200 transition group-hover:border-cyan-300/30"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-200">
                      <skill.icon className="text-cyan-300" />
                      {skill.name}
                    </span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  )
}

export default SkillsSection

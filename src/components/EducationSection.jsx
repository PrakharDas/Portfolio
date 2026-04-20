import { motion } from 'framer-motion'
import { education } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'

function EducationSection() {
  return (
    <MotionSection id="education">
      <SectionHeading
        eyebrow="Academics"
        title="Education"
        description="Strong academic foundation in electronics and computer science with practical engineering execution."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.institute}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
          >
            <h3 className="font-display text-xl font-semibold text-white">{item.institute}</h3>
            <p className="mt-2 text-slate-200">{item.degree}</p>
            <p className="mt-1 text-sm text-cyan-300">{item.duration}</p>
            {item.score ? <p className="mt-4 text-sm text-slate-300">{item.score}</p> : null}
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}

export default EducationSection

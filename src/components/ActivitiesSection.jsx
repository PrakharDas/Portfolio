import { motion } from 'framer-motion'
import { activities } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'

function ActivitiesSection() {
  return (
    <MotionSection id="activities">
      <SectionHeading
        eyebrow="Leadership"
        title="Leadership & Activities"
        description="Experience in high-pressure technical events with leadership, ownership, and fast problem-solving."
      />

      <div className="grid gap-6 md:grid-cols-1">
        {activities.map((activity) => (
          <motion.article
            key={activity.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition hover:border-cyan-300/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
          >
            <h3 className="font-display text-2xl font-semibold text-white">{activity.title}</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              {activity.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}

export default ActivitiesSection

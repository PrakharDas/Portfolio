import { motion } from 'framer-motion'
import { highlights } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'

function AboutSection() {
  const quickHighlights = [
    'Full-Stack Projects',
    'Real-World Builds',
    'Fast Learner',
    'Problem Solver',
  ]

  const aboutCards = [
    ...highlights,
    {
      title: 'Adaptability',
      description:
        'Quickly learns new technologies, frameworks, and workflows while staying focused on delivering results.',
    },
  ]

  return (
    <MotionSection id="about">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="I am a B.Tech student in Electronics and Computer Science with hands-on experience in Full-Stack Development, Flutter applications, AI systems, and IoT products. I enjoy solving real problems by building scalable and practical software."
      />

      <div className="grid items-start gap-6 lg:grid-cols-[1.16fr_0.84fr] lg:gap-7">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-fit self-start rounded-[1.75rem] border border-white/10 bg-white/5 p-7 text-slate-200 backdrop-blur-2xl transition duration-300 md:p-8 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
        >
          <div className="space-y-6 md:space-y-7">
            <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-200 md:text-[1.08rem] md:leading-8">
              I enjoy building products that solve real problems - from IoT monitoring systems to intelligent
              web applications, mobile experiences, and scalable backend solutions. My focus is creating
              software that is practical, efficient, and polished for real-world use.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">Core Stack</p>
              <div className="flex flex-wrap gap-2.5">
                {['React.js', 'Flutter', 'Firebase', 'Python', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-cyan-300/20 bg-white/5 px-3.5 py-1.5 text-[0.9rem] font-medium text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Focus Areas
              </p>
              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {quickHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/8 hover:shadow-[0_0_18px_rgba(34,211,238,0.1)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm leading-relaxed text-slate-300 md:text-[1.2rem]">
              <p className="leading-7">
                Practical shipping matters to me: I focus on readable code, reliable UX, and software that feels
                polished in real use.
              </p>
              <p className="text-sm leading-7 text-slate-400 ">
                I enjoy transforming ideas into responsive interfaces, scalable logic, and systems that create
                measurable impact.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="grid items-start gap-4 self-start sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
          {aboutCards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="group min-h-[148px] rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default AboutSection

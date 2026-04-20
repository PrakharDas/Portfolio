import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/90">
        {eyebrow}
      </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading

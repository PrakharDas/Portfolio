import { motion } from 'framer-motion'

function MotionSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-28 px-6 py-16 md:px-10 md:py-20 lg:px-14 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default MotionSection

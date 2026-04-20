import { motion, useScroll } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400"
    />
  )
}

export default ScrollProgress

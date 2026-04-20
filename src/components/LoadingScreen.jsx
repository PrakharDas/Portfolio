import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
    >
      <div className="space-y-4 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
          className="mx-auto h-14 w-14 rounded-full border border-cyan-300/20 border-t-cyan-300 border-r-purple-400"
        />
        <p className="font-display text-sm uppercase tracking-[0.4em] text-slate-300">Loading portfolio</p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi'

function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      <span className="rounded-full bg-white/10 p-1.5 text-cyan-200 transition group-hover:bg-cyan-400/20">
        {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
      </span>
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </motion.button>
  )
}

export default ThemeToggle

import { motion } from 'framer-motion'

function GlowButton({ as: Component = 'a', href, children, className = '', ...props }) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${className}`}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 transition duration-300 group-hover:scale-110" />
        <span className="absolute -inset-6 opacity-0 blur-xl transition duration-300 group-hover:opacity-60 bg-cyan-500/50" />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  )
}

export default GlowButton

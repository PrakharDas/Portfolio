import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ value, suffix = '', duration = 1200, label }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { amount: 0.5, once: true })

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    let startTime = 0
    let frameId

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, value])

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-xl"
    >
      <div className="text-2xl font-bold text-white sm:text-3xl">
        {count}
        {suffix}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-300">{label}</p>
    </motion.div>
  )
}

export default AnimatedCounter

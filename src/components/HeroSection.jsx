import { motion } from 'framer-motion'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { heroStats, roles } from '../assets/portfolioData'
import AnimatedCounter from './AnimatedCounter'
import GlowButton from './GlowButton'
import TypingRole from './TypingRole'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-16 pt-28 md:px-10 lg:px-14"
    >
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Hello, I&apos;m
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Prakhar Das
          </h1>
          <TypingRole roles={roles} />
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Building modern web apps, mobile apps, intelligent IoT systems, and real-world software
            solutions with clean code and practical impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <GlowButton href="#projects">View Projects</GlowButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-100"
            >
              Contact Me
              <HiOutlineArrowNarrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-3 pt-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative flex justify-center lg:justify-end"
        >
          <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-purple-500/20 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-400/30 via-transparent to-purple-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_0_90px_-22px_rgba(34,211,238,0.5)] backdrop-blur-2xl sm:p-8">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    Developer mode
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="space-y-3 font-mono text-sm">
                    <p className="text-cyan-200">const developer = {'{'}</p>
                    <p className="pl-6 text-slate-200">name: 'Prakhar Das',</p>
                    <p className="pl-6 text-slate-200">focus: ['Web', 'Mobile', 'AI', 'IoT'],</p>
                    <p className="pl-6 text-slate-200">mindset: 'Build solutions that matter',</p>
                    <p className="text-cyan-200">{'}'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center text-[11px] uppercase tracking-[0.22em] text-slate-300">
                  {[
                    { icon: FaReact, label: 'React' },
                    { icon: SiFlutter, label: 'Flutter' },
                    { icon: SiFirebase, label: 'Firebase' },
                    { icon: FaNodeJs, label: 'Node' },
                    { icon: SiTailwindcss, label: 'Tailwind' },
                    { icon: FaGitAlt, label: 'Git' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 transition group-hover:-translate-y-1"
                    >
                      <item.icon className="text-xl text-cyan-200" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

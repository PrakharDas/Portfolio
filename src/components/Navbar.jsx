import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { navLinks } from '../assets/portfolioData'
import resumePdf from '../assets/Prakhar_Das_Resume.pdf'
import GlowButton from './GlowButton'

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2.5 md:px-8 md:pt-3">
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-2xl transition-all duration-300 md:px-6 md:py-3 ${
          scrolled
            ? 'border-white/10 bg-slate-950/72 shadow-[0_12px_50px_-20px_rgba(34,211,238,0.45)]'
            : 'border-white/8 bg-slate-950/40 shadow-[0_8px_40px_-18px_rgba(0,255,255,0.28)]'
        }`}
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-wide text-white">
          Prakhar Das
        </a>

        <ul className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="group relative transition hover:text-cyan-300"
                href={link.href}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-300 to-purple-400 transition-transform duration-300 group-hover:scale-x-100 ${
                    activeSection === link.href.replace('#', '') ? 'scale-x-100' : ''
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <GlowButton href={resumePdf} download="Prakhar_Das_Resume.pdf" aria-label="Download resume PDF">
            Resume
          </GlowButton>
          <GlowButton href="#contact">Hire Me</GlowButton>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/20 bg-white/5 p-2 text-white transition hover:border-cyan-300/40 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 w-full max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-3 grid gap-2 sm:grid-cols-2 sm:items-center sm:gap-3">
              <GlowButton href="#contact" className="w-full sm:w-auto">
                Hire Me
              </GlowButton>
            </div>

            <ul className="space-y-2 pb-4 text-sm text-slate-200">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-300 ${
                      activeSection === link.href.replace('#', '') ? 'bg-white/5 text-cyan-200' : ''
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid gap-3 sm:grid-cols-2">
              <GlowButton
                href={resumePdf}
                download="Prakhar_Das_Resume.pdf"
                className="w-full"
                aria-label="Download resume PDF"
              >
                Resume
              </GlowButton>
              <GlowButton href="#contact" className="w-full">
                Contact
              </GlowButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { contact } from '../assets/portfolioData'
import MotionSection from './MotionSection'
import SectionHeading from './SectionHeading'
import GlowButton from './GlowButton'

function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!formState.name.trim() || !isValidEmail(formState.email) || !formState.message.trim()) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )

    setStatus('sending')
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
    setFormState({ name: '', email: '', message: '' })
    window.setTimeout(() => setStatus('success'), 150)
  }

  return (
    <MotionSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s Build Something Impactful"
        description="Open to internships, fresher roles, freelance work, and collaboration opportunities."
      />

      <div className="grid gap-6 sm:gap-7 lg:grid-cols-2 lg:items-stretch">
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition duration-300 sm:p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Let&apos;s Build Something Great Together</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg md:leading-8">
            Open to internships, fresher roles, freelance work, and collaboration opportunities.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:mt-7 sm:gap-4">
            <div>
              <span className="text-cyan-300">Email:</span> {contact.email}
            </div>
            <div>
              <span className="text-cyan-300">Location:</span> {contact.location}
            </div>
            <div>
              <span className="text-cyan-300">GitHub:</span>{' '}
              <a className="underline decoration-cyan-400/40" href={contact.github} target="_blank" rel="noreferrer">
                github.com/PrakharDas
              </a>
            </div>
            <div>
              <span className="text-cyan-300">LinkedIn:</span>{' '}
              <a
                className="underline decoration-cyan-400/40"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/prakhardas48
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-relaxed text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">Availability</p>
            <p className="mt-3">
              Open to internships, fresher roles, freelance work, and remote opportunities.
            </p>
            <span className="mt-4 inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.08)]">
              <span className="mr-2 text-emerald-300">●</span>
              Available to Connect
            </span>
          </div>

          <div className="mt-auto pt-6 sm:pt-7">
            <div className="flex flex-wrap gap-3">
            <a
              aria-label="GitHub"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-slate-900/70 p-3 text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
            >
              <FaGithub size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-slate-900/70 p-3 text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${contact.email}`}
              className="rounded-xl border border-white/15 bg-slate-900/70 p-3 text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
            >
              <MdOutlineEmail size={20} />
            </a>
            </div>
          </div>
        </motion.aside>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={onSubmit}
          className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition duration-300 sm:p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
        >
          <div className="grid gap-3.5 sm:gap-4">
            <label className="text-sm text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_24px_rgba(34,211,238,0.12)]"
              placeholder="Your name"
            />
            <label className="text-sm text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_24px_rgba(34,211,238,0.12)]"
              placeholder="you@example.com"
            />
            <label className="text-sm text-slate-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              value={formState.message}
              onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
              className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_24px_rgba(34,211,238,0.12)]"
              placeholder="Tell me about your project or role opportunity"
            />
            <div className="pt-1.5 sm:pt-2">
              <GlowButton as="button" type="submit" aria-label="Send contact message" className="w-full sm:w-auto">
                Send Message
              </GlowButton>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 sm:w-auto"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedinIn size={15} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-1 space-y-1 text-xs leading-5 text-slate-400">
              <p>Usually replies within 24 hours</p>
              <p>Based in Maharashtra, India</p>
            </div>

            <AnimatePresence>
              {status === 'error' ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-sm text-rose-300"
                >
                  Please complete all fields with a valid email address.
                </motion.p>
              ) : null}
              {status === 'success' ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-sm text-emerald-300"
                >
                  Message ready. Your email draft opened successfully.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </MotionSection>
  )
}

export default ContactSection

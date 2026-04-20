import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { contact } from '../assets/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10 lg:px-14">
        <p>© 2026 Prakhar Das. Built with React & Tailwind CSS.</p>
        <div className="flex items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]"
            aria-label="Email"
          >
            <MdOutlineEmail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

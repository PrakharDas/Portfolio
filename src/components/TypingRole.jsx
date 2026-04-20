import { useEffect, useState } from 'react'

function TypingRole({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 90

    const timeout = setTimeout(() => {
      if (!isDeleting && typed.length < currentRole.length) {
        setTyped(currentRole.slice(0, typed.length + 1))
      } else if (isDeleting && typed.length > 0) {
        setTyped(currentRole.slice(0, typed.length - 1))
      } else if (!isDeleting && typed.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 900)
      } else if (isDeleting && typed.length === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [typed, isDeleting, roleIndex, roles])

  return (
    <p className="font-display text-xl font-medium text-gradient md:text-2xl">
      {typed}
      <span className="ml-1 inline-block h-6 w-[2px] animate-caret bg-cyan-300 align-middle" />
    </p>
  )
}

export default TypingRole

function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyan-500/22 blur-[130px]" />
      <div className="absolute right-[-6rem] top-44 h-[26rem] w-[26rem] rounded-full bg-indigo-500/18 blur-[140px]" />
      <div className="absolute bottom-[-8rem] left-1/4 h-96 w-96 rounded-full bg-purple-500/18 blur-[160px]" />
      <div className="grid-overlay absolute inset-0 opacity-30" />
    </div>
  )
}

export default BackgroundEffects

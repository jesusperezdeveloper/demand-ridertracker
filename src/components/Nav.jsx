export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏁</span>
          <span className="text-xl font-bold text-white">Rider<span className="text-primary">Tracker</span></span>
        </div>
        <a href="#join" data-track="nav_cta" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">
          Únete a la beta
        </a>
      </div>
    </nav>
  )
}

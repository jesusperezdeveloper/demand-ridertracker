export default function Footer() {
  return (
    <footer className="py-10 bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>🏁</span>
          <span className="text-sm font-semibold text-gray-400">Pilot<span className="text-primary">Tracker</span></span>
        </div>
        <p className="text-xs text-gray-600">© 2026 PilotTracker. Validación de demanda.</p>
      </div>
    </footer>
  )
}

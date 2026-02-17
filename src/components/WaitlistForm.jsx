import { useState } from 'react'

const PROJECT_ID = 'b22b220e-f6a0-40a1-a203-6a69e21f00a0'
const API = 'https://api.jpsdeveloper.com'

export default function WaitlistForm() {
  const [form, setForm] = useState({ email: '', role: '', fan_pilots: '', rider_champ: '', would_pay: '' })
  const [status, setStatus] = useState(null)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.email) return
    setStatus('sending')
    try {
      await fetch(`${API}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: PROJECT_ID,
          email: form.email,
          source: 'waitlist',
          survey_response: {
            role: form.role,
            fan_pilots: form.fan_pilots || undefined,
            rider_championship: form.rider_champ || undefined,
            would_pay: form.would_pay,
          },
        }),
      })
      if (window.__trackEvent) window.__trackEvent('waitlist_submit', { email: form.email })
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <section id="join" className="py-16 lg:py-24 bg-bg-dark">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="material-symbols-outlined text-primary text-6xl mb-4">check_circle</span>
          <h2 className="text-3xl font-bold text-white mb-4">¡Estás en la parrilla!</h2>
          <p className="text-gray-400">Te avisaremos cuando RiderTracker esté listo. Los primeros 500 tienen acceso premium gratis 3 meses.</p>
        </div>
      </section>
    )
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all"
  const selectClass = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none"

  return (
    <section id="join" className="py-16 lg:py-24 bg-bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Acceso anticipado</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
              Únete a la <span className="text-primary">beta</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Lanzamos con la temporada ESBK 2026. Los primeros 500 tienen acceso premium gratis 3 meses.
            </p>
          </div>

          <div className="bg-bg-card border border-white/10 rounded-2xl p-6 lg:p-10 glow-red">
            <form className="space-y-5" onSubmit={submit}>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="tu@email.com" className={inputClass} required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">¿Eres fan o piloto?</label>
                <select value={form.role} onChange={set('role')} className={selectClass}>
                  <option value="">Selecciona</option>
                  <option value="fan">Fan</option>
                  <option value="piloto">Piloto</option>
                </select>
              </div>

              {form.role === 'fan' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">¿A cuántos pilotos sigues activamente?</label>
                  <select value={form.fan_pilots} onChange={set('fan_pilots')} className={selectClass}>
                    <option value="">Selecciona</option>
                    <option value="1-2">1-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
              )}

              {form.role === 'piloto' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">¿En qué campeonato compites?</label>
                  <select value={form.rider_champ} onChange={set('rider_champ')} className={selectClass}>
                    <option value="">Selecciona</option>
                    <option value="ESBK">ESBK</option>
                    <option value="CEV">CEV</option>
                    <option value="CIR">CIR</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">¿Pagarías 3-5€/mes por apoyar a tu piloto favorito?</label>
                <select value={form.would_pay} onChange={set('would_pay')} className={selectClass}>
                  <option value="">Selecciona</option>
                  <option value="si_seguro">Sí seguro</option>
                  <option value="probablemente">Probablemente</option>
                  <option value="no_creo">No creo</option>
                </select>
              </div>

              <button type="submit" disabled={status === 'sending'} data-track="waitlist_submit" className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 mt-2">
                {status === 'sending' ? 'Enviando...' : 'Únete gratis a la beta'}
              </button>
              {status === 'error' && <p className="text-red-400 text-center text-sm">Error al enviar. Inténtalo de nuevo.</p>}
              <p className="text-center text-xs text-gray-600 mt-3">Sin spam. Solo te avisamos cuando estemos listos.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

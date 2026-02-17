export default function Solution() {
  const features = [
    {
      icon: 'speed',
      title: 'Feed unificado en tiempo real',
      desc: 'Resultados, tiempos por vuelta, clasificaciones y standings de todos los campeonatos en un solo lugar. Actualizado al instante.',
      color: 'primary',
    },
    {
      icon: 'notifications_active',
      title: 'Alertas personalizadas',
      desc: 'Recibe notificaciones cuando tu piloto corre, termina una carrera, cambia de equipo o publica contenido nuevo.',
      color: 'accent',
    },
    {
      icon: 'volunteer_activism',
      title: 'Micropatrocinios',
      desc: 'Apoya a tu piloto favorito con 3-5€/mes. El piloto se queda el 85%. Tú lo haces posible, sin intermediarios.',
      color: 'primary',
    },
  ]

  return (
    <section id="solution" className="py-16 lg:py-24 bg-gradient-to-b from-bg-dark to-bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">La solución</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Todo lo que necesitas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">en un sitio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-bg-dark border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${i === 1 ? 'from-accent to-primary' : 'from-primary to-accent'}`} />
              <div className={`w-14 h-14 rounded-xl ${f.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center mb-5`}>
                <span className={`material-symbols-outlined text-2xl ${f.color === 'accent' ? 'text-accent' : 'text-primary'}`}>{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

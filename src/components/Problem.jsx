export default function Problem() {
  const problems = [
    { icon: 'search', title: 'Resultados dispersos', desc: 'Tienes que buscar en 6+ webs cada domingo para saber cómo le fue a tu piloto.' },
    { icon: 'schedule', title: 'Info que llega tarde', desc: 'Los resultados de ESBK, CEV y campeonatos nacionales tardan horas o días en publicarse.' },
    { icon: 'heart_broken', title: 'Sin forma de apoyar', desc: 'Quieres ayudar a tu piloto favorito pero solo puedes darle un like. No hay más.' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">El problema</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Ser fan de un piloto <span className="text-primary">no debería ser tan difícil</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((p, i) => (
            <div key={i} className="bg-bg-card border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                <span className="material-symbols-outlined text-primary">{p.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

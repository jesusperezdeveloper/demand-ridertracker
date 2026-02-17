export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Temporada ESBK 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sigue a tu piloto.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Apóyale de verdad.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Resultados, tiempos, calendario y contenido exclusivo de pilotos de ESBK, CEV y campeonatos nacionales. Todo en un sitio. Sin buscar en 6 webs cada domingo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#join" data-track="hero_cta" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 text-center">
                Únete gratis a la beta
              </a>
              <a href="#solution" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all text-center">
                Cómo funciona
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 text-center">
              <div>
                <div className="text-2xl font-bold text-white">200K+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Fans potenciales</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Campeonatos</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Para el piloto</div>
              </div>
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="hidden lg:flex justify-center mt-12 lg:mt-0">
            <div className="relative w-80 h-[500px] bg-bg-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Mock app screen */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">🏁 RiderTracker</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
                  <div className="text-xs text-primary font-semibold mb-1">🔴 EN DIRECTO — ESBK Jerez</div>
                  <div className="text-sm font-bold">Carrera Supersport</div>
                </div>
                {[
                  { pos: '1', name: 'Marc García', time: "1'38.241", delta: '-' },
                  { pos: '2', name: 'Adrián Huertas', time: "1'38.456", delta: '+0.215' },
                  { pos: '3', name: 'Niki Tuuli', time: "1'38.782", delta: '+0.541' },
                  { pos: '4', name: 'Thomas Booth-Amos', time: "1'38.901", delta: '+0.660' },
                  { pos: '5', name: 'Manuel González', time: "1'39.102", delta: '+0.861' },
                ].map((r) => (
                  <div key={r.pos} className="flex items-center justify-between py-2 border-b border-white/5 text-sm">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${r.pos === '1' ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>{r.pos}</span>
                      <span className="font-medium">{r.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{r.time}</div>
                      <div className={`text-xs ${r.delta === '-' ? 'text-primary' : 'text-gray-500'}`}>{r.delta}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-3 bg-accent/10 border border-accent/20 rounded-xl p-3">
                  <div className="text-xs text-accent font-semibold">💰 Micropatrocinio activo</div>
                  <div className="text-sm mt-1">Estás apoyando a Marc García — 3€/mes</div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                    <div className="bg-accent h-1.5 rounded-full" style={{width: '72%'}} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">72% de la meta mensual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

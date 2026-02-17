export default function Riders() {
  return (
    <section className="py-16 lg:py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Para pilotos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Date de alta gratis.{' '}
              <span className="text-accent">Gana dinero con tus fans.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Tus fans te siguen aquí, tú ganas dinero con la publicidad que generan Y pueden apadrinarte cada mes. Sin hacer nada extra.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: 'check_circle', text: 'Perfil verificado gratuito' },
                { icon: 'check_circle', text: 'Ingresos por publicidad de tus fans' },
                { icon: 'check_circle', text: 'Micropatrocinios directos (tú te quedas el 85%)' },
                { icon: 'check_circle', text: 'Estadísticas de tu audiencia' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 flex justify-center">
            <div className="bg-bg-dark border border-white/10 rounded-2xl p-6 lg:p-8 max-w-sm w-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-accent text-3xl">sports_motorsports</span>
                </div>
                <h3 className="font-bold text-lg">Marc García</h3>
                <p className="text-sm text-gray-500">ESBK Supersport</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Fans activos</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Micropatrocinadores</span>
                  <span className="font-semibold text-accent">89</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Ingresos mensuales</span>
                  <span className="font-semibold text-green-400">€378</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Posición campeonato</span>
                  <span className="font-semibold">3º</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const niches = [
  { icon: '🏢', title: 'Недвижимость' },
  { icon: '🎈', title: 'Продажа шаров' },
  { icon: '🚗', title: 'Выкуп авто' },
  { icon: '⚙️', title: 'Производство шахтного оборудования' },
  { icon: '🔥', title: 'Автономная газификация' },
  { icon: '🛣️', title: 'Асфальтирование' },
]

export function NichesSection() {
  return (
    <section className="py-16 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-primary text-sm font-mono tracking-widest uppercase">// ниши</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
          С кем мы работаем
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-4 max-w-5xl mx-auto">
        {niches.map((niche, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default group"
          >
            <span className="text-2xl">{niche.icon}</span>
            <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
              {niche.title}
            </span>
          </div>
        ))}

        <div className="flex items-center gap-3 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl px-6 py-4 cursor-default">
          <span className="text-2xl">✨</span>
          <span className="text-white/30 font-medium italic">и другие...</span>
        </div>
      </div>
    </section>
  )
}

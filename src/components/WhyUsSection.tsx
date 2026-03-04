import Icon from '@/components/ui/icon'

const benefits = [
  {
    icon: 'Trophy',
    number: '01',
    title: 'Проверенная экспертиза',
    description: 'Более 5 лет и 150+ проектов в разных нишах',
    stat: '150+',
    statLabel: 'проектов'
  },
  {
    icon: 'Zap',
    number: '02',
    title: 'Быстрый старт',
    description: 'Запускаем рекламу и привлекаем клиентов уже в первую неделю',
    stat: '7',
    statLabel: 'дней до старта'
  },
  {
    icon: 'Target',
    number: '03',
    title: 'Только результат',
    description: 'Фокус на KPI: лиды, заявки, продажи — никакой воды',
    stat: '×3',
    statLabel: 'рост заявок'
  },
  {
    icon: 'Shield',
    number: '04',
    title: 'Прозрачность',
    description: 'Доступ к кабинетам, аналитика и отчёты каждую неделю',
    stat: '100%',
    statLabel: 'открытость'
  },
  {
    icon: 'Users',
    number: '05',
    title: 'Личный менеджер',
    description: 'Персональный специалист всегда на связи',
    stat: '24/7',
    statLabel: 'на связи'
  },
  {
    icon: 'Gauge',
    number: '06',
    title: 'Гибкая оплата',
    description: 'Фиксированная ставка или процент от результата',
    stat: '2',
    statLabel: 'варианта оплаты'
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-3 block">// преимущества</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Почему<br />
              <span className="text-primary">выбирают</span> нас?
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-xs md:text-right">
            Мы не просто подрядчики — мы партнёры в росте вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-black p-8 hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
            >
              <div className="absolute top-6 right-6 text-7xl font-black text-white/[0.04] select-none group-hover:text-primary/10 transition-colors duration-300 leading-none">
                {benefit.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={benefit.icon} size={18} className="text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-primary">{benefit.stat}</span>
                  <span className="text-white/30 text-xs">{benefit.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

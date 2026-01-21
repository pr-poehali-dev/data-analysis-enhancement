import Icon from '@/components/ui/icon'

const benefits = [
  {
    icon: 'Trophy',
    title: 'Проверенная экспертиза',
    description: 'Более 5 лет успешной работы и 150+ реализованных проектов в различных нишах'
  },
  {
    icon: 'Zap',
    title: 'Быстрый старт',
    description: 'Запускаем рекламные кампании и начинаем привлекать клиентов уже в первую неделю'
  },
  {
    icon: 'Target',
    title: 'Результат, а не процесс',
    description: 'Фокусируемся на конкретных KPI: лиды, заявки, продажи — только измеримые показатели'
  },
  {
    icon: 'Shield',
    title: 'Прозрачность',
    description: 'Доступ к рекламным кабинетам, детальная аналитика и еженедельные отчёты по всем показателям'
  },
  {
    icon: 'Users',
    title: 'Персональный подход',
    description: 'Каждому клиенту выделяется личный менеджер, который всегда на связи'
  },
  {
    icon: 'Gauge',
    title: 'Гибкая оплата',
    description: 'Работаем по фиксированной ставке или процент от результата — выбирайте удобный вариант'
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-b from-black via-secondary to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-white/70">
            Мы не просто подрядчики — мы партнёры в росте вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-secondary/30 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit.icon} size={32} className="text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

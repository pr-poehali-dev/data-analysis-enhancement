import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const cases = [
  {
    title: 'Интернет-магазин гелиевых шаров',
    industry: 'E-commerce',
    description: 'Разработали корпоративный сайт с каталогом и внедрили рекламу в Яндекс Директ.',
    results: [
      { label: 'Сайт с каталогом', value: '✓' },
      { label: 'Яндекс Директ', value: '✓' },
      { label: 'Онлайн-заказы', value: '✓' }
    ],
    image: 'PartyPopper'
  },
  {
    title: 'Производство оборудования для переработки полезных ископаемых',
    industry: 'Промышленность',
    description: 'Ведём работу над сайтом: наполняем информацией о компании и оборудовании. Запущена баннерная реклама в Яндекс Директ для повышения узнаваемости и доверия к компании.',
    results: [
      { label: 'Сайт в работе', value: '✓' },
      { label: 'Баннерная реклама', value: '✓' },
      { label: 'Узнаваемость бренда', value: '↑' }
    ],
    image: 'Cog'
  },
  {
    title: 'Услуги эвакуатора в СПб',
    industry: 'Автосервис',
    description: 'Создали лендинг и запустили продвижение на Яндекс Директ.',
    results: [
      { label: 'Лендинг', value: '✓' },
      { label: 'Яндекс Директ', value: '✓' },
      { label: 'Заявки с сайта', value: '✓' }
    ],
    image: 'Truck'
  }
]

export function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши кейсы
          </h2>
          <p className="text-xl text-white/70">
            Реальные результаты наших клиентов — цифры говорят сами за себя
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-secondary/80 to-secondary/40 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Icon name={caseItem.image} size={32} className="text-primary" />
                </div>

                <div className="text-sm text-primary font-semibold mb-2">
                  {caseItem.industry}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {caseItem.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-white/60">{result.label}</span>
                      <span className="text-2xl font-bold text-primary">{result.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
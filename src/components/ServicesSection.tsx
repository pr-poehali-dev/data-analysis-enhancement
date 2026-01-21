import Icon from '@/components/ui/icon'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: 'Target',
    title: 'Реклама в Яндекс.Директ',
    description: 'Настройка и ведение эффективных рекламных кампаний с максимальной конверсией и минимальной ценой клика'
  },
  {
    icon: 'ShoppingBag',
    title: 'Продвижение на Авито',
    description: 'Профессиональное размещение объявлений, оптимизация и аналитика для роста продаж на площадке'
  },
  {
    icon: 'Globe',
    title: 'Создание сайтов',
    description: 'Разработка лендингов, корпоративных сайтов и интернет-магазинов любой сложности с современным дизайном'
  },
  {
    icon: 'Boxes',
    title: 'Битрикс24',
    description: 'Внедрение, настройка и доработка CRM-системы Битрикс24 под особенности вашего бизнеса'
  },
  {
    icon: 'Palette',
    title: 'Дизайн и брендинг',
    description: 'Создание логотипов, фирменного стиля, буклетов, креативов для рекламы и социальных сетей'
  },
  {
    icon: 'BarChart3',
    title: 'Аналитика и отчётность',
    description: 'Подробная аналитика эффективности всех каналов продвижения с регулярными отчётами и рекомендациями'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-white/70">
            Комплексные решения для развития вашего бизнеса в digital-среде
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-secondary/50 border-white/10 hover:border-primary/50 transition-all duration-300 p-8 group hover:scale-105"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Icon name={service.icon} size={28} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

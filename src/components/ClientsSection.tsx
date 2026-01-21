import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const testimonials = [
  {
    name: 'Алексей Морозов',
    company: 'Директор ООО "СтройТехКомплект"',
    text: 'Ребята полностью перезапустили нашу рекламу. За 3 месяца количество заявок выросло в 4 раза, а стоимость лида снизилась почти вдвое. Очень доволен результатом!',
    rating: 5
  },
  {
    name: 'Марина Соколова',
    company: 'Владелица сети салонов красоты',
    text: 'Сделали крутой сайт и внедрили Битрикс24. Теперь весь учёт клиентов и запись автоматизированы. Сэкономили кучу времени администраторам. Рекомендую!',
    rating: 5
  },
  {
    name: 'Дмитрий Петров',
    company: 'Основатель интернет-магазина электроники',
    text: 'Работаем уже больше года. Команда профессиональная, всегда на связи, регулярно оптимизируют кампании. ROI стабильно выше 400%. Отличное соотношение цена-качество.',
    rating: 5
  }
]

const clientLogos = [
  'Building2',
  'Sparkles',
  'ShoppingCart',
  'Wrench',
  'Laptop',
  'Home'
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-32 bg-gradient-to-b from-black via-secondary to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Нам доверяют
          </h2>
          <p className="text-xl text-white/70">
            Отзывы наших клиентов — главный показатель качества работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-secondary/50 border-white/10 p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/60 mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">С нами работают</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon name={logo} size={36} className="text-white/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

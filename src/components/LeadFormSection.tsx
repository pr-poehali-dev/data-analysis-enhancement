import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import Icon from '@/components/ui/icon'

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    })

    setFormData({ name: '', phone: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для обсуждения вашего проекта
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-white/70 hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@leader-marketing.ru" className="text-white/70 hover:text-primary transition-colors">
                      info@leader-marketing.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Режим работы</div>
                    <div className="text-white/70">Пн-Пт: 9:00 - 19:00</div>
                    <div className="text-white/70">Сб-Вс: 10:00 - 16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                <p className="text-xs text-white/50 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

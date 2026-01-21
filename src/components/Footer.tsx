import Icon from '@/components/ui/icon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/36df5632-6ed2-4c95-9b3c-612d55f4afda/bucket/54294cc3-ba14-4e22-8b98-60557bb1ed0e.jpg" 
              alt="Leader Marketing" 
              className="h-10 mb-4"
            />
            <p className="text-white/60 text-sm">
              Полный цикл digital-маркетинга для роста вашего бизнеса
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Яндекс.Директ</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Продвижение на Авито</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Создание сайтов</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Битрикс24</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="#why-us" className="hover:text-primary transition-colors">О нас</a>
              </li>
              <li>
                <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-primary transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@leader-marketing.ru" className="hover:text-primary transition-colors">
                  info@leader-marketing.ru
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="text-white/60" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Icon name="Send" size={20} className="text-white/60" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Leader Marketing. Все права защищены
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

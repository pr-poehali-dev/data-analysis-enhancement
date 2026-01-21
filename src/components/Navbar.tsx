import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://cdn.poehali.dev/projects/36df5632-6ed2-4c95-9b3c-612d55f4afda/bucket/54294cc3-ba14-4e22-8b98-60557bb1ed0e.jpg" 
              alt="Leader Marketing" 
              className="h-10"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/80 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('why-us')} 
              className="text-white/80 hover:text-primary transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('cases')} 
              className="text-white/80 hover:text-primary transition-colors"
            >
              Кейсы
            </button>
            <button 
              onClick={() => scrollToSection('clients')} 
              className="text-white/80 hover:text-primary transition-colors"
            >
              Клиенты
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Связаться
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white/80 hover:text-primary transition-colors text-left"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('why-us')} 
                className="text-white/80 hover:text-primary transition-colors text-left"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('cases')} 
                className="text-white/80 hover:text-primary transition-colors text-left"
              >
                Кейсы
              </button>
              <button 
                onClick={() => scrollToSection('clients')} 
                className="text-white/80 hover:text-primary transition-colors text-left"
              >
                Клиенты
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                Связаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

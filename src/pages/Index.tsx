import { Hero } from "@/components/Hero"
import { ServicesSection } from "@/components/ServicesSection"
import { WhyUsSection } from "@/components/WhyUsSection"
import { CasesSection } from "@/components/CasesSection"
import { ClientsSection } from "@/components/ClientsSection"
import { LeadFormSection } from "@/components/LeadFormSection"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyUsSection />
        <CasesSection />
        <ClientsSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  )
}

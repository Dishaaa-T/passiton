import { CategoryShowcase } from "@/components/category-showcase"
import { DonationInfo } from "@/components/donation-info"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full">
          <HeroSection />
        </section>
        <section className="container py-12">
          <CategoryShowcase />
        </section>
        <section className="container py-12">
          <FeaturedProducts />
        </section>
        <section className="bg-muted/50 py-12">
          <div className="container">
            <HowItWorks />
          </div>
        </section>
        <section className="container py-12">
          <DonationInfo />
        </section>
      </main>
      <Footer />
    </div>
  )
}


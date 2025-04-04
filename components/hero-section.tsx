import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function HeroSection({
  title = "Give Items a Second Life, Support a Good Cause",
  subtitle = "Buy quality second-hand products at great prices. Unsold items are donated to NGOs after their listing period expires.",
  ctaText = "Browse Products",
  ctaLink = "/products",
  secondaryCtaText = "Learn How It Works",
  secondaryCtaLink = "/how-it-works",
}: HeroSectionProps) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          opacity: 0.15,
        }}
      />
      <div className="relative mx-auto flex min-h-[500px] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mb-10 max-w-2xl text-xl text-muted-foreground">{subtitle}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="px-8">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


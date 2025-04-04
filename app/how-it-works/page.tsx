import { HowItWorks } from "@/components/how-it-works"
import { DonationInfo } from "@/components/donation-info"

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">How PassItOn Works</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Our unique marketplace combines second-hand shopping with charitable giving
        </p>
      </div>

      <div className="mt-16">
        <HowItWorks />
      </div>

      <div className="mt-24">
        <DonationInfo />
      </div>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Search, ShoppingBag, ThumbsUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Browse Products",
      description: "Explore our wide selection of quality second-hand items across multiple categories.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      title: "Make a Purchase",
      description: "Buy items you love at great prices while knowing you're supporting a good cause.",
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Enjoy Your Items",
      description: "Receive your purchases and give these quality items a second life in your home.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Listing Period Ends",
      description: "If items remain unsold after their listing period, they're prepared for donation.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "NGO Donation",
      description: "Unsold items are donated to our partner NGOs, supporting communities in need.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">How PassItOn Works</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Our unique marketplace combines second-hand shopping with charitable giving
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute left-1/2 top-6 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-lg font-bold">
                {index + 1}
              </div>
              <Card
                className={`ml-auto w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ArrowRight className="h-8 w-8 text-primary" />
      </div>

      <div className="rounded-lg bg-primary/10 p-6 text-center">
        <h3 className="mb-2 text-xl font-bold">Everyone Wins!</h3>
        <p className="text-muted-foreground">
          Buyers get quality items, sellers make money, and unsold items support charitable causes.
        </p>
      </div>
    </div>
  )
}


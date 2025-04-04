import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Gift, Heart, Recycle } from "lucide-react"

interface NGO {
  id: string
  name: string
  logo: string
  description: string
  website: string
}

interface DonationInfoProps {
  featuredNGOs?: NGO[]
}

export function DonationInfo({ featuredNGOs }: DonationInfoProps) {
  const defaultNGOs: NGO[] = [
    {
      id: "1",
      name: "Global Green",
      logo: "/placeholder.svg?height=80&width=80",
      description: "Environmental conservation and sustainability initiatives worldwide.",
      website: "#",
    },
    {
      id: "2",
      name: "Children First",
      logo: "/placeholder.svg?height=80&width=80",
      description: "Supporting children's education and healthcare in underserved communities.",
      website: "#",
    },
    {
      id: "3",
      name: "Animal Rescue Network",
      logo: "/placeholder.svg?height=80&width=80",
      description: "Rescuing and rehabilitating abandoned and injured animals.",
      website: "#",
    },
  ]

  const ngos = featuredNGOs || defaultNGOs

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">How Your Purchase Makes a Difference</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          When you buy from PassItOn, you're not just getting great deals on quality second-hand items - you're also
          supporting important causes.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Reduce Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              By purchasing second-hand items, you're extending their life cycle and reducing waste that would otherwise
              end up in landfills.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Support NGOs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Unsold items are donated to our partner NGOs, supporting their missions and helping communities in need
              around the world.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Create Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Your purchase directly contributes to social and environmental causes, creating a positive impact beyond
              just the transaction.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h3 className="mb-6 text-center text-2xl font-bold">Our Partner NGOs</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {ngos.map((ngo) => (
            <Card key={ngo.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-md">
                  <Image
                    src={ngo.logo || "/placeholder.svg"}
                    alt={ngo.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <CardTitle>{ngo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{ngo.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={ngo.website} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/about-donations">
          <Button size="lg">
            Learn More About Our Donation Process <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock NGO data
const ngos = [
  {
    id: "1",
    name: "Global Green",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Environmental conservation and sustainability initiatives worldwide.",
    longDescription:
      "Global Green works to create sustainable urban environments and address climate change through a combination of policy initiatives, community-based projects, and partnerships with both public and private sectors.",
    impact:
      "Planted over 50,000 trees, reduced carbon emissions by 30,000 tons, and implemented sustainable water management systems in 15 communities.",
    website: "#",
  },
  {
    id: "2",
    name: "Children First",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Supporting children's education and healthcare in underserved communities.",
    longDescription:
      "Children First focuses on providing educational opportunities and healthcare access to children in underserved communities around the world, with a particular emphasis on early childhood development and primary education.",
    impact:
      "Built 25 schools, provided educational materials to over 10,000 children, and facilitated healthcare access for 5,000 children in rural areas.",
    website: "#",
  },
  {
    id: "3",
    name: "Animal Rescue Network",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Rescuing and rehabilitating abandoned and injured animals.",
    longDescription:
      "Animal Rescue Network is dedicated to rescuing, rehabilitating, and rehoming abandoned and injured animals. They work to provide immediate care and long-term solutions for animals in need, while also advocating for animal welfare policies.",
    impact:
      "Rescued and rehabilitated over 15,000 animals, facilitated 8,000 adoptions, and implemented spay/neuter programs in 20 communities.",
    website: "#",
  },
]

export default function AboutDonationsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Our Donations</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn how your purchases help support important causes around the world
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Our Donation Process</h2>
          <p className="mt-4 text-muted-foreground">
            At PassItOn, we've created a unique marketplace that combines second-hand shopping with charitable giving.
            Here's how our donation process works:
          </p>

          <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="font-medium">Listing Period</h3>
                <p className="text-muted-foreground">
                  Each item on our platform has a specific listing period, typically 30 days.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="font-medium">Final Countdown</h3>
                <p className="text-muted-foreground">
                  When an item has 7 days left in its listing period, it enters our "Final Countdown" phase, where it's
                  highlighted to buyers.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="font-medium">Donation Preparation</h3>
                <p className="text-muted-foreground">
                  If an item remains unsold after its listing period, the seller is notified that their item will be
                  donated.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h3 className="font-medium">NGO Selection</h3>
                <p className="text-muted-foreground">
                  Items are matched with the most appropriate NGO partner based on the type of item and current needs.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                5
              </div>
              <div>
                <h3 className="font-medium">Donation Delivery</h3>
                <p className="text-muted-foreground">
                  We coordinate the collection and delivery of donated items to our NGO partners.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                6
              </div>
              <div>
                <h3 className="font-medium">Impact Tracking</h3>
                <p className="text-muted-foreground">
                  Sellers receive updates about the impact of their donations, and we publish regular reports on our
                  overall donation impact.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Donation process illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Our NGO Partners</h2>

        <Tabs defaultValue={ngos[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {ngos.map((ngo) => (
              <TabsTrigger key={ngo.id} value={ngo.id}>
                {ngo.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {ngos.map((ngo) => (
            <TabsContent key={ngo.id} value={ngo.id} className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                        <Image src={ngo.logo || "/placeholder.svg"} alt={ngo.name} fill className="object-cover" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold">{ngo.name}</h3>
                      <Link href={ngo.website} className="mt-2 text-primary hover:underline">
                        Visit Website
                      </Link>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium">About</h4>
                      <p className="mt-2 text-muted-foreground">{ngo.longDescription}</p>

                      <h4 className="mt-4 font-medium">Impact</h4>
                      <p className="mt-2 text-muted-foreground">{ngo.impact}</p>

                      <h4 className="mt-4 font-medium">Items Needed</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-sm">Clothing</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-sm">Books</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-sm">Electronics</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-sm">Furniture</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-sm">Toys</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8 text-center">
        <h2 className="text-2xl font-bold">Want to Partner with Us?</h2>
        <p className="mt-4 text-muted-foreground">
          If you're an NGO interested in becoming a donation partner, we'd love to hear from you.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}


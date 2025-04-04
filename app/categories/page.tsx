import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock category data
const categories = [
  {
    id: "clothing",
    name: "Clothing",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 245,
    description: "Find quality second-hand clothing including vintage pieces, designer items, and everyday wear.",
  },
  {
    id: "electronics",
    name: "Electronics",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 189,
    description: "Browse used electronics from smartphones and laptops to cameras and audio equipment.",
  },
  {
    id: "furniture",
    name: "Furniture",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 124,
    description: "Discover pre-loved furniture pieces to add character and functionality to your home.",
  },
  {
    id: "books",
    name: "Books",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 312,
    description: "Explore a wide selection of second-hand books across all genres and for all ages.",
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 98,
    description: "Find quality sports equipment and outdoor gear for your active lifestyle.",
  },
  {
    id: "toys",
    name: "Toys & Games",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 156,
    description: "Browse pre-loved toys, board games, and collectibles for all ages.",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 203,
    description: "Discover second-hand jewelry, watches, bags, and other accessories to complete your look.",
  },
  {
    id: "home-garden",
    name: "Home & Garden",
    image: "/placeholder.svg?height=200&width=200",
    itemCount: 178,
    description: "Find pre-loved home decor, kitchenware, and garden items to enhance your living space.",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Browse by Category</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore our wide selection of quality second-hand items across multiple categories
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{category.name}</h2>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm">{category.itemCount} items</span>
                </div>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


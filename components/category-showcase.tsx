import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Category {
  id: string
  name: string
  image: string
  itemCount: number
}

interface CategoryShowcaseProps {
  categories?: Category[]
}

export function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  const defaultCategories: Category[] = [
    {
      id: "clothing",
      name: "Clothing",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 245,
    },
    {
      id: "electronics",
      name: "Electronics",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 189,
    },
    {
      id: "furniture",
      name: "Furniture",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 124,
    },
    {
      id: "books",
      name: "Books",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 312,
    },
    {
      id: "sports",
      name: "Sports & Outdoors",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 98,
    },
    {
      id: "toys",
      name: "Toys & Games",
      image: "/placeholder.svg?height=200&width=200",
      itemCount: 156,
    },
  ]

  const displayCategories = categories || defaultCategories

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
        <p className="mt-2 text-muted-foreground">Find exactly what you're looking for</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {displayCategories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">View All Categories</Button>
      </div>
    </div>
  )
}


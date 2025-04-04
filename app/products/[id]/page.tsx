import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"

// This would typically come from a database
const getProductById = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "Vintage Leather Jacket",
    description:
      "A beautiful vintage leather jacket in excellent condition. This classic piece features a timeless design with minimal wear and tear. Perfect for casual outings or to add an edge to your outfit.",
    price: 89.99,
    originalPrice: 120,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Clothing",
    condition: "Good",
    seller: {
      name: "Jane Doe",
      rating: 4.8,
      totalSales: 42,
    },
    specifications: [
      { name: "Brand", value: "Vintage Collection" },
      { name: "Size", value: "Medium" },
      { name: "Material", value: "Genuine Leather" },
      { name: "Color", value: "Brown" },
      { name: "Age", value: "Approximately 15 years" },
    ],
    daysLeft: 5,
  }
}

// Mock related products
const relatedProducts = [
  {
    id: "2",
    title: "Denim Jacket",
    price: 45,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    condition: "Like New",
  },
  {
    id: "3",
    title: "Leather Boots",
    price: 65,
    image: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
    condition: "Good",
  },
  {
    id: "4",
    title: "Wool Scarf",
    price: 25,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    condition: "Excellent",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            {product.daysLeft <= 7 && (
              <div className="absolute left-4 top-4">
                <Badge variant="destructive" className="px-2 py-1">
                  {product.daysLeft === 0 ? "Last day" : `${product.daysLeft} days left`}
                </Badge>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="outline">{product.category}</Badge>
              <Badge variant="outline">{product.condition}</Badge>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            {product.originalPrice && (
              <Badge variant="secondary" className="ml-2">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>

            {product.daysLeft <= 7 && (
              <div className="rounded-md bg-amber-50 p-3 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                <p className="text-sm">
                  This item will be donated to our partner NGOs in {product.daysLeft} days if not purchased.
                </p>
              </div>
            )}
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-medium">Seller Information</h3>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="font-medium">{product.seller.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>★ {product.seller.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{product.seller.totalSales} sales</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <p className="text-muted-foreground">
                Standard shipping takes 3-5 business days. Express shipping is available for an additional fee. Local
                pickup is available in select areas.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              condition={product.condition}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


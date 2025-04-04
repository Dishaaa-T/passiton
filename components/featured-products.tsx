"use client"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  id: string
  title: string
  price: number
  image: string
  category: string
  condition: string
  daysLeft?: number
}

interface FeaturedProductsProps {
  newArrivals?: Product[]
  endingSoon?: Product[]
  popular?: Product[]
}

export function FeaturedProducts({ newArrivals = [], endingSoon = [], popular = [] }: FeaturedProductsProps) {
  // Sample data for demonstration
  const sampleProducts: Record<string, Product[]> = {
    new: newArrivals.length
      ? newArrivals
      : [
          {
            id: "1",
            title: "Vintage Leather Jacket",
            price: 89.99,
            image: "/placeholder.svg?height=300&width=300",
            category: "Clothing",
            condition: "Good",
          },
          {
            id: "2",
            title: "Wooden Coffee Table",
            price: 120,
            image: "/placeholder.svg?height=300&width=300",
            category: "Furniture",
            condition: "Like New",
          },
          {
            id: "3",
            title: "Polaroid Camera",
            price: 65,
            image: "/placeholder.svg?height=300&width=300",
            category: "Electronics",
            condition: "Fair",
          },
          {
            id: "4",
            title: "Ceramic Plant Pot",
            price: 25,
            image: "/placeholder.svg?height=300&width=300",
            category: "Home & Garden",
            condition: "Like New",
          },
        ],
    ending: endingSoon.length
      ? endingSoon
      : [
          {
            id: "5",
            title: "Vintage Record Player",
            price: 150,
            image: "/placeholder.svg?height=300&width=300",
            category: "Electronics",
            condition: "Good",
            daysLeft: 2,
          },
          {
            id: "6",
            title: "Mountain Bike",
            price: 210,
            image: "/placeholder.svg?height=300&width=300",
            category: "Sports",
            condition: "Fair",
            daysLeft: 1,
          },
          {
            id: "7",
            title: "Designer Handbag",
            price: 95,
            image: "/placeholder.svg?height=300&width=300",
            category: "Accessories",
            condition: "Good",
            daysLeft: 3,
          },
          {
            id: "8",
            title: "Antique Desk Lamp",
            price: 45,
            image: "/placeholder.svg?height=300&width=300",
            category: "Home & Garden",
            condition: "Fair",
            daysLeft: 0,
          },
        ],
    popular: popular.length
      ? popular
      : [
          {
            id: "9",
            title: "Wireless Headphones",
            price: 79.99,
            image: "/placeholder.svg?height=300&width=300",
            category: "Electronics",
            condition: "Like New",
          },
          {
            id: "10",
            title: "Vintage Denim Jacket",
            price: 55,
            image: "/placeholder.svg?height=300&width=300",
            category: "Clothing",
            condition: "Good",
          },
          {
            id: "11",
            title: "Board Game Collection",
            price: 40,
            image: "/placeholder.svg?height=300&width=300",
            category: "Toys & Games",
            condition: "Good",
          },
          {
            id: "12",
            title: "Fitness Smartwatch",
            price: 110,
            image: "/placeholder.svg?height=300&width=300",
            category: "Electronics",
            condition: "Like New",
          },
        ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
        <Tabs defaultValue="new" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
            <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <ProductGrid products={sampleProducts.new} />
          </TabsContent>
          <TabsContent value="ending">
            <ProductGrid products={sampleProducts.ending} />
          </TabsContent>
          <TabsContent value="popular">
            <ProductGrid products={sampleProducts.popular} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" variant="outline">
          View All Products
        </Button>
      </div>
    </div>
  )
}


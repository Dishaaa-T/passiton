import { SearchFilters } from "@/components/search-filters"
import { ProductGrid } from "@/components/product-grid"

// Mock data for demonstration
const products = [
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
    daysLeft: 3,
  },
  {
    id: "4",
    title: "Ceramic Plant Pot",
    price: 25,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    condition: "Like New",
  },
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
]

const categories = [
  "Clothing",
  "Electronics",
  "Furniture",
  "Home & Garden",
  "Sports",
  "Accessories",
  "Books",
  "Toys & Games",
]
const conditions = ["Like New", "Excellent", "Good", "Fair", "Poor"]

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">All Products</h1>

      <SearchFilters onSearch={(filters) => console.log(filters)} categories={categories} conditions={conditions} />

      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}


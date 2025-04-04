// import { Filter, Search, SlidersHorizontal } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/separator"

// export default function BrowsePage() {
//   // Sample data for items
//   const items = [
//     {
//       id: 1,
//       name: "Winter Jacket",
//       category: "Clothing",
//       condition: "Like New",
//       price: 24.99,
//       image: "/placeholder.svg?height=300&width=300&text=Winter+Jacket",
//       daysLeft: 12,
//     },
//     {
//       id: 2,
//       name: "Coffee Table",
//       category: "Furniture",
//       condition: "Good",
//       price: 49.99,
//       image: "/placeholder.svg?height=300&width=300&text=Coffee+Table",
//       daysLeft: 8,
//     },
//     {
//       id: 3,
//       name: "Bluetooth Speaker",
//       category: "Electronics",
//       condition: "Like New",
//       price: 34.99,
//       image: "/placeholder.svg?height=300&width=300&text=Bluetooth+Speaker",
//       daysLeft: 15,
//     },
//     {
//       id: 4,
//       name: "Cooking Pot Set",
//       category: "Kitchenware",
//       condition: "Good",
//       price: 19.99,
//       image: "/placeholder.svg?height=300&width=300&text=Cooking+Pot+Set",
//       daysLeft: 5,
//     },
//     {
//       id: 5,
//       name: "Board Game Collection",
//       category: "Toys & Games",
//       condition: "Good",
//       price: 14.99,
//       image: "/placeholder.svg?height=300&width=300&text=Board+Games",
//       daysLeft: 20,
//     },
//     {
//       id: 6,
//       name: "Fiction Books (Set of 5)",
//       category: "Books",
//       condition: "Good",
//       price: 12.99,
//       image: "/placeholder.svg?height=300&width=300&text=Fiction+Books",
//       daysLeft: 18,
//     },
//     {
//       id: 7,
//       name: "Desk Lamp",
//       category: "Home Decor",
//       condition: "Like New",
//       price: 15.99,
//       image: "/placeholder.svg?height=300&width=300&text=Desk+Lamp",
//       daysLeft: 10,
//     },
//     {
//       id: 8,
//       name: "Yoga Mat",
//       category: "Sports & Fitness",
//       condition: "Like New",
//       price: 9.99,
//       image: "/placeholder.svg?height=300&width=300&text=Yoga+Mat",
//       daysLeft: 7,
//     },
//   ]

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">Browse Items</h1>
//         <p className="mt-2 text-lg text-gray-600">Find quality pre-loved items at affordable prices.</p>
//       </div>

//       {/* Search and Filter */}
//       <div className="mb-8 rounded-lg border bg-white p-4 shadow-sm">
//         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             <Input placeholder="Search items..." className="pl-10" />
//           </div>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <Select>
//               <SelectTrigger className="w-full sm:w-[180px]">
//                 <SelectValue placeholder="Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 <SelectItem value="clothing">Clothing</SelectItem>
//                 <SelectItem value="furniture">Furniture</SelectItem>
//                 <SelectItem value="electronics">Electronics</SelectItem>
//                 <SelectItem value="kitchenware">Kitchenware</SelectItem>
//                 <SelectItem value="toys">Toys & Games</SelectItem>
//                 <SelectItem value="books">Books</SelectItem>
//                 <SelectItem value="other">Other</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select>
//               <SelectTrigger className="w-full sm:w-[180px]">
//                 <SelectValue placeholder="Condition" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Conditions</SelectItem>
//                 <SelectItem value="new">New (with tags)</SelectItem>
//                 <SelectItem value="like-new">Like New</SelectItem>
//                 <SelectItem value="good">Good</SelectItem>
//                 <SelectItem value="fair">Fair</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button variant="outline" className="flex items-center gap-2">
//               <SlidersHorizontal className="h-4 w-4" />
//               More Filters
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Results Count and Sort */}
//       <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <p className="text-gray-600">
//           Showing <span className="font-medium">{items.length}</span> items
//         </p>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-600">Sort by:</span>
//           <Select defaultValue="newest">
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="newest">Newest First</SelectItem>
//               <SelectItem value="price-low">Price: Low to High</SelectItem>
//               <SelectItem value="price-high">Price: High to Low</SelectItem>
//               <SelectItem value="ending-soon">Ending Soon</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Items Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {items.map((item) => (
//           <Card key={item.id} className="overflow-hidden transition-all hover:shadow-md">
//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.name}
//                 className="h-full w-full object-cover transition-transform hover:scale-105"
//               />
//             </div>
//             <CardContent className="p-4">
//               <h3 className="font-semibold text-lg">{item.name}</h3>
//               <div className="mt-1 flex items-center justify-between">
//                 <span className="text-sm text-gray-500">{item.category}</span>
//                 <span className="text-sm text-gray-500">{item.condition}</span>
//               </div>
//               <Separator className="my-3" />
//               <div className="flex items-center justify-between">
//                 <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>
//                 <span className="text-xs text-gray-400">{item.daysLeft} days left</span>
//               </div>
//               <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">View Details</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         <nav className="flex items-center gap-1">
//           <Button variant="outline" size="icon" className="h-8 w-8" disabled>
//             <span className="sr-only">Previous page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m15 18-6-6 6-6" />
//             </svg>
//           </Button>
//           <Button variant="outline" size="icon" className="h-8 w-8 bg-green-50">
//             <span className="sr-only">Page 1</span>1
//           </Button>
//           <Button variant="outline" size="icon" className="h-8 w-8">
//             <span className="sr-only">Page 2</span>2
//           </Button>
//           <Button variant="outline" size="icon" className="h-8 w-8">
//             <span className="sr-only">Page 3</span>3
//           </Button>
//           <Button variant="outline" size="icon" className="h-8 w-8">
//             <span className="sr-only">Next page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m9 18 6-6-6-6" />
//             </svg>
//           </Button>
//         </nav>
//       </div>

//       {/* No Results Found (hidden by default) */}
//       <div className="hidden mt-12 text-center">
//         <Filter className="mx-auto h-12 w-12 text-gray-400" />
//         <h3 className="mt-2 text-lg font-medium text-gray-900">No items found</h3>
//         <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
//         <Button className="mt-4 bg-green-600 hover:bg-green-700">Clear Filters</Button>
//       </div>
//     </div>
//   )
// }


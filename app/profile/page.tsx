"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { Edit, LogOut, Package, Settings } from "lucide-react"

// Mock user data
const userData = {
  name: "Jane Smith",
  email: "jane.smith@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  joinDate: "January 2023",
  listings: 12,
  purchases: 8,
  donations: 3,
}

// Mock product data
const userListings = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    condition: "Good",
    daysLeft: 5,
  },
  {
    id: "2",
    title: "Wooden Coffee Table",
    price: 120,
    image: "/placeholder.svg?height=300&width=300",
    category: "Furniture",
    condition: "Like New",
    daysLeft: 12,
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
]

const userPurchases = [
  {
    id: "4",
    title: "Ceramic Plant Pot",
    price: 25,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    condition: "Like New",
    purchaseDate: "2023-04-15",
  },
  {
    id: "5",
    title: "Vintage Record Player",
    price: 150,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Good",
    purchaseDate: "2023-03-22",
  },
]

const userDonations = [
  {
    id: "6",
    title: "Mountain Bike",
    price: 210,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    condition: "Fair",
    donationDate: "2023-02-10",
    ngo: "Global Green",
  },
  {
    id: "7",
    title: "Designer Handbag",
    price: 95,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    condition: "Good",
    donationDate: "2023-01-05",
    ngo: "Children First",
  },
  {
    id: "8",
    title: "Antique Desk Lamp",
    price: 45,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    condition: "Fair",
    donationDate: "2022-12-18",
    ngo: "Animal Rescue Network",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: userData.name,
    email: userData.email,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically update the user profile via an API call
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>{userData.name}</CardTitle>
              <CardDescription>Member since {userData.joinDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{userData.listings}</p>
                  <p className="text-sm text-muted-foreground">Listings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{userData.purchases}</p>
                  <p className="text-sm text-muted-foreground">Purchases</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{userData.donations}</p>
                  <p className="text-sm text-muted-foreground">Donations</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/listings/new">
                  <Package className="mr-2 h-4 w-4" />
                  Create New Listing
                </Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Link>
              </Button>
              <Button className="w-full" variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profile Information</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                  <Edit className="mr-2 h-4 w-4" />
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={profile.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Name</p>
                      <p>{profile.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p>{profile.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="listings">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="purchases">My Purchases</TabsTrigger>
              <TabsTrigger value="donations">My Donations</TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {userListings.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    condition={product.condition}
                    daysLeft={product.daysLeft}
                  />
                ))}
              </div>
              {userListings.length === 0 && (
                <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                  <p className="text-muted-foreground">You don't have any active listings.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="purchases" className="mt-6">
              <div className="space-y-6">
                {userPurchases.map((purchase) => (
                  <Card key={purchase.id}>
                    <div className="flex flex-col gap-4 p-4 sm:flex-row">
                      <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-md">
                        <Image
                          src={purchase.image || "/placeholder.svg"}
                          alt={purchase.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-medium">{purchase.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge variant="outline">{purchase.category}</Badge>
                            <Badge variant="outline">{purchase.condition}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">${purchase.price.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">
                            Purchased on {new Date(purchase.purchaseDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                {userPurchases.length === 0 && (
                  <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                    <p className="text-muted-foreground">You haven't made any purchases yet.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <div className="space-y-6">
                {userDonations.map((donation) => (
                  <Card key={donation.id}>
                    <div className="flex flex-col gap-4 p-4 sm:flex-row">
                      <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-md">
                        <Image
                          src={donation.image || "/placeholder.svg"}
                          alt={donation.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-medium">{donation.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge variant="outline">{donation.category}</Badge>
                            <Badge variant="outline">{donation.condition}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm">
                              Donated to <span className="font-medium">{donation.ngo}</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(donation.donationDate).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant="secondary">Donated</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                {userDonations.length === 0 && (
                  <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                    <p className="text-muted-foreground">You don't have any donations yet.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}


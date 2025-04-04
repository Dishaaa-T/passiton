"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Camera, Upload } from "lucide-react"

export default function NewListingPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    images: [] as string[],
    listingDuration: 30,
    donateIfUnsold: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, listingDuration: value[0] }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, donateIfUnsold: checked }))
  }

  const handleImageUpload = () => {
    // This would typically handle file uploads
    // For demo purposes, we'll just add a placeholder
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, `/placeholder.svg?height=300&width=300&text=Image ${prev.images.length + 1}`],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/profile")
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">Create New Listing</h1>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide the basic details about your item.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Vintage Leather Jacket"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your item in detail..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="home-garden">Home & Garden</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="toys-games">Toys & Games</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleSelectChange("condition", value)}>
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>
                Add up to 5 images of your item. The first image will be the cover image.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-md border">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}

                {formData.images.length < 5 && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="flex aspect-square items-center justify-center rounded-md border border-dashed"
                  >
                    <div className="flex flex-col items-center gap-1 text-muted-foreground">
                      <Camera className="h-6 w-6" />
                      <span className="text-xs">Add Image</span>
                    </div>
                  </button>
                )}
              </div>

              {formData.images.length === 0 && (
                <div className="mt-4 flex items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <h3 className="text-lg font-medium">Upload Images</h3>
                    <p className="text-sm text-muted-foreground">Drag and drop your images here, or click to browse</p>
                    <Button type="button" variant="secondary" onClick={handleImageUpload}>
                      Browse Files
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Listing Options</CardTitle>
              <CardDescription>
                Configure how long your listing will be active and what happens if it doesn't sell.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="listing-duration">Listing Duration</Label>
                  <span className="text-sm font-medium">{formData.listingDuration} days</span>
                </div>
                <Slider
                  id="listing-duration"
                  min={7}
                  max={60}
                  step={1}
                  defaultValue={[formData.listingDuration]}
                  onValueChange={handleSliderChange}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>7 days</span>
                  <span>30 days</span>
                  <span>60 days</span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="donate-if-unsold" className="text-base">
                    Donate if Unsold
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    If your item doesn't sell within the listing period, it will be donated to our partner NGOs.
                  </p>
                </div>
                <Switch id="donate-if-unsold" checked={formData.donateIfUnsold} onCheckedChange={handleSwitchChange} />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Creating Listing..." : "Create Listing"}
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


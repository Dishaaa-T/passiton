"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  category: string
  condition: string
  daysLeft?: number
  isFavorite?: boolean
  onFavoriteToggle?: (id: string) => void
}

export function ProductCard({
  id,
  title,
  price,
  image,
  category,
  condition,
  daysLeft,
  isFavorite = false,
  onFavoriteToggle,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=300"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {daysLeft !== undefined && daysLeft <= 7 && (
          <div className="absolute left-2 top-2">
            <Badge variant="destructive" className="px-2 py-1">
              {daysLeft === 0 ? "Last day" : `${daysLeft} days left`}
            </Badge>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 rounded-full bg-white/80 hover:bg-white"
          onClick={() => onFavoriteToggle?.(id)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"}`} />
          <span className="sr-only">Toggle favorite</span>
        </Button>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
            <CardDescription className="flex gap-2">
              <Badge variant="outline" className="rounded-sm">
                {category}
              </Badge>
              <Badge variant="outline" className="rounded-sm">
                {condition}
              </Badge>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-xl font-bold">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/products/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


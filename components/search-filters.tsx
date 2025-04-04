"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Filter, Search, X } from "lucide-react"

interface SearchFiltersProps {
  onSearch: (filters: FilterState) => void
  categories: string[]
  conditions: string[]
}

interface FilterState {
  searchTerm: string
  priceRange: [number, number]
  categories: string[]
  conditions: string[]
  sortBy: "newest" | "price-low" | "price-high" | "ending-soon"
}

export function SearchFilters({ onSearch, categories, conditions }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    priceRange: [0, 1000],
    categories: [],
    conditions: [],
    sortBy: "newest",
  })

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
  }

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked ? [...prev.categories, category] : prev.categories.filter((c) => c !== category),
    }))
  }

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      conditions: checked ? [...prev.conditions, condition] : prev.conditions.filter((c) => c !== condition),
    }))
  }

  const handleSortChange = (value: string) => {
    setFilters((prev) => ({ ...prev, sortBy: value as FilterState["sortBy"] }))
  }

  const handleSearch = () => {
    onSearch(filters)
    setIsOpen(false)
  }

  const handleReset = () => {
    setFilters({
      searchTerm: "",
      priceRange: [0, 1000],
      categories: [],
      conditions: [],
      sortBy: "newest",
    })
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={handleSearchTermChange}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 sm:w-auto" onClick={() => setIsOpen(!isOpen)}>
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {isOpen && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator className="my-4" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <div className="space-y-2">
                  <Slider
                    defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                    max={1000}
                    step={10}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">${filters.priceRange[0]}</span>
                    <span className="text-sm text-muted-foreground">${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={filters.categories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                      />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Condition</h4>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={`condition-${condition}`}
                        checked={filters.conditions.includes(condition)}
                        onCheckedChange={(checked) => handleConditionChange(condition, checked === true)}
                      />
                      <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Sort By</h4>
                <RadioGroup defaultValue={filters.sortBy} onValueChange={handleSortChange} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="newest" id="newest" />
                    <Label htmlFor="newest">Newest</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-low" id="price-low" />
                    <Label htmlFor="price-low">Price: Low to High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-high" id="price-high" />
                    <Label htmlFor="price-high">Price: High to Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ending-soon" id="ending-soon" />
                    <Label htmlFor="ending-soon">Ending Soon</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
              <Button onClick={handleSearch}>Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


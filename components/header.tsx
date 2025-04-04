"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                PassItOn
              </Link>
              <Link href="/" className="hover:text-foreground/80">
                Home
              </Link>
              <Link href="/products" className="hover:text-foreground/80">
                Products
              </Link>
              <Link href="/categories" className="hover:text-foreground/80">
                Categories
              </Link>
              <Link href="/how-it-works" className="hover:text-foreground/80">
                How It Works
              </Link>
              <Link href="/about-donations" className="hover:text-foreground/80">
                About Donations
              </Link>
              <Link href="/contact" className="hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Link href="/" className="hidden items-center gap-2 md:flex">
            <span className="text-xl font-bold">PassItOn</span>
          </Link>
        </div>

        <nav className="mx-6 hidden items-center space-x-4 md:flex md:flex-1">
          <Link href="/" className="text-sm font-medium hover:text-foreground/80">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-foreground/80">
            Products
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-foreground/80">
            Categories
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-foreground/80">
            How It Works
          </Link>
          <Link href="/about-donations" className="text-sm font-medium hover:text-foreground/80">
            About Donations
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {isSearchOpen ? (
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="search" placeholder="Search products..." className="h-9 w-full md:w-[200px] lg:w-[300px]" />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/listings">My Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}


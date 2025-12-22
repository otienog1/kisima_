"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
} from "@/components/ui/sheet"

const destinations = [
  {
    title: "Eastern Africa",
    href: "/destinations/eastern",
    description: "Kenya, Tanzania, Rwanda, Uganda, Ethiopia - The birthplace of safari.",
    countries: [
      { name: "Kenya", href: "/destinations/kenya" },
      { name: "Tanzania", href: "/destinations/tanzania" },
      { name: "Rwanda", href: "/destinations/rwanda" },
      { name: "Uganda", href: "/destinations/uganda" },
      { name: "Ethiopia", href: "/destinations/ethiopia" },
    ]
  },
  {
    title: "Southern Africa",
    href: "/destinations/southern",
    description: "South Africa, Zimbabwe, Zambia, Botswana, Namibia - Dramatic landscapes and wildlife.",
    countries: [
      { name: "South Africa", href: "/destinations/south-africa-and-cape-town" },
      { name: "Zimbabwe", href: "/destinations/zimbabwe" },
      { name: "Zambia", href: "/destinations/zambia" },
      { name: "Botswana", href: "/destinations/botswana" },
      { name: "Namibia", href: "/destinations/namibia" },
    ]
  },
]

const safaris = [
  {
    title: "Wildlife Safaris",
    href: "/safaris/wildlife",
    description: "Blend wildlife, culture, beach relaxation, and adventure into one seamless experience."
  },
  {
    title: "Women-Only Safaris",
    href: "/safaris/women-only",
    description: "Safe, supportive, inspiring spaces for women travelers seeking connection and empowerment."
  },
  {
    title: "Family Safaris",
    href: "/safaris/family",
    description: "Multi-generational adventures designed for families of all ages."
  },
  {
    title: "Connection Safaris",
    href: "/safaris/connection",
    description: "Heritage journeys for those with personal or family history in Africa."
  },
  {
    title: "Marathon Safaris",
    href: "/safaris/marathon",
    description: "Combine world-class running with wildlife adventure and beach recovery."
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [hoveredDestination, setHoveredDestination] = React.useState<string | null>(null)
  const [hoveredSafari, setHoveredSafari] = React.useState<string | null>(null)
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = React.useState(false)
  const [mobileSafarisOpen, setMobileSafarisOpen] = React.useState(false)
  const [destinationsSheetOpen, setDestinationsSheetOpen] = React.useState(false)
  const [safarisSheetOpen, setSafarisSheetOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/_Logo.svg"
              alt="Kisima Safaris Logo"
              width={60}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
            <span className="hidden font-bold sm:inline-block text-lg" style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 400, fontStyle: 'normal'}}>
              Kisima Safaris
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    pathname === "/" && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => setDestinationsSheetOpen(true)}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/destinations") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Destinations
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => setSafarisSheetOpen(true)}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/safaris") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Safaris
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/sustainability"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    (pathname === "/sustainability" || pathname.startsWith("/sustainability/")) && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Impact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    (pathname === "/about" || pathname.startsWith("/about/")) && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    (pathname === "/contact" || pathname.startsWith("/contact/")) && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full h-full max-w-none pr-0 bg-white/100 backdrop-blur-none">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/_Logo.svg"
                    width={40}
                    height={40}
                    alt="Kisima Safaris"
                    className="h-8 w-auto"
                  />
                  <span style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 400, fontStyle: 'normal'}}>Kisima Safaris</span>
                </Link>
              </SheetTitle>
              <SheetDescription className="text-left">
                Experiences of Africa - 18+ years of safari excellence
              </SheetDescription>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 px-6">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    pathname === "/" && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/destinations"
                      className={cn(
                        "text-foreground/70 transition-all duration-200 hover:text-foreground font-medium rounded-md px-3 py-2 hover:bg-amber-50",
                        pathname.startsWith("/destinations") && "!text-amber-800 !bg-amber-100 font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Destinations
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                    >
                      <svg
                        className={cn("h-4 w-4 transition-transform", mobileDestinationsOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>
                  {mobileDestinationsOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {destinations.map((region) => (
                        <div key={region.title}>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {region.title}
                          </div>
                          {region.countries.map((country) => (
                            <Link
                              key={country.name}
                              href={country.href}
                              className={cn(
                                "block text-sm text-foreground/60 hover:text-foreground ml-2 py-1 px-2 rounded transition-all duration-200 hover:bg-amber-50",
                                pathname === country.href && "!text-amber-800 !bg-amber-100 font-medium"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {country.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-foreground/70 font-medium px-3 py-2",
                        pathname.startsWith("/safaris") && "!text-amber-800 font-semibold"
                      )}
                    >
                      Safaris
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setMobileSafarisOpen(!mobileSafarisOpen)}
                    >
                      <svg
                        className={cn("h-4 w-4 transition-transform", mobileSafarisOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>
                  {mobileSafarisOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {safaris.map((safari) => (
                        <Link
                          key={safari.title}
                          href={safari.href}
                          className={cn(
                            "block text-sm text-foreground/60 hover:text-foreground py-1 px-2 rounded transition-all duration-200 hover:bg-amber-50",
                            pathname === safari.href && "!text-amber-800 !bg-amber-100 font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {safari.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/sustainability"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    (pathname === "/sustainability" || pathname.startsWith("/sustainability/")) && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Impact
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    (pathname === "/about" || pathname.startsWith("/about/")) && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    (pathname === "/contact" || pathname.startsWith("/contact/")) && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Destinations Sliding Panel */}
      <Sheet open={destinationsSheetOpen} onOpenChange={setDestinationsSheetOpen}>
        <SheetPortal>
          <SheetOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" style={{ top: '5rem', height: 'calc(100vh - 5rem)' }} />
          <SheetContent side="left" className="w-full sm:w-[540px] max-w-none bg-white border-r-0" style={{ height: 'calc(100vh - 5rem)', top: '5rem' }}>
            <SheetHeader>
              <SheetTitle className="text-2xl font-freight-display-pro text-stone-800">
                Destinations
              </SheetTitle>
              <SheetDescription>
                Discover Africa&apos;s most incredible places across Eastern and Southern Africa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 14rem)' }}>
              <Link
                href="/destinations"
                onClick={() => setDestinationsSheetOpen(false)}
                className="block p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
              >
                <h3 className="font-sofia-pro-bold text-lg text-stone-800 mb-2">All Destinations</h3>
                <p className="font-sofia-pro text-sm text-stone-600">
                  Explore all our incredible destinations
                </p>
              </Link>
              {destinations.map((region) => (
                <div key={region.title} className="space-y-3">
                  <Link
                    href={region.href}
                    onClick={() => setDestinationsSheetOpen(false)}
                    className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                  >
                    <h3 className="font-sofia-pro-bold text-lg text-stone-800 mb-2">{region.title}</h3>
                    <p className="font-sofia-pro text-sm text-stone-600">{region.description}</p>
                  </Link>
                  <div className="ml-4 grid grid-cols-2 gap-2">
                    {region.countries.map((country) => (
                      <Link
                        key={country.name}
                        href={country.href}
                        onClick={() => setDestinationsSheetOpen(false)}
                        className={cn(
                          "px-3 py-2 text-sm font-sofia-pro rounded-md hover:bg-amber-50 transition-colors",
                          pathname === country.href && "bg-amber-100 text-amber-800 font-semibold"
                        )}
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>

      {/* Safaris Sliding Panel */}
      <Sheet open={safarisSheetOpen} onOpenChange={setSafarisSheetOpen}>
        <SheetPortal>
          <SheetOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" style={{ top: '5rem', height: 'calc(100vh - 5rem)' }} />
          <SheetContent side="left" className="w-full sm:w-[540px] max-w-none bg-white border-r-0" style={{ height: 'calc(100vh - 5rem)', top: '5rem' }}>
            <SheetHeader>
              <SheetTitle className="text-2xl font-freight-display-pro text-stone-800">
                Safaris
              </SheetTitle>
              <SheetDescription>
                Choose your perfect safari experience
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 14rem)' }}>
              {safaris.map((safari) => (
                <Link
                  key={safari.title}
                  href={safari.href}
                  onClick={() => setSafarisSheetOpen(false)}
                  className={cn(
                    "block p-4 rounded-lg hover:bg-amber-50 transition-colors border border-stone-200",
                    pathname === safari.href && "bg-amber-100 border-amber-300"
                  )}
                >
                  <h3 className="font-sofia-pro-bold text-lg text-stone-800 mb-2">{safari.title}</h3>
                  <p className="font-sofia-pro text-sm text-stone-600">{safari.description}</p>
                </Link>
              ))}
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-100 focus:text-amber-800 active:bg-amber-100",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"
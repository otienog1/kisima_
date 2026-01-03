"use client"

import * as React from "react"
import Link from "next/link"
import ProgressLink from "@/components/ProgressLink"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

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
} from "@/components/ui/sheet"

const destinations = [
  {
    name: "Kenya",
    href: "/destinations/kenya",
    description: "The birthplace of safari with iconic wildlife destinations",
    attractions: [
      { name: "Masai Mara National Reserve", description: "Home to the Great Migration", slug: "masai-mara-national-reserve" },
      { name: "Amboseli National Park", description: "Elephant paradise with Kilimanjaro views", slug: "amboseli-national-park" },
      { name: "Samburu National Reserve", description: "Unique wildlife in northern Kenya", slug: "samburu-national-reserve" },
      { name: "Lake Nakuru National Park", description: "Famous flamingo and rhino sanctuary", slug: "lake-nakuru-national-park" },
      { name: "Tsavo National Parks", description: "Kenya's largest wilderness area", slug: "tsavo-national-parks" },
    ]
  },
  {
    name: "Tanzania",
    href: "/destinations/tanzania",
    description: "Legendary parks and pristine beaches of East Africa",
    attractions: [
      { name: "Serengeti National Park", description: "Iconic endless plains and migration", slug: "serengeti-national-park" },
      { name: "Ngorongoro Crater", description: "World's largest intact volcanic caldera", slug: "ngorongoro-crater" },
      { name: "Tarangire National Park", description: "Elephant haven with baobab trees", slug: "tarangire-national-park" },
      { name: "Zanzibar", description: "Spice island with pristine beaches", slug: "zanzibar" },
      { name: "Mount Kilimanjaro", description: "Africa's highest peak", slug: "mount-kilimanjaro" },
    ]
  },
  {
    name: "Uganda",
    href: "/destinations/uganda",
    description: "The Pearl of Africa with mountain gorillas",
    attractions: [
      { name: "Bwindi Impenetrable Forest", description: "Mountain gorilla trekking paradise", slug: "bwindi-impenetrable-forest" },
      { name: "Queen Elizabeth National Park", description: "Tree-climbing lions and boat safaris", slug: "queen-elizabeth-national-park" },
      { name: "Murchison Falls National Park", description: "Powerful waterfall and wildlife", slug: "murchison-falls-national-park" },
      { name: "Kibale Forest National Park", description: "Chimpanzee tracking capital", slug: "kibale-forest-national-park" },
      { name: "Lake Bunyonyi", description: "Beautiful terraced highland lake", slug: "lake-bunyonyi" },
    ]
  },
  {
    name: "Rwanda",
    href: "/destinations/rwanda",
    description: "Land of a thousand hills and gorillas",
    attractions: [
      { name: "Volcanoes National Park", description: "Mountain gorilla encounters", slug: "volcanoes-national-park" },
      { name: "Nyungwe Forest National Park", description: "Chimpanzees and canopy walks", slug: "nyungwe-forest-national-park" },
      { name: "Akagera National Park", description: "Big Five savanna experience", slug: "akagera-national-park" },
      { name: "Lake Kivu", description: "Scenic lakeside relaxation", slug: "lake-kivu" },
      { name: "Kigali", description: "Clean capital with genocide memorial", slug: "kigali" },
    ]
  },
]

const safaris = [
  {
    title: "Wildlife Safaris",
    href: "/safaris/wildlife",
    description: "Blend wildlife, culture, beach relaxation, and adventure into one seamless experience.",
    itineraries: [
      { title: "Classic Kenya Safari + Beach", href: "/safaris/wildlife/classic-kenya-safari-beach", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Kenya's wildlife and pristine beaches combined" },
      { title: "Northern Kenya Explorer + Beach", href: "/safaris/wildlife/northern-kenya-explorer-beach", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Samburu, Lewa rhino tracking, and beach" },
      { title: "Kenya & Tanzania Safari + Zanzibar", href: "/safaris/wildlife/kenya-tanzania-grand-safari-zanzibar", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Legendary parks with Zanzibar beach relaxation" },
      { title: "Ultimate Tanzania Wildlife Safari", href: "/safaris/wildlife/ultimate-tanzania-wildlife", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Serengeti, Ngorongoro, and Tarangire adventure" },
      { title: "Uganda Primate & Wildlife Safari", href: "/safaris/wildlife/uganda-primate-wildlife", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Gorillas, chimps, and savanna wildlife" },
    ]
  },
  {
    title: "Women-Only Safaris",
    href: "/safaris/women-only",
    description: "Safe, supportive, inspiring spaces for women travelers seeking connection and empowerment.",
    itineraries: [
      { title: "Sisterhood Safari - Kenya", href: "/safaris/women-only/sisterhood-kenya-safari", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Women exploring Kenya's iconic wildlife destinations" },
      { title: "Women's Empowerment - Uganda", href: "/safaris/women-only/women-empowerment-uganda", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Gorilla trekking and women's empowerment experiences" },
      { title: "Coastal Culture Women's Journey", href: "/safaris/women-only/coastal-culture-women-tanzania", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Cultural immersion and beach on Tanzania coast" },
      { title: "Women's Wellness Rwanda Retreat", href: "/safaris/women-only/wellness-retreat-rwanda", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Gorilla trekking and wellness in Rwanda" },
      { title: "Women's Adventure Tanzania Safari", href: "/safaris/women-only/adventure-tanzania", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Empowering wildlife adventure and Kilimanjaro" },
    ]
  },
  {
    title: "Family Safaris",
    href: "/safaris/family",
    description: "Multi-generational adventures designed for families of all ages.",
    itineraries: [
      { title: "Kenya Family Adventure", href: "/safaris/family/family-adventure-kenya", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Wildlife, culture, and beach for families" },
      { title: "Uganda Family Gorilla Experience", href: "/safaris/family/gorilla-family-uganda", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Gorilla trekking perfect for families" },
      { title: "Tanzania Family Safari Classic", href: "/safaris/family/tanzania-family-safari", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Tanzania parks with activities for all" },
      { title: "Rwanda Family Gorilla Safari", href: "/safaris/family/rwanda-family-gorilla", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Kid-friendly gorilla trek and Lake Kivu" },
      { title: "East Africa Family Grand Tour", href: "/safaris/family/east-africa-grand-tour", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Multi-country adventure for the whole family" },
    ]
  },
  {
    title: "Connection Safaris",
    href: "/safaris/connection",
    description: "Heritage journeys for those with personal or family history in Africa.",
    itineraries: [
      { title: "Roots Return - Kenya", href: "/safaris/connection/roots-return-kenya", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Reconnect with heritage and ancestral sites" },
      { title: "Heritage Journey - Tanzania", href: "/safaris/connection/heritage-journey-tanzania", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Trace roots in Tanzania's diverse regions" },
      { title: "Cultural Connection - Uganda & Rwanda", href: "/safaris/connection/cultural-connection-uganda-rwanda", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Cultural immersion across Uganda and Rwanda" },
      { title: "Coastal Heritage - Swahili Coast", href: "/safaris/connection/coastal-heritage-swahili", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Explore Swahili culture and history" },
      { title: "Ancestral Journey - East Africa", href: "/safaris/connection/ancestral-journey-east-africa", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Trace ancestry across Kenya and Tanzania" },
    ]
  },
  {
    title: "Marathon Safaris",
    href: "/safaris/marathon",
    description: "Combine world-class running with wildlife adventure and beach recovery.",
    itineraries: [
      { title: "Kilimanjaro Marathon Safari", href: "/safaris/marathon/kilimanjaro-marathon-safari", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Marathon followed by safari and beach" },
      { title: "Lewa Safari Marathon Experience", href: "/safaris/marathon/safari-marathon-kenya", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Run alongside wildlife in Kenya's marathon" },
      { title: "Gorilla Marathon - Uganda & Rwanda", href: "/safaris/marathon/gorilla-marathon-uganda-rwanda", image: "/images/homepage/discover-ea-sa-1.jpg", description: "Mountain running with gorilla trekking" },
      { title: "Great Migration Marathon", href: "/safaris/marathon/great-migration-marathon", image: "/images/homepage/homepage-safari-experiences.jpg", description: "Run in Masai Mara during migration" },
      { title: "Mount Kenya Trail Running Safari", href: "/safaris/marathon/mount-kenya-trail-running", image: "/images/homepage/discover-ea-sa-1.jpg", description: "High-altitude trail running and wildlife" },
    ]
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

  // Set first destination as default when sheet opens
  React.useEffect(() => {
    if (destinationsSheetOpen && !hoveredDestination) {
      setHoveredDestination(destinations[0].name)
    } else if (!destinationsSheetOpen) {
      setHoveredDestination(null)
    }
  }, [destinationsSheetOpen])

  // Set first safari as default when sheet opens
  React.useEffect(() => {
    if (safarisSheetOpen && !hoveredSafari) {
      setHoveredSafari(safaris[0].title)
    } else if (!safarisSheetOpen) {
      setHoveredSafari(null)
    }
  }, [safarisSheetOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-white/95 backdrop-blur-sm">
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
                  "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/destinations") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Destinations
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => setSafarisSheetOpen(true)}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/safaris") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Safaris
                <ChevronDown className="h-4 w-4 opacity-50" />
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
                      {destinations.map((destination) => (
                        <Link
                          key={destination.name}
                          href={destination.href}
                          className={cn(
                            "block text-sm text-foreground/60 hover:text-foreground py-1 px-2 rounded transition-all duration-200 hover:bg-amber-50",
                            pathname === destination.href && "!text-amber-800 !bg-amber-100 font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {destination.name}
                        </Link>
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

      {/* Custom Overlay for Destinations */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-stone-800/60 backdrop-blur-sm transition-all duration-500 ease-in-out z-40",
          destinationsSheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          top: '5rem',
          height: 'calc(100vh - 5rem)',
          transitionDelay: destinationsSheetOpen ? '200ms' : '0ms'
        }}
        onClick={() => setDestinationsSheetOpen(false)}
      />

      {/* Destinations Sliding Panel */}
      <Sheet open={destinationsSheetOpen} onOpenChange={setDestinationsSheetOpen}>
          <SheetContent
            side="left"
            hideOverlay={true}
            className="w-full sm:w-2/3 lg:w-3/5 max-w-none bg-white border-r-0 border-t border-border/10 z-50 p-0"
            style={{ height: 'calc(100vh - 5rem)', top: '5rem' }}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Destinations Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex h-full">
              {/* Left Column - Countries */}
              <div className="w-2/3 border-r border-stone-200 p-6 overflow-y-auto">
                <div className="space-y-2">
                  {destinations.map((destination) => (
                    <div
                      key={destination.name}
                      onMouseEnter={() => setHoveredDestination(destination.name)}
                      className={cn(
                        "block p-4 rounded-lg transition-all duration-200 cursor-pointer",
                        hoveredDestination === destination.name && "bg-amber-50",
                        pathname.startsWith(destination.href) && !hoveredDestination && "bg-amber-100"
                      )}
                    >
                      <Link
                        href={destination.href}
                        onClick={() => setDestinationsSheetOpen(false)}
                        className="block"
                      >
                        <h3 className="font-sofia-pro-bold text-base text-stone-800 mb-1">{destination.name}</h3>
                        <p className="font-sofia-pro text-xs text-stone-600 line-clamp-2">{destination.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Attractions */}
              <div className="w-1/3 p-6 pt-20 overflow-y-auto bg-stone-50">
                {hoveredDestination ? (
                  <>
                    <div className="space-y-3">
                      {destinations
                        .find((d) => d.name === hoveredDestination)
                        ?.attractions.map((attraction, idx) => {
                          const country = destinations.find((d) => d.name === hoveredDestination);
                          const attractionHref = attraction.slug
                            ? `${country?.href}/attractions/${attraction.slug}`
                            : country?.href || '#';
                          return (
                            <Link
                              key={attraction.name}
                              href={attractionHref}
                              onClick={() => {
                                setDestinationsSheetOpen(false)
                                setHoveredDestination(null)
                              }}
                              className={cn(
                                "block p-3 rounded-lg bg-white transition-all animate-in fade-in slide-in-from-left-4 hover:shadow-sm group cursor-pointer"
                              )}
                              style={{
                                animationDelay: `${idx * 100}ms`,
                                animationDuration: "500ms",
                                animationFillMode: "both"
                              }}
                            >
                              <p className="font-sofia-pro text-sm font-medium text-stone-800 group-hover:text-amber-600 transition-colors mb-1">{attraction.name}</p>
                              <p className="font-sofia-pro text-xs text-stone-600">{attraction.description}</p>
                            </Link>
                          );
                        })}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-center">
                    <p className="font-sofia-pro text-sm text-stone-500">
                      Hover over a country to see attractions
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
      </Sheet>

      {/* Custom Overlay for Safaris */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-stone-800/60 backdrop-blur-sm transition-all duration-500 ease-in-out z-40",
          safarisSheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          top: '5rem',
          height: 'calc(100vh - 5rem)',
          transitionDelay: safarisSheetOpen ? '200ms' : '0ms'
        }}
        onClick={() => setSafarisSheetOpen(false)}
      />

      {/* Safaris Sliding Panel */}
      <Sheet open={safarisSheetOpen} onOpenChange={setSafarisSheetOpen}>
          <SheetContent
            side="left"
            hideOverlay={true}
            className="w-full sm:w-2/3 lg:w-3/5 max-w-none bg-white border-r-0 border-t border-border/10 z-50 p-0"
            style={{ height: 'calc(100vh - 5rem)', top: '5rem' }}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Safaris Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex h-full">
              {/* Left Column - Safari Types */}
              <div className="w-2/3 border-r border-stone-200 p-6 overflow-y-auto">
                <div className="space-y-2">
                  {safaris.map((safari) => (
                    <div
                      key={safari.title}
                      onMouseEnter={() => setHoveredSafari(safari.title)}
                      className={cn(
                        "block p-4 rounded-lg transition-all duration-200 cursor-pointer",
                        hoveredSafari === safari.title && "bg-amber-50",
                        pathname.startsWith(safari.href) && !hoveredSafari && "bg-amber-100"
                      )}
                    >
                      <Link
                        href={safari.href}
                        onClick={() => setSafarisSheetOpen(false)}
                        className="block"
                      >
                        <h3 className="font-sofia-pro-bold text-base text-stone-800 mb-1">{safari.title}</h3>
                        <p className="font-sofia-pro text-xs text-stone-600 line-clamp-2">{safari.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Itineraries */}
              <div className="w-1/3 p-6 pt-20 overflow-y-auto bg-stone-50">
                {hoveredSafari ? (
                  <>
                    <div className="space-y-3">
                      {safaris
                        .find((s) => s.title === hoveredSafari)
                        ?.itineraries.map((itinerary, idx) => (
                          <Link
                            key={itinerary.href}
                            href={itinerary.href}
                            onClick={() => {
                              setSafarisSheetOpen(false)
                              setHoveredSafari(null)
                            }}
                            className={cn(
                              "block rounded-lg overflow-hidden transition-colors group animate-in fade-in slide-in-from-left-4",
                              pathname === itinerary.href && "ring-2 ring-amber-400"
                            )}
                            style={{
                              animationDelay: `${idx * 100}ms`,
                              animationDuration: "500ms",
                              animationFillMode: "both"
                            }}
                          >
                            <div className="relative aspect-[16/10] w-full">
                              <Image
                                src={itinerary.image}
                                alt={itinerary.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="py-2">
                              <p className="font-sofia-pro text-sm font-medium text-stone-800 group-hover:text-amber-600 transition-colors mb-1">{itinerary.title}</p>
                              <p className="font-sofia-pro text-xs text-stone-600 line-clamp-2">{itinerary.description}</p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-center">
                    <p className="font-sofia-pro text-sm text-stone-500">
                      Hover over a safari type to see itineraries
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
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
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
  const [destinationsClosing, setDestinationsClosing] = React.useState(false)
  const [safarisClosing, setSafarisClosing] = React.useState(false)
  const [destinationsRepositioned, setDestinationsRepositioned] = React.useState(false)
  const [safarisRepositioned, setSafarisRepositioned] = React.useState(false)
  const destinationsButtonRef = React.useRef<HTMLButtonElement>(null)
  const safarisButtonRef = React.useRef<HTMLButtonElement>(null)
  const destinationsContentRef = React.useRef<HTMLDivElement>(null)
  const safarisContentRef = React.useRef<HTMLDivElement>(null)
  const [destinationsLeftPos, setDestinationsLeftPos] = React.useState(0)
  const [safarisLeftPos, setSafarisLeftPos] = React.useState(0)
  const [destinationsHeight, setDestinationsHeight] = React.useState(0)
  const [safarisHeight, setSafarisHeight] = React.useState(0)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Helper functions to close panels with animation
  const closeDestinationsPanel = React.useCallback(() => {
    setDestinationsClosing(true)
    setDestinationsRepositioned(false)
    // Use requestAnimationFrame to ensure repositioning happens before width animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Then trigger width collapse after browser has repositioned
        setDestinationsRepositioned(true)
      })
    })
    // Finally reset states after animation
    setTimeout(() => {
      setDestinationsSheetOpen(false)
      setDestinationsClosing(false)
      setDestinationsRepositioned(false)
    }, 550) // 500ms animation + buffer
  }, [])

  const closeSafarisPanel = React.useCallback(() => {
    setSafarisClosing(true)
    setSafarisRepositioned(false)
    // Use requestAnimationFrame to ensure repositioning happens before width animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Then trigger width collapse after browser has repositioned
        setSafarisRepositioned(true)
      })
    })
    // Finally reset states after animation
    setTimeout(() => {
      setSafarisSheetOpen(false)
      setSafarisClosing(false)
      setSafarisRepositioned(false)
    }, 550) // 500ms animation + buffer
  }, [])

  // Calculate button positions and content heights
  React.useEffect(() => {
    const updatePositions = () => {
      if (destinationsButtonRef.current) {
        const rect = destinationsButtonRef.current.getBoundingClientRect()
        setDestinationsLeftPos(rect.left)
      }
      if (safarisButtonRef.current) {
        const rect = safarisButtonRef.current.getBoundingClientRect()
        setSafarisLeftPos(rect.left)
      }
    }

    const updateHeights = () => {
      if (destinationsContentRef.current) {
        const height = destinationsContentRef.current.scrollHeight
        setDestinationsHeight(height + 48) // Add padding (p-6 = 24px * 2)
      }
      if (safarisContentRef.current) {
        const height = safarisContentRef.current.scrollHeight
        setSafarisHeight(height + 48) // Add padding (p-6 = 24px * 2)
      }
    }

    updatePositions()
    // Delay height calculation to ensure content is rendered
    setTimeout(updateHeights, 100)

    const handleResize = () => {
      updatePositions()
      updateHeights()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  // Handle scroll to change navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300",
      isScrolled || !isHomePage ? "bg-white/95 border-b border-stone-200/30" : "bg-transparent border-b border-white/20"
    )}>
      <div className="container max-w-screen-xl">
        {/* Company Name Row */}
        <div className={cn(
          "flex items-center justify-center overflow-hidden transition-all duration-300",
          isScrolled ? "h-0 opacity-0" : "h-16 opacity-100"
        )}>
          <Link href="/" className="flex items-center">
            <span className={cn(
              "font-bold text-2xl transition-colors duration-300",
              isScrolled || !isHomePage ? "text-stone-800" : "text-white"
            )} style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 600, fontStyle: 'normal'}}>
              Kisima Safaris
            </span>
          </Link>
        </div>

        {/* Navigation Row */}
        <div className="flex h-14 items-center justify-between">
          {/* Desktop Navigation - Left Aligned */}
          <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  onClick={() => {
                    if (destinationsSheetOpen) closeDestinationsPanel()
                    if (safarisSheetOpen) closeSafarisPanel()
                  }}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    isScrolled || !isHomePage ? "text-stone-800" : "text-white",
                    pathname === "/" && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                ref={safarisButtonRef}
                onClick={() => {
                  if (destinationsSheetOpen) {
                    closeDestinationsPanel()
                    // Wait for destinations panel to close before opening safaris
                    setTimeout(() => {
                      setSafarisSheetOpen(true)
                    }, 250)
                  } else {
                    setSafarisSheetOpen(true)
                  }
                }}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  isScrolled || !isHomePage ? "text-stone-800" : "text-white",
                  pathname.startsWith("/safaris") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Safaris
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                ref={destinationsButtonRef}
                onClick={() => {
                  if (safarisSheetOpen) {
                    closeSafarisPanel()
                    // Wait for safari panel to close before opening destinations
                    setTimeout(() => {
                      setDestinationsSheetOpen(true)
                    }, 250)
                  } else {
                    setDestinationsSheetOpen(true)
                  }
                }}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  isScrolled || !isHomePage ? "text-stone-800" : "text-white",
                  pathname.startsWith("/destinations") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Destinations
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/sustainability"
                  onClick={() => {
                    if (destinationsSheetOpen) closeDestinationsPanel()
                    if (safarisSheetOpen) closeSafarisPanel()
                  }}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    isScrolled || !isHomePage ? "text-stone-800" : "text-white",
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
                  onClick={() => {
                    if (destinationsSheetOpen) closeDestinationsPanel()
                    if (safarisSheetOpen) closeSafarisPanel()
                  }}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    isScrolled || !isHomePage ? "text-stone-800" : "text-white",
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
                  onClick={() => {
                    if (destinationsSheetOpen) closeDestinationsPanel()
                    if (safarisSheetOpen) closeSafarisPanel()
                  }}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    isScrolled || !isHomePage ? "text-stone-800" : "text-white",
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
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-bold text-xl" style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 600, fontStyle: 'normal'}}>Kisima Safaris</span>
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
      </div>

      {/* Custom Overlay for Destinations */}
      <div
        className="hidden"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          height: isScrolled ? 'calc(100vh - 3.5rem)' : 'calc(100vh - 7.5rem)',
          transitionDelay: destinationsSheetOpen ? '200ms' : '0ms'
        }}
        onClick={closeDestinationsPanel}
      />

      {/* Destinations Close Button - Positioned outside panel */}
      <button
        onClick={closeDestinationsPanel}
        className="fixed z-[60] rounded-sm ring-offset-background transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white border border-stone-200/30 p-2.5 hover:border-stone-400 shadow-sm"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          left: `${destinationsLeftPos - 44}px`,
          opacity: destinationsSheetOpen && !destinationsClosing ? 1 : 0,
          pointerEvents: destinationsSheetOpen && !destinationsClosing ? 'auto' : 'none',
          transition: 'opacity 250ms ease-in-out, top 300ms ease-in-out, left 250ms ease-in-out'
        }}
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </button>

      {/* Destinations Sliding Panel */}
      <div
        className="fixed bg-white border-t border-stone-200/30 z-50 p-0 overflow-hidden overflow-y-hidden"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          left: `${destinationsLeftPos}px`,
          width: `calc((100vw - ${destinationsLeftPos}px) / 2)`,
          transition: 'height 250ms ease-in-out, top 300ms ease-in-out, opacity 250ms ease-in-out',
          height: destinationsSheetOpen && !destinationsClosing ? `${destinationsHeight}px` : '0',
          opacity: destinationsSheetOpen && !destinationsClosing ? 1 : 0,
          pointerEvents: destinationsSheetOpen ? 'auto' : 'none'
        }}
      >
        <div className="flex h-full">
              {/* Left Column - Countries */}
              <div className="w-4/7 border-r border-stone-200/30 p-6 overflow-y-hidden" style={{ width: 'calc(4 / 7 * 100%)' }}>
                <div ref={destinationsContentRef} className="space-y-2">
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
                        onClick={closeDestinationsPanel}
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
              <div className="w-3/7 p-6 overflow-y-auto bg-stone-50" style={{ width: 'calc(3 / 7 * 100%)' }}>
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
                                closeDestinationsPanel()
                                setHoveredDestination(null)
                              }}
                              className={cn(
                                "block p-3 rounded-lg bg-white transition-all animate-in fade-in slide-in-from-bottom-4 hover:shadow-sm group cursor-pointer"
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
      </div>

      {/* Custom Overlay for Safaris */}
      <div
        className="hidden"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          height: isScrolled ? 'calc(100vh - 3.5rem)' : 'calc(100vh - 7.5rem)',
          transitionDelay: safarisSheetOpen ? '200ms' : '0ms'
        }}
        onClick={closeSafarisPanel}
      />

      {/* Safaris Close Button - Positioned outside panel */}
      <button
        onClick={closeSafarisPanel}
        className="fixed z-[60] rounded-sm ring-offset-background transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white border border-stone-200/30 p-2.5 hover:border-stone-400 shadow-sm"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          left: `${safarisLeftPos - 44}px`,
          opacity: safarisSheetOpen && !safarisClosing ? 1 : 0,
          pointerEvents: safarisSheetOpen && !safarisClosing ? 'auto' : 'none',
          transition: 'opacity 250ms ease-in-out, top 300ms ease-in-out, left 250ms ease-in-out'
        }}
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </button>

      {/* Safaris Sliding Panel */}
      <div
        className="fixed bg-white border-t border-stone-200/30 z-50 p-0 overflow-hidden overflow-y-hidden"
        style={{
          top: isScrolled ? '3.5rem' : '7.5rem',
          left: `${safarisLeftPos}px`,
          width: `calc((100vw - ${safarisLeftPos}px) / 2)`,
          transition: 'height 250ms ease-in-out, top 300ms ease-in-out, opacity 250ms ease-in-out',
          height: safarisSheetOpen && !safarisClosing ? `${safarisHeight}px` : '0',
          opacity: safarisSheetOpen && !safarisClosing ? 1 : 0,
          pointerEvents: safarisSheetOpen ? 'auto' : 'none'
        }}
      >
        <div className="flex h-full">
              {/* Left Column - Safari Types */}
              <div className="w-4/7 border-r border-stone-200/30 p-6 overflow-y-hidden" style={{ width: 'calc(4 / 7 * 100%)' }}>
                <div ref={safarisContentRef} className="space-y-2">
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
                        onClick={closeSafarisPanel}
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
              <div className="w-3/7 p-6 overflow-y-auto bg-stone-50" style={{ width: 'calc(3 / 7 * 100%)' }}>
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
                              closeSafarisPanel()
                              setHoveredSafari(null)
                            }}
                            className={cn(
                              "block rounded-lg overflow-hidden transition-colors group animate-in fade-in slide-in-from-bottom-4",
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
      </div>
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
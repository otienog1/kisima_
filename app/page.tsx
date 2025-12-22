"use client";

import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getWebsiteContent } from "@/lib/websiteContent";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Wildlife Photographer",
    company: "UK",
    testimonial:
      "An absolutely incredible experience! The Great Migration in Masai Mara was breathtaking, and our guide was knowledgeable and passionate about wildlife conservation. Timobo made our dream safari a reality.",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CEO",
    company: "Tech Solutions Inc.",
    testimonial:
      "Our corporate retreat in Tanzania was flawlessly organized. The team handled every detail with professionalism, from airport transfers to luxury accommodations. Our team came back inspired and rejuvenated.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    designation: "Adventure Traveler",
    company: "Spain",
    testimonial:
      "The gorilla trekking experience in Rwanda was life-changing. Coming face-to-face with these magnificent creatures in their natural habitat was emotional and unforgettable. Thank you for this incredible journey.",
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Conservation Photographer",
    company: "National Geographic",
    testimonial:
      "Timobo's commitment to conservation shines through every aspect of their tours. The elephant safari in Amboseli was not just beautiful, but educational and meaningful. They truly care about protecting Africa's wildlife.",
  },
  {
    id: 5,
    name: "Lisa Williams",
    designation: "Travel Blogger",
    company: "Wanderlust Adventures",
    testimonial:
      "The best investment we've made for our content! The Okavango Delta experience was magical - gliding through waterways in traditional mokoros while elephants bathed nearby. Timobo exceeded all expectations.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="mb-8 bg-white border border-stone-200 rounded-xl py-8 px-6 sm:py-6 shadow-sm">
    <div className="text-center max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 fill-amber-500 stroke-amber-500" />
        ))}
      </div>
      <p className="font-sofia-pro text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium tracking-tight text-stone-700 mb-6">
        {testimonial.testimonial}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Avatar>
          <AvatarFallback className="text-xl font-medium bg-amber-500 text-white">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p className="font-sofia-pro-bold text-lg">{testimonial.name}</p>
          <p className="font-sofia-pro text-sm text-stone-600">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  </div>
);


export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const content = getWebsiteContent();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);



  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSlider />


      <Section className="py-16 lg:py-24 lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-6 leading-tight">
                {content.homepage.headline}
              </h2>
              <p className="font-sofia-pro-bold text-xl lg:text-2xl text-stone-700 mb-6 leading-relaxed">
                {content.homepage.subheadline}
              </p>
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-6 lg:mb-6 leading-relaxed">
                {content.homepage.intro}
              </p>

              {/* Mobile Image - shows between paragraphs on mobile only */}
              <div className="lg:hidden mb-6">
                <div className="relative aspect-[4/3] bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/homepage/homepage-section2.jpg"
                    alt="Portrait of safari guide with wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-sofia-pro-bold text-lg text-stone-800">Why Travel With Us</h3>
                <ul className="font-sofia-pro text-base text-stone-700 space-y-2">
                  {content.homepage.why_travel_with_us.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Image - shows on right side for desktop only */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-section2.jpg"
                  alt="Portrait of safari guide with wildlife"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-50 lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="font-freight-display-pro text-2xl sm:text-3xl lg:text-4xl text-stone-800 leading-tight max-w-4xl mx-auto text-center">
              Our Signature Safaris
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 mt-4">
              Tailor-made journeys designed for every traveler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wildlife Safaris */}
            <Link href="/safaris/wildlife" className="group space-y-6">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-safari-experiences.jpg"
                  alt="Wildlife safari experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800 group-hover:text-amber-600 transition-colors">Wildlife Safaris</h3>
                <p className="font-sofia-pro text-stone-700">
                  {content.wildlife_safaris.intro}
                </p>
              </div>
            </Link>

            {/* Women-Only Safaris */}
            <Link href="/safaris/women-only" className="group space-y-6">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-adventure-travel.jpg"
                  alt="Women-only safari experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800 group-hover:text-amber-600 transition-colors">Women-Only Safaris</h3>
                <p className="font-sofia-pro text-stone-700">
                  {content.women_only_safaris.intro}
                </p>
              </div>
            </Link>

            {/* Family Safaris */}
            <Link href="/safaris/family" className="group space-y-6">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-mice-solutions.jpg"
                  alt="Family safari experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800 group-hover:text-amber-600 transition-colors">Family Safaris</h3>
                <p className="font-sofia-pro text-stone-700">
                  {content.family_safaris.intro}
                </p>
              </div>
            </Link>

            {/* Connection Safaris */}
            <Link href="/safaris/connection" className="group space-y-6">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-safari-experiences.jpg"
                  alt="Connection safari experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800 group-hover:text-amber-600 transition-colors">Connection Safaris</h3>
                <p className="font-sofia-pro text-stone-700">
                  {content.connection_safaris.intro}
                </p>
              </div>
            </Link>

            {/* Marathon Safaris */}
            <Link href="/safaris/marathon" className="group space-y-6">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-adventure-travel.jpg"
                  alt="Marathon safari experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800 group-hover:text-amber-600 transition-colors">Marathon Safaris</h3>
                <p className="font-sofia-pro text-stone-700">
                  {content.marathon_safaris.intro}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-800 text-white lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-freight-display-pro">
                Discover Eastern & Southern Africa
              </h2>
              <p className="font-sofia-pro text-lg text-stone-300 mb-6">
                Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.
              </p>
              <p className="font-sofia-pro text-lg text-muted-foreground mb-8">
                From the vast plains of the Maasai Mara to Tanzania&apos;s Serengeti, Rwanda&apos;s mountain gorillas, and Botswana&apos;s Okavango Delta - we craft journeys to Africa&apos;s most iconic destinations.
              </p>
              <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
                <span className="relative z-20">Explore All Destinations</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 aspect-[4/3] lg:aspect-[3/2]">
              {/* Large image - spans full height */}
              <div className="relative bg-stone-50 overflow-hidden">
                <Image
                  src="/images/homepage/discover-ea-sa-1.jpg"
                  alt="African wildlife in their natural habitat"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side - 2 stacked images */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/homepage/discover-ea-sa-2.jpg"
                    alt="Safari landscape with acacia trees"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/homepage/discover-ea-sa-3.jpg"
                    alt="Mountain gorilla in Rwanda"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-background">
        <div className="w-full">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-semibold text-center tracking-[-0.03em] text-stone-800">
            What Our Travelers Say
          </h2>
          <p className="font-sofia-pro mt-3 text-center text-stone-700 text-lg lg:text-xl">
            Discover why travelers choose Timobo Safaris for their African adventures
          </p>
          <div className="mt-12 lg:mt-16 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn("h-3.5 w-3.5 rounded-full border-2 transition-colors", {
                    "bg-amber-500 border-amber-500": current === index + 1,
                    "border-stone-600 hover:border-stone-800": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">
            Ready for Your African Adventure?
          </h2>
          <p className="text-base lg:text-lg text-stone-700 mb-6 max-w-3xl mx-auto">
            {content.homepage.sustainability_highlight}
          </p>
          <p className="text-base lg:text-lg text-stone-700 mb-8 max-w-3xl mx-auto italic">
            Journeys by Kisima Safaris invites you to discover Africa – where every journey tells a story, every safari supports sustainability, and every experience stays with you forever.
          </p>
          <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 shadow-lg shadow-stone-700/20 hover:shadow-stone-800/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-stone-800 after:to-stone-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm">
            <span className="relative z-20">{content.homepage.cta}</span>
          </Link>
        </div>
      </Section>
    </main>
  );
}
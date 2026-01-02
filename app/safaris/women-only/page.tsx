"use client";

import Section from "@/components/Section";
import { getWebsiteContent } from "@/lib/websiteContent";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, ArrowRight } from "lucide-react";
import { womenOnlyItinerariesData } from "@/lib/itinerariesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function WomenOnlySafarisPage() {
  const content = getWebsiteContent();
  const safari = content.women_only_safaris;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage/homepage-adventure-travel.jpg"
            alt="Women-Only Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10 text-center text-white">
          <h1 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {safari.headline}
          </h1>
          <p className="font-sofia-pro text-xl lg:text-2xl max-w-3xl mx-auto">
            {safari.intro}
          </p>
        </div>
      </Section>

      {/* Why Choose Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/homepage/discover-ea-sa-2.jpg"
                alt="Women-Only Safari Experience"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-6">
                Why Choose Our Women-Only Safaris
              </h2>
              <ul className="space-y-4">
                {safari.why_choose.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="font-sofia-pro text-lg text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Experiences Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safari.experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-sofia-pro-bold text-xl text-stone-800 mb-3">{experience}</h3>
                <p className="font-sofia-pro text-stone-600">
                  Connect and empower
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Itineraries Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-4">
              Women-Only Safari Itineraries
            </h2>
            <p className="font-sofia-pro text-lg text-stone-600 max-w-3xl mx-auto">
              Explore our carefully curated women-only safari experiences, designed to empower, connect, and inspire.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {womenOnlyItinerariesData.map((itinerary) => (
                <CarouselItem key={itinerary.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="space-y-6">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          alt={itinerary.title}
                          fill
                          className="object-cover"
                          src={itinerary.image}
                        />
                      </div>
                      <div>
                        <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                          {itinerary.title}
                        </h3>
                        <p className="font-sofia-pro text-stone-700 mb-4">
                          {itinerary.description}
                        </p>
                        <ul className="font-sofia-pro text-sm text-stone-600 space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <span>{itinerary.duration.standard} (Standard) | {itinerary.duration.luxury} (Luxury)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <span>{itinerary.countries.join(", ")}</span>
                          </li>
                        </ul>
                        <Link
                          href={`/safaris/women-only/${itinerary.id}`}
                          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-sofia-pro-bold transition-colors"
                        >
                          View Full Itinerary <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>

      {/* Sustainability Section */}
      <Section className="py-16 lg:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-freight-display-pro text-3xl lg:text-4xl mb-8">
              Travel With Purpose
            </h2>
            <p className="font-sofia-pro text-lg text-stone-300 mb-8">
              Supporting women and communities across Africa
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safari.sustainability.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-3 bg-amber-600 rounded-full mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-sofia-pro text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl font-bold mb-6 text-stone-800">
            Join Us on a Journey of Connection & Empowerment
          </h2>
          <p className="font-sofia-pro text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Experience Africa in the company of like-minded women travelers
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 h-14 px-8 text-lg rounded-sm"
          >
            <span className="relative z-20">{safari.cta}</span>
          </Link>
        </div>
      </Section>
    </main>
  );
}

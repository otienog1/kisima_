import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Star, ArrowLeft } from "lucide-react";
import { womenOnlyItinerariesData } from "@/lib/itinerariesData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return womenOnlyItinerariesData.map((itinerary) => ({
    id: itinerary.id,
  }));
}

export default function ItineraryPage({ params }: { params: { id: string } }) {
  const itinerary = womenOnlyItinerariesData.find((item) => item.id === params.id);

  if (!itinerary) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={itinerary.image}
            alt={itinerary.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10 text-center text-white">
          <Link
            href="/safaris/women-only"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sofia-pro">Back to Women-Only Safaris</span>
          </Link>
          <h1 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {itinerary.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-sofia-pro">
                {itinerary.duration.standard} (Standard) | {itinerary.duration.luxury} (Luxury)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-sofia-pro">{itinerary.countries.join(", ")}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="font-sofia-pro text-xl text-stone-700 text-center mb-12">
            {itinerary.description}
          </p>

          {/* Destinations */}
          <div className="mb-12">
            <h2 className="font-freight-display-pro text-2xl lg:text-3xl text-stone-800 mb-6 text-center">
              Destinations
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {itinerary.destinations.map((dest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-sofia-pro"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="font-freight-display-pro text-2xl lg:text-3xl text-stone-800 mb-6 text-center">
              Highlights
            </h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {itinerary.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="font-sofia-pro text-lg text-stone-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Day by Day Itinerary */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-12 text-center">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-6">
            {itinerary.activities.map((activity, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-sofia-pro-bold text-xl">
                  {activity.day}
                </div>
                <div className="flex-1">
                  <h3 className="font-sofia-pro-bold text-xl text-stone-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="font-sofia-pro text-stone-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Luxury Lodges */}
      {itinerary.luxuryLodges && (
        <Section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-amber-50 p-8 rounded-lg text-center">
              <h2 className="font-freight-display-pro text-2xl lg:text-3xl text-stone-800 mb-6">
                Luxury Option Lodges
              </h2>
              <p className="font-sofia-pro text-lg text-stone-700">
                {itinerary.luxuryLodges.join(" • ")}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl font-bold mb-6 text-stone-800">
            Ready to Experience This Safari?
          </h2>
          <p className="font-sofia-pro text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Contact us to customize this itinerary or get more information
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 h-14 px-8 text-lg rounded-sm"
          >
            <span className="relative z-20">Inquire About This Safari</span>
          </Link>
        </div>
      </Section>
    </main>
  );
}

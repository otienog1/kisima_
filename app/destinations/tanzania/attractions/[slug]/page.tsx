import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const tanzaniaAttractions = {
  "serengeti-national-park": {
    name: "Serengeti National Park",
    description: "Iconic endless plains and migration",
    fullDescription: "The Serengeti is Tanzania's oldest and most famous national park, renowned worldwide for the annual Great Migration. The vast plains stretch endlessly, teeming with wildlife year-round. This UNESCO World Heritage Site offers some of Africa's finest game viewing.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "The Great Migration of 1.5 million wildebeest",
      "Year-round exceptional Big Five viewing",
      "Kopjes - rock formations with resident predators",
      "Hot air balloon safaris over the plains",
      "Largest concentration of predators in Africa"
    ],
    wildlife: ["Lions", "Leopards", "Elephants", "Buffaloes", "Rhinos", "Cheetahs", "Wildebeest", "Zebras", "Giraffes"],
    bestTime: "June to October for the migration, though wildlife viewing is excellent year-round"
  },
  "ngorongoro-crater": {
    name: "Ngorongoro Crater",
    description: "World's largest intact volcanic caldera",
    fullDescription: "The Ngorongoro Crater is the world's largest intact volcanic caldera and a UNESCO World Heritage Site. This natural amphitheater hosts one of the densest populations of large mammals in Africa, offering incredible wildlife viewing in a spectacular setting.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Highest density of predators in Africa",
      "One of the best places to see black rhinos",
      "Stunning crater rim views",
      "All Big Five in one location",
      "Maasai cultural encounters"
    ],
    wildlife: ["Lions", "Leopards", "Elephants", "Buffaloes", "Black Rhinos", "Hippos", "Flamingos", "Wildebeest"],
    bestTime: "Year-round destination with consistent wildlife viewing"
  },
  "tarangire-national-park": {
    name: "Tarangire National Park",
    description: "Elephant haven with baobab trees",
    fullDescription: "Tarangire National Park is famous for its large elephant herds and iconic baobab trees. The Tarangire River, the park's lifeline, attracts huge concentrations of wildlife during the dry season, making it one of Tanzania's best-kept secrets.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Largest elephant herds in Tanzania",
      "Ancient baobab trees dotting the landscape",
      "Tree-climbing pythons",
      "Over 550 bird species",
      "Tarangire River wildlife corridor"
    ],
    wildlife: ["Elephants", "Lions", "Leopards", "Buffaloes", "Giraffes", "Zebras", "Oryx", "Pythons"],
    bestTime: "June to October for large wildlife concentrations"
  },
  "zanzibar": {
    name: "Zanzibar",
    description: "Spice island with pristine beaches",
    fullDescription: "Zanzibar is an archipelago off Tanzania's coast, famous for its historic Stone Town, spice plantations, and pristine white-sand beaches. This tropical paradise offers the perfect combination of culture, history, and beach relaxation after a mainland safari.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "UNESCO World Heritage Stone Town",
      "Pristine white-sand beaches",
      "Spice plantation tours",
      "Historic Arab and Portuguese architecture",
      "World-class diving and snorkeling"
    ],
    wildlife: ["Dolphins", "Sea Turtles", "Tropical Fish", "Red Colobus Monkeys", "Marine Life"],
    bestTime: "June to October and December to February for best beach weather"
  },
  "mount-kilimanjaro": {
    name: "Mount Kilimanjaro",
    description: "Africa's highest peak",
    fullDescription: "Mount Kilimanjaro, Africa's highest mountain at 5,895 meters, is a dormant volcano offering one of the world's most accessible high-altitude treks. Climbing Kilimanjaro is a bucket-list adventure, passing through five distinct ecological zones from rainforest to arctic summit.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Africa's highest peak at 5,895m",
      "Multiple trekking routes for all levels",
      "Five ecological zones",
      "Glaciers at the summit",
      "Stunning sunrise views from Uhuru Peak"
    ],
    wildlife: ["Colobus Monkeys", "Blue Monkeys", "Bushbucks", "Duikers", "Various Bird Species"],
    bestTime: "January to March and June to October for best climbing conditions"
  }
};

export function generateStaticParams() {
  return Object.keys(tanzaniaAttractions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attraction = tanzaniaAttractions[slug as keyof typeof tanzaniaAttractions];

  if (!attraction) {
    return {
      title: "Attraction Not Found",
    };
  }

  return {
    title: `${attraction.name} - Tanzania Safari`,
    description: `${attraction.description}. ${attraction.fullDescription.substring(0, 120)}...`,
    keywords: [attraction.name, "Tanzania safari", "wildlife viewing", "African safari", attraction.name.toLowerCase()],
  };
}

export default async function TanzaniaAttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attraction = tanzaniaAttractions[slug as keyof typeof tanzaniaAttractions];

  if (!attraction) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={attraction.image}
            alt={attraction.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10 text-center text-white">
          <Link
            href="/destinations/tanzania"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sofia-pro">Back to Tanzania</span>
          </Link>
          <h1 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {attraction.name}
          </h1>
          <p className="font-sofia-pro text-xl text-white/90">
            {attraction.description}
          </p>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="font-sofia-pro text-xl text-stone-700 text-center mb-12">
            {attraction.fullDescription}
          </p>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="font-freight-display-pro text-2xl lg:text-3xl text-stone-800 mb-6 text-center">
              Highlights
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {attraction.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">•</span>
                  <span className="font-sofia-pro text-lg text-stone-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wildlife */}
          <div className="mb-12">
            <h2 className="font-freight-display-pro text-2xl lg:text-3xl text-stone-800 mb-6 text-center">
              Wildlife
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {attraction.wildlife.map((animal, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-sofia-pro"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-stone-50 rounded-lg p-8 text-center">
            <h2 className="font-freight-display-pro text-2xl text-stone-800 mb-4">
              Best Time to Visit
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700">
              {attraction.bestTime}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

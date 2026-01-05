import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const ugandaAttractions = {
  "bwindi-impenetrable-forest": {
    name: "Bwindi Impenetrable Forest",
    description: "Home to mountain gorillas",
    fullDescription: "Bwindi Impenetrable Forest is a UNESCO World Heritage Site and one of the most biologically diverse areas on Earth. It's most famous for its mountain gorilla population, harboring nearly half of the world's remaining mountain gorillas. The ancient rainforest offers a truly unforgettable gorilla trekking experience.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Home to nearly half of world's mountain gorillas",
      "Gorilla trekking experiences",
      "Over 350 bird species including Albertine Rift endemics",
      "Ancient montane and lowland forest",
      "23 endemic bird species",
      "Rich cultural heritage of Batwa people"
    ],
    wildlife: ["Mountain Gorillas", "Chimpanzees", "L'Hoest's Monkeys", "Black and White Colobus", "Forest Elephants", "Duikers"],
    bestTime: "June to September and December to February for easier trekking conditions"
  },
  "queen-elizabeth-national-park": {
    name: "Queen Elizabeth National Park",
    description: "Tree-climbing lions and diverse ecosystems",
    fullDescription: "Queen Elizabeth National Park is Uganda's most popular and diverse safari destination. The park boasts an incredible variety of ecosystems from savanna to wetlands to lowland forest. Famous for its tree-climbing lions in the Ishasha sector and the Kazinga Channel boat cruise offering exceptional wildlife viewing.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Tree-climbing lions in Ishasha sector",
      "Kazinga Channel boat safari",
      "Over 600 bird species",
      "Largest concentration of hippos in Africa",
      "Ten primate species including chimpanzees",
      "Scenic crater lakes"
    ],
    wildlife: ["Lions", "Leopards", "Elephants", "Buffaloes", "Hippos", "Chimpanzees", "Uganda Kob", "Warthogs"],
    bestTime: "June to September and December to February for game viewing"
  },
  "murchison-falls-national-park": {
    name: "Murchison Falls National Park",
    description: "Powerful waterfall and abundant wildlife",
    fullDescription: "Murchison Falls National Park is Uganda's largest and oldest conservation area. The park is bisected by the Victoria Nile, which plunges 45 meters over the remnant rift valley wall at Murchison Falls, creating a dramatic spectacle. The park offers excellent game viewing with large populations of elephants, giraffes, and predators.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Spectacular Murchison Falls",
      "Boat cruise to the falls base",
      "Abundant Rothschild's giraffes",
      "Large elephant herds",
      "Nile crocodiles and hippos",
      "Sport fishing for Nile perch"
    ],
    wildlife: ["Elephants", "Giraffes", "Lions", "Leopards", "Buffaloes", "Hippos", "Crocodiles", "Hartebeest"],
    bestTime: "December to February and June to September for best wildlife viewing"
  },
  "kibale-forest-national-park": {
    name: "Kibale Forest National Park",
    description: "Primate capital of the world",
    fullDescription: "Kibale Forest National Park is renowned as the primate capital of the world, protecting the highest concentration of primates in East Africa. The park's main attraction is chimpanzee trekking, with over 1,500 chimpanzees living in the forest. The lush tropical rainforest is also home to 12 other primate species and over 375 bird species.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Highest density of primates in Africa",
      "Chimpanzee trekking and habituation experiences",
      "13 primate species including red colobus",
      "Over 375 bird species",
      "Bigodi Wetland Sanctuary nearby",
      "Crater lakes in the Fort Portal area"
    ],
    wildlife: ["Chimpanzees", "Red Colobus Monkeys", "L'Hoest's Monkeys", "Black and White Colobus", "Grey-cheeked Mangabeys", "Forest Elephants"],
    bestTime: "Year-round, with June to September and December to February being driest"
  },
  "lake-bunyonyi": {
    name: "Lake Bunyonyi",
    description: "Uganda's deepest lake with scenic islands",
    fullDescription: "Lake Bunyonyi is one of Africa's most beautiful lakes, dotted with 29 islands and surrounded by terraced hillsides. At depths of up to 900 meters, it's the second deepest lake in Africa. The lake offers a peaceful retreat and is bilharzia-free, making it safe for swimming. It's a perfect relaxation spot after gorilla trekking.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "29 scenic islands to explore",
      "Safe for swimming (bilharzia-free)",
      "Spectacular terraced hillsides",
      "Canoeing and boat tours",
      "Over 200 bird species",
      "Cultural encounters with local communities"
    ],
    wildlife: ["Otters", "Crayfish", "Various Bird Species", "Butterflies"],
    bestTime: "Year-round destination, with June to August being coolest"
  }
};

export function generateStaticParams() {
  return Object.keys(ugandaAttractions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attraction = ugandaAttractions[slug as keyof typeof ugandaAttractions];

  if (!attraction) {
    return {
      title: "Attraction Not Found",
    };
  }

  return {
    title: `${attraction.name} - Uganda Safari`,
    description: `${attraction.description}. ${attraction.fullDescription.substring(0, 120)}...`,
    keywords: [attraction.name, "Uganda safari", "wildlife viewing", "African safari", attraction.name.toLowerCase()],
  };
}

export default async function UgandaAttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attraction = ugandaAttractions[slug as keyof typeof ugandaAttractions];

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
            href="/destinations/uganda"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sofia-pro">Back to Uganda</span>
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

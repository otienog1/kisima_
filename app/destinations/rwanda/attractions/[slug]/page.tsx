import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const rwandaAttractions = {
  "volcanoes-national-park": {
    name: "Volcanoes National Park",
    description: "Premier gorilla trekking destination",
    fullDescription: "Volcanoes National Park is Rwanda's premier destination for mountain gorilla trekking. Set high in the Virunga Mountains, this park was the base for Dian Fossey's pioneering gorilla research. Today it protects several habituated gorilla families, offering one of the world's most extraordinary wildlife encounters. The park also offers golden monkey tracking and volcano hiking.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Mountain gorilla trekking experiences",
      "Golden monkey tracking",
      "Dian Fossey's grave and research center",
      "Five volcanoes within the park",
      "Stunning Virunga Mountain scenery",
      "Cultural encounters with local communities"
    ],
    wildlife: ["Mountain Gorillas", "Golden Monkeys", "Elephants", "Buffaloes", "Bushbucks", "Various Bird Species"],
    bestTime: "June to September and December to February for easier trekking"
  },
  "nyungwe-forest-national-park": {
    name: "Nyungwe Forest National Park",
    description: "Ancient montane rainforest",
    fullDescription: "Nyungwe Forest National Park protects one of Africa's oldest and most pristine montane rainforests. This biodiversity hotspot is home to 13 primate species including chimpanzees, over 300 bird species, and features a spectacular canopy walkway suspended 50 meters above the forest floor. The park is also the source of the Nile River.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Chimpanzee trekking",
      "Canopy walkway 50m above forest floor",
      "13 primate species",
      "Over 300 bird species with 27 endemics",
      "Source of the Nile River",
      "Stunning waterfalls and nature trails"
    ],
    wildlife: ["Chimpanzees", "L'Hoest's Monkeys", "Angolan Colobus", "Golden Monkeys", "Owl-faced Monkeys", "Grey-cheeked Mangabeys"],
    bestTime: "Year-round, with June to September being driest for trekking"
  },
  "akagera-national-park": {
    name: "Akagera National Park",
    description: "Rwanda's big game safari destination",
    fullDescription: "Akagera National Park is Rwanda's only Big Five safari destination, offering classic savanna landscapes, woodlands, wetlands, and a string of lakes. After successful reintroduction programs for lions and black rhinos, the park now offers complete Big Five viewing. The diverse ecosystems support one of Africa's highest hippo densities and large crocodile populations.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "All Big Five animals",
      "Boat safaris on Lake Ihema",
      "High density of hippos and crocodiles",
      "Over 500 bird species",
      "Giraffe populations",
      "Night game drives"
    ],
    wildlife: ["Lions", "Leopards", "Elephants", "Buffaloes", "Rhinos", "Giraffes", "Hippos", "Crocodiles"],
    bestTime: "June to September for best game viewing, December to February also good"
  },
  "lake-kivu": {
    name: "Lake Kivu",
    description: "Serene lake with pristine beaches",
    fullDescription: "Lake Kivu is one of Africa's Great Lakes, forming part of Rwanda's western border with the Democratic Republic of Congo. The lake offers beautiful beaches, island resorts, and water sports in a stunning mountain setting. The lakeside towns of Gisenyi and Kibuye provide perfect relaxation spots with opportunities for kayaking, boat trips, and enjoying fresh fish.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Pristine sandy beaches",
      "Water sports - kayaking, stand-up paddling",
      "Island hopping boat tours",
      "Coffee plantation visits",
      "Hot springs at Gisenyi",
      "Stunning sunset views"
    ],
    wildlife: ["Fish Species", "Water Birds", "Otters"],
    bestTime: "Year-round destination, with June to September being driest"
  },
  "kigali": {
    name: "Kigali",
    description: "Rwanda's vibrant, clean capital city",
    fullDescription: "Kigali is one of Africa's most vibrant, clean, and safe capital cities. The city offers powerful historical sites including the Kigali Genocide Memorial, alongside modern restaurants, cafes, and craft markets. With its hilly landscape, pleasant climate, and welcoming atmosphere, Kigali serves as an excellent base for exploring Rwanda and offers insights into the country's remarkable recovery and progress.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Kigali Genocide Memorial",
      "Vibrant craft markets and boutiques",
      "Modern restaurants and cafes",
      "Clean and safe city streets",
      "Inema Arts Center",
      "Panoramic city views from hilltops"
    ],
    wildlife: ["Urban Wildlife", "Garden Birds"],
    bestTime: "Year-round city destination"
  }
};

export function generateStaticParams() {
  return Object.keys(rwandaAttractions).map((slug) => ({
    slug,
  }));
}

export default function RwandaAttractionPage({ params }: { params: { slug: string } }) {
  const attraction = rwandaAttractions[params.slug as keyof typeof rwandaAttractions];

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
            href="/destinations/rwanda"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sofia-pro">Back to Rwanda</span>
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

import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const kenyaAttractions = {
  "masai-mara-national-reserve": {
    name: "Masai Mara National Reserve",
    description: "Home to the Great Migration",
    fullDescription: "The Masai Mara National Reserve is one of Africa's most famous wildlife reserves. Known worldwide for the annual Great Migration, where millions of wildebeest, zebra, and gazelle traverse the plains in search of fresh grazing, it offers unparalleled wildlife viewing opportunities year-round.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Witness the Great Migration (July to October)",
      "Big Five wildlife viewing",
      "Hot air balloon safaris at dawn",
      "Cultural visits to Maasai villages",
      "Year-round excellent game viewing"
    ],
    wildlife: ["Lions", "Leopards", "Elephants", "Cheetahs", "Wildebeest", "Zebras", "Hippos", "Crocodiles"],
    bestTime: "July to October for the migration, though wildlife viewing is excellent year-round"
  },
  "amboseli-national-park": {
    name: "Amboseli National Park",
    description: "Elephant paradise with Kilimanjaro views",
    fullDescription: "Amboseli National Park offers some of the best opportunities to see African elephants up close, with the majestic Mount Kilimanjaro providing a stunning backdrop. The park's swamps and wetlands support a diverse ecosystem.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Large elephant herds against Kilimanjaro backdrop",
      "Stunning photography opportunities",
      "Diverse birdlife with over 400 species",
      "Views of Africa's highest peak",
      "Observation Hill panoramic views"
    ],
    wildlife: ["Elephants", "Lions", "Cheetahs", "Buffaloes", "Giraffes", "Zebras", "Wildebeest"],
    bestTime: "June to October and January to February for clear Kilimanjaro views"
  },
  "samburu-national-reserve": {
    name: "Samburu National Reserve",
    description: "Unique wildlife in northern Kenya",
    fullDescription: "Samburu National Reserve in northern Kenya is a hidden gem offering unique wildlife species not found in other Kenyan parks. The reserve is home to the 'Samburu Special Five' and provides an authentic, less-crowded safari experience.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Samburu Special Five: Grevy's zebra, reticulated giraffe, Somali ostrich, Beisa oryx, gerenuk",
      "Ewaso Ng'iro River wildlife corridor",
      "Cultural encounters with Samburu people",
      "Leopard sightings",
      "Dramatic arid landscapes"
    ],
    wildlife: ["Grevy's Zebra", "Reticulated Giraffe", "Elephants", "Leopards", "Lions", "Gerenuk", "Beisa Oryx"],
    bestTime: "June to October for wildlife concentration along the river"
  },
  "lake-nakuru-national-park": {
    name: "Lake Nakuru National Park",
    description: "Famous flamingo and rhino sanctuary",
    fullDescription: "Lake Nakuru National Park is renowned for its massive flocks of flamingos that turn the lake's shores pink, though numbers fluctuate. It's also one of Kenya's top rhino sanctuaries, offering excellent opportunities to see both black and white rhinos.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    highlights: [
      "Both black and white rhino sightings",
      "Flamingo flocks (seasonal)",
      "Tree-climbing lions",
      "Rothschild's giraffes",
      "Baboon Cliff viewpoint"
    ],
    wildlife: ["Rhinos", "Lions", "Leopards", "Buffaloes", "Giraffes", "Flamingos", "Pelicans"],
    bestTime: "Year-round, with June to March best for flamingos"
  },
  "tsavo-national-parks": {
    name: "Tsavo National Parks",
    description: "Kenya's largest wilderness area",
    fullDescription: "Tsavo, split into Tsavo East and Tsavo West, forms one of the world's largest national parks. Known for its red elephants (colored by the red soil), dramatic landscapes, and diverse wildlife, Tsavo offers a true wilderness experience.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    highlights: [
      "Red elephants of Tsavo",
      "Mzima Springs with hippos and crocodiles",
      "Lugard Falls on the Galana River",
      "Vast, unspoiled wilderness",
      "Yatta Plateau - world's longest lava flow"
    ],
    wildlife: ["Elephants", "Lions", "Leopards", "Buffaloes", "Rhinos", "Hippos", "Crocodiles", "Giraffes"],
    bestTime: "June to October and January to February"
  }
};

export function generateStaticParams() {
  return Object.keys(kenyaAttractions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attraction = kenyaAttractions[slug as keyof typeof kenyaAttractions];

  if (!attraction) {
    return {
      title: "Attraction Not Found",
    };
  }

  return {
    title: `${attraction.name} - Kenya Safari`,
    description: `${attraction.description}. ${attraction.fullDescription.substring(0, 120)}...`,
    keywords: [attraction.name, "Kenya safari", "wildlife viewing", "African safari", attraction.name.toLowerCase()],
  };
}

export default async function KenyaAttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attraction = kenyaAttractions[slug as keyof typeof kenyaAttractions];

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
            href="/destinations/kenya"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sofia-pro">Back to Kenya</span>
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

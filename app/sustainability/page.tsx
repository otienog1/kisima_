"use client";

import Section from "@/components/Section";
import { getWebsiteContent } from "@/lib/websiteContent";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Users, Heart, TreePine, Sprout, Globe } from "lucide-react";

const iconMap: Record<number, any> = {
  0: TreePine,
  1: Users,
  2: Heart,
  3: Leaf,
  4: Globe,
  5: Sprout,
};

export default function SustainabilityPage() {
  const content = getWebsiteContent();
  const sustainability = content.sustainability_impact;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage/discover-ea-sa-1.jpg"
            alt="Sustainability and Impact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10 text-center text-white">
          <h1 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {sustainability.headline}
          </h1>
          <p className="font-sofia-pro text-xl lg:text-2xl max-w-3xl mx-auto">
            Every journey creates positive change for people, wildlife, and the planet
          </p>
        </div>
      </Section>

      {/* Our Pillars Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-6">
              Our Sustainability Pillars
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              We believe that responsible travel is the future of tourism. Here&apos;s how we make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainability.pillars.map((pillar, index) => {
              const Icon = iconMap[index] || Leaf;
              return (
                <div key={index} className="bg-stone-50 p-8 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-sofia-pro-bold text-xl text-stone-800 mb-4">{pillar}</h3>
                  <p className="font-sofia-pro text-stone-600">
                    Making a positive impact through every journey
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* How We Make a Difference */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/homepage/discover-ea-sa-3.jpg"
                alt="Community and Conservation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-6">
                How We Make a Difference
              </h2>
              <div className="space-y-6 font-sofia-pro text-lg text-stone-700">
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-sofia-pro-bold text-xl mb-2">Tree Planting Program</h3>
                  <p>Every safari includes tree planting, helping offset carbon emissions and restore natural habitats.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-sofia-pro-bold text-xl mb-2">Community Partnerships</h3>
                  <p>We work directly with local communities, ensuring they benefit from and have a voice in tourism.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-sofia-pro-bold text-xl mb-2">Conservation Support</h3>
                  <p>A portion of every booking goes directly to wildlife conservation and habitat protection projects.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="font-sofia-pro-bold text-xl mb-2">Eco-Friendly Practices</h3>
                  <p>From lodge selection to waste management, we prioritize environmentally responsible choices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Impact in Numbers */}
      <Section className="py-16 lg:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl lg:text-4xl mb-6">
              Our Impact in Numbers
            </h2>
            <p className="font-sofia-pro text-lg text-stone-300">
              Real change, measurable impact
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-freight-display-pro font-bold text-amber-500 mb-4">1000+</div>
              <p className="font-sofia-pro text-xl">Trees Planted</p>
            </div>
            <div>
              <div className="text-5xl font-freight-display-pro font-bold text-amber-500 mb-4">50+</div>
              <p className="font-sofia-pro text-xl">Community Projects Supported</p>
            </div>
            <div>
              <div className="text-5xl font-freight-display-pro font-bold text-amber-500 mb-4">100%</div>
              <p className="font-sofia-pro text-xl">Eco-Conscious Travel</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl font-bold mb-6 text-stone-800">
            Travel With Purpose
          </h2>
          <p className="font-sofia-pro text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Join us in creating positive change through responsible travel
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 h-14 px-8 text-lg rounded-sm"
          >
            <span className="relative z-20">{sustainability.cta}</span>
          </Link>
        </div>
      </Section>
    </main>
  );
}

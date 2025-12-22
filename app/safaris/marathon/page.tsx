"use client";

import Section from "@/components/Section";
import { getWebsiteContent } from "@/lib/websiteContent";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function MarathonSafarisPage() {
  const content = getWebsiteContent();
  const safari = content.marathon_safaris;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage/homepage-adventure-travel.jpg"
            alt="Marathon Safari"
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
            <div>
              <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-6">
                Why Choose Our Marathon Safaris
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/homepage/discover-ea-sa-2.jpg"
                alt="Marathon Safari Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Experiences Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl lg:text-4xl text-stone-800 mb-12 text-center">
            Your Complete Marathon Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {safari.experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-sofia-pro-bold text-xl text-stone-800 mb-3">{experience}</h3>
                <p className="font-sofia-pro text-stone-600">
                  Run, explore, recover
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sustainability Section */}
      <Section className="py-16 lg:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-freight-display-pro text-3xl lg:text-4xl mb-8">
              Run With Purpose
            </h2>
            <p className="font-sofia-pro text-lg text-stone-300 mb-8">
              Supporting conservation and community through every stride
            </p>
            <div className="grid md:grid-cols-3 gap-6">
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
            Combine Your Passion for Running with African Adventure
          </h2>
          <p className="font-sofia-pro text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Let us plan your perfect marathon safari experience
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

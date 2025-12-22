"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getWebsiteContent } from "@/lib/websiteContent";

// Note: metadata should be in layout.tsx or a separate metadata file for client components

export default function AboutPage() {
  const content = getWebsiteContent();
  const about = content.about_us;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title={about.headline}
        subtitle="Women-Led & Locally Rooted"
        description={about.story}
        backgroundImage="/images/about/about-hero.jpg"
      />

      {/* Our Story - Narrative Driven */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
                Our Story
              </h2>

              <div className="space-y-6 font-sofia-pro text-lg lg:text-xl leading-relaxed text-stone-700">
                <p>
                  {about.story}
                </p>

                <p className="font-sofia-pro-bold text-xl text-stone-800">
                  Our Philosophy
                </p>

                <p>
                  {about.philosophy}
                </p>

                <p className="font-sofia-pro-bold text-xl text-stone-800 mt-8">
                  Our Promise
                </p>

                <p>
                  {about.promise}
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="/images/about/about-our-story.jpg"
                  alt="African safari landscape showcasing our heritage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* What Makes Us Different - Enhanced Design */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              What Sets Us Apart
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              We don&apos;t just plan trips – we craft transformative journeys that connect you to Africa&apos;s soul
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h3 className="font-freight-display-pro text-3xl font-light mb-12 text-stone-800">Our Differentiators</h3>
              <div className="space-y-8">
                {about.differentiators.map((item, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-6">
                    <p className="font-sofia-pro text-lg text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-freight-display-pro text-3xl font-light mb-12 text-stone-800">Who We Serve</h3>
              <div className="grid gap-6">
                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Women Travelers</h4>
                    <p className="font-sofia-pro text-stone-600">Solo women and groups seeking safe, empowering, and enriching travel experiences.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Families</h4>
                    <p className="font-sofia-pro text-stone-600">Multi-generational families looking to create meaningful memories together.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Wildlife Lovers</h4>
                    <p className="font-sofia-pro text-stone-600">Nature enthusiasts and photographers seeking authentic wildlife encounters.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Heritage Travelers</h4>
                    <p className="font-sofia-pro text-stone-600">Those reconnecting with their roots and exploring their African heritage.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values - Card-Based Layout */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              Our Core Values
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide every decision and shape every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Honesty and transparency in every interaction, building trust through authentic relationships and ethical practices.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">We offer and deliver nothing but the best, continuously raising the bar for African travel experiences.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Protecting Africa&apos;s environment and wildlife while empowering local communities through responsible tourism.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Creative solutions for safaris and events, constantly evolving to exceed expectations and create unique experiences.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">We love Africa deeply, and this passion shines through in every detail of our work and service.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Building meaningful connections between travelers and local communities, creating mutual understanding and respect.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Impact - Enhanced with Visual Elements */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              Our Impact
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              We believe travel should leave the world better than we found it. Every journey creates positive change.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Wildlife Conservation</h4>
                  <p className="font-sofia-pro text-stone-700">Partnering with conservation organizations to protect endangered species and preserve Africa&apos;s natural heritage for future generations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Cultural Preservation</h4>
                  <p className="font-sofia-pro text-stone-700">Showcasing and respecting Africa&apos;s rich traditions while ensuring local cultures benefit from and maintain control over their heritage.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Community Empowerment</h4>
                  <p className="font-sofia-pro text-stone-700">Creating sustainable economic opportunities for local people through tourism, ensuring communities are partners in and beneficiaries of our success.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Transformative Experiences</h4>
                  <p className="font-sofia-pro text-stone-700">Creating authentic Experiences of Africa that change perspectives, build connections, and inspire lifelong conservation advocates.</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="border-none shadow-lg bg-stone-100">
                <CardContent className="p-8">
                  <blockquote className="font-sofia-pro text-2xl font-light italic text-stone-700 mb-6 leading-relaxed">
                    &ldquo;Travel is the only thing you buy that makes you richer. At Timobo, we ensure that richness extends to the communities and wildlife that make Africa extraordinary.&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <div className="w-16 h-px bg-stone-400 mx-auto mb-4"></div>
                    <p className="font-sofia-pro text-stone-600 font-medium">The Timobo Promise</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
              <span className="relative z-20">{about.cta}</span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
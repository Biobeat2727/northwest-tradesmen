'use client';

import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-forest-dark/98 backdrop-blur-md border-b border-copper/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex-shrink-0 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-forest">NORTHWEST</span>{" "}
                <span className="text-copper">TRADESMEN</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-stone uppercase tracking-widest mt-1 truncate font-medium">Dan Dandurand • Sandpoint, Idaho</p>
            </div>

            {/* Desktop Menu */}
            <div className="max-md:hidden flex items-center space-x-8">
              <a href="#services" className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm">
                Services
              </a>
              <a href="#projects" className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm">
                Portfolio
              </a>
              <a href="#about" className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm">
                About
              </a>
              <a
                href="#contact"
                className="bg-copper hover:bg-amber text-white font-bold px-8 py-3 transition-all uppercase text-sm tracking-widest shadow-lg hover:shadow-copper/50"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-copper p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-copper/30 bg-forest-dark">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm py-2"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-copper font-medium tracking-wide transition-colors uppercase text-sm py-2"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-copper hover:bg-amber text-white font-bold px-8 py-3 transition-all uppercase text-sm tracking-widest text-center shadow-lg"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Static High-Impact Image */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {/* Static Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/projects/project-1/project-1-1.jpg"
            alt="Professional bathroom remodeling in Sandpoint, Idaho"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Dramatic gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <div className="mb-10 sm:mb-12">
                <div className="w-20 sm:w-24 h-1.5 bg-copper mb-8"></div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
                  <span className="text-white block mb-3">Sandpoint&apos;s</span>
                  <span className="text-copper block mb-3">Bathroom & Tile</span>
                  <span className="text-forest block">Specialist</span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-sand font-medium leading-relaxed max-w-2xl">
                  Professional remodeling and custom tile work for North Idaho homes.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="mb-8 sm:mb-10">
                <a
                  href="#contact"
                  className="inline-block bg-copper hover:bg-amber text-white font-bold text-base sm:text-lg md:text-xl px-12 sm:px-16 py-5 sm:py-6 transition-all duration-300 uppercase tracking-widest shadow-2xl hover:shadow-copper/50 hover:scale-105 transform"
                >
                  Get a Free Estimate
                </a>
              </div>

              {/* Secondary CTA - Phone */}
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-16 bg-copper"></div>
                <div>
                  <p className="text-stone uppercase tracking-widest text-xs sm:text-sm mb-2 font-semibold">Or Call Now</p>
                  <a
                    href="tel:+12082559562"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-copper transition-colors tracking-tight"
                  >
                    (208) 255-9562
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Corner Accent - Subtle */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 border-l-4 border-t-4 border-copper/40 z-20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 border-r-4 border-b-4 border-forest/60 z-20"></div>
      </section>

      {/* Trust Bar */}
      <section className="bg-forest-dark border-y border-copper/20 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Licensed & Insured */}
            <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-br from-forest-medium/30 to-pine/20 border border-copper/20">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">Licensed & Insured</h3>
                <p className="text-sm text-stone font-medium">Fully certified professional</p>
              </div>
            </div>

            {/* Local to Sandpoint */}
            <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-br from-forest-medium/30 to-pine/20 border border-copper/20">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">Local to Sandpoint</h3>
                <p className="text-sm text-stone font-medium">Serving North Idaho</p>
              </div>
            </div>

            {/* Family Owned */}
            <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-br from-forest-medium/30 to-pine/20 border border-copper/20">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">Family Owned</h3>
                <p className="text-sm text-stone font-medium">Personal service guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background to-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="w-20 h-1.5 bg-copper mx-auto mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Simple 3-Step</span>{" "}
              <span className="text-copper">Process</span>
            </h2>
            <p className="text-xl sm:text-2xl text-sand font-medium max-w-3xl mx-auto">
              From consultation to completion, we make remodeling straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-6 -left-6 text-9xl font-bold text-copper/20 select-none transition-colors group-hover:text-copper/30">1</div>
              <div className="relative bg-gradient-to-br from-forest-medium/40 to-pine/30 border-2 border-copper/30 p-8 sm:p-10 h-full group-hover:border-copper transition-all">
                <div className="w-16 h-1 bg-copper mb-6"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Free Consultation</h3>
                <p className="text-base sm:text-lg text-sand leading-relaxed">
                  We meet at your property to discuss your vision, assess the space, and answer all your questions. No pressure, no obligation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-6 -left-6 text-9xl font-bold text-forest/40 select-none transition-colors group-hover:text-forest/60">2</div>
              <div className="relative bg-gradient-to-br from-forest-medium/40 to-pine/30 border-2 border-forest/50 p-8 sm:p-10 h-full group-hover:border-forest transition-all">
                <div className="w-16 h-1 bg-forest mb-6"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Transparent Quote</h3>
                <p className="text-base sm:text-lg text-sand leading-relaxed">
                  You&apos;ll receive a detailed, itemized quote with no hidden fees. We break down materials, labor, and timeline so you know exactly what to expect.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-6 -left-6 text-9xl font-bold text-copper/20 select-none transition-colors group-hover:text-copper/30">3</div>
              <div className="relative bg-gradient-to-br from-forest-medium/40 to-pine/30 border-2 border-copper/30 p-8 sm:p-10 h-full group-hover:border-copper transition-all">
                <div className="w-16 h-1 bg-copper mb-6"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Expert Build</h3>
                <p className="text-base sm:text-lg text-sand leading-relaxed">
                  Dan personally manages every project from start to finish. Quality craftsmanship, on-time completion, and communication every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after process */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block bg-copper hover:bg-amber text-white font-bold text-lg px-14 py-5 transition-all duration-300 uppercase tracking-widest shadow-xl hover:shadow-copper/50 hover:scale-105 transform"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="w-20 h-1.5 bg-copper mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Our</span>{" "}
              <span className="text-copper">Services</span>
            </h2>
            <p className="text-xl text-sand font-medium max-w-2xl mb-4">
              Comprehensive home improvement and remodeling services
            </p>
            <p className="text-copper font-bold uppercase tracking-widest text-sm">
              Free Consultation • Professional Results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Bathroom Remodeling */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-copper/30 hover:border-copper transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-copper"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-forest"></div>

              <h3 className="text-3xl font-bold text-copper mb-4 tracking-tight uppercase">Bathrooms</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Complete bathroom transformations with custom tile work, modern fixtures, and quality finishes.
              </p>
              <div className="space-y-3">
                {[
                  "Full renovations",
                  "Shower systems",
                  "Fixture installation",
                  "Custom tile work",
                  "Heated flooring"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-copper/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile & Stone - Moved to 2nd position as it's a specialty */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-forest/50 hover:border-forest transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-forest"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-copper"></div>

              <h3 className="text-3xl font-bold text-forest mb-4 tracking-tight uppercase">Tile & Stone</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Expert installation of tile and natural stone for floors, walls, showers, and backsplashes.
              </p>
              <div className="space-y-3">
                {[
                  "Natural stone",
                  "Porcelain & ceramic",
                  "Floor installation",
                  "Shower surrounds",
                  "Custom patterns"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-forest/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kitchen Remodeling */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-copper/30 hover:border-copper transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-copper"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-forest"></div>

              <h3 className="text-3xl font-bold text-copper mb-4 tracking-tight uppercase">Kitchens</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Kitchen upgrades from countertops to complete remodels, designed for function and beauty.
              </p>
              <div className="space-y-3">
                {[
                  "Kitchen remodels",
                  "Counter tops",
                  "Backsplash tile",
                  "Cabinet installation",
                  "Layout redesign"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-copper/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additions & Remodels */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-forest/50 hover:border-forest transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-forest"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-copper"></div>

              <h3 className="text-3xl font-bold text-forest mb-4 tracking-tight uppercase">Additions</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Home additions and complete renovations to expand your living space.
              </p>
              <div className="space-y-3">
                {[
                  "Room additions",
                  "Home renovations",
                  "Space conversions",
                  "Structural work",
                  "Custom builds"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-forest/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outdoor Living */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-copper/30 hover:border-copper transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-copper"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-forest"></div>

              <h3 className="text-3xl font-bold text-copper mb-4 tracking-tight uppercase">Outdoor</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Enhance your outdoor living with custom decks, patios, and fencing.
              </p>
              <div className="space-y-3">
                {[
                  "Custom decks",
                  "Patio construction",
                  "Fence installation",
                  "Outdoor kitchens",
                  "Hardscaping"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-copper/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repairs & Small Projects */}
            <div className="group relative bg-gradient-to-br from-forest-medium/50 to-pine/40 p-8 sm:p-10 border-2 border-forest/50 hover:border-forest transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-1.5 h-16 sm:h-20 bg-forest"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-16 sm:h-20 bg-copper"></div>

              <h3 className="text-3xl font-bold text-forest mb-4 tracking-tight uppercase">Repairs</h3>
              <p className="text-sand font-medium mb-6 leading-relaxed">
                Professional repairs and small projects - no job too small.
              </p>
              <div className="space-y-3">
                {[
                  "Home repairs",
                  "Maintenance work",
                  "Small renovations",
                  "Fix & upgrade",
                  "Handyman services"
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-l-2 border-forest/50 pl-3 py-1">
                    <span className="text-sand font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-copper/10 to-forest/10 border-y border-copper/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
              Proudly Serving North Idaho
            </h3>
            <p className="text-lg sm:text-xl text-sand font-medium mb-6">
              Sandpoint • Sagle • Dover • Ponderay • Coeur d&apos;Alene
            </p>
            <p className="text-base text-stone max-w-2xl mx-auto">
              Located in Sandpoint, we provide professional remodeling and tile services throughout the North Idaho region. Call us to discuss your project, no matter where you&apos;re located.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-forest-dark to-background relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="w-20 h-1.5 bg-copper mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Recent</span>{" "}
              <span className="text-copper">Projects</span>
            </h2>
            <p className="text-xl text-sand font-medium max-w-2xl">
              Recent bathroom remodels and custom tile installations
            </p>
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* About Dan Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Photo Section */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-1.5 bg-copper"></div>
              <div className="absolute bottom-0 right-0 w-20 h-1.5 bg-forest"></div>

              {/* Dan's Photo - Ready for real photo */}
              <div className="aspect-[3/4] border-2 border-copper/30 relative overflow-hidden mt-6 mb-6 shadow-2xl">
                <Image
                  src="/images/dan.jpg"
                  alt="Dan Dandurand - Owner & Lead Craftsman at Northwest Tradesmen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-l-4 border-copper pl-6">
                <p className="text-copper font-bold uppercase tracking-widest text-sm mb-2">Owner & Lead Craftsman</p>
                <p className="text-white text-2xl sm:text-3xl font-bold">Dan Dandurand</p>
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <div className="w-20 h-1.5 bg-copper mb-8"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                <span className="text-white block mb-2">Meet</span>
                <span className="text-copper">Dan</span>
              </h2>

              <div className="space-y-6 text-sand leading-relaxed">
                <p className="text-xl font-medium">
                  Northwest Tradesmen is built on a foundation of quality craftsmanship, honest service, and attention to detail.
                </p>

                <p className="text-base">
                  With years of experience in residential remodeling and construction, Dan brings expertise across a wide range of projects—from complete bathroom and kitchen renovations to intricate tile work, custom carpentry, and outdoor living spaces.
                </p>

                <p className="text-base">
                  Every project, whether it&apos;s a full home addition or a small repair, receives the same level of care and professional execution. Based in Sandpoint, Idaho, Dan understands the unique requirements of building in North Idaho&apos;s climate and takes pride in delivering results that last.
                </p>

                <div className="pt-8 border-t border-copper/30">
                  <p className="text-copper font-bold uppercase tracking-widest text-sm mb-4">
                    Free Consultation Available
                  </p>
                  <p className="text-sand text-base">
                    Let&apos;s discuss your project vision and how we can bring it to life with quality craftsmanship and professional service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-copper/30">
            {[
              {
                title: "Master Craftsmanship",
                desc: "Decades of experience in high-end residential remodeling and custom work"
              },
              {
                title: "Local Expertise",
                desc: "Deep knowledge of North Idaho's building requirements and climate considerations"
              },
              {
                title: "Full Service",
                desc: "From design consultation to final cleanup, comprehensive project management"
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-copper/50 pl-6">
                <h3 className="text-xl font-bold text-copper mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sand font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background to-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="w-20 h-1.5 bg-copper mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Get Your</span>{" "}
              <span className="text-copper">Free Estimate</span>
            </h2>
            <p className="text-xl text-sand font-medium mb-4">
              Request your free consultation and project estimate
            </p>
            <p className="text-stone font-medium uppercase tracking-widest text-sm border-l-4 border-copper pl-4 mt-4">
              Serving Sandpoint, ID and North Idaho Region
            </p>
          </div>

          <div className="relative bg-forest-dark/90 p-8 sm:p-10 md:p-12 lg:p-14 border-2 border-copper/30 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-1.5 bg-copper"></div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-copper mb-3 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 bg-pine/50 border-2 border-stone/30 focus:border-copper text-white placeholder-stone/50 font-medium transition-colors text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-copper mb-3 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-6 py-4 bg-pine/50 border-2 border-stone/30 focus:border-copper text-white placeholder-stone/50 font-medium transition-colors text-base"
                    placeholder="(208) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-copper mb-3 uppercase tracking-wide">
                  Project Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-6 py-4 bg-pine/50 border-2 border-stone/30 focus:border-copper text-white font-medium transition-colors text-base"
                >
                  <option value="">Select project type</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="tile">Tile & Stone Installation</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="addition">Addition/Renovation</option>
                  <option value="outdoor">Deck/Patio/Fence</option>
                  <option value="repair">Repair/Small Project</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-copper mb-3 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-pine/50 border-2 border-stone/30 focus:border-copper text-white placeholder-stone/50 font-medium transition-colors leading-relaxed text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-copper hover:bg-amber text-white font-bold text-lg px-12 py-5 transition-all uppercase tracking-widest shadow-xl hover:shadow-copper/50 hover:scale-105 transform"
              >
                Get Free Estimate
              </button>
            </form>

            <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-copper/30">
              <div className="text-center mb-8">
                <p className="text-sm text-stone uppercase tracking-widest mb-3 font-semibold">Or Contact Us Directly</p>
                <a
                  href="tel:+12082559562"
                  className="inline-block text-3xl sm:text-4xl font-bold text-copper hover:text-amber transition-colors mb-6"
                >
                  (208) 255-9562
                </a>
                <p className="text-base text-sand">
                  Email:{" "}
                  <a href="mailto:info@northwesttradesmen.com" className="text-copper hover:text-amber transition-colors font-medium">
                    info@northwesttradesmen.com
                  </a>
                </p>
              </div>
              <p className="text-stone text-sm font-medium text-center">
                Typical response time: 24 hours • Free consultation available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark border-t border-copper/30 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              <span className="text-forest">NORTHWEST</span>{" "}
              <span className="text-copper">TRADESMEN</span>
            </h3>
            <p className="text-sand font-medium mb-2 uppercase tracking-widest text-xs">Dan Dandurand</p>
            <p className="text-stone font-medium mb-2 uppercase tracking-widest text-xs">Professional Remodeling & Custom Work</p>
            <p className="text-stone font-medium mb-4 uppercase tracking-widest text-xs">Sandpoint, ID & North Idaho</p>
            <a
              href="tel:+12082559562"
              className="inline-block text-xl font-bold text-copper hover:text-amber transition-colors mb-6"
            >
              (208) 255-9562
            </a>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-6 sm:mb-8">
              <a href="#services" className="text-stone hover:text-copper transition-colors font-medium uppercase text-xs tracking-widest">Services</a>
              <a href="#projects" className="text-stone hover:text-copper transition-colors font-medium uppercase text-xs tracking-widest">Portfolio</a>
              <a href="#about" className="text-stone hover:text-copper transition-colors font-medium uppercase text-xs tracking-widest">About</a>
              <a href="#contact" className="text-stone hover:text-copper transition-colors font-medium uppercase text-xs tracking-widest">Contact</a>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-copper to-transparent mx-auto mb-6"></div>
            <p className="text-xs text-stone font-medium px-4">
              &copy; {new Date().getFullYear()} Northwest Tradesmen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

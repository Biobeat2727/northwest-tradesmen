'use client';

import ProjectGallery from "@/components/ProjectGallery";
import HeroCarousel from "@/components/HeroCarousel";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-forest-dark text-foreground">
      {/* Navigation */}
      <nav className="bg-forest-dark/98 backdrop-blur-md border-b border-lime/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex-shrink-0 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight">
                <span className="text-lime font-medium">NORTHWEST</span>{" "}
                <span className="text-orange font-light">TRADESMEN</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-stone uppercase tracking-widest mt-1 truncate">Dan Dandurand • Sandpoint, Idaho</p>
            </div>

            {/* Desktop Menu */}
            <div className="max-md:hidden flex items-center space-x-8">
              <a href="#services" className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm">
                Services
              </a>
              <a href="#projects" className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm">
                Portfolio
              </a>
              <a href="#about" className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm">
                About
              </a>
              <a
                href="#contact"
                className="bg-orange hover:bg-lime text-forest-dark font-medium px-8 py-3 transition-all uppercase text-sm tracking-widest border border-orange hover:border-lime"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-lime p-2"
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
            <div className="md:hidden py-4 border-t border-lime/20">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm py-2"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-lime font-light tracking-wide transition-colors uppercase text-sm py-2"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-orange hover:bg-lime text-forest-dark font-medium px-8 py-3 transition-all uppercase text-sm tracking-widest border border-orange hover:border-lime text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Screen with Sliding Images */}
      <section className="relative h-screen min-h-[600px] max-h-[1080px] flex items-center overflow-hidden">
        {/* Full-Screen Sliding Carousel Background */}
        <HeroCarousel />

        {/* Content Overlay */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Brand Statement */}
              <div className="mb-8 sm:mb-12">
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-lime mb-6 sm:mb-8"></div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight tracking-tight">
                  <span className="text-lime block mb-2">CRAFTSMANSHIP</span>
                  <span className="text-orange block">MADE FOR YOU</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-sand/90 font-light leading-relaxed max-w-2xl">
                  Expert remodeling, tile work, and custom carpentry for North Idaho homes
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-1 h-12 sm:h-14 bg-orange"></div>
                  <div>
                    <p className="text-stone/80 uppercase tracking-widest text-xs mb-1">Call Now</p>
                    <a
                      href="tel:1234567890"
                      className="text-2xl sm:text-3xl md:text-4xl font-light text-lime hover:text-orange transition-colors tracking-tight"
                    >
                      208 255 9562
                    </a>
                  </div>
                </div>
                <p className="text-lime/80 font-light uppercase tracking-widest text-xs sm:text-sm pl-4 border-l-2 border-lime/40">
                  Sandpoint, ID & Surrounding Region
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="group bg-orange hover:bg-lime text-forest-dark font-medium text-sm sm:text-base md:text-lg px-10 sm:px-14 py-4 sm:py-5 transition-all duration-300 uppercase tracking-widest border-2 border-orange hover:border-lime inline-block text-center shadow-2xl hover:shadow-lime/20"
                >
                  Request Consultation
                </a>
                <a
                  href="#projects"
                  className="group bg-transparent hover:bg-lime/10 backdrop-blur-sm border-2 border-lime text-lime hover:text-lime font-medium text-sm sm:text-base md:text-lg px-10 sm:px-14 py-4 sm:py-5 transition-all duration-300 uppercase tracking-widest inline-block text-center"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-l-2 border-t-2 border-lime/30 z-20"></div>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-r-2 border-t-2 border-orange/30 z-20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-l-2 border-b-2 border-orange/30 z-20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-r-2 border-b-2 border-lime/30 z-20"></div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent z-20"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="w-12 sm:w-16 h-1 bg-orange mb-6 sm:mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
              <span className="text-lime">SERVICES</span>
            </h2>
            <p className="text-lg sm:text-xl text-stone font-light max-w-2xl mb-3 sm:mb-4">
              Comprehensive home improvement and remodeling services
            </p>
            <p className="text-orange font-medium uppercase tracking-widest text-xs sm:text-sm">
              Free Consultation • Professional Results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Bathroom Remodeling */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>

              <h3 className="text-3xl font-light text-lime mb-4 tracking-tight uppercase">Bathrooms</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-orange/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kitchen Remodeling */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>

              <h3 className="text-3xl font-light text-orange mb-4 tracking-tight uppercase">Kitchens</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-lime/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile & Stone */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>

              <h3 className="text-3xl font-light text-lime mb-4 tracking-tight uppercase">Tile & Stone</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-orange/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additions & Remodels */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>

              <h3 className="text-3xl font-light text-orange mb-4 tracking-tight uppercase">Additions</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-lime/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outdoor Living */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>

              <h3 className="text-3xl font-light text-lime mb-4 tracking-tight uppercase">Outdoor</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-orange/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repairs & Small Projects */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-6 sm:p-8 md:p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-12 sm:h-16 md:h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-12 sm:h-16 md:h-20 bg-lime"></div>

              <h3 className="text-3xl font-light text-orange mb-4 tracking-tight uppercase">Repairs</h3>
              <p className="text-sand font-light mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-start border-l-2 border-lime/30 pl-3 py-1">
                    <span className="text-stone font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-forest-dark to-pine relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="w-12 sm:w-16 h-1 bg-lime mb-6 sm:mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
              <span className="text-orange">PORTFOLIO</span>
            </h2>
            <p className="text-lg sm:text-xl text-stone font-light max-w-2xl">
              Recent bathroom remodels and custom tile installations
            </p>
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* About Dan Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Photo Section */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-1 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-1 bg-orange"></div>

              {/* Dan's Photo */}
              <div className="aspect-[3/4] border border-lime/20 relative overflow-hidden mt-4 sm:mt-6 mb-4 sm:mb-6">
                <Image
                  src="/images/dan.jpg"
                  alt="Dan Dandurand - Owner & Lead Craftsman at Northwest Tradesmen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-l-2 border-lime/40 pl-4 sm:pl-6">
                <p className="text-lime font-medium uppercase tracking-widest text-xs sm:text-sm mb-2">Owner & Lead Craftsman</p>
                <p className="text-sand text-xl sm:text-2xl font-light">Dan Dandurand</p>
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <div className="w-12 sm:w-16 h-1 bg-orange mb-6 sm:mb-8"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 sm:mb-8 tracking-tight">
                <span className="text-lime block mb-2">MEET</span>
                <span className="text-orange">DAN</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-sand font-light leading-relaxed">
                <p className="text-lg sm:text-xl">
                  Northwest Tradesmen is built on a foundation of quality craftsmanship, honest service, and attention to detail.
                </p>

                <p className="text-sm sm:text-base">
                  With years of experience in residential remodeling and construction, Dan brings expertise across a wide range of projects—from complete bathroom and kitchen renovations to intricate tile work, custom carpentry, and outdoor living spaces.
                </p>

                <p className="text-sm sm:text-base">
                  Every project, whether it's a full home addition or a small repair, receives the same level of care and professional execution. Based in Sandpoint, Idaho, Dan understands the unique requirements of building in North Idaho's climate and takes pride in delivering results that last.
                </p>

                <div className="pt-6 sm:pt-8 border-t border-stone/20">
                  <p className="text-orange font-medium uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                    Free Consultation Available
                  </p>
                  <p className="text-stone text-sm sm:text-base">
                    Let's discuss your project vision and how we can bring it to life with quality craftsmanship and professional service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 border-t border-stone/20">
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
              <div key={index} className="border-l-2 border-lime/40 pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-medium text-orange mb-2 sm:mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-stone font-light leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-pine to-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="w-12 sm:w-16 h-1 bg-lime mb-6 sm:mb-8"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
              <span className="text-lime">GET</span>{" "}
              <span className="text-orange">STARTED</span>
            </h2>
            <p className="text-lg sm:text-xl text-sand font-light mb-2">
              Request your free consultation and project estimate
            </p>
            <p className="text-stone font-light uppercase tracking-widest text-xs sm:text-sm border-l-2 border-lime pl-3 sm:pl-4 mt-3 sm:mt-4">
              Serving Sandpoint, ID and North Idaho Region
            </p>
          </div>

          <div className="relative bg-forest-dark/80 p-4 sm:p-6 md:p-8 lg:p-12 border border-lime/20">
            <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-1 bg-orange"></div>

            <form className="space-y-6 sm:space-y-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-lime mb-2 sm:mb-3 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-lime mb-2 sm:mb-3 uppercase tracking-widest">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors text-sm sm:text-base"
                    placeholder="(208) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-lime mb-2 sm:mb-3 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-lime mb-2 sm:mb-3 uppercase tracking-widest">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand font-light transition-colors text-sm sm:text-base"
                >
                  <option value="">Select service type</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="tile">Tile & Stone Installation</option>
                  <option value="addition">Addition/Renovation</option>
                  <option value="outdoor">Deck/Patio/Fence</option>
                  <option value="repair">Repair/Small Project</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-lime mb-2 sm:mb-3 uppercase tracking-widest">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors leading-relaxed text-sm sm:text-base"
                  placeholder="Describe your project vision, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-lime text-forest-dark font-medium text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-5 transition-all uppercase tracking-widest border border-orange hover:border-lime"
              >
                Request Free Consultation
              </button>
            </form>

            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-stone/20">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="border-l-2 border-lime/40 pl-4 sm:pl-6">
                  <p className="text-xs text-stone uppercase tracking-widest mb-2">Phone</p>
                  <p className="text-xl sm:text-2xl font-light text-lime">
                    <a href="tel:+12345678900" className="hover:text-orange transition-colors">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
                <div className="border-l-2 border-orange/40 pl-4 sm:pl-6">
                  <p className="text-xs text-stone uppercase tracking-widest mb-2">Email</p>
                  <p className="text-base sm:text-lg font-light text-sand break-all sm:break-normal">
                    <a href="mailto:info@northwesttradesmen.com" className="hover:text-orange transition-colors">
                      info@northwesttradesmen.com
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-stone text-xs sm:text-sm font-light mt-6 sm:mt-8 text-center">
                Typical response time: 24 hours • Free consultation available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark border-t border-lime/20 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-2 sm:mb-3">
              <span className="text-lime font-medium">NORTHWEST</span>{" "}
              <span className="text-orange font-light">TRADESMEN</span>
            </h3>
            <p className="text-sand font-light mb-1 uppercase tracking-widest text-[10px] sm:text-xs">Dan Dandurand</p>
            <p className="text-stone font-light mb-1 sm:mb-2 uppercase tracking-widest text-[10px] sm:text-xs">Professional Remodeling & Custom Work</p>
            <p className="text-stone font-light mb-6 sm:mb-8 uppercase tracking-widest text-[10px] sm:text-xs">Sandpoint, ID & North Idaho</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
              <a href="#services" className="text-stone hover:text-lime transition-colors font-light uppercase text-[10px] sm:text-xs tracking-widest">Services</a>
              <a href="#projects" className="text-stone hover:text-lime transition-colors font-light uppercase text-[10px] sm:text-xs tracking-widest">Portfolio</a>
              <a href="#about" className="text-stone hover:text-lime transition-colors font-light uppercase text-[10px] sm:text-xs tracking-widest">About</a>
              <a href="#contact" className="text-stone hover:text-lime transition-colors font-light uppercase text-[10px] sm:text-xs tracking-widest">Contact</a>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-lime to-transparent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[10px] sm:text-xs text-stone font-light px-4">
              &copy; {new Date().getFullYear()} Northwest Tradesmen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

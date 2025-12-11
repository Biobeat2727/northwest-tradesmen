'use client';

import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-forest-dark text-foreground">
      {/* Navigation */}
      <nav className="bg-forest-dark/98 backdrop-blur-md border-b border-lime/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-light tracking-tight">
                <span className="text-lime font-medium">NORTHWEST</span>{" "}
                <span className="text-orange font-light">TRADESMEN</span>
              </h1>
              <p className="text-xs text-stone uppercase tracking-widest mt-1">Dan Dandurand • Sandpoint, Idaho</p>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pine via-forest to-forest-dark min-h-[85vh] flex items-center overflow-hidden">
        {/* Sophisticated Tile Pattern Background */}
        <div className="absolute inset-0">
          {/* Hexagonal Tile Pattern */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 73%, rgba(164, 214, 94, 0.4) 75%, rgba(164, 214, 94, 0.4) 76%, transparent 77%, transparent),
              linear-gradient(150deg, transparent 73%, rgba(164, 214, 94, 0.4) 75%, rgba(164, 214, 94, 0.4) 76%, transparent 77%, transparent),
              linear-gradient(30deg, transparent 73%, rgba(164, 214, 94, 0.4) 75%, rgba(164, 214, 94, 0.4) 76%, transparent 77%, transparent),
              linear-gradient(150deg, transparent 73%, rgba(164, 214, 94, 0.4) 75%, rgba(164, 214, 94, 0.4) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '70px 120px',
            backgroundPosition: '0 0, 0 0, 35px 60px, 35px 60px'
          }}></div>

          {/* Subtle Herringbone Pattern */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(255, 122, 61, 0.3) 49%, rgba(255, 122, 61, 0.3) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(164, 214, 94, 0.2) 49%, rgba(164, 214, 94, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px'
          }}></div>

          {/* Geometric Accent Tiles */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(164, 214, 94, 0.3) 35px, rgba(164, 214, 94, 0.3) 36px),
              repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255, 122, 61, 0.2) 35px, rgba(255, 122, 61, 0.2) 36px)
            `
          }}></div>

          {/* Large Format Tile Grout Lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 200px, rgba(164, 214, 94, 0.5) 200px, rgba(164, 214, 94, 0.5) 202px),
              repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255, 122, 61, 0.4) 200px, rgba(255, 122, 61, 0.4) 202px)
            `
          }}></div>
        </div>

        {/* Vertical Accent Lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange to-transparent"></div>

        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-lime/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-lime/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="w-16 h-1 bg-lime mb-8"></div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-light mb-8 leading-none tracking-tight break-words">
                <span className="text-sand block mb-2">PRECISION</span>
                <span className="text-lime block mb-2">CRAFTSMANSHIP</span>
                <span className="text-orange block">REFINED</span>
              </h2>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-stone font-light mb-4 max-w-2xl leading-relaxed">
              Expert remodeling, tile work, and custom carpentry for North Idaho homes
            </p>
            <p className="text-lime font-light mb-3 uppercase tracking-widest text-sm border-l-2 border-lime pl-4">
              Sandpoint, ID & Surrounding Region
            </p>
            <p className="text-orange font-medium mb-12 uppercase tracking-widest text-sm border-l-2 border-orange pl-4">
              Free Consultation Available
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#contact"
                className="bg-orange hover:bg-lime text-forest-dark font-medium text-base px-12 py-5 transition-all uppercase tracking-widest border border-orange hover:border-lime inline-block"
              >
                Request Consultation
              </a>
              <a
                href="#projects"
                className="bg-transparent hover:bg-lime/10 border border-lime text-lime font-medium text-base px-12 py-5 transition-all uppercase tracking-widest inline-block"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="w-16 h-1 bg-orange mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              <span className="text-lime">SERVICES</span>
            </h2>
            <p className="text-xl text-stone font-light max-w-2xl mb-4">
              Comprehensive home improvement and remodeling services
            </p>
            <p className="text-orange font-medium uppercase tracking-widest text-sm">
              Free Consultation • Professional Results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bathroom Remodeling */}
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-orange"></div>

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
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-lime"></div>

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
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-orange"></div>

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
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-lime"></div>

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
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-lime/20 hover:border-lime transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-orange"></div>

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
            <div className="group relative bg-gradient-to-br from-pine/50 to-forest/50 p-10 border border-orange/20 hover:border-orange transition-all">
              <div className="absolute top-0 left-0 w-1 h-20 bg-orange"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-lime"></div>

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
      <section id="projects" className="py-32 bg-gradient-to-b from-forest-dark to-pine relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="w-16 h-1 bg-lime mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              <span className="text-orange">PORTFOLIO</span>
            </h2>
            <p className="text-xl text-stone font-light max-w-2xl">
              Recent bathroom remodels and custom tile installations
            </p>
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* About Dan Section */}
      <section id="about" className="py-32 bg-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Photo Section */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-24 h-1 bg-lime"></div>
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-orange"></div>

              {/* Dan's Photo */}
              <div className="aspect-[3/4] border border-lime/20 relative overflow-hidden mt-6 mb-6">
                <Image
                  src="/images/dan.jpg"
                  alt="Dan Dandurand - Owner & Lead Craftsman at Northwest Tradesmen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-l-2 border-lime/40 pl-6">
                <p className="text-lime font-medium uppercase tracking-widest text-sm mb-2">Owner & Lead Craftsman</p>
                <p className="text-sand text-2xl font-light">Dan Dandurand</p>
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <div className="w-16 h-1 bg-orange mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
                <span className="text-lime block mb-2">MEET</span>
                <span className="text-orange">DAN</span>
              </h2>

              <div className="space-y-6 text-sand font-light leading-relaxed">
                <p className="text-xl">
                  Northwest Tradesmen is built on a foundation of quality craftsmanship, honest service, and attention to detail.
                </p>

                <p>
                  With years of experience in residential remodeling and construction, Dan brings expertise across a wide range of projects—from complete bathroom and kitchen renovations to intricate tile work, custom carpentry, and outdoor living spaces.
                </p>

                <p>
                  Every project, whether it's a full home addition or a small repair, receives the same level of care and professional execution. Based in Sandpoint, Idaho, Dan understands the unique requirements of building in North Idaho's climate and takes pride in delivering results that last.
                </p>

                <div className="pt-8 border-t border-stone/20">
                  <p className="text-orange font-medium uppercase tracking-widest text-sm mb-4">
                    Free Consultation Available
                  </p>
                  <p className="text-stone">
                    Let's discuss your project vision and how we can bring it to life with quality craftsmanship and professional service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-stone/20">
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
              <div key={index} className="border-l-2 border-lime/40 pl-6">
                <h3 className="text-xl font-medium text-orange mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-stone font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-pine to-forest-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-16 h-1 bg-lime mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              <span className="text-lime">GET</span>{" "}
              <span className="text-orange">STARTED</span>
            </h2>
            <p className="text-xl text-sand font-light mb-2">
              Request your free consultation and project estimate
            </p>
            <p className="text-stone font-light uppercase tracking-widest text-sm border-l-2 border-lime pl-4 mt-4">
              Serving Sandpoint, ID and North Idaho Region
            </p>
          </div>

          <div className="relative bg-forest-dark/80 p-12 border border-lime/20">
            <div className="absolute top-0 right-0 w-40 h-1 bg-orange"></div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-lime mb-3 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-lime mb-3 uppercase tracking-widest">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-6 py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors"
                    placeholder="(208) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-lime mb-3 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-lime mb-3 uppercase tracking-widest">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-6 py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand font-light transition-colors"
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
                <label htmlFor="message" className="block text-xs font-medium text-lime mb-3 uppercase tracking-widest">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-pine/50 border border-stone/30 focus:border-lime text-sand placeholder-stone/50 font-light transition-colors leading-relaxed"
                  placeholder="Describe your project vision, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-lime text-forest-dark font-medium text-base px-12 py-5 transition-all uppercase tracking-widest border border-orange hover:border-lime"
              >
                Request Free Consultation
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-stone/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-2 border-lime/40 pl-6">
                  <p className="text-xs text-stone uppercase tracking-widest mb-2">Phone</p>
                  <p className="text-2xl font-light text-lime">
                    <a href="tel:+12345678900" className="hover:text-orange transition-colors">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
                <div className="border-l-2 border-orange/40 pl-6">
                  <p className="text-xs text-stone uppercase tracking-widest mb-2">Email</p>
                  <p className="text-lg font-light text-sand">
                    <a href="mailto:info@northwesttradesmen.com" className="hover:text-orange transition-colors">
                      info@northwesttradesmen.com
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-stone text-sm font-light mt-8 text-center">
                Typical response time: 24 hours • Free consultation available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark border-t border-lime/20 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-light tracking-tight mb-3">
              <span className="text-lime font-medium">NORTHWEST</span>{" "}
              <span className="text-orange font-light">TRADESMEN</span>
            </h3>
            <p className="text-sand font-light mb-1 uppercase tracking-widest text-xs">Dan Dandurand</p>
            <p className="text-stone font-light mb-2 uppercase tracking-widest text-xs">Professional Remodeling & Custom Work</p>
            <p className="text-stone font-light mb-8 uppercase tracking-widest text-xs">Sandpoint, ID & North Idaho</p>
            <div className="flex justify-center gap-12 mb-8">
              <a href="#services" className="text-stone hover:text-lime transition-colors font-light uppercase text-xs tracking-widest">Services</a>
              <a href="#projects" className="text-stone hover:text-lime transition-colors font-light uppercase text-xs tracking-widest">Portfolio</a>
              <a href="#about" className="text-stone hover:text-lime transition-colors font-light uppercase text-xs tracking-widest">About</a>
              <a href="#contact" className="text-stone hover:text-lime transition-colors font-light uppercase text-xs tracking-widest">Contact</a>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-lime to-transparent mx-auto mb-6"></div>
            <p className="text-xs text-stone font-light">
              &copy; {new Date().getFullYear()} Northwest Tradesmen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

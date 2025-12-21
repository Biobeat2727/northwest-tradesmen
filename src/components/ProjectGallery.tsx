"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: "bathroom" | "tile";
  description: string;
  details: string;
  scope: string[];
  materials: string;
  images: string[]; // Array of image paths
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mountain Retreat Master Bath",
    category: "bathroom",
    description: "Complete master bathroom renovation with natural stone accents and contemporary fixtures",
    details: "This transformation brought modern luxury to a mountain home. Custom tile work throughout, including a walk-in shower with floor-to-ceiling stone accent wall, radiant heated flooring, and precision-installed large format porcelain.",
    materials: "Natural travertine, large format porcelain, brushed nickel fixtures",
    scope: ["Full demolition and rebuild", "Custom walk-in shower system", "Natural stone feature wall", "Radiant heated flooring", "Contemporary fixture installation"],
    images: ["/images/projects/project-1/project-1-1.jpg", "/images/projects/project-1/project-1-2.jpg", "/images/projects/project-1/project-1-3.jpg"]
  },
  {
    id: 2,
    title: "Stone Tile Shower",
    category: "tile",
    description: "Hand-laid natural stone backsplash with precision grouting and sealed finish",
    details: "A sophisticated blend of rustic materials and modern technique. Each stone was carefully selected and placed to create an organic pattern that complements the home's Pacific Northwest aesthetic while maintaining clean, professional lines.",
    materials: "Stacked ledgestone, premium grout, penetrating sealer",
    scope: ["Surface preparation", "Custom pattern layout", "Precision stone placement", "Professional grouting", "Multi-coat sealing"],
    images: ["/images/projects/project-2/project-2-1.jpg", "/images/projects/project-2/project-2-2.jpg", "/images/projects/project-2/project-2-3.jpg"]
  },
  {
    id: 3,
    title: "Rustic Stone Fireplace + Entertainment Center",
    category: "tile",
    description: "Custom stone fireplace and built-in entertainment center with natural materials",
    details: "A stunning focal point for the living space, featuring hand-laid natural stone surrounding a wood-burning fireplace with integrated entertainment center cabinetry. The rustic stone work creates warmth and character while the custom millwork provides functional storage and display space.",
    materials: "Natural stacked stone, custom wood cabinetry, fireplace insert",
    scope: ["Natural stone fireplace surround", "Custom built-in cabinetry", "Entertainment center integration", "Fireplace installation", "Stone sealing and finishing"],
    images: ["/images/projects/project-3/project-3-1.jpg", "/images/projects/project-3/project-3-2.jpg", "/images/projects/project-3/project-3-3.jpg", "/images/projects/placeholder-4.jpg"]
  },
  {
    id: 4,
    title: "Contemporary Geometric Shower",
    category: "tile",
    description: "Modern shower design with geometric tile pattern and contrasting textures",
    details: "A striking shower installation featuring a carefully planned geometric pattern using both matte and glossy tiles. The design creates visual interest through texture and subtle color variation while maintaining a clean, contemporary aesthetic.",
    materials: "Large format porcelain, glass mosaic accent, chrome fixtures",
    scope: ["Waterproofing system", "Custom tile pattern layout", "Precision installation", "Built-in storage niche", "Glass enclosure coordination"],
    images: ["/images/projects/placeholder-1.jpg", "/images/projects/placeholder-2.jpg", "/images/projects/placeholder-3.jpg"]
  },
  {
    id: 5,
    title: "Craftsman Heritage Bath",
    category: "bathroom",
    description: "Classic craftsman bathroom honoring original architecture with updated functionality",
    details: "This renovation respected the home's craftsman heritage while bringing modern functionality. Classic subway tile, period-appropriate fixtures, and careful attention to detail throughout. Wainscoting and vintage-style lighting complete the authentic look.",
    materials: "Subway tile, cast iron fixtures, marble hexagon floor",
    scope: ["Period-appropriate fixture sourcing", "Subway tile installation", "Custom wainscoting", "Marble floor mosaic", "Vintage lighting integration"],
    images: ["/images/projects/placeholder-1.jpg", "/images/projects/placeholder-2.jpg"]
  },
  {
    id: 6,
    title: "Terracotta Kitchen Floor",
    category: "tile",
    description: "Warm terracotta tile installation with custom border detail",
    details: "Brought warmth and Old World character to a kitchen with carefully selected terracotta tiles. The installation features precise layout, custom border detailing, and a color palette inspired by Idaho's natural landscape. Professional sealing ensures durability.",
    materials: "Terracotta tile, decorative border, premium sealer",
    scope: ["Floor preparation and leveling", "Tile layout and dry fit", "Precision installation", "Custom border integration", "Multi-coat sealing"],
    images: ["/images/projects/placeholder-1.jpg", "/images/projects/placeholder-2.jpg", "/images/projects/placeholder-3.jpg"]
  }
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "bathroom" | "tile">("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bold uppercase text-xs sm:text-sm tracking-widest transition-all border-2 shadow-lg ${
            filter === "all"
              ? "bg-copper text-white border-copper"
              : "bg-transparent text-sand border-stone/30 hover:border-copper"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter("bathroom")}
          className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bold uppercase text-xs sm:text-sm tracking-widest transition-all border-2 shadow-lg ${
            filter === "bathroom"
              ? "bg-copper text-white border-copper"
              : "bg-transparent text-sand border-stone/30 hover:border-copper"
          }`}
        >
          Bathrooms
        </button>
        <button
          onClick={() => setFilter("tile")}
          className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bold uppercase text-xs sm:text-sm tracking-widest transition-all border-2 shadow-lg ${
            filter === "tile"
              ? "bg-copper text-white border-copper"
              : "bg-transparent text-sand border-stone/30 hover:border-copper"
          }`}
        >
          Tile Work
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="group relative bg-forest-medium/30 overflow-hidden cursor-pointer transition-all border-2 border-stone/20 hover:border-copper shadow-lg hover:shadow-copper/30"
          >
            {/* Thumbnail - First image from the project */}
            <div className="aspect-[4/3] bg-gradient-to-br from-forest-dark to-forest-medium relative overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="w-16 h-1.5 bg-copper mx-auto mb-4"></div>
                  <p className="text-white uppercase tracking-widest text-xs font-bold">Click to View Gallery</p>
                  <p className="text-copper text-xs mt-2 font-bold">{project.images.length} Photos</p>
                </div>
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 bg-copper/95 text-white border-copper shadow-lg">
                  {project.category === "bathroom" ? "Bathroom" : "Tile"}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-forest-dark/60">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
              <p className="text-sm sm:text-base text-sand font-medium leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center text-copper font-bold uppercase text-xs tracking-widest group-hover:text-amber transition-colors">
                View Gallery
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] bg-forest-dark border-2 border-copper/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-copper hover:bg-amber text-white p-2 sm:p-3 transition-colors shadow-lg font-bold"
              aria-label="Close gallery"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 h-full overflow-y-auto">
              {/* Image Gallery Side */}
              <div className="relative bg-gradient-to-br from-forest-dark to-forest-medium md:border-r-2 border-copper/30">
                {/* Main Image */}
                <div className="relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px]">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Photo ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-copper hover:bg-amber text-white p-2 sm:p-3 transition-colors shadow-lg font-bold"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-copper hover:bg-amber text-white p-2 sm:p-3 transition-colors shadow-lg font-bold"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-forest-dark/90 border-2 border-copper px-4 py-2">
                    <p className="text-copper font-bold uppercase tracking-widest text-xs">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-16 left-0 right-0 px-4">
                    <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 border-2 transition-all relative overflow-hidden ${
                            index === currentImageIndex
                              ? "border-copper"
                              : "border-stone/30 hover:border-copper/60"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details Side */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto max-h-[95vh] sm:max-h-[90vh] bg-forest-dark/95">
                <div className="w-20 h-1.5 bg-copper mb-6"></div>

                {/* Category Badge */}
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 bg-copper/95 text-white border-copper shadow-lg">
                    {selectedProject.category === "bathroom" ? "Bathroom" : "Tile"}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{selectedProject.title}</h2>

                <div className="mb-8 pb-8 border-b border-copper/30">
                  <h3 className="text-copper text-lg font-bold mb-4 uppercase tracking-wide">Project Overview</h3>
                  <p className="text-sand font-medium leading-relaxed text-lg mb-4">{selectedProject.description}</p>
                  <p className="text-sand font-medium leading-relaxed text-base">{selectedProject.details}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-copper/30">
                  <h4 className="text-copper font-bold mb-3 uppercase tracking-wide text-sm">Materials Used</h4>
                  <p className="text-sand font-medium leading-relaxed">{selectedProject.materials}</p>
                </div>

                <div>
                  <h4 className="text-copper font-bold mb-4 uppercase tracking-wide text-sm">Scope of Work</h4>
                  <ul className="space-y-3">
                    {selectedProject.scope.map((item, index) => (
                      <li key={index} className="flex items-start border-l-4 border-copper/50 pl-4 py-1">
                        <span className="text-sand font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

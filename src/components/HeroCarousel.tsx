"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/images/projects/project-1/project-1-1.jpg",
  "/images/projects/project-1/project-1-2.jpg",
  "/images/projects/project-2/project-2-1.jpg",
  "/images/projects/project-3/project-3-1.jpg",
  "/images/projects/project-3/project-3-2.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % carouselImages.length);

      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % carouselImages.length);
        setIsTransitioning(false);
      }, 1500); // Duration of slide animation
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Current Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={carouselImages[currentIndex]}
          alt={`Portfolio showcase ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={95}
        />
      </div>

      {/* Next Image (sliding in from right) */}
      {isTransitioning && (
        <div
          className="absolute inset-0 w-full h-full animate-slide-in-right"
          style={{
            animation: 'slideInRight 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
        >
          <Image
            src={carouselImages[nextIndex]}
            alt={`Portfolio showcase ${nextIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
          />
        </div>
      )}

      {/* Elegant gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/60 to-forest-dark/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/40"></div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentIndex) {
                setIsTransitioning(true);
                setNextIndex(index);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 1500);
              }
            }}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex
                ? "w-12 bg-lime"
                : "w-8 bg-stone/50 hover:bg-stone/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

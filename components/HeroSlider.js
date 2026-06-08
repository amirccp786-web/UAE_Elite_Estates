"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Villas in Palm Jumeirah",
    subtitle: "Experience unparalleled beachfront living",
  },
  {
    id: 2,
    image: "/image_buy_dubai/property-3.jpg",
    title: "Premium Properties for Sale",
    subtitle: "Discover your dream home in Dubai",
  },
  {
    id: 3,
    image: "/image_buy_dubai/property-2.jpg",
    title: "Exclusive Mansions",
    subtitle: "Invest in Dubai's finest real estate",
  },
  {
    id: 4,
    image: "/image_rent_Dubai/property-1.jpg",
    title: "Luxury Apartments for Rent",
    subtitle: "Experience the ultimate urban lifestyle",
  },
  {
    id: 5,
    image: "/image_rent_Dubai/property-2.jpg",
    title: "Premium Rentals",
    subtitle: "Live in comfort and style",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentSlide >= slides.length - 1) {
      setDirection(-1);
      setCurrentSlide(slides.length - 2);
    } else {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide <= 0) {
      setDirection(1);
      setCurrentSlide(1);
    } else {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (direction === 1) {
        if (currentSlide >= slides.length - 1) {
          setDirection(-1);
          setCurrentSlide(slides.length - 2);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      } else {
        if (currentSlide <= 0) {
          setDirection(1);
          setCurrentSlide(1);
        } else {
          setCurrentSlide(currentSlide - 1);
        }
      }
    }, 12000);
    return () => clearInterval(timer);
  }, [currentSlide, direction]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div
        id="hero-carousel"
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg font-headline max-w-4xl tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-[#c5a059] hover:bg-[#b08d4b] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Explore Properties
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass-panel text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass-panel text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

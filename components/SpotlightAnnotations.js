"use client";

import { useState } from "react";

export default function SpotlightAnnotations() {
  const [activePin, setActivePin] = useState(null);

  const annotations = [
    {
      id: 1,
      x: "50%",
      y: "40%",
      title: "Floor-to-Ceiling Windows",
      description: "Expansive glass panels offering uninterrupted panoramic views.",
      position: "annotation-right"
    },
    {
      id: 2,
      x: "70%",
      y: "80%",
      title: "Luxury Outdoor Terrace",
      description: "Spacious outdoor area designed for seamless indoor-outdoor living.",
      position: "annotation-top"
    },
    {
      id: 3,
      x: "30%",
      y: "65%",
      title: "Architectural Details",
      description: "Modern design elements with premium material finishes.",
      position: "annotation-left"
    }
  ];

  return (
    <section id="spotlight" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#0f172a] mb-4">Interactive Property Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore the luxurious amenities of our featured villa. Click the hotspots to discover more.</p>
        </div>

        <div className={`spotlight-container w-full rounded-2xl overflow-hidden shadow-2xl relative ${activePin !== null ? 'is-active' : ''}`}>
          <img 
            src="/image_buy_dubai/property-1.jpg" 
            alt="Luxury Dubai Villa" 
            className="w-full h-auto spotlight-image block"
          />
          
          <div className="spotlight-dimmer" onClick={() => setActivePin(null)}></div>

          {annotations.map((ann) => (
            <div 
              key={ann.id} 
              className={`spotlight-target ${activePin === ann.id ? 'is-focused' : ''}`}
              style={{ left: ann.x, top: ann.y }}
            >
              <button 
                className="hotspot-pin"
                onClick={() => setActivePin(activePin === ann.id ? null : ann.id)}
              >
                +
              </button>
              <div className={`annotation-card glass-panel-dark text-white ${ann.position} ${activePin === ann.id ? 'is-visible' : ''}`}>
                <h4 className="font-bold text-lg mb-2 text-[#c5a059]">{ann.title}</h4>
                <p className="text-sm leading-relaxed text-white/90">{ann.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

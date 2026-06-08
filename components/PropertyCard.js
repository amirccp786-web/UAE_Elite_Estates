import Image from 'next/image';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full backdrop-blur-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0f172a]">
        <Image 
          src={property.image} 
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-[#c5a059] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
          {property.type}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white leading-tight font-headline">{property.title}</h3>
        </div>
        <p className="text-[#c5a059] font-semibold text-lg mb-4">{property.priceUsd} <span className="text-sm text-gray-400 font-normal">/ {property.priceAed} per year</span></p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {property.location}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            {property.size}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            {property.bathrooms} Baths
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature, idx) => (
              <span key={`feat-${idx}`} className="bg-white/10 text-xs text-white/90 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {property.amenities.map((amenity, idx) => (
              <span key={`amen-${idx}`} className="bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 text-xs px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

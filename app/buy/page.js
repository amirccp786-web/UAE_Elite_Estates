import { buyProperties } from "@/data/buy";
import PropertyCard from "@/components/PropertyCard";

export default function Buy() {
  return (
    <>
      {/* Hero Section for Buy Page */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f172a]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-white mb-6 tracking-tight drop-shadow-lg">
            Luxury Properties for <span className="text-[#c5a059]">Sale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Discover our exclusive collection of premium distress units and luxury homes available for purchase in Dubai.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-headline text-white mb-2">Available Properties</h2>
              <p className="text-gray-400 mb-4">Showing {buyProperties.length} luxury properties</p>
              <a 
                href="/Buy_distress_units_in_Dubai.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-[#c5a059]/20 border border-[#c5a059]/50 hover:bg-[#c5a059] text-[#c5a059] hover:text-white rounded-lg font-medium transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                For More Details Click
              </a>
            </div>
            {/* Optional Filter Button */}
            <button className="hidden md:flex items-center text-white/80 hover:text-[#c5a059] transition-colors mt-4 md:mt-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

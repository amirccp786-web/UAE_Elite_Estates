import HeroSlider from "@/components/HeroSlider";
import SpotlightAnnotations from "@/components/SpotlightAnnotations";
import NeighborhoodScroller from "@/components/NeighborhoodScroller";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSlider />
      
      {/* Search Toggle Area (from app.js logic) */}
      <section className="relative -mt-16 z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel-dark rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/20">
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="/buy" className="px-8 py-2 rounded-full bg-[#c5a059] text-white font-semibold transition-colors shadow-lg hover:bg-[#b08d4b]">Buy</Link>
            <Link href="/rent" className="px-8 py-2 rounded-full text-white/80 hover:text-white transition-colors">Rent</Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Search by location, community or name" className="flex-1 bg-white/10 text-white placeholder-white/50 px-6 py-4 rounded-xl outline-none focus:bg-white/20 transition-all border border-white/10 focus:border-[#c5a059]" />
            <button className="bg-[#c5a059] hover:bg-[#b08d4b] text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
          </div>
        </div>
      </section>

      <div id="properties">
        <SpotlightAnnotations />
      </div>
      
      <NeighborhoodScroller />
      <ContactForm />
    </>
  );
}

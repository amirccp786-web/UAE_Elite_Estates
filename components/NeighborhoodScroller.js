"use client";

const neighborhoods = [
  {
    id: 1,
    name: "Top New Development in Abu Dhabi",
    image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: "View Brochure",
    pdfLink: "/Top New Developments in Abu Dhabi.pdf",
  },
  {
    id: 2,
    name: "Best Offers in Middle East",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: "View Offers",
    pdfLink: "/The Best Offers of the Middle East.pdf",
  }
];

export default function NeighborhoodScroller() {
  return (
    <section id="neighborhoods" className="py-24 bg-[#f7f9fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#0f172a] mb-4">Discover Neighborhoods</h2>
            <p className="text-lg text-gray-600">Explore the most prestigious communities in the UAE.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {neighborhoods.map((n) => {
            const cardContent = (
              <div className="relative h-[450px] rounded-2xl overflow-hidden image-zoom-container">
                <img src={n.image} alt={n.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">{n.name}</h3>
                  <p className="text-[#c5a059] font-medium">{n.properties}</p>
                </div>
              </div>
            );

            return (
              <div key={n.id} className="w-full group cursor-pointer hover-lift">
                {n.pdfLink ? (
                  <a href={n.pdfLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="font-bold text-2xl tracking-wider font-headline">
              UAE <span className="text-[#c5a059]">ELITE</span>
            </span>
            <p className="text-white/60 mt-2 max-w-sm text-center md:text-left">
              Redefining luxury real estate in the United Arab Emirates.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/fatimas.studios" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c5a059] transition-colors">Facebook</a>
            <a href="https://www.instagram.com/fatimahsstudio/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c5a059] transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

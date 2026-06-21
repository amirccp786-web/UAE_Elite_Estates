import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata = {
  title: "UAE Elite Estates | Luxury Properties in Dubai & Abu Dhabi",
  description: "Discover exclusive luxury real estate, premium apartments, and elite villas across the UAE, including Dubai and Abu Dhabi. We offer global property investment opportunities.",
  keywords: [
    "UAE real estate", 
    "Dubai luxury properties", 
    "Abu Dhabi real estate", 
    "buy villa Dubai", 
    "global property investment", 
    "elite estates UAE", 
    "apartments in UAE", 
    "Ras Al Khaimah real estate", 
    "luxury homes UAE", 
    "international real estate investors"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#f7f9fb] text-[#191c1e]">
        <GoogleAnalytics gaId="G-S4L9YJVE5V" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

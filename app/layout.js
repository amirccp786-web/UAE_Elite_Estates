import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-WGFM62SGC1`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WGFM62SGC1');
            `,
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Cascadia_Code, VT323, Pixelify_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNavbar from "@/components/layout/MobileNavbar";

// Primary font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Mono font (Cascadia Code)
const cascadiaCode = Cascadia_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

// Accent fonts
const vt323 = VT323({
  variable: "--font-accent-vt323",
  subsets: ["latin"],
  weight: "400",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-accent-pixelify",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-accent-press",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Leonardo Siu",
  description: "Software engineer building full-stack applications, backend systems, and applied ML.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${cascadiaCode.variable} ${vt323.variable} ${pixelifySans.variable} ${pressStart2P.variable} antialiased`}
      >
        <MobileNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

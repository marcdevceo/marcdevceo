import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarcDevCEO",
  description: "Portfolio of MarcDevCEO – Software Engineer & Vibe Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-turf-green text-white`}
      >
        <div className="flex flex-col min-h-screen">
          <NavLinks />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

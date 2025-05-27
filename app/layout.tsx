import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import { navLinks } from "@/data/navlinks";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarcDevCEO Portfolio",
  description: "Showcasing my work, case studies, and developer journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <NavBar
            background="primary"
            title="MarcDevCEO Portfolio"
            titleHref="/"
            links={navLinks}
          />
          {children}
          <Footer background="primary" companyName="MarcDevCEO" />
      </body>
    </html>
  );
}

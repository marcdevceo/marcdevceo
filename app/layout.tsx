import type { Metadata } from "next";
import "./globals.css";
import { navLinks } from "@/data/navlinks";
import { Footer, NavBar } from "@/ui-framework";

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
      <body className="antialiased">
          <NavBar 
            links={navLinks}
            title="MarcDevCEO"
            bg="redDark"
          />
          {children}
          <Footer companyName="MarcDevCEO" />
      </body>
    </html>
  );
}

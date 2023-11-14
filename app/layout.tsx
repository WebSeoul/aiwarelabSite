import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import App from "@/components/ContactUsForm";
import Testimonials from "@/components/testimonial";
import FeaturesSection from "@/components/Services";
import GetApp from "@/components/GetApp";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "AIWARELAB",
  description: "AIWARELAB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Navigation />
        <main className="relative overflow-hidden">{children}</main>

        <FeaturesSection />
        <Testimonials />
        <GetApp />
        <App />
        <Footer />
      </body>
    </html>
  );
}

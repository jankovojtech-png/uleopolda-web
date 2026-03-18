import { AccommodationPreview } from "@/components/AccommodationPreview";
import { Benefits } from "@/components/Benefits";
import { ContactSection } from "@/components/ContactSection";
import { CorporateSection } from "@/components/CorporateSection";
import { Footer } from "@/components/Footer";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { RoomsSection } from "@/components/RoomsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <Header />
      <Hero />
      <Benefits />
      <AccommodationPreview />
      <CorporateSection />
      <GalleryPreview />
      <LocationSection />
      <RoomsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

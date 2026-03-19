import { AccommodationPreview } from "@/components/AccommodationPreview";
import { Benefits } from "@/components/Benefits";
import { ContactSection } from "@/components/ContactSection";
import { CorporateSection } from "@/components/CorporateSection";
import { Footer } from "@/components/Footer";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { ReservationStepsSection } from "@/components/ReservationStepsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { RoomsSection } from "@/components/RoomsSection";
import { TrustSection } from "@/components/TrustSection";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] pb-24 text-stone-900 md:pb-0">
      <Header />
      <Hero />
      <Benefits />
      <ReviewsSection />
      <AccommodationPreview />
      <RoomsSection />
      <GalleryPreview />
      <TrustSection />
      <TrustStrip />
      <LocationSection />
      <CorporateSection />
      <ReservationStepsSection />
      <ContactSection />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}

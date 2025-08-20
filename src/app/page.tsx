import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import FeaturedServices from "@/components/featured-services";
import TestimonialsSection from "@/components/testimonials-section";
import StatsSection from "@/components/stats-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedServices />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}